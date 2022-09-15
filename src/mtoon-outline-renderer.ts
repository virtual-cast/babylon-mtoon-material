import type { Engine } from '@babylonjs/core/Engines/engine';
import type { Mesh, _InstancesBatch } from '@babylonjs/core/Meshes/mesh';
import type { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import type { Scene } from '@babylonjs/core/scene';
import type { ISceneComponent } from '@babylonjs/core/sceneComponent';
import { SceneComponentConstants } from '@babylonjs/core/sceneComponent';
import type { Nullable } from '@babylonjs/core/types';
import type { Matrix } from '@babylonjs/core/Maths/math';
import type { MToonMaterial } from './mtoon-material';
import type { Material } from '@babylonjs/core/Materials/material';

// eslint-disable-next-line @typescript-eslint/naming-convention
const BASE_NAME = 'MToonOutline';

/**
 * MToon outline renderer
 * @see OutlineRenderer
 */
export class MToonOutlineRenderer implements ISceneComponent {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static rendererId = 0;

    /**
     * @inheritdoc
     */
    public readonly name: string;

    private _engine: Engine;
    private _passIdForDrawWrapper: number[];

    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    public constructor(public readonly scene: Scene, public readonly material: MToonMaterial) {
        this.name = `${BASE_NAME}_${material.name}_${MToonOutlineRenderer.rendererId++}`;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
        this._passIdForDrawWrapper = [];
        for (let i = 0; i < 1; ++i) {
            this._passIdForDrawWrapper[i] = this._engine.createRenderPassId(`Outline Renderer (${i})`);
        }
    }

    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    public register(): void {
        this.scene._afterRenderingMeshStage.registerStep(SceneComponentConstants.STEP_AFTERRENDERINGMESH_OUTLINE, this, this._afterRenderingMesh);
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
     * @param renderPassId Render pass id to use to render the mesh
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    private render(subMesh: SubMesh, batch: _InstancesBatch, renderPassId?: number): void {
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
        this.material.enableOutlineRender();
        this._engine.enableEffect(drawWrapper);
        if (!this.isHardwareInstancedRendering(subMesh, batch)) {
            renderingMesh._bind(subMesh, effect, this.material.fillMode);
        }

        this.material._preBind(effect);

        renderingMesh._processRendering(
            effectiveMesh,
            subMesh,
            effect,
            this.material.fillMode,
            batch,
            this.isHardwareInstancedRendering(subMesh, batch),
            (isInstance: boolean, world: Matrix, effectiveMaterial?: Material) => {
                if (effectiveMaterial) {
                    effectiveMaterial.bindForSubMesh(world, effectiveMesh as Mesh, subMesh);
                }
            },
            this.material
        );

        this.material.restoreOutlineCullMode();
        this.material.disaableOutlineRender();
    }

    /**
     * このメッシュを描画した後に実行されるコールバック
     */
    private _afterRenderingMesh(mesh: Mesh, subMesh: SubMesh, batch: _InstancesBatch): void {
        if (!this.willRender(subMesh)) {
            return;
        }

        const cullBackFaces = this._engine.cullBackFaces;
        this._engine.cullBackFaces = false;
        this.render(subMesh, batch, this._passIdForDrawWrapper[0]);
        this._engine.cullBackFaces = cullBackFaces;
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
