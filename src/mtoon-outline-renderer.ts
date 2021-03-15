import { Engine } from '@babylonjs/core/Engines/engine';
import { Mesh, _InstancesBatch } from '@babylonjs/core/Meshes/mesh';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { Scene } from '@babylonjs/core/scene';
import { ISceneComponent, SceneComponentConstants } from '@babylonjs/core/sceneComponent';
import { Nullable } from '@babylonjs/core/types';
import { Matrix } from '@babylonjs/core/Maths/math';
import { MToonMaterial } from './mtoon-material';
import { Constants } from '@babylonjs/core/Engines/constants';

const BASE_NAME = 'MToonOutline';

/**
 * MToonMaterial を別のパスで描画するレンダラ
 * @see OutlineRenderer
 */
export class MToonOutlineRenderer implements ISceneComponent {
    /**
     * Stencil value used to avoid outline being seen within the mesh when the mesh is transparent
     */
    private static _StencilReference = 0x04;

    public static rendererId = 0;

    /**
     * @inheritdoc
     */
    public readonly name: string;

    private _engine: Engine;
    private _savedDepthWrite = false;

    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    public constructor(
        public scene: Scene,
        public material: MToonMaterial,
    ) {
        this.name = `${BASE_NAME}_${material.name}_${MToonOutlineRenderer.rendererId++}`;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
    }

    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    public register(): void {
        this.scene._beforeRenderingMeshStage.registerStep(
            SceneComponentConstants.STEP_BEFORERENDERINGMESH_OUTLINE,
            this,
            this._beforeRenderingMesh,
        );
        this.scene._afterRenderingMeshStage.registerStep(
            SceneComponentConstants.STEP_AFTERRENDERINGMESH_OUTLINE,
            this,
            this._afterRenderingMesh,
        );
    }

    /**
     * @inheritdoc
     */
    public rebuild(): void {
        // Nothing to do here.
    }

    /**
     * @inheritdoc
     */
    public dispose(): void {
        // Nothing to do here
    }

    /**
     * アウトラインを描画する
     */
    private render(mesh: Mesh, subMesh: SubMesh, batch: _InstancesBatch, useOverlay = false): void {
        const effect = subMesh.effect;
        if (!effect || !effect.isReady() || !this.scene.activeCamera) {
            return;
        }

        const ownerMesh = subMesh.getMesh();
        const replacementMesh = ownerMesh._internalAbstractMeshDataInfo._actAsRegularMesh ? ownerMesh : null;
        const renderingMesh = subMesh.getRenderingMesh();
        const effectiveMesh = replacementMesh ? replacementMesh : renderingMesh;

        this.material.applyOutlineCullMode();
        this._engine.enableEffect(effect);
        renderingMesh._bind(subMesh, effect, this.material.fillMode);

        this._engine.setZOffset(-1);

        // レンダリング実行
        if (Engine.Version.startsWith('4.0') || Engine.Version.startsWith('4.1')) {
            // for 4.0, 4.1
            (renderingMesh as any)._processRendering(
                subMesh,
                effect,
                this.material.fillMode,
                batch,
                this.isHardwareInstancedRendering(subMesh, batch),
                (isInstance: boolean, world: Matrix, effectiveMaterial: MToonMaterial) => {
                    effectiveMaterial.bindForSubMesh(world, mesh, subMesh);
                    effect.setMatrix('world', world);
                    effect.setFloat('isOutline', 1.0);
                },
                this.material,
            );
        } else {
            // for 4.2.0-alpha.0 +
            (renderingMesh as any)._processRendering(
                effectiveMesh,
                subMesh,
                effect,
                this.material.fillMode,
                batch,
                this.isHardwareInstancedRendering(subMesh, batch),
                (isInstance: boolean, world: Matrix, effectiveMaterial: MToonMaterial) => {
                    effectiveMaterial.bindForSubMesh(world, mesh, subMesh);
                    effect.setMatrix('world', world);
                    effect.setFloat('isOutline', 1.0);
                },
                this.material,
            );
        }

        this._engine.setZOffset(0);
        this.material.restoreOutlineCullMode();
    }

    /**
     * このメッシュを描画する前に実行されるコールバック
     */
    private _beforeRenderingMesh(mesh: Mesh, subMesh: SubMesh, batch: _InstancesBatch): void {
        this._savedDepthWrite = this._engine.getDepthWrite();

        if (!this.willRender(subMesh)) {
            return;
        }
        const material = subMesh.getMaterial() as MToonMaterial;
        if (material.needAlphaBlendingForMesh(mesh)) {
            this._engine.cacheStencilState();
            // Draw only to stencil buffer for the original mesh
            // The resulting stencil buffer will be used so the outline is not visible inside the mesh when the mesh is transparent
            this._engine.setDepthWrite(false);
            this._engine.setColorWrite(false);
            this._engine.setStencilBuffer(true);
            this._engine.setStencilOperationPass(Constants.REPLACE);
            this._engine.setStencilFunction(Constants.ALWAYS);
            this._engine.setStencilMask(MToonOutlineRenderer._StencilReference);
            this._engine.setStencilFunctionReference(MToonOutlineRenderer._StencilReference);
            this.render(subMesh.getRenderingMesh(), subMesh, batch, /* This sets offset to 0 */ true);

            this._engine.setColorWrite(true);
            this._engine.setStencilFunction(Constants.NOTEQUAL);
        }

        // 深度ナシで後ろに描画
        this._engine.setDepthWrite(false);
        this.render(subMesh.getRenderingMesh(), subMesh, batch);
        this._engine.setDepthWrite(this._savedDepthWrite);

        if (material.needAlphaBlendingForMesh(mesh)) {
            this._engine.restoreStencilState();
        }
    }

    /**
     * このメッシュを描画した後に実行されるコールバック
     */
    private _afterRenderingMesh(mesh: Mesh, subMesh: SubMesh, batch: _InstancesBatch): void {
        if (!this.willRender(subMesh)) {
            return;
        }

        if (this._savedDepthWrite) {
            // 深度アリで再度書き込む
            this._engine.setDepthWrite(true);
            this._engine.setColorWrite(false);
            this.render(subMesh.getRenderingMesh(), subMesh, batch);
            this._engine.setColorWrite(true);
        }
    }

    /**
     * インスタンシングを行うかどうか
     */
    private isHardwareInstancedRendering(subMesh: SubMesh, batch: _InstancesBatch): boolean {
        if (!this._engine.getCaps().instancedArrays) {
            return false;
        }
        let hasThinInstances = false;
        // from 4.2.0
        hasThinInstances = (subMesh.getRenderingMesh() as any).hasThinInstances;
        return (batch.visibleInstances[subMesh._id] !== null)
            && (typeof batch.visibleInstances[subMesh._id] !== 'undefined')
            || hasThinInstances;
    }

     /**
     * このメッシュでアウトラインを描画するかどうか
     */
    private willRender(subMesh: SubMesh): boolean {
        const material = subMesh.getMaterial() as Nullable<MToonMaterial>;

        if (!material || material.getClassName() !== 'MToonMaterial' || material.getOutlineRendererName() !== this.name) {
            // このコンポーネントの Material ではない
            return false;
        }
        return true;
    }
}
