import type { Engine } from '@babylonjs/core/Engines/engine';
import type { Mesh, _InstancesBatch } from '@babylonjs/core/Meshes/mesh';
import type { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import type { Scene } from '@babylonjs/core/scene';
import type { ISceneComponent} from '@babylonjs/core/sceneComponent';
import { SceneComponentConstants } from '@babylonjs/core/sceneComponent';
import type { Nullable } from '@babylonjs/core/types';
import type { Matrix } from '@babylonjs/core/Maths/math';
import type { MToonMaterial } from './mtoon-material';
import { Constants } from '@babylonjs/core/Engines/constants';
import type { Material } from '@babylonjs/core/Materials/material';

// eslint-disable-next-line @typescript-eslint/naming-convention
const BASE_NAME = 'MToonOutline';

/**
 * MToon outline renderer
 * @see OutlineRenderer
 */
export class MToonOutlineRenderer implements ISceneComponent {
    /**
     * Stencil value used to avoid outline being seen within the mesh when the mesh is transparent
     */
    private static _StencilReference = 0x04;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static rendererId = 0;

    /**
     * @inheritdoc
     */
    public readonly name: string;

    /**
     * Defines a zOffset default Factor to prevent zFighting between the overlay and the mesh.
     */
    public zOffset = 1;

    /**
      * Defines a zOffset default Unit to prevent zFighting between the overlay and the mesh.
      */
    public zOffsetUnits = 4; // 4 to account for projection a bit by default

    private _engine: Engine;
    private _savedDepthWrite = false;
    private _passIdForDrawWrapper: number[];

    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    public constructor(
        public readonly scene: Scene,
        public readonly material: MToonMaterial,
    ) {
        this.name = `${BASE_NAME}_${material.name}_${MToonOutlineRenderer.rendererId++}`;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
        this._passIdForDrawWrapper = [];
        for (let i = 0; i < 4; ++i) {
            this._passIdForDrawWrapper[i] = this._engine.createRenderPassId(`Outline Renderer (${i})`);
        }
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
        for (let i = 0; i < this._passIdForDrawWrapper.length; ++i) {
            this._engine.releaseRenderPassId(this._passIdForDrawWrapper[i]);
        }
    }

    /**
     * Renders the outline in the canvas.
     * @param subMesh Defines the sumesh to render
     * @param batch Defines the batch of meshes in case of instances
     * @param useOverlay Defines if the rendering is for the overlay or the outline
     * @param renderPassId Render pass id to use to render the mesh
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    private render(subMesh: SubMesh, batch: _InstancesBatch, useOverlay: boolean = false, renderPassId?: number): void {
        renderPassId = renderPassId ?? this._passIdForDrawWrapper[0];
        const scene = this.scene;
        const effect = subMesh.effect;
        if (!effect || !effect.isReady() || !this.scene.activeCamera) {
            return;
        }

        const drawWrapper = subMesh._getDrawWrapper(renderPassId, true);
        if (!drawWrapper) {
            return;
        }
        drawWrapper.setEffect(effect);
        if (!drawWrapper.effect || !drawWrapper.effect.isReady()) {
            return;
        }

        const ownerMesh = subMesh.getMesh();
        const replacementMesh = ownerMesh._internalAbstractMeshDataInfo._actAsRegularMesh ? ownerMesh : null;
        const renderingMesh = subMesh.getRenderingMesh();
        const effectiveMesh = replacementMesh ? replacementMesh : renderingMesh;

        if (!scene.activeCamera) {
            return;
        }

        this.material.applyOutlineCullMode();
        this._engine.enableEffect(drawWrapper);
        if (!this.isHardwareInstancedRendering(subMesh, batch)) {
            renderingMesh._bind(subMesh, effect, this.material.fillMode);
        }

        this._engine.setZOffset(-this.zOffset);
        this._engine.setZOffsetUnits(-this.zOffsetUnits);

        renderingMesh._processRendering(
            effectiveMesh,
            subMesh,
            effect,
            this.material.fillMode,
            batch,
            this.isHardwareInstancedRendering(subMesh, batch),
            (isInstance: boolean, world: Matrix, effectiveMaterial?: Material) => {
                if (effectiveMaterial) {
                    const m = effectiveMaterial as MToonMaterial;
                    m.enableOutlineRender();
                    m.bindForSubMesh(world, effectiveMesh as Mesh, subMesh);
                    m.disaableOutlineRender();
                }
            },
            this.material,
        );

        this._engine.setZOffset(0);
        this._engine.setZOffsetUnits(0);
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
            this._engine.stencilStateComposer.useStencilGlobalOnly = true;
            this.render(subMesh, batch, /* This sets offset to 0 */ true, this._passIdForDrawWrapper[1]);

            this._engine.setColorWrite(true);
            this._engine.setStencilFunction(Constants.NOTEQUAL);
        }

        // Draw the outline using the above stencil if needed to avoid drawing within the mesh
        this._engine.setDepthWrite(false);
        this.render(subMesh, batch, false, this._passIdForDrawWrapper[0]);
        this._engine.setDepthWrite(this._savedDepthWrite);

        if (material && material.needAlphaBlendingForMesh(mesh)) {
            this._engine.stencilStateComposer.useStencilGlobalOnly = false;
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
            this.render(subMesh, batch, false, this._passIdForDrawWrapper[2]);
            this._engine.setColorWrite(true);
        }
    }

    /**
     * インスタンシングを行うかどうか
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private isHardwareInstancedRendering(subMesh: SubMesh, batch: _InstancesBatch): boolean {
        if (!this._engine.getCaps().instancedArrays) {
            return false;
        }
        if (batch.visibleInstances[subMesh._id] === null) {
            return false;
        }
        if (typeof batch.visibleInstances[subMesh._id] === 'undefined') {
            return false;
        }

        return subMesh.getRenderingMesh().hasThinInstances;
    }

    /**
     * このメッシュでアウトラインを描画するかどうか
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private willRender(subMesh: SubMesh): boolean {
        const material = subMesh.getMaterial() as Nullable<MToonMaterial>;

        if (!material || material.getClassName() !== 'MToonMaterial' || material.getOutlineRendererName() !== this.name) {
            // このコンポーネントの Material ではない
            return false;
        }
        return true;
    }
}
