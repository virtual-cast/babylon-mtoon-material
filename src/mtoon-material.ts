import { Constants } from '@babylonjs/core/Engines/constants';
import { Effect, EffectFallbacks } from '@babylonjs/core/Materials/effect';
import { Material } from '@babylonjs/core/Materials/material';
import { MaterialHelper } from '@babylonjs/core/Materials/materialHelper';
import { PushMaterial } from '@babylonjs/core/Materials/pushMaterial';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { Color3, Matrix } from '@babylonjs/core/Maths/math';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { expandToProperty } from '@babylonjs/core/Misc/decorators';
import { IAnimatable } from '@babylonjs/core/Misc/tools';
import { Scene } from '@babylonjs/core/scene';
import { Nullable } from '@babylonjs/core/types';
import { MToonMaterialDefines } from './mtoon-material-defines';
import { MToonOutlineRenderer } from './mtoon-outline-renderer';

// side-effect
import '@babylonjs/core/Rendering/edgesRenderer';
import '@babylonjs/core/Rendering/outlineRenderer';

// シェーダ文字列を取得
const UboDeclaration = require('./shaders/ubo-declaration.vert').default;
const VertexDeclaration = require('./shaders/vertex-declaration.vert').default;
const FragmentDeclaration = require('./shaders/fragment-declaration.frag').default;
const LightFragment = require('./shaders/light-fragment.frag').default;
const VertexShader = require('./shaders/mtoon.vert').default;
const FragmentShader = require('./shaders/mtoon.frag').default;

/**
 * デバッグモード
 */
enum DebugMode {
    None,
    Normal,
    LitShadeRate,
}
/**
 * アウトラインカラーモード
 */
enum OutlineColorMode {
    FixedColor,
    MixedLighting,
}
/**
 * アウトライン幅モード
 */
enum OutlineWidthMode {
    None,
    WorldCorrdinates,
    ScreenCoordinates,
}
/**
 * Cull モード
 */
enum CullMode {
    Off,
    Front,
    Back,
}

/**
 * MToonMaterial
 *
 * MToon は日本のアニメ的表現をすることを目標としています。
 * 主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。
 * VRM での出力パラメータとプロパティのマッピングは下記となります。
 *
 * @link https://github.com/Santarh/MToon/
 * @link https://dwango.github.io/vrm/univrm/shaders/mtoon/
 * @property alphaCutOut = _Cutoff
 * @property diffuseColor = _Color
 * @property shadeColor = _ShadeColor
 * @property diffuseTexture = _MainTex
 * @property shadeTexture = _ShadeTexture
 * @property parallaxScaleBias = _BumpScale
 * @property bumpTexture = _BumpMap
 * @property receiveShadowTexture = _ReceiveShadowTexture
 * @property receiveShadowRate = _ReceiveShadowRate
 * @property shadingGradeRate = _ShadingGradeRate
 * @property shadingGradeTexture = _ShadingGradeTexture
 * @property shadeShift = _ShadeShift
 * @property shadeToony = _ShadeToony
 * @property lightColorAttenuation = _LightColorAttenuation
 * @property indirectLightIntensity = _IndirectLightIntensity
 * @property rimTexture = _RimTexture
 * @property rimLightingMix = _RimLightingMix
 * @property rimFresnelPower = _RimFresnelPower
 * @property rimLift = _RimLift
 * @property matCapTexture = _SphereAdd
 * @property emissiveColor = _EmissionColor
 * @property emissiveTexture = _EmissionMap
 * @property outlineWidthTexture = _OutlineWidthTexture
 * @property outlineWidth = _OutlineWidth
 * @property outlineScaledMaxDistance = _OutlineScaledMaxDistance
 * @property outlineColor = _OutlineColor
 * @property outlineLightingMix = _OutlineLightingMix
 * @property debugMode = _DebugMode
 * @property outlineWidthMode = _OutlineWidthMode
 * @property outlineColorMode = _OutlineColorMode
 */
