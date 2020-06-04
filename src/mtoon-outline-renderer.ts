import { Engine } from '@babylonjs/core/Engines/engine';
import { Mesh, _InstancesBatch } from '@babylonjs/core/Meshes/mesh';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { Scene } from '@babylonjs/core/scene';
import { ISceneComponent, SceneComponentConstants } from '@babylonjs/core/sceneComponent';
import { Nullable } from '@babylonjs/core/types';
import { Matrix } from '@babylonjs/core/Maths/math';
import { MToonMaterial } from './mtoon-material';

const BASE_NAME = 'MToonOutline';

/**
 * MToonMaterial を別のパスで描画するレンダラ
 * @see OutlineRenderer
 */
export class MToonOutlineRenderer implements ISceneComponent {
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
        delete this.scene;
        delete this.material;
        delete this._engine;
    }

    /**
     * アウトラインを描画する
     */
    private render(mesh: Mesh, subMesh: SubMesh, batch: _InstancesBatch): void {
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
                this.isHardwareInstancedRendering(subMesh._id, batch),
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
                this.isHardwareInstancedRendering(subMesh._id, batch),
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

        // 深度ナシで後ろに描画
        this._engine.setDepthWrite(false);
        this.render(subMesh.getRenderingMesh(), subMesh, batch);
        this._engine.setDepthWrite(this._savedDepthWrite);
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
    private isHardwareInstancedRendering(subMeshId: number, batch: _InstancesBatch): boolean {
        return (this._engine.getCaps().instancedArrays)
            && (batch.visibleInstances[subMeshId] !== null)
            && (typeof batch.visibleInstances[subMeshId] !== 'undefined');
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
