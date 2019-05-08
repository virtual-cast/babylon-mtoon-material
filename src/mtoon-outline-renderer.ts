import { Engine } from '@babylonjs/core/Engines/engine';
import { Effect, EffectFallbacks } from '@babylonjs/core/Materials/effect';
import { Material } from '@babylonjs/core/Materials/material';
import { MaterialHelper } from '@babylonjs/core/Materials/materialHelper';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { Mesh, _InstancesBatch } from '@babylonjs/core/Meshes/mesh';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { Scene } from '@babylonjs/core/scene';
import { ISceneComponent, SceneComponentConstants } from '@babylonjs/core/sceneComponent';
import { MToonMaterial } from './mtoon-material';
import { MToonOutlineDefines } from './mtoon-outline-defines';
import { Nullable } from '@babylonjs/core/types';

const VertexShader = require('./shaders/mtoon-outline.vert').default;
const FragmentShader = require('./shaders/mtoon-outline.frag').default;

const BASE_NAME = 'MToonOutline';

/**
 * MToonMaterial を別のパスで描画するレンダラ
 * @see OutlineRenderer
 */
export class MToonOutlineRenderer implements ISceneComponent {
    /**
     * @inheritdoc
     */
    public readonly name: string;

    private _engine: Engine;
    private _effect?: Effect;
    private _defines?: MToonOutlineDefines;
    private _savedDepthWrite = false;

    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    public constructor(
        public scene: Scene,
        public material: MToonMaterial,
    ) {
        this.name = `${BASE_NAME}_${material.name}`;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();

        if (!Effect.ShadersStore.mtoonOutlineVertexShader) {
            // Register shader
            Effect.ShadersStore.mtoonOutlineVertexShader = VertexShader;
            Effect.ShadersStore.mtoonOutlineFragmentShader = FragmentShader;
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
        delete this.scene;
        delete this.material;
        delete this._engine;
    }

    /**
     * アウトラインを描画する
     */
    private render(mesh: Mesh, subMesh: SubMesh, batch: _InstancesBatch): void {
        if (!this.isReady(mesh, subMesh, batch)) {
            return;
        }
        const effect = this._effect!;

        this.material.applyOutlineCullMode();
        this._engine.enableEffect(effect);
        this.bind(mesh);

        mesh._bind(subMesh, effect, Material.TriangleFillMode);

        this._engine.setZOffset(-1);

        // レンダリング実行
        mesh._processRendering(
            subMesh,
            effect,
            Material.TriangleFillMode,
            batch,
            this.isHardwareInstancedRendering(subMesh._id, batch),
            (isInstance, world, effectiveMaterial) => {
                effect.setMatrix('world', world);
            },
        );

        this._engine.setZOffset(0);
        this.material.restoreOutlineCullMode();
    }

    /**
     * Effect の状態を確認する
     */
    private isReady(mesh: AbstractMesh, subMesh: SubMesh, batch: _InstancesBatch): boolean {
        if (!this.scene.activeCamera) {
            return false;
        }
        if (!this._defines) {
            this._defines = new MToonOutlineDefines();
        }
        if (this._effect && this._defines._renderId === this.scene.getRenderId()) {
            return true;
        }

        const scene = this.scene;
        const defines = this._defines;

        // Outline のために Normal 属性は必須
        defines._needNormals = true;
        if (this.material.outlineColorMode === 0 && !defines.MTOON_OUTLINE_COLOR_FIXED) {
            // Fixed Color Mode
            defines.MTOON_OUTLINE_COLOR_MIXED = false;
            defines.MTOON_OUTLINE_COLOR_FIXED = true;
            defines.markAsMiscDirty();
        } else if (this.material.outlineColorMode === 1 && !defines.MTOON_OUTLINE_COLOR_MIXED) {
            // Mixed Color Mode
            defines.MTOON_OUTLINE_COLOR_MIXED = true;
            defines.MTOON_OUTLINE_COLOR_FIXED = false;
            defines.markAsMiscDirty();
        }

        if (this.material.outlineWidthMode === 0 && (defines.MTOON_OUTLINE_WIDTH_SCREEN || defines.MTOON_OUTLINE_WIDTH_WORLD)) {
            // Width None
            defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
            defines.MTOON_OUTLINE_WIDTH_WORLD = false;
            defines.markAsMiscDirty();
            // 描画しないモードなので常に false
            return false;
        } else if (this.material.outlineWidthMode === 1 && !defines.MTOON_OUTLINE_WIDTH_WORLD) {
            // Width World
            defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
            defines.MTOON_OUTLINE_WIDTH_WORLD = true;
            defines.markAsMiscDirty();
        } else if (this.material.outlineWidthMode === 2 && !defines.MTOON_OUTLINE_WIDTH_SCREEN) {
            // Width Screen
            defines.MTOON_OUTLINE_WIDTH_SCREEN = true;
            defines.MTOON_OUTLINE_WIDTH_WORLD = false;
            defines.markAsMiscDirty();
        }

        MaterialHelper.PrepareDefinesForMultiview(scene, defines);

        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            defines.MAINUV1 = false;
            defines.MAINUV2 = false;
            if (scene.texturesEnabled) {
                if (this.material.outlineWidthTexture) {
                    if (!this.material.outlineWidthTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                    MaterialHelper.PrepareDefinesForMergedUV(this.material.outlineWidthTexture, defines, 'OUTLINE_WIDTH');
                } else {
                    defines.OUTLINE_WIDTH = false;
                }
            } else {
                defines.OUTLINE_WIDTH = false;
            }
        }

        MaterialHelper.PrepareDefinesForMisc(
            mesh,
            scene,
            false,
            false,
            true,
            false,
            defines,
        );
        MaterialHelper.PrepareDefinesForAttributes(
            mesh,
            defines,
            false,
            true,
            true,
            false,
        );
        MaterialHelper.PrepareDefinesForFrameBoundValues(
            scene,
            this._engine,
            defines,
            this.isHardwareInstancedRendering(subMesh._id, batch),
        );

        if (defines.isDirty || !this._effect) {
            defines.markAsProcessed();
            const fallbacks = new EffectFallbacks();
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }
            const attributes = [VertexBuffer.PositionKind];
            attributes.push(VertexBuffer.NormalKind);

            if (defines.UV1) {
                attributes.push(VertexBuffer.UVKind);
            }

            if (defines.UV2) {
                attributes.push(VertexBuffer.UV2Kind);
            }

            MaterialHelper.PrepareAttributesForBones(attributes, mesh, defines, fallbacks);
            MaterialHelper.PrepareAttributesForInstances(attributes, defines);
            MaterialHelper.PrepareAttributesForMorphTargets(attributes, mesh, defines);

            this._effect = this._engine.createEffect('mtoonOutline', {
                attributes,
                defines: defines.toString(),
                fallbacks,
                uniformsNames: [
                    'world', 'view', 'viewProjection',
                    'vFogInfos', 'vFogColor',
                    'mBones', 'boneTextureWidth', 'morphTargetInfluences',
                    'vOutlineWidthInfos', 'outlineWidthMatrix',
                    'vOutlineColor', 'outlineWidth', 'outlineScaledMaxDistance', 'outlineLightingMix', 'aspect',
                ],
                uniformBuffersNames: [],
                samplers: ['outlineWidthSampler', 'boneSampler'],
                maxSimultaneousLights: 0,
                indexParameters: {
                    maxSimultaneousLights: 0,
                    maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                },
                onCompiled: null,
                onError: (effect: Effect, errors: string) => {
                    console.error(`MToonOutlineRenderer Compile Error`, errors);
                },
                transformFeedbackVaryings: null,
            }, this._engine);
        }

        return this._effect.isReady();
    }