export class MToonMaterial extends PushMaterial {
//#region Properties
    /**
     * @inheritdoc
     * シリアライズを受け付けない
     */
    public readonly doNotSerialize = true;
    /**
     * 通常色テクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public diffuseTexture: Nullable<BaseTexture> = null;
    /**
     * 発光テクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public emissiveTexture: Nullable<BaseTexture> = null;
    /**
     * バンプマップテクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public bumpTexture: Nullable<BaseTexture> = null;
    /**
     * 陰になる部分の色テクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public shadeTexture: Nullable<BaseTexture> = null;
    /**
     * どれだけ影を受け付けるかのテクスチャ
     * receiveShadowRate * texture.a
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public receiveShadowTexture: Nullable<BaseTexture> = null;
    /**
     * 陰部分の暗さテクスチャ
     * shadingGradeRate * (1.0 - texture.r))
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public shadingGradeTexture: Nullable<BaseTexture> = null;
    /**
     * Parametric Rim Lighting テクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public rimTexture: Nullable<BaseTexture> = null;
    /**
     * MatCap ライティングテクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public matCapTexture: Nullable<BaseTexture> = null;
    /**
     * アウトラインの幅の調整テクスチャ
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public outlineWidthTexture: Nullable<BaseTexture> = null;
    /**
     * テクスチャ参照の一覧
     */
    protected get appendedTextures(): Array<Nullable<BaseTexture>> {
        return [
            this.diffuseTexture,
            this.emissiveTexture,
            this.bumpTexture,
            this.shadeTexture,
            this.receiveShadowTexture,
            this.shadingGradeTexture,
            this.matCapTexture,
            this.outlineWidthTexture,
        ];
    }
    /**
     * アクティブなテクスチャ参照の一覧
     */
    protected get appendedActiveTextures(): BaseTexture[] {
        return this.appendedTextures.filter((t) => t !== null) as BaseTexture[];
    }

