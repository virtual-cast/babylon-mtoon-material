import { PushMaterial } from '@babylonjs/core/Materials/pushMaterial';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { Color3, Matrix } from '@babylonjs/core/Maths/math';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { IAnimatable } from '@babylonjs/core/Misc/tools';
import { Scene } from '@babylonjs/core/scene';
import { Nullable } from '@babylonjs/core/types';
import '@babylonjs/core/Rendering/edgesRenderer';
import '@babylonjs/core/Rendering/outlineRenderer';
/**
 * デバッグモード
 */
declare enum DebugMode {
    None = 0,
    Normal = 1,
    LitShadeRate = 2
}
/**
 * アウトラインカラーモード
 */
declare enum OutlineColorMode {
    FixedColor = 0,
    MixedLighting = 1
}
/**
 * アウトライン幅モード
 */
declare enum OutlineWidthMode {
    None = 0,
    WorldCorrdinates = 1,
    ScreenCoordinates = 2
}
/**
 * Cull モード
 */
declare enum CullMode {
    Off = 0,
    Front = 1,
    Back = 2
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
export declare class MToonMaterial extends PushMaterial {
    /**
     * @inheritdoc
     * シリアライズを受け付けない
     */
    readonly doNotSerialize = true;
    /**
     * 通常色テクスチャ
     */
    diffuseTexture: Nullable<BaseTexture>;
    /**
     * 発光テクスチャ
     */
    emissiveTexture: Nullable<BaseTexture>;
    /**
     * バンプマップテクスチャ
     */
    bumpTexture: Nullable<BaseTexture>;
    /**
     * 陰になる部分の色テクスチャ
     */
    shadeTexture: Nullable<BaseTexture>;
    /**
     * どれだけ影を受け付けるかのテクスチャ
     * receiveShadowRate * texture.a
     */
    receiveShadowTexture: Nullable<BaseTexture>;
    /**
     * 陰部分の暗さテクスチャ
     * shadingGradeRate * (1.0 - texture.r))
     */
    shadingGradeTexture: Nullable<BaseTexture>;
    /**
     * MatCap, Rim ライティングテクスチャ
     */
    matCapTexture: Nullable<BaseTexture>;
    /**
     * アウトラインの幅の調整テクスチャ
     * @todo 現在は適用されていない
     */
    outlineWidthTexture: Nullable<BaseTexture>;
    /**
     * テクスチャ参照の一覧
     */
    protected readonly appendedTextures: Array<Nullable<BaseTexture>>;
    /**
     * アクティブなテクスチャ参照の一覧
     */
    protected readonly appendedActiveTextures: BaseTexture[];
    /**
     * 現状 MToon は 1 ライトのみ考慮する
     */
    readonly maxSimultaneousLights = 1;
    /**
     * Specular 非対応
     */
    readonly specularSupported = false;
    /**
     * 頂点カラー非対応
     */
    readonly useVertexColor = false;
    /**
     * シェーダボーンは利用可能
     */
    readonly useBones = true;
    /**
     * シェーダモーフターゲットは利用可能
     */
    readonly useMorphTargets = true;
    /**
     * 頂点アルファは非対応
     */
    readonly useVertexAlpha = false;
    /**
     * Logarithmic depth
     * @link http://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
     */
    private _useLogarithmicDepth;
    useLogarithmicDepth: boolean;
    /**
     * ライティングを無効にするかどうか
     */
    disableLighting: boolean;
    /**
     * 両面ライティングを行うかどうか
     */
    twoSidedLighting: boolean;
    /**
     * アルファテスト時のカットしきい値
     */
    alphaCutOff: number;
    /**
     * diffuseTexture に乗算される色
     */
    diffuseColor: Color3;
    /**
     * 環境光
     */
    ambientColor: Color3;
    /**
     * シーンの AmbientColor と掛け合わせた後の色
     * @see bindForSubMesh
     */
    protected globalAmbientColor: Color3;
    /**
     * 純粋加算される発光色
     */
    emissiveColor: Color3;
    /**
     * shadeTexture に乗算される色
     */
    shadeColor: Color3;
    /**
     * アウトラインの色
     */
    outlineColor: Color3;
    private _bumpScale;
    bumpScale: number;
    private _receiveShadowRate;
    receiveShadowRate: number;
    private _shadingGradeRate;
    shadingGradeRate: number;
    private _shadeShift;
    shadeShift: number;
    private _shadeToony;
    shadeToony: number;
    private _lightColorAttenuation;
    lightColorAttenuation: number;
    private _indirectLightIntensity;
    indirectLightIntensity: number;
    private _outlineWidth;
    outlineWidth: number;
    private _outlineScaledMaxDistance;
    outlineScaledMaxDistance: number;
    private _outlineLightingMix;
    outlineLightingMix: number;
    alphaTest: boolean;
    private _alphaBlend;
    alphaBlend: boolean;
    /** @hidden */
    debugMode: DebugMode;
    private outlineRenderer?;
    private _outlineWidthMode;
    outlineWidthMode: OutlineWidthMode;
    outlineColorMode: OutlineColorMode;
    private _cullMode;
    cullMode: CullMode;
    outlineCullMode: CullMode;
    private storedCullMode;
    /**
     * アウトライン用 CullMode を設定
     * @hidden
     */
    applyOutlineCullMode(): void;
    /**
     * CullMode をリストア
     * @hidden
     */
    restoreOutlineCullMode(): void;
    /**
     * @inheritdoc
     */
    constructor(name: string, scene: Scene);
    /**
     * @inheritdoc
     * 利用可能かどうかチェックする
     */
    isReadyForSubMesh(mesh: AbstractMesh, subMesh: SubMesh, useInstances?: boolean): boolean;
    /**
     * @inheritdoc
     * 現在の値をシェーダにバインドする
     * このメソッドは毎フレームごとに呼ばれるため、冗長でも高速化を優先する
     */
    bindForSubMesh(world: Matrix, mesh: Mesh, subMesh: SubMesh): void;
    /**
     * @inheritdoc
     */
    getAnimatables(): IAnimatable[];
    /**
     * @inheritdoc
     */
    getActiveTextures(): BaseTexture[];
    /**
     * @inheritdoc
     */
    hasTexture(texture: BaseTexture): boolean;
    /**
     * @inheritdoc
     */
    dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean, notBoundToMesh?: boolean): void;
    /**
     * UniformBufferObject のレイアウトを決定する
     * シェーダー内の `uniform Material` と同じ順序で add する必要がある
     * UBO を利用すると効率的に変数をシェーダに渡せるが、 WebGL v2 のみ対応
     * babylon.js では WebGL v1 の場合自動でフォールバックしてくれる
     * 第二引数は float の数
     */
    protected buildUniformLayout(): void;
    /**
     * テクスチャ情報をバインドする
     * @param texture
     * @param effect
     * @param name
     * @param infoName
     */
    private bindTexture;
    /**
     * テクスチャの用意が終わっているか確認する
     * @param texture
     * @param defines
     * @param key
     */
    private isReadyForTexture;
    /**
     * 定数を設定する
     */
    private applyDefines;
    /**
     * @inheritdoc
     */
    getClassName(): string;
    /**
     * @inheritdoc
     */
    getAlphaTestTexture(): Nullable<BaseTexture>;
    /**
     * @inheritdoc
     */
    needAlphaBlending(): boolean;
    /**
     * @inheritdoc
     */
    needAlphaTesting(): boolean;
    /**
     * @inheritdoc
     */
    clone(_: string): Nullable<MToonMaterial>;
    /**
     * @inheritdoc
     */
    serialize(): any;
    /**
     * @inheritdoc
     */
    static Parse(_: any, __: Scene, ___: string): MToonMaterial;
}
export {};