    /**
     * アウトラインの描画に必要な変数を設定
     */
    private bind(mesh: AbstractMesh): void {
        if (!this._defines || !this._effect) {
            return;
        }

        MaterialHelper.BindBonesParameters(mesh, this._effect);

        if (this.scene.texturesEnabled) {
            if (this.material.outlineWidthTexture && this.material.diffuseTexture) {
                // サンプラ以外は diffuse の設定を流用する
                const texture = this.material.diffuseTexture;
                this._effect.setFloat2(
                    'vOutlineWidthInfos',
                    texture.coordinatesIndex,
                    texture.level,
                );
                if (!texture.getTextureMatrix().isIdentityAs3x2()) {
                    this._effect.setMatrix('outlineWidthMatrix', texture.getTextureMatrix());
                }
                this._effect.setTexture('outlineWidthSampler', this.material.outlineWidthTexture);
            }
        }

        if (this._defines.NUM_MORPH_INFLUENCERS) {
            MaterialHelper.BindMorphTargetParameters(mesh, this._effect);
        }

        if (this.scene.fogEnabled && mesh.applyFog && this.scene.fogMode !== Scene.FOGMODE_NONE) {
            this._effect.setMatrix('view', this.scene.getViewMatrix());
        }

        this._effect.setMatrix('viewProjection', this.scene.getTransformMatrix());

        MaterialHelper.BindFogParameters(this.scene, mesh, this._effect);

        this._effect.setColor3('vOutlineColor', this.material.outlineColor);
        this._effect.setFloat('outlineWidth', this.material.outlineWidth);
        this._effect.setFloat('outlineScaledMaxDistance', this.material.outlineScaledMaxDistance);
        this._effect.setFloat('outlineLightingMix', this.material.outlineLightingMix);
        this._effect.setFloat('aspect', this._engine.getAspectRatio(this.scene.activeCamera!));
    }

    /**
     * このメッシュを描画する前に実行されるコールバック
     */
    private _beforeRenderingMesh(mesh: AbstractMesh, subMesh: SubMesh, batch: _InstancesBatch): void {
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
    private _afterRenderingMesh(mesh: AbstractMesh, subMesh: SubMesh, batch: _InstancesBatch): void {
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

        if (!material || material.name !== this.material.name) {
            // このコンポーネントの Material ではない
            return false;
        }
        if (material.needAlphaBlending() || material.needAlphaTesting()) {
            // TODO: アルファがあるものはアウトラインを使えない
            return false;
        }
        return true;
    }
}