    /**
     * 現状 MToon は 1 ライトのみ考慮する
     */
    public readonly maxSimultaneousLights = 1;
    /**
     * Specular 非対応
     */
    public readonly specularSupported = false;
    /**
     * 頂点カラー非対応
     */
    public readonly useVertexColor = false;
    /**
     * シェーダボーンは利用可能
     */
    public readonly useBones = true;
    /**
     * シェーダモーフターゲットは利用可能
     */
    public readonly useMorphTargets = true;
    /**
     * 頂点アルファは非対応
     */
    public readonly useVertexAlpha = false;
    /**
     * Logarithmic depth
     * @link http://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
     */
    private _useLogarithmicDepth = false;
    public get useLogarithmicDepth(): boolean {
        return this._useLogarithmicDepth;
    }
    public set useLogarithmicDepth(value: boolean) {
        const newValue = value && this.getScene().getEngine().getCaps().fragmentDepthSupported;
        if (this._useLogarithmicDepth !== newValue) {
            this._useLogarithmicDepth = newValue;
            this._markAllSubMeshesAsMiscDirty();
        }
    }
    /**
     * ライティングを無効にするかどうか
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public disableLighting = false;
    /**
     * 両面ライティングを行うかどうか
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public twoSidedLighting = false;
    /**
     * アルファテスト時のカットしきい値
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public alphaCutOff = 0.5;
    /**
     * diffuseTexture に乗算される色
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public diffuseColor = new Color3(1.0, 1.0, 1.0);
    /**
     * 環境光
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public ambientColor = new Color3(0.1, 0.1, 0.1);
    /**
     * シーンの AmbientColor と掛け合わせた後の色
     * @see bindForSubMesh
     * @hidden
     */
    protected globalAmbientColor = new Color3(0.0, 0.0, 0.0);
    /**
     * 純粋加算される発光色
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public emissiveColor = new Color3(0.0, 0.0, 0.0);
    /**
     * shadeTexture に乗算される色
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public shadeColor = new Color3(0.97, 0.81, 0.86);
    /**
     * Rim の色
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public rimColor = new Color3(0.0, 0.0, 0.0);
    /**
     * アウトラインの色
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public outlineColor = new Color3(0.0, 0.0, 0.0);

    private _bumpScale = 1.0;
    public get bumpScale() {
        return this._bumpScale;
    }
    public set bumpScale(value: number) {
        this._bumpScale = value;
    }
    private _receiveShadowRate = 1.0;
    public get receiveShadowRate() {
        return this._receiveShadowRate;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set receiveShadowRate(value: number) {
        this._receiveShadowRate = Math.max(0.0, Math.min(1.0, value));
    }
    private _shadingGradeRate = 1.0;
    public get shadingGradeRate() {
        return this._shadingGradeRate;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set shadingGradeRate(value: number) {
        this._shadingGradeRate = Math.max(0.0, Math.min(1.0, value));
    }
    private _shadeShift = 0.0;
    public get shadeShift() {
        return this._shadeShift;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set shadeShift(value: number) {
        this._shadeShift = Math.max(-1.0, Math.min(1.0, value));
    }
    private _shadeToony = 0.9;
    public get shadeToony() {
        return this._shadeToony;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set shadeToony(value: number) {
        this._shadeToony = Math.max(0.0, Math.min(1.0, value));
    }
    private _lightColorAttenuation = 0.0;
    public get lightColorAttenuation() {
        return this._lightColorAttenuation;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set lightColorAttenuation(value: number) {
        this._lightColorAttenuation = Math.max(0.0, Math.min(1.0, value));
    }
    private _indirectLightIntensity = 0.1;
    public get indirectLightIntensity() {
        return this._indirectLightIntensity;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set indirectLightIntensity(value: number) {
        this._indirectLightIntensity = Math.max(0.0, Math.min(1.0, value));
    }
    private _rimLightingMix = 0;
    public get rimLightingMix() {
        return this._rimLightingMix;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set rimLightingMix(value: number) {
        this._rimLightingMix = Math.max(0.0, Math.min(1.0, value));
    }
    private _rimFresnelPower = 1;
    public get rimFresnelPower() {
        return this._rimFresnelPower;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set rimFresnelPower(value: number) {
        this._rimFresnelPower = Math.max(0.0, Math.min(100.0, value));
    }
    private _rimLift = 0;
    public get rimLift() {
        return this._rimLift;
    }
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public set rimLift(value: number) {
        this._rimLift = Math.max(0.0, Math.min(1.0, value));
    }
    private _outlineWidth = 0.5;
    public get outlineWidth() {
        return this._outlineWidth;
    }
    @expandToProperty('_markAllSubMeshesAsAttributesDirty')
    public set outlineWidth(value: number) {
        this._outlineWidth = Math.max(0.01, Math.min(1.0, value));
    }
    private _outlineScaledMaxDistance = 1.0;
    public get outlineScaledMaxDistance() {
        return this._outlineScaledMaxDistance;
    }
    @expandToProperty('_markAllSubMeshesAsAttributesDirty')
    public set outlineScaledMaxDistance(value: number) {
        this._outlineScaledMaxDistance = Math.max(1.0, Math.min(10.0, value));
    }
    private _outlineLightingMix = 1.0;
    public get outlineLightingMix() {
        return this._outlineLightingMix;
    }
    @expandToProperty('_markAllSubMeshesAsAttributesDirty')
    public set outlineLightingMix(value: number) {
        this._outlineLightingMix = Math.max(0.0, Math.min(1.0, value));
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public alphaTest = false;
    private _alphaBlend = false;
    public get alphaBlend() {
        return this._alphaBlend;
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public set alphaBlend(value: boolean) {
        this._alphaBlend = value;
        if (value) {
            this.backFaceCulling = true;
        }
    }
    /** @hidden */
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public debugMode: DebugMode = DebugMode.None;
    private outlineRenderer?: MToonOutlineRenderer;
    private _outlineWidthMode: OutlineWidthMode = OutlineWidthMode.None;
    public get outlineWidthMode() {
        return this._outlineWidthMode;
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public set outlineWidthMode(value: OutlineWidthMode) {
        this._outlineWidthMode = value;
        if (value !== OutlineWidthMode.None && !this.outlineRenderer) {
            /**
             * このマテリアル用のアウトラインレンダラーを生成する
             */
            this.outlineRenderer = new MToonOutlineRenderer(this.getScene(), this);
        }
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public outlineColorMode: OutlineColorMode = OutlineColorMode.MixedLighting;
    private _cullMode: CullMode = CullMode.Back;
    public get cullMode() {
      return this._cullMode;
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public set cullMode(value: CullMode) {
        this._cullMode = value;
        switch (this._cullMode) {
            case CullMode.Off:
                // 両面を描画する
                this.backFaceCulling = false;
                this.sideOrientation = Material.ClockWiseSideOrientation;
                this.twoSidedLighting = false;
                break;
            case CullMode.Front:
                // 表面を描画しない(=裏面だけ描画する)
                this.backFaceCulling = true;
                this.sideOrientation = Material.CounterClockWiseSideOrientation;
                this.twoSidedLighting = true;
                break;
            case CullMode.Back:
                // 裏面を描画しない(=表面だけ描画する) デフォルト
                this.backFaceCulling = true;
                this.sideOrientation = Material.ClockWiseSideOrientation;
                this.twoSidedLighting = false;
                break;
        }
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public outlineCullMode: CullMode = CullMode.Front;
    private storedCullMode = CullMode.Back;
    /**
     * アウトライン用 CullMode を設定
     * @hidden
     */
    public applyOutlineCullMode(): void {
        this.storedCullMode = this.cullMode;
        this.cullMode = this.outlineCullMode;
    }
    /**
     * CullMode をリストア
     * @hidden
     */
    public restoreOutlineCullMode(): void {
        this.cullMode = this.storedCullMode;
    }
    /**
     * @hidden
     */
    public getOutlineRendererName(): string {
        if (!this.outlineRenderer) {
            return '';
        }
        return this.outlineRenderer.name;
    }
//#endregion

    /**
     * @inheritdoc
     */
    public constructor(name: string, scene: Scene) {
        super(name, scene);

        // 裏面描画モードになることがあるのでここで右手座標系に強制する
        // this.sideOrientation = Material.ClockWiseSideOrientation;

        // シェーダストアに登録する
        if (!Effect.IncludesShadersStore.mtoonUboDeclaration) {
            Effect.IncludesShadersStore.mtoonUboDeclaration = UboDeclaration;
            Effect.IncludesShadersStore.mtoonVertexDeclaration = VertexDeclaration;
            Effect.IncludesShadersStore.mtoonFragmentDeclaration = FragmentDeclaration;
            Effect.IncludesShadersStore.mtoonLightFragment = LightFragment;
            Effect.ShadersStore.mtoonVertexShader = VertexShader;
            Effect.ShadersStore.mtoonFragmentShader = FragmentShader;
        }
    }

    /**
     * @inheritdoc
     * 利用可能かどうかチェックする
     */
    public isReadyForSubMesh(mesh: AbstractMesh, subMesh: SubMesh, useInstances = false): boolean {
        if (subMesh.effect && this.isFrozen) {
            if (this._wasPreviouslyReady) {
                return true;
            }
        }

        if (!subMesh._materialDefines) {
            subMesh._materialDefines = new MToonMaterialDefines();
        }

        const scene = this.getScene();
        const defines = subMesh._materialDefines as MToonMaterialDefines;
        if (!this.checkReadyOnEveryCall && subMesh.effect) {
            if (defines._renderId === scene.getRenderId()) {
                return true;
            }
        }

        const engine = scene.getEngine();

        // Lights
        defines._needNormals = MaterialHelper.PrepareDefinesForLights(
            scene,
            mesh,
            defines,
            this.specularSupported,
            this.maxSimultaneousLights,
            this.disableLighting,
        );

        if (this.outlineWidthMode !== OutlineWidthMode.None) {
            // アウトライン描画のためには normal が必要
            defines._needNormals = true;
        }

        this.applyDefines(defines);

        // Multiview
        MaterialHelper.PrepareDefinesForMultiview(scene, defines);

        // Textures
        // defines の変更はシェーダのリコンパイルを必要とするため、必要最小限にする
        // そのため若干冗長な記述となっている
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            defines.MAINUV1 = false;
            defines.MAINUV2 = false;

            if (scene.texturesEnabled) {
                // 追加テクスチャの用意を確認する
                if (!this.isReadyForTexture(this.diffuseTexture, defines, 'DIFFUSE')
                    || !this.isReadyForTexture(this.emissiveTexture, defines, 'EMISSIVE')
                    || !this.isReadyForTexture(this.shadeTexture, defines, 'SHADE')
                    || !this.isReadyForTexture(this.receiveShadowTexture, defines, 'RECEIVE_SHADOW')
                    || !this.isReadyForTexture(this.shadingGradeTexture, defines, 'SHADING_GRADE')
                    || !this.isReadyForTexture(this.rimTexture, defines, 'RIM')
                    || !this.isReadyForTexture(this.matCapTexture, defines, 'MATCAP')
                    || !this.isReadyForTexture(this.outlineWidthTexture, defines, 'OUTLINE_WIDTH')) {
                    return false;
                }
                if (scene.getEngine().getCaps().standardDerivatives && this.bumpTexture) {
                    // Bump texure can not be not blocking.
                    if (!this.bumpTexture.isReady()) {
                        return false;
                    }
                    MaterialHelper.PrepareDefinesForMergedUV(this.bumpTexture, defines, 'BUMP');
                } else {
                    defines.BUMP = false;
                }

                defines.TWOSIDEDLIGHTING = !this._backFaceCulling && this.twoSidedLighting;
            } else {
                defines.DIFFUSE = false;
                defines.EMISSIVE = false;
                defines.SHADE = false;
                defines.RECEIVE_SHADOW = false;
                defines.SHADING_GRADE = false;
                defines.RIM = false;
                defines.MATCAP = false;
                defines.OUTLINE_WIDTH = false;
                defines.BUMP = false;
            }

            defines.PREMULTIPLYALPHA = (this.alphaMode === Constants.ALPHA_PREMULTIPLIED || this.alphaMode === Constants.ALPHA_PREMULTIPLIED_PORTERDUFF);
        }

        // Misc.
        MaterialHelper.PrepareDefinesForMisc(
            mesh,
            scene,
            this.useLogarithmicDepth,
            this.pointsCloud,
            this.fogEnabled,
            this._shouldTurnAlphaTestOn(mesh),
            defines,
        );

        // Attribs
        MaterialHelper.PrepareDefinesForAttributes(
            mesh,
            defines,
            this.useVertexColor,
            this.useBones,
            this.useMorphTargets,
            this.useVertexAlpha,
        );

        // Values that need to be evaluated on every frame
        MaterialHelper.PrepareDefinesForFrameBoundValues(
            scene,
            engine,
            defines,
            useInstances,
        );

        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();

            // Fallbacks
            const fallbacks = new EffectFallbacks();

            if (defines.BUMP) {
                fallbacks.addFallback(0, 'BUMP');
            }

            if (defines.FOG) {
                fallbacks.addFallback(1, 'FOG');
            }

            if (defines.POINTSIZE) {
                fallbacks.addFallback(0, 'POINTSIZE');
            }

            if (defines.LOGARITHMICDEPTH) {
                fallbacks.addFallback(0, 'LOGARITHMICDEPTH');
            }

            MaterialHelper.HandleFallbacksForShadows(defines, fallbacks, this.maxSimultaneousLights);

            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }

            // Attributes
            const attribs = [VertexBuffer.PositionKind];

            if (defines.NORMAL) {
                attribs.push(VertexBuffer.NormalKind);
            }

            if (defines.TANGENT) {
                attribs.push(VertexBuffer.TangentKind);
            }

            if (defines.UV1) {
                attribs.push(VertexBuffer.UVKind);
            }

            if (defines.UV2) {
                attribs.push(VertexBuffer.UV2Kind);
            }

            MaterialHelper.PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            MaterialHelper.PrepareAttributesForInstances(attribs, defines);
            MaterialHelper.PrepareAttributesForMorphTargets(attribs, mesh, defines);

            const shaderName = 'mtoon';

            const uniforms = [
                'world', 'view', 'viewProjection', 'vLightsType',
                'visibility', 'mBones',
                'vClipPlane', 'vClipPlane2', 'vClipPlane3', 'vClipPlane4',
                'vFogInfos', 'vFogColor', 'pointSize',
                'alphaCutOff', 'logarithmicDepthConstant', 'vTangentSpaceParams', 'boneTextureWidth',

                'vDiffuseColor', 'vDiffuseInfos', 'diffuseMatrix',
                'vEmissiveColor', 'vEmissiveInfos', 'emissiveMatrix',
                'vBumpInfos', 'bumpMatrix',
                'vShadeColor', 'vShadeInfos', 'shadeMatrix',
                'vReceiveShadowInfos', 'receiveShadowMatrix',
                'vShadingGradeInfos', 'shadingGradeMatrix',
                'vRimColor', 'vRimInfos', 'RimMatrix',
                'vMatCapInfos', 'MatCapMatrix',
                'vOutlineColor', 'vOutlineWidthInfos', 'outlineWidthMatrix',
                'aspect', 'isOutline',

                'shadingGradeRate', 'receiveShadowRate', 'shadeShift', 'shadeToony',
                'rimLightingMix', 'rimFresnelPower', 'rimLift',
                'lightColorAttenuation', 'indirectLightIntensity',
                'outlineWidth', 'outlineScaledMaxDistance', 'outlineLightingMix',

                'vEyePosition', 'vEyeUp',
            ];

            const samplers = [
                'diffuseSampler', 'emissiveSampler', 'bumpSampler', 'boneSampler',
                'shadeSampler', 'receiveShadowSampler', 'shadingGradeSampler', 'rimSampler', 'matCapSampler', 'outlineWidthSampler',
            ];

            const uniformBuffers = ['Material', 'Scene'];

            MaterialHelper.PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers,
                defines,
                maxSimultaneousLights: this.maxSimultaneousLights,
            } as any);

            this.applyDefines(defines);

            const join = defines.toString();

            const previousEffect = subMesh.effect;
            let effect = scene.getEngine().createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers,
                defines: join,
                fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: {
                    maxSimultaneousLights: this.maxSimultaneousLights,
                    maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                },
            } as any, engine);

            if (effect) {
                // Use previous effect while new one is compiling
                if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                    effect = previousEffect;
                    defines.markAsUnprocessed();
                } else {
                    scene.resetCachedMaterial();
                    subMesh.setEffect(effect, defines);
                    this.buildUniformLayout();
                }
            }
        }

        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }

        defines._renderId = scene.getRenderId();
        this._wasPreviouslyReady = true;

        return true;
    }

    /**
     * @inheritdoc
     * 現在の値をシェーダにバインドする
     * このメソッドは毎フレームごとに呼ばれるため、冗長でも高速化を優先する
     */
    public bindForSubMesh(world: Matrix, mesh: Mesh, subMesh: SubMesh): void {
        const scene = this.getScene();
        const defines = subMesh._materialDefines as MToonMaterialDefines;
        const effect = subMesh.effect;
        if (!defines || !effect) {
            return;
        }
        this._activeEffect = effect;

        this.bindOnlyWorldMatrix(world);
        MaterialHelper.BindBonesParameters(mesh, effect);

        const mustRebind = scene.isCachedMaterialInvalid(this, effect, mesh.visibility);

        if (mustRebind) {
            this._uniformBuffer.bindToEffect(effect, 'Material');
            this.bindViewProjection(effect);

            if (!this._uniformBuffer.useUbo || !this.isFrozen || !this._uniformBuffer.isSync) {
                if (scene.texturesEnabled) {
                    this.bindTexture(this.diffuseTexture, effect, 'diffuse', 'vDiffuseInfos');
                    effect.setFloat('alphaCutOff', this.alphaCutOff);
                    this.bindTexture(this.emissiveTexture, effect, 'emissive', 'vEmissiveInfos');
                    if (this.bumpTexture) {
                        this._uniformBuffer.updateFloat3(
                            'vBumpInfos',
                            this.bumpTexture.coordinatesIndex,
                            1.0 / this.bumpTexture.level,
                            this.bumpScale,
                        );
                        const matrix = this.bumpTexture.getTextureMatrix();
                        if (!matrix.isIdentityAs3x2()) {
                            this._uniformBuffer.updateMatrix(`bumpMatrix`, matrix);
                        }
                        effect.setTexture(`bumpSampler`, this.bumpTexture);
                        // bumpTexture は babylon.js のデフォルトと反対の状態である
                        if (scene._mirroredCameraPosition) {
                            this._uniformBuffer.updateFloat2('vTangentSpaceParams', 1.0, 1.0);
                        } else {
                            this._uniformBuffer.updateFloat2('vTangentSpaceParams', -1.0, -1.0);
                        }
                    }
                    this.bindTexture(this.shadeTexture, effect, 'shade', 'vShadeInfos');
                    this.bindTexture(this.receiveShadowTexture, effect, 'receiveShadow', 'vReceiveShadowInfos');
                    this.bindTexture(this.shadingGradeTexture, effect, 'shadingGrade', 'vShadingGradeInfos');
                    this.bindTexture(this.rimTexture, effect, 'rim', 'vRimInfos');
                    this.bindTexture(this.matCapTexture, effect, 'matCap', 'vMatCapInfos');
                    this.bindTexture(this.outlineWidthTexture, effect, 'outlineWidth', 'vOutlineWidthInfos');
                }
            }

            // Point size
            if (this.pointsCloud) {
                this._uniformBuffer.updateFloat('pointSize', this.pointSize);
            }

            this._uniformBuffer.updateFloat('visibility', mesh.visibility);

            // MToon uniforms
            this._uniformBuffer.updateFloat('receiveShadowRate', this.receiveShadowRate);
            this._uniformBuffer.updateFloat('shadingGradeRate', this.shadingGradeRate);
            this._uniformBuffer.updateFloat('shadeShift', this.shadeShift);
            this._uniformBuffer.updateFloat('shadeToony', this.shadeToony);
            this._uniformBuffer.updateFloat('lightColorAttenuation', this.lightColorAttenuation);
            this._uniformBuffer.updateFloat('indirectLightIntensity', this.indirectLightIntensity);
            this._uniformBuffer.updateFloat('rimLightingMix', this.rimLightingMix);
            this._uniformBuffer.updateFloat('rimFresnelPower', this.rimFresnelPower);
            this._uniformBuffer.updateFloat('rimLift', this.rimLift);
            this._uniformBuffer.updateFloat('outlineWidth', this.outlineWidth);
            this._uniformBuffer.updateFloat('outlineScaledMaxDistance', this.outlineScaledMaxDistance);
            this._uniformBuffer.updateFloat('outlineLightingMix', this.outlineLightingMix);

            // Clip plane
            MaterialHelper.BindClipPlane(effect, scene);

            // Colors
            scene.ambientColor.multiplyToRef(this.ambientColor, this.globalAmbientColor);
            effect.setColor3('vAmbientColor', this.globalAmbientColor);
            this._uniformBuffer.updateColor4('vDiffuseColor', this.diffuseColor, this.alpha);
            this._uniformBuffer.updateColor3('vEmissiveColor', this.emissiveColor);
            this._uniformBuffer.updateColor3('vShadeColor', this.shadeColor);
            this._uniformBuffer.updateColor3('vRimColor', this.rimColor);
            this._uniformBuffer.updateColor4('vOutlineColor', this.outlineColor, 1.0);

            MaterialHelper.BindEyePosition(effect, scene);
            effect.setVector3('vEyeUp', scene.activeCamera!.upVector);
        }

        if (mustRebind || !this.isFrozen) {
            // `freeze` しない限り毎回更新される値
            if (scene.lightsEnabled && !this.disableLighting) {
                MaterialHelper.BindLights(scene, mesh, effect, defines, this.maxSimultaneousLights);
            }

            // View
            if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== Scene.FOGMODE_NONE) {
                this.bindView(effect);
            }

            // Fog
            MaterialHelper.BindFogParameters(scene, mesh, effect);

            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                MaterialHelper.BindMorphTargetParameters(mesh, effect);
            }

            // Log. depth
            MaterialHelper.BindLogDepth(defines, effect, scene);
        }
        effect.setFloat('aspect', scene.getEngine().getAspectRatio(scene.activeCamera!));
        effect.setFloat('isOutline', 0.0);

        this._uniformBuffer.update();
        this._afterBind(mesh, this._activeEffect);
    }

    /**
     * @inheritdoc
     */
    public getAnimatables(): IAnimatable[] {
        const results: IAnimatable[] = [];
        for (const texture of this.appendedActiveTextures) {
            if (texture.animations && texture.animations.length > 0) {
                results.push(texture);
            }
        }

        return results;
    }

    /**
     * @inheritdoc
     */
    public getActiveTextures(): BaseTexture[] {
        return super.getActiveTextures().concat(this.appendedActiveTextures);
    }

    /**
     * @inheritdoc
     */
    public hasTexture(texture: BaseTexture): boolean {
        if (super.hasTexture(texture)) {
            return true;
        }
        return this.appendedActiveTextures.length > 0;
    }

    /**
     * @inheritdoc
     */
    public dispose(
        forceDisposeEffect?: boolean,
        forceDisposeTextures?: boolean,
        notBoundToMesh?: boolean,
    ): void {
        delete this.outlineRenderer;
        if (forceDisposeTextures) {
            for (const texture of this.appendedActiveTextures) {
                texture.dispose();
            }
        }
        super.dispose(forceDisposeEffect, forceDisposeTextures, notBoundToMesh);
    }

    /**
     * UniformBufferObject のレイアウトを決定する
     * シェーダー内の `uniform Material` と同じ順序で add する必要がある
     * UBO を利用すると効率的に変数をシェーダに渡せるが、 WebGL v2 のみ対応
     * babylon.js では WebGL v1 の場合自動でフォールバックしてくれる
     * 第二引数は float の数
     */
    protected buildUniformLayout(): void {
        this._uniformBuffer.addUniform('vDiffuseColor', 4);
        this._uniformBuffer.addUniform('vDiffuseInfos', 2);
        this._uniformBuffer.addUniform('diffuseMatrix', 16);

        this._uniformBuffer.addUniform('vEmissiveColor', 3);
        this._uniformBuffer.addUniform('vEmissiveInfos', 2);
        this._uniformBuffer.addUniform('emissiveMatrix', 16);

        this._uniformBuffer.addUniform('vBumpInfos', 3);
        this._uniformBuffer.addUniform('bumpMatrix', 16);

        this._uniformBuffer.addUniform('vShadeColor', 3);
        this._uniformBuffer.addUniform('vShadeInfos', 2);
        this._uniformBuffer.addUniform('shadeMatrix', 16);

        this._uniformBuffer.addUniform('vReceiveShadowInfos', 2);
        this._uniformBuffer.addUniform('receiveShadowMatrix', 16);

        this._uniformBuffer.addUniform('vShadingGradeInfos', 2);
        this._uniformBuffer.addUniform('shadingGradeMatrix', 16);

        this._uniformBuffer.addUniform('vRimColor', 3);
        this._uniformBuffer.addUniform('vRimInfos', 2);
        this._uniformBuffer.addUniform('rimMatrix', 16);

        this._uniformBuffer.addUniform('vMatCapInfos', 2);
        this._uniformBuffer.addUniform('matCapMatrix', 16);

        this._uniformBuffer.addUniform('vOutlineColor', 3);
        this._uniformBuffer.addUniform('vOutlineWidthInfos', 2);
        this._uniformBuffer.addUniform('outlineWidthMatrix', 16);

        this._uniformBuffer.addUniform('vTangentSpaceParams', 2);
        this._uniformBuffer.addUniform('pointSize', 1);
        this._uniformBuffer.addUniform('visibility', 1);

        this._uniformBuffer.addUniform('shadingGradeRate', 1);
        this._uniformBuffer.addUniform('receiveShadowRate', 1);
        this._uniformBuffer.addUniform('shadeShift', 1);
        this._uniformBuffer.addUniform('shadeToony', 1);
        this._uniformBuffer.addUniform('lightColorAttenuation', 1);
        this._uniformBuffer.addUniform('indirectLightIntensity', 1);
        this._uniformBuffer.addUniform('rimLightingMix', 1);
        this._uniformBuffer.addUniform('rimFresnelPower', 1);
        this._uniformBuffer.addUniform('rimLift', 1);
        this._uniformBuffer.addUniform('outlineWidth', 1);
        this._uniformBuffer.addUniform('outlineScaledMaxDistance', 1);
        this._uniformBuffer.addUniform('outlineLightingMix', 1);

        this._uniformBuffer.create();
    }

    /**
     * テクスチャ情報をバインドする
     * @param texture
     * @param effect
     * @param name
     * @param infoName
     */
    private bindTexture(texture: Nullable<BaseTexture>, effect: Effect, name: string, infoName: string) {
        if (!texture) {
            return;
        }
        this._uniformBuffer.updateFloat2(infoName, texture.coordinatesIndex, texture.level);
        const matrix = texture.getTextureMatrix();
        if (!matrix.isIdentityAs3x2()) {
            this._uniformBuffer.updateMatrix(`${name}Matrix`, matrix);
        }
        effect.setTexture(`${name}Sampler`, texture);
    }

    /**
     * テクスチャの用意が終わっているか確認する
     * @param texture
     * @param defines
     * @param key
     */
    private isReadyForTexture(texture: Nullable<BaseTexture>, defines: any, key: string): boolean {
        if (!texture) {
            defines[key] = false;
            return true;
        }
        if (!texture.isReadyOrNotBlocking()) {
            return false;
        }
        MaterialHelper.PrepareDefinesForMergedUV(texture, defines, key);
        return true;
    }

    /**
     * 定数を設定する
     */
    private applyDefines(defines: any): void {
        switch (this.debugMode) {
            case DebugMode.Normal:
                if (defines.MTOON_DEBUG_NORMAL !== true) {
                    defines.MTOON_DEBUG_NORMAL = true;
                    defines.MTOON_DEBUG_LITSHADERATE = false;
                    defines.markAsUnprocessed();
                }
                break;
            case DebugMode.LitShadeRate:
                if (defines.MTOON_DEBUG_LITSHADERATE !== true) {
                    defines.MTOON_DEBUG_NORMAL = false;
                    defines.MTOON_DEBUG_LITSHADERATE = true;
                    defines.markAsUnprocessed();
                }
                break;
            case DebugMode.None:
                if (defines.MTOON_DEBUG_NORMAL === true) {
                    defines.MTOON_DEBUG_NORMAL = false;
                    defines.markAsUnprocessed();
                }
                if (defines.MTOON_DEBUG_LITSHADERATE === true) {
                    defines.MTOON_DEBUG_LITSHADERATE = false;
                    defines.markAsUnprocessed();
                }
                break;
        }
        switch (this.outlineWidthMode) {
            case OutlineWidthMode.WorldCorrdinates:
                if (defines.MTOON_OUTLINE_WIDTH_WORLD !== true) {
                    defines.MTOON_OUTLINE_WIDTH_WORLD = true;
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineWidthMode.ScreenCoordinates:
                if (defines.MTOON_OUTLINE_WIDTH_SCREEN !== true) {
                    defines.MTOON_OUTLINE_WIDTH_WORLD = false;
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = true;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineWidthMode.None:
                if (defines.MTOON_OUTLINE_WIDTH_SCREEN !== false || defines.MTOON_OUTLINE_WIDTH_WORLD !== false) {
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
                    defines.MTOON_OUTLINE_WIDTH_WORLD = false;
                    defines.markAsUnprocessed();
                }
                break;
        }
        switch (this.outlineColorMode) {
            case OutlineColorMode.FixedColor:
                if (defines.MTOON_OUTLINE_COLOR_FIXED !== true) {
                    defines.MTOON_OUTLINE_COLOR_FIXED = true;
                    defines.MTOON_OUTLINE_COLOR_MIXED = false;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineColorMode.MixedLighting:
                if (defines.MTOON_OUTLINE_COLOR_MIXED !== true) {
                    defines.MTOON_OUTLINE_COLOR_FIXED = false;
                    defines.MTOON_OUTLINE_COLOR_MIXED = true;
                    defines.markAsUnprocessed();
                }
                break;
        }
    }

//#region Misc
    /**
     * @inheritdoc
     */
    public getClassName() {
        return 'MToonMaterial';
    }

    /**
     * @inheritdoc
     */
    public getAlphaTestTexture(): Nullable<BaseTexture> {
        return this.diffuseTexture;
    }

    /**
     * @inheritdoc
     */
    public needAlphaBlending() {
        return this.alphaBlend;
    }

    /**
     * @inheritdoc
     */
    public needAlphaTesting() {
        return this.alphaTest;
    }

    /**
     * @inheritdoc
     */
    public clone(name: string): Nullable<MToonMaterial> {
        throw new Error(`MToonMaterial cannot be cloned.`);
    }

    /**
     * @inheritdoc
     */
    public serialize(): any {
        throw new Error(`MToonMaterial cannot be serialized`);
    }

    /**
     * @inheritdoc
     */
    public static Parse(parsedMaterial: any, scene: Scene, rootUrl: string): MToonMaterial {
        throw new Error(`MToonMaterial cannot be parsed`);
    }
//#endregion
}
