import { serialize, SerializationHelper, serializeAsColor3, expandToProperty, serializeAsTexture } from '@babylonjs/core/Misc/decorators';
import type { Observer } from '@babylonjs/core/Misc/observable';
import { SmartArray } from '@babylonjs/core/Misc/smartArray';
import type { IAnimatable } from '@babylonjs/core/Animations/animatable.interface';

import type { Nullable } from '@babylonjs/core/types';
import { Scene } from '@babylonjs/core/scene';
import { Matrix, Vector4 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { VertexBuffer } from '@babylonjs/core/Buffers/buffer';
import type { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
// import { PrePassConfiguration } from "./prePassConfiguration";

import { ImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration';
import type { ColorCurves } from '@babylonjs/core/Materials/colorCurves';
import type { ICustomShaderNameResolveOptions } from '@babylonjs/core/Materials/material';
import { Material } from '@babylonjs/core/Materials/material';
import type { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { PushMaterial } from '@babylonjs/core/Materials/pushMaterial';
import { MaterialHelper } from '@babylonjs/core/Materials/materialHelper';

import type { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import type { RenderTargetTexture } from '@babylonjs/core/Materials/Textures/renderTargetTexture';

import { Constants } from '@babylonjs/core/Engines/constants';
import { EffectFallbacks } from '@babylonjs/core/Materials/effectFallbacks';
import type { IEffectCreationOptions } from '@babylonjs/core/Materials/effect';
import { Effect } from '@babylonjs/core/Materials/effect';
import { DetailMapConfiguration } from '@babylonjs/core/Materials/material.detailMapConfiguration';
import { MaterialPluginEvent } from '@babylonjs/core/Materials/materialPluginEvent';
import type { UniformBuffer } from '@babylonjs/core/Materials/uniformBuffer';

import { getInspectableCustomProperties } from './inspectable-custom-properties';
import { MToonOutlineRenderer } from './mtoon-outline-renderer';
import { MToonMaterialDefines } from './mtoon-material-defines';

const onCreatedEffectParameters = { effect: null as unknown as Effect, subMesh: null as unknown as Nullable<SubMesh> };

import UboDeclaration from './shaders/ubo-declaration.vert';
import VertexDeclaration from './shaders/vertex-declaration.vert';
import FragmentDeclaration from './shaders/fragment-declaration.frag';
import FragmentFunctions from './shaders/mtoon-fragment-functions.frag';
import BumpFragment from './shaders/bump-fragment.frag';
import LightFragment from './shaders/light-fragment.frag';
import VertexShader from './shaders/mtoon.vert';
import FragmentShader from './shaders/mtoon.frag';

/**
 * Debug shading mode
 */
export enum DebugMode {
    None = 0,
    Normal,
    LitShadeRate,
}
/**
 * Outline color mode
 */
export enum OutlineColorMode {
    FixedColor = 0,
    MixedLighting,
}
/**
 * Outline width mode
 */
export enum OutlineWidthMode {
    None = 0,
    WorldCorrdinates,
    ScreenCoordinates,
}
/**
 * Cull mode
 */
export enum CullMode {
    Off = 0,
    Front,
    Back,
}

/**
 * MToon は日本のアニメ的表現をすることを目標としています。
 * 主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。
 * VRM での出力パラメータとプロパティのマッピングは下記となります。
 *
 * MToon aims for making Japanese anime expressions.
 * It is achieved by mixing Lit Color and Shade Color based on Lighting parameters and light source environment.
 *
 * @see https://github.com/Santarh/MToon/
 * @see https://vrm.dev/univrm/shaders/mtoon/
 * @see https://doc.babylonjs.com/babylon101/materials
 */
export class MToonMaterial extends PushMaterial {
    //#region Properties
    //#region Textures
    @serializeAsTexture('diffuseTexture')
    private _diffuseTexture: Nullable<BaseTexture> = null;
    /**
     * The basic texture of the material as viewed under a light.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesAndMiscDirty')
    public diffuseTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('emissiveTexture')
    private _emissiveTexture: Nullable<BaseTexture> = null;
    /**
     * Define texture of the material as if self lit.
     * This will be mixed in the final result even in the absence of light.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public emissiveTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('bumpTexture')
    private _bumpTexture: Nullable<BaseTexture> = null;
    /**
     * Bump mapping is a technique to simulate bump and dents on a rendered surface.
     * These are made by creating a normal map from an image. The means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this.
     * @see https://doc.babylonjs.com/how_to/more_materials#bump-map
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public bumpTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('shadeTexture')
    private _shadeTexture: Nullable<BaseTexture> = null;
    /**
     * The basic texture of the material as viewed does not receive a light
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public shadeTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('receiveShadowTexture')
    private _receiveShadowTexture: Nullable<BaseTexture> = null;
    /**
     * Receiving shadow rate with texture
     * receiveShadowRate * texture.a
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public receiveShadowTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('shadingGradeTexture')
    private _shadingGradeTexture: Nullable<BaseTexture> = null;
    /**
     * Shading grade rate
     * shadingGradeRate * (1.0 - texture.r))
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public shadingGradeTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('rimTexture')
    private _rimTexture: Nullable<BaseTexture> = null;
    /**
     * Parametric Rim Lighting
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public rimTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('matCapTexture')
    private _matCapTexture: Nullable<BaseTexture> = null;
    /**
     * MatCap Lighting
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public matCapTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('outlineWidthTexture')
    private _outlineWidthTexture: Nullable<BaseTexture> = null;
    /**
     * Adjust outline width
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public outlineWidthTexture: Nullable<BaseTexture> = null;

    @serializeAsTexture('outlineWidthTexture')
    private _uvAnimationMaskTexture: Nullable<BaseTexture> = null;
    /**
     * UV animation mask
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public uvAnimationMaskTexture: Nullable<BaseTexture> = null;

    /**
     * the list of textures
     *
     * @returns {Array<Nullable<BaseTexture>>}
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private get appendedTextures(): Array<Nullable<BaseTexture>> {
        return [
            this._diffuseTexture,
            this._emissiveTexture,
            this._bumpTexture,
            this._shadeTexture,
            this._receiveShadowTexture,
            this._shadingGradeTexture,
            this._rimTexture,
            this._matCapTexture,
            this._outlineWidthTexture,
            this._uvAnimationMaskTexture,
        ];
    }
    /**
     * the list of active textures
     *
     * @returns {BaseTexture[]}
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private get appendedActiveTextures(): BaseTexture[] {
        return this.appendedTextures.filter((t) => t !== null) as BaseTexture[];
    }
    //#endregion
    //#region Colors
    /**
     * Multiplier of diffuseTexture
     */
    @serializeAsColor3('diffuse')
    public diffuseColor = new Color3(1.0, 1.0, 1.0);
    /**
     * babylon.js Ambient light
     */
    @serialize('ambient')
    public ambientColor = new Color3(0.0, 0.0, 0.0);
    /**
     * Emissive color
     */
    @serialize('emissive')
    public emissiveColor = new Color3(0.0, 0.0, 0.0);
    /**
     * Multiplier of shadeTexture
     */
    @serialize('shade')
    public shadeColor = new Color3(0.97, 0.81, 0.86);
    /**
     * Rim color
     */
    @serialize('rim')
    public rimColor = new Color3(0.0, 0.0, 0.0);
    /**
     * Outline color
     */
    @serialize('outline')
    public outlineColor = new Color3(0.0, 0.0, 0.0);
    //#endregion
    //#region StandardMaterial parameters
    /**
     * If true, the emissive value is added into the end result, otherwise it is multiplied in.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public readonly useEmissiveAsIllumination = false;
    /**
     * If true, some kind of energy conservation will prevent the end result to be more than 1 by reducing
     * the emissive level when the final color is close to one.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public readonly linkEmissiveWithDiffuse = false;
    /**
     * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
     * A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public readonly useReflectionOverAlpha = false;
    @serialize('disableLighting')
    private _disableLighting = false;
    /**
     * Does lights from the scene impacts this material.
     * It can be a nice trick for performance to disable lighting on a fully emissive material.
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public disableLighting: boolean;
    /**
     * Allows using an object space normal map (instead of tangent space).
     * No support
     */
    public readonly useObjectSpaceNormalMap: boolean = false;
    /**
     * Is parallax enabled or not.
     * @see https://doc.babylonjs.com/how_to/using_parallax_mapping
     * No support
     */
    public readonly useParallax: boolean = false;
    /**
     * Is parallax occlusion enabled or not.
     * If true, the outcome is way more realistic than traditional Parallax but you can expect a performance hit that worthes consideration.
     * @see https://doc.babylonjs.com/how_to/using_parallax_mapping
     * No support
     */
    public readonly useParallaxOcclusion: boolean = false;
    /**
     * No support for specular
     */
    public readonly specularSupported: boolean = false;
    /**
     * In case of light mapping, define whether the map contains light or shadow informations.
     * No support
     */
    public readonly useLightmapAsShadowmap: boolean = false;
    /**
     * No support for vertex colors
     */
    public readonly useVertexColor: boolean = false;
    /**
     * Support for bones in shader
     */
    public readonly useBones: boolean = true;
    /**
     * Support for morph targets in shader
     */
    public readonly useMorphTargets: boolean = true;
    /**
     * No support for vertex alpha
     */
    public readonly useVertexAlpha: boolean = false;
    /**
     * No support for baked vertex animation
     */
    public readonly useBakedVertexAnimation: boolean = false;

    /**
     * Defines the alpha limits in alpha test mode.
     */
    @serialize()
    public alphaCutOff = 0.4;
    @serialize('useAlphaFromDiffuseTexture')
    private _useAlphaFromDiffuseTexture = true;
    /**
     * Does the transparency come from the diffuse texture alpha channel.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesAndMiscDirty')
    public useAlphaFromDiffuseTexture: boolean;
    @serialize('maxSimultaneousLights')
    private _maxSimultaneousLights = 4;
    /**
     * Defines the maximum number of lights that can be used in the material
     */
    @expandToProperty('_markAllSubMeshesAsLightsDirty')
    public maxSimultaneousLights: number;
    /**
     * inverted state equals with Unity
     */
    @serialize('invertNormalMapX')
    private _invertNormalMapX = true;
    /**
     * If sets to true, x component of normal map value will invert (x = 1.0 - x).
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public invertNormalMapX: boolean;
    /**
     * inverted state equals with Unity
     */
    @serialize('invertNormalMapY')
    private _invertNormalMapY = true;
    /**
     * If sets to true, y component of normal map value will invert (y = 1.0 - y).
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public invertNormalMapY: boolean;
    @serialize('twoSidedLighting')
    private _twoSidedLighting = false;
    /**
     * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public twoSidedLighting: boolean;

    /**
     * Default configuration related to image processing available in the standard Material.
     */
    protected _imageProcessingConfiguration: ImageProcessingConfiguration;

    /**
     * Gets the image processing configuration used either in this material.
     */
    public get imageProcessingConfiguration(): ImageProcessingConfiguration {
        return this._imageProcessingConfiguration;
    }

    /**
     * Sets the Default image processing configuration used either in the this material.
     *
     * If sets to null, the scene one is in use.
     */
    public set imageProcessingConfiguration(value: ImageProcessingConfiguration) {
        this._attachImageProcessingConfiguration(value);

        // Ensure the effect will be rebuilt.
        this._markAllSubMeshesAsTexturesDirty();
    }

    /**
     * Keep track of the image processing observer to allow dispose and replace.
     */
    private _imageProcessingObserver: Nullable<Observer<ImageProcessingConfiguration>>;

    /**
     * Attaches a new image processing configuration to the Standard Material.
     * @param configuration
     */
    protected _attachImageProcessingConfiguration(configuration: Nullable<ImageProcessingConfiguration>): void {
        if (configuration === this._imageProcessingConfiguration) {
            return;
        }

        // Detaches observer
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }

        // Pick the scene configuration if needed
        if (!configuration) {
            this._imageProcessingConfiguration = this.getScene().imageProcessingConfiguration;
        } else {
            this._imageProcessingConfiguration = configuration;
        }

        // Attaches observer
        if (this._imageProcessingConfiguration) {
            this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add(() => {
                this._markAllSubMeshesAsImageProcessingDirty();
            });
        }
    }

    // /**
    //  * Defines additional PrePass parameters for the material.
    //  */
    // public readonly prePassConfiguration: PrePassConfiguration;

    /**
     * Can this material render to prepass
     * No support for PrePass
     */
    public get isPrePassCapable(): boolean {
        // return !this.disableDepthWrite;
        return false;
    }

    /**
     * Gets whether the color curves effect is enabled.
     */
    public get cameraColorCurvesEnabled(): boolean {
        return this.imageProcessingConfiguration.colorCurvesEnabled;
    }
    /**
     * Sets whether the color curves effect is enabled.
     */
    public set cameraColorCurvesEnabled(value: boolean) {
        this.imageProcessingConfiguration.colorCurvesEnabled = value;
    }

    /**
     * Gets whether the color grading effect is enabled.
     */
    public get cameraColorGradingEnabled(): boolean {
        return this.imageProcessingConfiguration.colorGradingEnabled;
    }
    /**
     * Gets whether the color grading effect is enabled.
     */
    public set cameraColorGradingEnabled(value: boolean) {
        this.imageProcessingConfiguration.colorGradingEnabled = value;
    }

    /**
     * Gets whether tonemapping is enabled or not.
     */
    public get cameraToneMappingEnabled(): boolean {
        return this._imageProcessingConfiguration.toneMappingEnabled;
    }
    /**
     * Sets whether tonemapping is enabled or not
     */
    public set cameraToneMappingEnabled(value: boolean) {
        this._imageProcessingConfiguration.toneMappingEnabled = value;
    }

    /**
     * The camera exposure used on this material.
     * This property is here and not in the camera to allow controlling exposure without full screen post process.
     * This corresponds to a photographic exposure.
     */
    public get cameraExposure(): number {
        return this._imageProcessingConfiguration.exposure;
    }
    /**
     * The camera exposure used on this material.
     * This property is here and not in the camera to allow controlling exposure without full screen post process.
     * This corresponds to a photographic exposure.
     */
    public set cameraExposure(value: number) {
        this._imageProcessingConfiguration.exposure = value;
    }

    /**
     * Gets The camera contrast used on this material.
     */
    public get cameraContrast(): number {
        return this._imageProcessingConfiguration.contrast;
    }

    /**
     * Sets The camera contrast used on this material.
     */
    public set cameraContrast(value: number) {
        this._imageProcessingConfiguration.contrast = value;
    }

    /**
     * Gets the Color Grading 2D Lookup Texture.
     */
    public get cameraColorGradingTexture(): Nullable<BaseTexture> {
        return this._imageProcessingConfiguration.colorGradingTexture;
    }
    /**
     * Sets the Color Grading 2D Lookup Texture.
     */
    public set cameraColorGradingTexture(value: Nullable<BaseTexture>) {
        this._imageProcessingConfiguration.colorGradingTexture = value;
    }

    /**
     * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
     * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
     * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
     * corresponding to low luminance, medium luminance, and high luminance areas respectively.
     */
    public get cameraColorCurves(): Nullable<ColorCurves> {
        return this._imageProcessingConfiguration.colorCurves;
    }
    /**
     * The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
     * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
     * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
     * corresponding to low luminance, medium luminance, and high luminance areas respectively.
     */
    public set cameraColorCurves(value: Nullable<ColorCurves>) {
        this._imageProcessingConfiguration.colorCurves = value;
    }

    /**
     * Can this material render to several textures at once
     */
    public get canRenderToMRT() {
        return true;
    }

    /**
     * Defines the detail map parameters for the material.
     */
    public readonly detailMap: DetailMapConfiguration;

    protected _renderTargets = new SmartArray<RenderTargetTexture>(16);
    protected _worldViewProjectionMatrix = Matrix.Zero();
    protected _globalAmbientColor = new Color3(0, 0, 0);
    protected _useLogarithmicDepth: boolean;
    protected _cacheHasRenderTargetTextures = false;
    //#endregion
    //#region MToon parameters
    private _bumpScale = 1.0;
    @serialize()
    public get bumpScale() {
        return this._bumpScale;
    }
    public set bumpScale(value: number) {
        this._bumpScale = value;
    }
    private _receiveShadowRate = 1.0;
    @serialize()
    public get receiveShadowRate() {
        return this._receiveShadowRate;
    }
    public set receiveShadowRate(value: number) {
        this._receiveShadowRate = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _shadingGradeRate = 1.0;
    @serialize()
    public get shadingGradeRate() {
        return this._shadingGradeRate;
    }
    public set shadingGradeRate(value: number) {
        this._shadingGradeRate = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _shadeShift = 0.0;
    @serialize()
    public get shadeShift() {
        return this._shadeShift;
    }
    public set shadeShift(value: number) {
        this._shadeShift = Math.max(-1.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _shadeToony = 0.9;
    @serialize()
    public get shadeToony() {
        return this._shadeToony;
    }
    public set shadeToony(value: number) {
        this._shadeToony = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _lightColorAttenuation = 0.0;
    @serialize()
    public get lightColorAttenuation() {
        return this._lightColorAttenuation;
    }
    public set lightColorAttenuation(value: number) {
        this._lightColorAttenuation = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _indirectLightIntensity = 0.1;
    @serialize()
    public get indirectLightIntensity() {
        return this._indirectLightIntensity;
    }
    public set indirectLightIntensity(value: number) {
        this._indirectLightIntensity = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _rimLightingMix = 0;
    @serialize()
    public get rimLightingMix() {
        return this._rimLightingMix;
    }
    public set rimLightingMix(value: number) {
        this._rimLightingMix = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _rimFresnelPower = 1;
    @serialize()
    public get rimFresnelPower() {
        return this._rimFresnelPower;
    }
    public set rimFresnelPower(value: number) {
        this._rimFresnelPower = Math.max(0.0, Math.min(100.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _rimLift = 0;
    @serialize()
    public get rimLift() {
        return this._rimLift;
    }
    public set rimLift(value: number) {
        this._rimLift = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    private _outlineWidth = 0.5;
    @serialize()
    public get outlineWidth() {
        return this._outlineWidth;
    }
    public set outlineWidth(value: number) {
        this._outlineWidth = Math.max(0.01, Math.min(1.0, value));
        this._markAllSubMeshesAsAttributesDirty();
    }
    private _outlineScaledMaxDistance = 1.0;
    @serialize()
    public get outlineScaledMaxDistance() {
        return this._outlineScaledMaxDistance;
    }
    public set outlineScaledMaxDistance(value: number) {
        this._outlineScaledMaxDistance = Math.max(1.0, Math.min(10.0, value));
        this._markAllSubMeshesAsAttributesDirty();
    }
    private _outlineLightingMix = 1.0;
    @serialize()
    public get outlineLightingMix() {
        return this._outlineLightingMix;
    }
    public set outlineLightingMix(value: number) {
        this._outlineLightingMix = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsAttributesDirty();
    }
    private _uvAnimationScrollX = 0.0;
    @serialize()
    public get uvAnimationScrollX() {
        return this._uvAnimationScrollX;
    }
    public set uvAnimationScrollX(value: number) {
        this._uvAnimationScrollX = value;
        this._markAllSubMeshesAsMiscDirty();
    }
    private _uvAnimationScrollY = 0.0;
    @serialize()
    public get uvAnimationScrollY() {
        return this._uvAnimationScrollY;
    }
    public set uvAnimationScrollY(value: number) {
        this._uvAnimationScrollY = value;
        this._markAllSubMeshesAsMiscDirty();
    }
    private _uvAnimationRotation = 0.0;
    @serialize()
    public get uvAnimationRotation() {
        return this._uvAnimationRotation;
    }
    public set uvAnimationRotation(value: number) {
        this._uvAnimationRotation = value;
        this._markAllSubMeshesAsMiscDirty();
    }

    @serialize('alphaTest')
    private _alphaTest = false;
    @serialize()
    public get alphaTest() {
        return this._alphaTest;
    }
    public set alphaTest(value: boolean) {
        this._alphaTest = value;
        if (value) {
            if (this.alphaBlend) {
                this._transparencyMode = Material.MATERIAL_ALPHATESTANDBLEND;
            } else {
                this._transparencyMode = Material.MATERIAL_ALPHATEST;
            }
        } else {
            if (this.alphaBlend) {
                this._transparencyMode = Material.MATERIAL_ALPHABLEND;
            } else {
                this._transparencyMode = Material.MATERIAL_OPAQUE;
            }
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    private _alphaBlend = false;
    @serialize()
    public get alphaBlend() {
        return this._alphaBlend;
    }
    public set alphaBlend(value: boolean) {
        this._alphaBlend = value;
        if (value) {
            this.backFaceCulling = true;
            if (this.alphaTest) {
                this._transparencyMode = Material.MATERIAL_ALPHATESTANDBLEND;
            } else {
                this._transparencyMode = Material.MATERIAL_ALPHABLEND;
            }
        } else {
            if (this.alphaTest) {
                this._transparencyMode = Material.MATERIAL_ALPHATEST;
            } else {
                this._transparencyMode = Material.MATERIAL_OPAQUE;
            }
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    @serialize('debugMode')
    private _debugMode = DebugMode.None;
    /** @hidden */
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public debugMode: DebugMode = DebugMode.None;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    private outlineRenderer?: MToonOutlineRenderer;
    private _outlineWidthMode: OutlineWidthMode = OutlineWidthMode.None;
    public get outlineWidthMode() {
        return this._outlineWidthMode;
    }
    public set outlineWidthMode(value: OutlineWidthMode) {
        this._outlineWidthMode = value;
        if (value !== OutlineWidthMode.None && !this.outlineRenderer) {
            /**
             * このマテリアル用のアウトラインレンダラーを生成する
             */
            this.outlineRenderer = new MToonOutlineRenderer(this.getScene(), this);
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private isOutline: number = 0.0;
    public enableOutlineRender(): void {
        this.isOutline = 1.0;
    }
    public disaableOutlineRender(): void {
        this.isOutline = 0.0;
    }
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public outlineColorMode: OutlineColorMode = OutlineColorMode.MixedLighting;
    private _cullMode: CullMode = CullMode.Back;
    @serialize()
    public get cullMode() {
        return this._cullMode;
    }
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
        this._markAllSubMeshesAsMiscDirty();
    }
    @serialize()
    private _outlineCullMode = CullMode.Front;
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public outlineCullMode: CullMode = CullMode.Front;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private storedCullMode = CullMode.Back;
    /**
     * アウトライン用 CullMode を設定
     * @hidden
     */
    public applyOutlineCullMode(): void {
        this.storedCullMode = this.cullMode;
        this.cullMode = this._outlineCullMode;
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
     * flip mainUv.x if true
     */
    @serialize('flipU')
    public flipU = false;
    /**
     * flip mainUv.y if true
     */
    @serialize('flipV')
    public flipV = false;
    //#endregion

    /**
     * {@inheritdoc}
     */
    public constructor(name: string, scene?: Scene) {
        super(name, scene);

        this.detailMap = new DetailMapConfiguration(this as unknown as StandardMaterial);

        // Setup the default processing configuration to the scene.
        this._attachImageProcessingConfiguration(null);
        // this.prePassConfiguration = new PrePassConfiguration();

        this.getRenderTargetTextures = (): SmartArray<RenderTargetTexture> => {
            this._renderTargets.reset();

            // if (StandardMaterial.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            //     this._renderTargets.push(<RenderTargetTexture>this._reflectionTexture);
            // }

            // if (StandardMaterial.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            //     this._renderTargets.push(<RenderTargetTexture>this._refractionTexture);
            // }

            this._eventInfo.renderTargets = this._renderTargets;
            this._callbackPluginEventFillRenderTargetTextures(this._eventInfo);

            return this._renderTargets;
        };

        // Register shaders to ShadersStore
        if (!Effect.IncludesShadersStore.mtoonUboDeclaration) {
            Effect.IncludesShadersStore.mtoonUboDeclaration = UboDeclaration;
            Effect.IncludesShadersStore.mtoonVertexDeclaration = VertexDeclaration;
            Effect.IncludesShadersStore.mtoonFragmentDeclaration = FragmentDeclaration;
            Effect.IncludesShadersStore.mtoonFragmentFunctions = FragmentFunctions;
            Effect.IncludesShadersStore.mtoonLightFragment = LightFragment;
            Effect.IncludesShadersStore.mtoonBumpFragment = BumpFragment;
            Effect.ShadersStore.mtoonVertexShader = VertexShader;
            Effect.ShadersStore.mtoonFragmentShader = FragmentShader;
        }

        // Add properties to Inspactor
        this.inspectableCustomProperties = this.inspectableCustomProperties || [];
        this.inspectableCustomProperties.push(...getInspectableCustomProperties());
    }

    /**
     * Gets a boolean indicating that current material needs to register RTT
     */
    public get hasRenderTargetTextures(): boolean {
        // if (StandardMaterial.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
        //     return true;
        // }

        // if (StandardMaterial.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
        //     return true;
        // }

        return false;
    }

    /**
     * {@inheritdoc}
     */
    public getClassName() {
        return 'MToonMaterial';
    }

    /**
     * In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
     * You can try switching to logarithmic depth.
     * @see https://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
     */
    @serialize()
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
     * {@inheritdoc}
     */
    public needAlphaBlending(): boolean {
        if (this._disableAlphaBlending) {
            return false;
        }

        // return (this.alpha < 1.0) || (this._opacityTexture != null) || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled;
        return this.alpha < 1.0 || this._shouldUseAlphaFromDiffuseTexture();
    }

    /**
     * {@inheritdoc}
     */
    public needAlphaTesting(): boolean {
        if (this._forceAlphaTest) {
            return true;
        }
        if (this._alphaTest) {
            return true;
        }

        return this._hasAlphaChannel() && (this._transparencyMode == null || this._transparencyMode === Material.MATERIAL_ALPHATEST);
    }

    /**
     * {@inheritdoc}
     */
    protected _shouldUseAlphaFromDiffuseTexture(): boolean {
        return this._diffuseTexture != null && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Material.MATERIAL_OPAQUE;
    }

    /**
     * {@inheritdoc}
     */
    protected _hasAlphaChannel(): boolean {
        return this._diffuseTexture !== null && this._diffuseTexture.hasAlpha; // || this._opacityTexture != null;
    }

    /**
     * {@inheritdoc}
     */
    public getAlphaTestTexture(): Nullable<BaseTexture> {
        return this._diffuseTexture;
    }

    /**
     * {@inheritdoc}
     */
    public isReadyForSubMesh(mesh: AbstractMesh, subMesh: SubMesh, useInstances: boolean = false): boolean {
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }

        if (subMesh.effect && this.isFrozen) {
            if (subMesh.effect._wasPreviouslyReady && subMesh.effect._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }

        if (!subMesh.materialDefines) {
            this._callbackPluginEventGeneric(MaterialPluginEvent.GetDefineNames, this._eventInfo);
            subMesh.materialDefines = new MToonMaterialDefines();
        }

        const scene = this.getScene();
        const defines = subMesh.materialDefines as MToonMaterialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }

        const engine = scene.getEngine();

        // Lights
        defines._needNormals = MaterialHelper.PrepareDefinesForLights(scene, mesh, defines, this.specularSupported, this._maxSimultaneousLights, this._disableLighting);

        if (this.outlineWidthMode !== OutlineWidthMode.None) {
            // Normals is needed when rendering outline
            defines._needNormals = true;
        }

        this.applyDefines(defines);

        // Multiview
        MaterialHelper.PrepareDefinesForMultiview(scene, defines);

        // PrePass
        const oit = this.needAlphaBlendingForMesh(mesh) && (scene as any).useOrderIndependentTransparency;
        // MaterialHelper.PrepareDefinesForPrePass(scene, defines, this.canRenderToMRT && !oit);

        // Order independant transparency
        MaterialHelper.PrepareDefinesForOIT(scene, defines, oit);

        // Textures
        if (defines._areTexturesDirty) {
            this._eventInfo.hasRenderTargetTextures = false;
            this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
            this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures;
            defines._needUVs = false;
            for (let i = 1; i <= Constants.MAX_SUPPORTED_UV_SETS; ++i) {
                defines['MAINUV' + i] = false;
            }

            if (scene.texturesEnabled) {
                // Check texture is ready
                if (
                    !this.isReadyForTexture(this._diffuseTexture, defines, 'DIFFUSE') ||
                    !this.isReadyForTexture(this._emissiveTexture, defines, 'EMISSIVE') ||
                    !this.isReadyForTexture(this._shadeTexture, defines, 'SHADE') ||
                    !this.isReadyForTexture(this._receiveShadowTexture, defines, 'RECEIVE_SHADOW') ||
                    !this.isReadyForTexture(this._shadingGradeTexture, defines, 'SHADING_GRADE') ||
                    !this.isReadyForTexture(this._rimTexture, defines, 'RIM') ||
                    !this.isReadyForTexture(this._matCapTexture, defines, 'MATCAP') ||
                    !this.isReadyForTexture(this._outlineWidthTexture, defines, 'OUTLINE_WIDTH') ||
                    !this.isReadyForTexture(this._uvAnimationMaskTexture, defines, 'UV_ANIMATION_MASK')
                ) {
                    return false;
                }
                if (scene.getEngine().getCaps().standardDerivatives && this._bumpTexture) {
                    // Bump texure can not be not blocking.
                    if (!this._bumpTexture.isReady()) {
                        return false;
                    }
                    MaterialHelper.PrepareDefinesForMergedUV(this._bumpTexture, defines, 'BUMP');

                    defines.PARALLAX = this.useParallax;
                    defines.PARALLAXOCCLUSION = this.useParallaxOcclusion;

                    defines.OBJECTSPACE_NORMALMAP = this.useObjectSpaceNormalMap;
                } else {
                    defines.BUMP = false;
                    defines.PARALLAX = false;
                    defines.PARALLAXOCCLUSION = false;
                }

                defines.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting;
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
                defines.UV_ANIMATION_MASK = false;
            }

            defines.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture();

            // defines.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination;

            // defines.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse;

            // defines.SPECULAROVERALPHA = this._useSpecularOverAlpha;

            defines.PREMULTIPLYALPHA = this.alphaMode === Constants.ALPHA_PREMULTIPLIED || this.alphaMode === Constants.ALPHA_PREMULTIPLIED_PORTERDUFF;

            defines.ALPHATEST_AFTERALLALPHACOMPUTATIONS = this.transparencyMode !== null;

            defines.ALPHABLEND = this.transparencyMode === null || this.needAlphaBlendingForMesh(mesh); // check on null for backward compatibility
        }

        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = defines;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);

        if (!this._eventInfo.isReadyForSubMesh) {
            return false;
        }

        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) {
                return false;
            }

            this._imageProcessingConfiguration.prepareDefines(defines);

            // defines.IS_REFLECTION_LINEAR = (this.reflectionTexture != null && !this.reflectionTexture.gammaSpace);
            // defines.IS_REFRACTION_LINEAR = (this.refractionTexture != null && !this.refractionTexture.gammaSpace);
        }

        if (this.flipU !== defines.FLIP_U) {
            defines.FLIP_U = this.flipU;
            defines.markAsUnprocessed();
        }
        if (this.flipV !== defines.FLIP_V) {
            defines.FLIP_V = this.flipV;
            defines.markAsUnprocessed();
        }

        // Misc.
        MaterialHelper.PrepareDefinesForMisc(
            mesh,
            scene,
            this._useLogarithmicDepth,
            this.pointsCloud,
            this.fogEnabled,
            this._shouldTurnAlphaTestOn(mesh) || this._forceAlphaTest,
            defines
        );

        // Values that need to be evaluated on every frame
        MaterialHelper.PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances, null, subMesh.getRenderingMesh().hasThinInstances);

        // External config
        this._eventInfo.defines = defines;
        this._eventInfo.mesh = mesh;
        this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo);

        // Attribs
        MaterialHelper.PrepareDefinesForAttributes(mesh, defines, this.useVertexColor, this.useBones, this.useMorphTargets, this.useVertexAlpha, this.useBakedVertexAnimation);

        // External config
        this._callbackPluginEventPrepareDefines(this._eventInfo);

        // Get correct effect
        if (defines.isDirty) {
            const lightDisposed = defines._areLightsDisposed;
            defines.markAsProcessed();

            // Fallbacks
            const fallbacks = new EffectFallbacks();

            if (defines.BUMP) {
                fallbacks.addFallback(0, 'BUMP');
            }

            if (defines.PARALLAX) {
                fallbacks.addFallback(1, 'PARALLAX');
            }

            if (defines.PARALLAXOCCLUSION) {
                fallbacks.addFallback(0, 'PARALLAXOCCLUSION');
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

            MaterialHelper.HandleFallbacksForShadows(defines, fallbacks, this._maxSimultaneousLights);

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

            for (let i = 1; i <= Constants.MAX_SUPPORTED_UV_SETS; ++i) {
                if (defines['UV' + i]) {
                    attribs.push(`uv${i === 1 ? '' : i}`);
                }
            }

            if (defines.INSTANCESCOLOR) {
                attribs.push(VertexBuffer.ColorInstanceKind);
            }

            MaterialHelper.PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            MaterialHelper.PrepareAttributesForInstances(attribs, defines);
            MaterialHelper.PrepareAttributesForMorphTargets(attribs, mesh, defines);
            MaterialHelper.PrepareAttributesForBakedVertexAnimation(attribs, mesh, defines);

            const shaderName = 'mtoon';

            const uniforms = [
                // StandardMaterial uniforms
                'world',
                'view',
                'viewProjection',
                'vEyePosition',
                'vLightsType',
                'vAmbientColor',
                'visibility',
                'vFogInfos',
                'vFogColor',
                'pointSize',
                'mBones',
                'vClipPlane',
                'vClipPlane2',
                'vClipPlane3',
                'vClipPlane4',
                'vClipPlane5',
                'vClipPlane6',
                // "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor",
                // "vReflectionPosition", "vReflectionSize", "vRefractionPosition", "vRefractionSize",
                'logarithmicDepthConstant',
                'vTangentSpaceParams',
                'alphaCutOff',
                'boneTextureWidth',
                'morphTargetTextureInfo',
                'morphTargetTextureIndices',

                // Texture uniforms
                'vDiffuseColor',
                'vDiffuseInfos',
                'diffuseMatrix',
                'vEmissiveColor',
                'vEmissiveInfos',
                'emissiveMatrix',
                'vBumpInfos',
                'bumpMatrix',
                'vShadeColor',
                'vShadeInfos',
                'shadeMatrix',
                'vReceiveShadowInfos',
                'receiveShadowMatrix',
                'vShadingGradeInfos',
                'shadingGradeMatrix',
                'vRimColor',
                'vRimInfos',
                'RimMatrix',
                'vMatCapInfos',
                'MatCapMatrix',
                'vOutlineColor',
                'vOutlineWidthInfos',
                'outlineWidthMatrix',

                // MToon uniforms
                'aspect',
                'isOutline',
                'shadingGradeRate',
                'receiveShadowRate',
                'shadeShift',
                'shadeToony',
                'rimLightingMix',
                'rimFresnelPower',
                'rimLift',
                'lightColorAttenuation',
                'indirectLightIntensity',
                'outlineWidth',
                'outlineScaledMaxDistance',
                'outlineLightingMix',
                'uvAnimationScrollX',
                'uvAnimationScrollY',
                'uvAnimationRotation',
                'vEyeUp',
                'time',

                // Material#bindViewProjection
                'projection',
            ];

            const samplers = [
                // StandardMaterial samplers
                'diffuseSampler',
                'ambientSampler',
                'emissiveSampler',
                'bumpSampler',
                'boneSampler',
                'morphTargets',
                'oitDepthSampler',
                'oitFrontColorSampler',

                // MToon samplers
                'shadeSampler',
                'receiveShadowSampler',
                'shadingGradeSampler',
                'rimSampler',
                'matCapSampler',
                'outlineWidthSampler',
                'uvAnimationMaskSampler',
            ];

            const uniformBuffers = ['Material', 'Scene', 'Mesh'];

            this._eventInfo.fallbacks = fallbacks;
            this._eventInfo.fallbackRank = 0;
            this._eventInfo.defines = defines;
            this._eventInfo.uniforms = uniforms;
            this._eventInfo.attributes = attribs;
            this._eventInfo.samplers = samplers;
            this._eventInfo.uniformBuffersNames = uniformBuffers;
            this._eventInfo.customCode = undefined;
            this._eventInfo.mesh = mesh;
            this._callbackPluginEventGeneric(MaterialPluginEvent.PrepareEffect, this._eventInfo);

            // PrePassConfiguration.AddUniforms(uniforms);
            // PrePassConfiguration.AddSamplers(samplers);

            if (ImageProcessingConfiguration) {
                ImageProcessingConfiguration.PrepareUniforms(uniforms, defines);
                ImageProcessingConfiguration.PrepareSamplers(samplers, defines);
            }

            MaterialHelper.PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers,
                defines,
                maxSimultaneousLights: this._maxSimultaneousLights,
            } as IEffectCreationOptions);

            const csnrOptions: ICustomShaderNameResolveOptions = {};

            const join = defines.toString();

            const previousEffect = subMesh.effect;
            let effect = scene.getEngine().createEffect(
                shaderName,
                {
                    attributes: attribs,
                    uniformsNames: uniforms,
                    uniformBuffersNames: uniformBuffers,
                    samplers,
                    defines: join,
                    fallbacks,
                    onCompiled: this.onCompiled,
                    onError: this.onError,
                    indexParameters: {
                        maxSimultaneousLights: this._maxSimultaneousLights,
                        maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                    },
                    processFinalCode: csnrOptions.processFinalCode,
                    processCodeAfterIncludes: this._eventInfo.customCode,
                    multiTarget: defines.PREPASS,
                } as IEffectCreationOptions,
                engine
            );

            if (effect) {
                if (this._onEffectCreatedObservable) {
                    onCreatedEffectParameters.effect = effect;
                    onCreatedEffectParameters.subMesh = subMesh;
                    this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
                }

                // Use previous effect while new one is compiling
                if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                    effect = previousEffect;
                    defines.markAsUnprocessed();

                    if (lightDisposed) {
                        // re register in case it takes more than one frame.
                        defines._areLightsDisposed = true;
                        return false;
                    }
                } else {
                    scene.resetCachedMaterial();
                    subMesh.setEffect(effect, defines, this._materialContext);
                }
            }
        }

        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }

        defines._renderId = scene.getRenderId();
        subMesh.effect._wasPreviouslyReady = true;
        subMesh.effect._wasPreviouslyUsingInstances = useInstances;

        return true;
    }

    /**
     * Determine the layout of the UniformBufferObject
     * Must be added in the same order as the `uniform Material` in the shader
     * UBOs can be used to efficiently pass variables to shaders, but only WebGL v2 is supported.
     * babylon.js automatically falls back on WebGL v1
     * The second argument is the number of floats
     */
    public buildUniformLayout(): void {
        const ubo = this._uniformBuffer;

        ubo.addUniform('vDiffuseColor', 4);
        ubo.addUniform('vDiffuseInfos', 2);
        ubo.addUniform('diffuseMatrix', 16);

        ubo.addUniform('vEmissiveColor', 3);
        ubo.addUniform('vEmissiveInfos', 2);
        ubo.addUniform('emissiveMatrix', 16);

        ubo.addUniform('vBumpInfos', 3);
        ubo.addUniform('bumpMatrix', 16);

        ubo.addUniform('vShadeColor', 3);
        ubo.addUniform('vShadeInfos', 2);
        ubo.addUniform('shadeMatrix', 16);

        ubo.addUniform('vReceiveShadowInfos', 2);
        ubo.addUniform('receiveShadowMatrix', 16);

        ubo.addUniform('vShadingGradeInfos', 2);
        ubo.addUniform('shadingGradeMatrix', 16);

        ubo.addUniform('vRimColor', 3);
        ubo.addUniform('vRimInfos', 2);
        ubo.addUniform('rimMatrix', 16);

        ubo.addUniform('vMatCapInfos', 2);
        ubo.addUniform('matCapMatrix', 16);

        ubo.addUniform('vOutlineColor', 3);
        ubo.addUniform('vOutlineWidthInfos', 2);
        ubo.addUniform('outlineWidthMatrix', 16);

        ubo.addUniform('vUvAnimationMaskInfos', 2);
        ubo.addUniform('uvAnimationMaskMatrix', 16);

        ubo.addUniform('vTangentSpaceParams', 2);
        ubo.addUniform('pointSize', 1);

        ubo.addUniform('shadingGradeRate', 1);
        ubo.addUniform('receiveShadowRate', 1);
        ubo.addUniform('shadeShift', 1);
        ubo.addUniform('shadeToony', 1);
        ubo.addUniform('lightColorAttenuation', 1);
        ubo.addUniform('indirectLightIntensity', 1);
        ubo.addUniform('rimLightingMix', 1);
        ubo.addUniform('rimFresnelPower', 1);
        ubo.addUniform('rimLift', 1);
        ubo.addUniform('outlineWidth', 1);
        ubo.addUniform('outlineScaledMaxDistance', 1);
        ubo.addUniform('outlineLightingMix', 1);
        ubo.addUniform('uvAnimationScrollX', 1);
        ubo.addUniform('uvAnimationScrollY', 1);
        ubo.addUniform('uvAnimationRotation', 1);

        ubo.addUniform('vEyeUp', 3);
        ubo.addUniform('alphaCutOff', 1);
        ubo.addUniform('vAmbientColor', 3);
        ubo.addUniform('aspect', 1);
        ubo.addUniform('isOutline', 1);
        ubo.addUniform('time', 4);
        ubo.addUniform('visibility', 1);

        super.buildUniformLayout();
    }

    /**
     * {@inheritdoc}
     * Binds current shader variables
     * This method is called every frame, so even if it is redundant, it prefers speed.
     */
    public bindForSubMesh(world: Matrix, mesh: Mesh, subMesh: SubMesh): void {
        const scene = this.getScene();
        const defines = subMesh.materialDefines as MToonMaterialDefines;
        const effect = subMesh.effect;
        if (!defines || !effect) {
            return;
        }
        this._activeEffect = effect;

        // Matrices Mesh.
        mesh.getMeshUniformBuffer().bindToEffect(effect, 'Mesh');
        mesh.transferToEffect(world);

        // Binding unconditionally
        this._uniformBuffer.bindToEffect(effect, 'Material');

        // this.prePassConfiguration.bindForSubMesh(this._activeEffect, scene, mesh, world, this.isFrozen);

        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventHardBindForSubMesh(this._eventInfo);

        // Normal Matrix
        if (defines.OBJECTSPACE_NORMALMAP) {
            world.toNormalMatrix(this._normalMatrix);
            this.bindOnlyNormalMatrix(this._normalMatrix);
        }

        const mustRebind = this._mustRebind(scene, effect, mesh.visibility);

        // Bones
        MaterialHelper.BindBonesParameters(mesh, effect);
        const ubo = this._uniformBuffer;
        if (mustRebind) {
            this.bindViewProjection(effect);
            if (!ubo.useUbo || !this.isFrozen || !ubo.isSync) {
                if (scene.texturesEnabled) {
                    this.bindTexture(this._diffuseTexture, ubo, effect, 'diffuse', 'vDiffuseInfos');
                    this.bindTexture(this._emissiveTexture, ubo, effect, 'emissive', 'vEmissiveInfos');
                    if (this._bumpTexture && scene.getEngine().getCaps().standardDerivatives) {
                        ubo.updateFloat3('vBumpInfos', this._bumpTexture.coordinatesIndex, 1.0 / this._bumpTexture.level, this._bumpScale);
                        MaterialHelper.BindTextureMatrix(this._bumpTexture, ubo, 'bump');
                        effect.setTexture(`bumpSampler`, this._bumpTexture);
                        // bumpTexture は babylon.js のデフォルトと反対の状態である
                        if (scene._mirroredCameraPosition) {
                            ubo.updateFloat2('vTangentSpaceParams', this._invertNormalMapX ? 1.0 : -1.0, this._invertNormalMapY ? 1.0 : -1.0);
                        } else {
                            ubo.updateFloat2('vTangentSpaceParams', this._invertNormalMapX ? -1.0 : 1.0, this._invertNormalMapY ? -1.0 : 1.0);
                        }
                    }
                    this.bindTexture(this._shadeTexture, ubo, effect, 'shade', 'vShadeInfos');
                    this.bindTexture(this._receiveShadowTexture, ubo, effect, 'receiveShadow', 'vReceiveShadowInfos');
                    this.bindTexture(this._shadingGradeTexture, ubo, effect, 'shadingGrade', 'vShadingGradeInfos');
                    this.bindTexture(this._rimTexture, ubo, effect, 'rim', 'vRimInfos');
                    this.bindTexture(this._matCapTexture, ubo, effect, 'matCap', 'vMatCapInfos');
                    this.bindTexture(this._outlineWidthTexture, ubo, effect, 'outlineWidth', 'vOutlineWidthInfos');
                    this.bindTexture(this._uvAnimationMaskTexture, ubo, effect, 'uvAnimationMask', 'vUvAnimationMaskInfos');

                    if (this._hasAlphaChannel()) {
                        ubo.updateFloat('alphaCutOff', this.alphaCutOff);
                    }
                }

                // Point size
                if (this.pointsCloud) {
                    ubo.updateFloat('pointSize', this.pointSize);
                }

                // MToon uniforms
                ubo.updateFloat('receiveShadowRate', this._receiveShadowRate);
                ubo.updateFloat('shadingGradeRate', this._shadingGradeRate);
                ubo.updateFloat('shadeShift', this._shadeShift);
                ubo.updateFloat('shadeToony', this._shadeToony);
                ubo.updateFloat('lightColorAttenuation', this._lightColorAttenuation);
                ubo.updateFloat('indirectLightIntensity', this._indirectLightIntensity);
                ubo.updateFloat('rimLightingMix', this._rimLightingMix);
                ubo.updateFloat('rimFresnelPower', this._rimFresnelPower);
                ubo.updateFloat('rimLift', this._rimLift);
                ubo.updateFloat('outlineWidth', this._outlineWidth);
                ubo.updateFloat('outlineScaledMaxDistance', this._outlineScaledMaxDistance);
                ubo.updateFloat('outlineLightingMix', this._outlineLightingMix);
                ubo.updateFloat('uvAnimationScrollX', this._uvAnimationScrollX);
                ubo.updateFloat('uvAnimationScrollY', this._uvAnimationScrollY);
                ubo.updateFloat('uvAnimationRotation', this._uvAnimationRotation);

                // Colors
                scene.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor);
                ubo.updateColor3('vAmbientColor', this._globalAmbientColor);
                ubo.updateColor4('vDiffuseColor', this.diffuseColor, this.alpha);
                ubo.updateColor3('vEmissiveColor', this.emissiveColor);
                ubo.updateColor3('vShadeColor', this.shadeColor);
                ubo.updateColor3('vRimColor', this.rimColor);
                ubo.updateColor4('vOutlineColor', this.outlineColor, 1.0);
                ubo.updateVector3('vEyeUp', scene.activeCamera!.upVector);
            }

            // OIT with depth peeling
            const anyScene = scene as any;
            if (anyScene.useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mesh) && anyScene.depthPeelingRenderer) {
                anyScene.depthPeelingRenderer.bind(effect);
            }

            this._eventInfo.subMesh = subMesh;
            this._callbackPluginEventBindForSubMesh(this._eventInfo);

            // Clip plane
            MaterialHelper.BindClipPlane(effect, scene);

            // Colors
            this.bindEyePosition(effect);
        } else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._needToBindSceneUbo = true;
        }

        if (mustRebind || !this.isFrozen) {
            // Lights
            if (scene.lightsEnabled && !this._disableLighting) {
                MaterialHelper.BindLights(scene, mesh, effect, defines, this._maxSimultaneousLights);
            }

            // View
            if ((scene.fogEnabled && mesh.applyFog && scene.fogMode !== Scene.FOGMODE_NONE) || mesh.receiveShadows) {
                this.bindView(effect);
            }

            // Fog
            MaterialHelper.BindFogParameters(scene, mesh, effect);

            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                MaterialHelper.BindMorphTargetParameters(mesh, effect);
            }

            if (defines.BAKED_VERTEX_ANIMATION_TEXTURE) {
                mesh.bakedVertexAnimationManager?.bind(effect, defines.INSTANCES);
            }

            // Log. depth
            if (this.useLogarithmicDepth) {
                MaterialHelper.BindLogDepth(defines, effect, scene);
            }

            // image processing
            if (this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess) {
                this._imageProcessingConfiguration.bind(this._activeEffect);
            }

            // MToon bindings
            ubo.updateFloat('aspect', scene.getEngine().getAspectRatio(scene.activeCamera!));
            ubo.updateFloat('isOutline', this.isOutline);

            // this variable is compatible with [Unity's _Time](https://docs.unity3d.com/Manual/SL-UnityShaderVariables.html)
            const t = window.performance.now() / 1000;
            ubo.updateVector4('time', new Vector4(t / 20, t, t * 2, t * 3));
        }

        this._afterBind(mesh, this._activeEffect);
        ubo.update();
    }

    /**
     * {@inheritdoc}
     */
    public getAnimatables(): IAnimatable[] {
        const results: IAnimatable[] = super.getAnimatables();
        for (const texture of this.appendedActiveTextures) {
            if (texture.animations && texture.animations.length > 0) {
                results.push(texture);
            }
        }

        return results;
    }

    /**
     * {@inheritdoc}
     */
    public getActiveTextures(): BaseTexture[] {
        const activeTextures = super.getActiveTextures().concat(this.appendedActiveTextures);

        return activeTextures;
    }

    /**
     * {@inheritdoc}
     */
    public hasTexture(texture: BaseTexture): boolean {
        if (super.hasTexture(texture)) {
            return true;
        }
        for (const tex of this.appendedActiveTextures) {
            if (tex === texture) {
                return true;
            }
        }
        return false;
    }

    /**
     * {@inheritdoc}
     */
    public dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void {
        delete this.outlineRenderer;
        if (forceDisposeTextures) {
            for (const texture of this.appendedActiveTextures) {
                texture.dispose();
            }
        }

        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }

        super.dispose(forceDisposeEffect, forceDisposeTextures);
    }

    /**
     * {@inheritdoc}
     */
    public clone(name: string): MToonMaterial {
        const result = SerializationHelper.Clone(() => new MToonMaterial(name, this.getScene()), this);

        result.name = name;
        result.id = name;

        this.stencil.copyTo(result.stencil);

        return result;
    }

    /**
     * {@inheritdoc}
     */
    public static Parse(source: any, scene: Scene, rootUrl: string): MToonMaterial {
        const material = SerializationHelper.Parse(() => new MToonMaterial(source.name, scene), source, scene, rootUrl);

        if (source.stencil) {
            material.stencil.parse(source.stencil, scene, rootUrl);
        }

        return material;
    }

    /**
     * 独自メソッド: テクスチャ情報をバインドする
     * @param texture
     * @param effect
     * @param name
     * @param infoName
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private bindTexture(texture: Nullable<BaseTexture>, ubo: UniformBuffer, effect: Effect, name: string, infoName: string) {
        if (!texture) {
            return;
        }
        this._uniformBuffer.updateFloat2(infoName, texture.coordinatesIndex, texture.level);
        MaterialHelper.BindTextureMatrix(texture, ubo, name);
        effect.setTexture(`${name}Sampler`, texture);
    }

    /**
     * 独自メソッド: テクスチャの用意が終わっているか確認する
     * @param texture
     * @param defines
     * @param key
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
     * 独自メソッド: 定数を設定する
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private applyDefines(defines: any): void {
        switch (this._debugMode) {
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
}
