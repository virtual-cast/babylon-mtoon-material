import { Engine, StringTools, UniformBuffer } from "@babylonjs/core";
import { SerializationHelper, serialize, serializeAsColor3, expandToProperty, serializeAsTexture } from '@babylonjs/core/Misc/decorators';
import { SmartArray } from '@babylonjs/core/Misc/smartArray';
import { IAnimatable } from '@babylonjs/core/Animations/animatable.interface';

import { Nullable } from '@babylonjs/core/types';
import { Scene } from '@babylonjs/core/scene';
import { Matrix, Vector4 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { VertexBuffer } from '@babylonjs/core/Buffers/buffer';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { PrePassConfiguration } from '@babylonjs/core/Materials/prePassConfiguration';

import { Material, ICustomShaderNameResolveOptions } from '@babylonjs/core/Materials/material';
import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';
import { MaterialPluginBase } from '@babylonjs/core/Materials/materialPluginBase';
import { PushMaterial } from '@babylonjs/core/Materials/pushMaterial';
import { MaterialHelper } from '@babylonjs/core/Materials/materialHelper';

import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { RenderTargetTexture } from '@babylonjs/core/Materials/Textures/renderTargetTexture';

import { Constants } from '@babylonjs/core/Engines/constants';
import { EffectFallbacks } from '@babylonjs/core/Materials/effectFallbacks';
import { Effect, IEffectCreationOptions } from '@babylonjs/core/Materials/effect';
import { DetailMapConfiguration } from '@babylonjs/core/Materials/material.detailMapConfiguration';

const onCreatedEffectParameters = { effect: null as unknown as Effect, subMesh: null as unknown as Nullable<SubMesh> };

import { getInspectableCustomProperties } from './inspectable-custom-properties';
import { MToonOutlineRenderer } from './mtoon-outline-renderer';
import { MToonMaterialDefines } from './mtoon-material-defines';

// get shader string
const UboDeclaration = require('./shaders/ubo-declaration.vert').default;
const VertexDeclaration = require('./shaders/vertex-declaration.vert').default;
const FragmentDeclaration = require('./shaders/fragment-declaration.frag').default;
const BumpFragment = require('./shaders/bump-fragment.frag').default;
const LightFragment = require('./shaders/light-fragment.frag').default;
const VertexShader = require('./shaders/mtoon.vert').default;
const FragmentShader = require('./shaders/mtoon.frag').default;

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
 * テクスチャバインド情報
 */
interface TextureInfo {
    texture: Nullable<BaseTexture>;
    define: string;
}

interface ActiveTextureInfo {
    texture: BaseTexture;
    define: string;
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
export class MToonMaterialPlugin extends MaterialPluginBase {
//#region Properties
//#region Textures
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

    @serializeAsTexture('uvAnimationMaskTexture')
    private _uvAnimationMaskTexture: Nullable<BaseTexture> = null;
    /**
     * UV animation mask
     */
    @expandToProperty('_markAllSubMeshesAsTexturesDirty')
    public uvAnimationMaskTexture: Nullable<BaseTexture> = null;
//#endregion
//#region Colors
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
                this._material.transparencyMode = Material.MATERIAL_ALPHATESTANDBLEND;
            } else {
                this._material.transparencyMode = Material.MATERIAL_ALPHATEST;
            }
        } else {
            this._material.transparencyMode = Material.MATERIAL_OPAQUE;
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
            this._material.backFaceCulling = true;
            if (this.alphaTest) {
                this._material.transparencyMode = Material.MATERIAL_ALPHATESTANDBLEND;
            } else {
                this._material.transparencyMode = Material.MATERIAL_ALPHABLEND;
            }
        } else {
            this._material.transparencyMode = Material.MATERIAL_OPAQUE;
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    @serialize('debugMode')
    private _debugMode = DebugMode.None;
    /** @hidden */
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public debugMode: DebugMode = DebugMode.None;

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
            this.outlineRenderer = new MToonOutlineRenderer(this._material.getScene(), this);
        }
        this._markAllSubMeshesAsMiscDirty();
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
                this._material.backFaceCulling = false;
                this._material.sideOrientation = Material.ClockWiseSideOrientation;
                break;
            case CullMode.Front:
                // 表面を描画しない(=裏面だけ描画する)
                this._material.backFaceCulling = true;
                this._material.sideOrientation = Material.CounterClockWiseSideOrientation;
                break;
            case CullMode.Back:
                // 裏面を描画しない(=表面だけ描画する) デフォルト
                this._material.backFaceCulling = true;
                this._material.sideOrientation = Material.ClockWiseSideOrientation;
                break;
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    @serialize()
    private _outlineCullMode = CullMode.Front;
    @expandToProperty('_markAllSubMeshesAsMiscDirty')
    public outlineCullMode: CullMode = CullMode.Front;
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
//#endregion

    private _isEnabled = false;
    /**
     * Enable or disable the detail map on this material
     */
    @serialize()
    @expandToProperty("_markAllSubMeshesAsTexturesDirty")
    public isEnabled = false;

    /** @hidden */
    private _internalMarkAllSubMeshesAsLightsDirty: () => void;

    /** @hidden */
    public _markAllSubMeshesAsLightsDirty(): void {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsLightsDirty();
    }

    /** @hidden */
    private _internalMarkAllSubMeshesAsMiscDirty: () => void;

    /** @hidden */
    public _markAllSubMeshesAsMiscDirty(): void {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsMiscDirty();
    }

    /** @hidden */
    private _internalMarkAllSubMeshesAsAttributesDirty: () => void;

    /** @hidden */
    public _markAllSubMeshesAsAttributesDirty(): void {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsAttributesDirty();
    }

    public constructor(material: Material, defines?: { [key: string]: any }) {
        super(material, 'MToonMaterialPlugin', 500, new MToonMaterialDefines(defines), true);

        this._internalMarkAllSubMeshesAsLightsDirty = material._dirtyCallbacks[Constants.MATERIAL_LightDirtyFlag];
        this._internalMarkAllSubMeshesAsMiscDirty = material._dirtyCallbacks[Constants.MATERIAL_MiscDirtyFlag];
        this._internalMarkAllSubMeshesAsAttributesDirty = material._dirtyCallbacks[Constants.MATERIAL_AttributesDirtyFlag];

        // Register shaders to ShadersStore
        if (!Effect.IncludesShadersStore.mtoonUboDeclaration) {
            Effect.IncludesShadersStore.mtoonUboDeclaration = UboDeclaration;
            Effect.IncludesShadersStore.mtoonVertexDeclaration = VertexDeclaration;
            Effect.IncludesShadersStore.mtoonFragmentDeclaration = FragmentDeclaration;
            Effect.IncludesShadersStore.mtoonLightFragment = LightFragment;
            Effect.IncludesShadersStore.mtoonBumpFragment = BumpFragment;
            Effect.ShadersStore.mtoonVertexShader = VertexShader;
            Effect.ShadersStore.mtoonFragmentShader = FragmentShader;
        }

        // Add properties to Inspactor
        this._material.inspectableCustomProperties = this._material.inspectableCustomProperties || [];
        this._material.inspectableCustomProperties.concat(getInspectableCustomProperties());
    }

    public getClassName(): string {
        return 'MToonMaterialPlugin';
    }

    public isReadyForSubMesh(defines: MaterialDefines, scene: Scene, engine: Engine, subMesh: SubMesh): boolean {
        if (!this._isEnabled) {
            return true;
        }

        if (this.outlineWidthMode !== OutlineWidthMode.None) {
            defines._needNormals = true;
        }

        const textures = this.getTextureInfoList();

        // Textures
        if (defines._areTexturesDirty) {
            for (const t of textures) {
                if (!t.texture) {
                    continue;
                }
                if (!t.texture.isReadyOrNotBlocking()) {
                    return false;
                }
            }
        }

        return true;
    }

    public hardBindForSubMesh(uniformBuffer: UniformBuffer, scene: Scene, engine: Engine, subMesh: SubMesh): void {

    }

    public bindForSubMesh(uniformBuffer: UniformBuffer, scene: Scene, engine: Engine, subMesh: SubMesh): void {
        if (!this._isEnabled) {
            return;
        }

        if (!uniformBuffer.useUbo || !this._material.isFrozen || !uniformBuffer.isSync) {
            for (const t of this.getActiveTextureInfoList()) {
                uniformBuffer.updateFloat4(
                    `v${toPascalCase(t.define)}Infos`,
                    t.texture.coordinatesIndex,
                    0,
                    0,
                    0,
                );
                MaterialHelper.BindTextureMatrix(
                    t.texture,
                    uniformBuffer,
                    toCamelCase(t.define),
                );
            }
        }

        if (this._material.getScene().texturesEnabled) {
            for (const t of this.getActiveTextureInfoList()) {
                uniformBuffer.setTexture(`${toCamelCase(t.define)}Sampler`, t.texture);
            }
        }

        // MToon uniforms
        uniformBuffer.updateFloat('receiveShadowRate', this._receiveShadowRate);
        uniformBuffer.updateFloat('shadingGradeRate', this._shadingGradeRate);
        uniformBuffer.updateFloat('shadeShift', this._shadeShift);
        uniformBuffer.updateFloat('shadeToony', this._shadeToony);
        uniformBuffer.updateFloat('lightColorAttenuation', this._lightColorAttenuation);
        uniformBuffer.updateFloat('indirectLightIntensity', this._indirectLightIntensity);
        uniformBuffer.updateFloat('rimLightingMix', this._rimLightingMix);
        uniformBuffer.updateFloat('rimFresnelPower', this._rimFresnelPower);
        uniformBuffer.updateFloat('rimLift', this._rimLift);
        uniformBuffer.updateFloat('outlineWidth', this._outlineWidth);
        uniformBuffer.updateFloat('outlineScaledMaxDistance', this._outlineScaledMaxDistance);
        uniformBuffer.updateFloat('outlineLightingMix', this._outlineLightingMix);
        uniformBuffer.updateFloat('uvAnimationScrollX', this._uvAnimationScrollX);
        uniformBuffer.updateFloat('uvAnimationScrollY', this._uvAnimationScrollY);
        uniformBuffer.updateFloat('uvAnimationRotation', this._uvAnimationRotation);

        uniformBuffer.updateColor3('vShadeColor', this.shadeColor);
        uniformBuffer.updateColor3('vRimColor', this.rimColor);
        uniformBuffer.updateColor4('vOutlineColor', this.outlineColor, 1.0);

        uniformBuffer.updateVector3('vEyeUp', scene.activeCamera!.upVector);

        uniformBuffer.updateFloat('aspect', scene.getEngine().getAspectRatio(scene.activeCamera!));
        uniformBuffer.updateFloat('isOutline', 0.0);

        // this variable is compatible with [Unity's _Time](https://docs.unity3d.com/Manual/SL-UnityShaderVariables.html)
        const t = window.performance.now() / 1000;
        uniformBuffer.updateVector4('time', new Vector4(
            t / 20,
            t,
            t * 2,
            t * 3,
        ));
    }

    public dispose(forceDisposeTextures?: boolean): void {
        for (const t of this.getTextureInfoList()) {
            if (t.texture && forceDisposeTextures) {
                t.texture.dispose();
            }
        }
    }

    public getCustomCode(shaderType: string): Nullable<{ [pointName: string]: string; }> {

    }

    public prepareDefines(defines: MaterialDefines, scene: Scene, mesh: AbstractMesh): void {
        const d = defines as MToonMaterialDefines;
        const textures = this.getTextureInfoList();
        if (!this._isEnabled) {
            for (const t of textures) {
                d[t.define] = false;
            }
            return;
        }

        this.applyDefines(d);

        for (const t of textures) {
            if (d._areTexturesDirty) {
                if (t.texture) {
                    MaterialHelper.PrepareDefinesForMergedUV(t.texture, d, t.define);
                } else {
                    d[t.define] = false;
                }
            }
        }
    }

    public hasTexture(texture: BaseTexture): boolean {
        for (const t of this.getActiveTextureInfoList()) {
            if (t.texture === texture) {
                return true;
            }
        }
        return false;
    }

    public getActiveTextures(activeTextures: BaseTexture[]): void {
        for (const t of this.getActiveTextureInfoList()) {
            activeTextures.push(t.texture);
        }
    }

    public getAnimatables(animatables: IAnimatable[]): void {
        for (const t of this.getActiveTextureInfoList()) {
            if (t.texture.animations && t.texture.animations.length > 0) {
                animatables.push(t.texture);
            }
        }
    }

    public getSamplers(samplers: string[]): void {
        for (const t of this.getTextureInfoList()) {
            samplers.push(`${toCamelCase(t.define)}Sampler`);
        }
    }

    public getUniforms(): { ubo?: { name: string; size: number; type: string; }[] | undefined; vertex?: string | undefined; fragment?: string | undefined; } {
        return {
            ubo: [
                { name: 'vShadeColor', size: 3, type: 'vec3'},
                { name: 'vShadeInfos', size: 2, type: 'vec2'},
                { name: 'shadeMatrix', size: 16, type: 'mat4'},
                { name: 'vReceiveShadowInfos', size: 2, type: 'vec2'},
                { name: 'receiveShadowMatrix', size: 16, type: 'mat4'},
                { name: 'vShadingGradeInfos', size: 2, type: 'vec2'},
                { name: 'shadingGradeMatrix', size: 16, type: 'mat4'},
                { name: 'vRimColor', size: 3, type: 'vec3'},
                { name: 'vRimInfos', size: 2, type: 'vec2'},
                { name: 'rimMatrix', size: 16, type: 'mat4'},
                { name: 'vMatCapInfos', size: 2, type: 'vec2'},
                { name: 'matCapMatrix', size: 16, type: 'mat4'},
                { name: 'vOutlineColor', size: 3, type: 'vec3'},
                { name: 'vOutlineWidthInfos', size: 2, type: 'vec2'},
                { name: 'outlineWidthMatrix', size: 16, type: 'mat4'},
                { name: 'vUvAnimationMaskInfos', size: 2, type: 'vec2'},
                { name: 'uvAnimationMaskMatrix', size: 16, type: 'mat4'},
                { name: 'shadingGradeRate', size: 1, type: 'vec'},
                { name: 'receiveShadowRate', size: 1, type: 'vec'},
                { name: 'shadeShift', size: 1, type: 'vec'},
                { name: 'shadeToony', size: 1, type: 'vec'},
                { name: 'lightColorAttenuation', size: 1, type: 'vec'},
                { name: 'indirectLightIntensity', size: 1, type: 'vec'},
                { name: 'rimLightingMix', size: 1, type: 'vec'},
                { name: 'rimFresnelPower', size: 1, type: 'vec'},
                { name: 'rimLift', size: 1, type: 'vec'},
                { name: 'outlineWidth', size: 1, type: 'vec'},
                { name: 'outlineScaledMaxDistance', size: 1, type: 'vec'},
                { name: 'outlineLightingMix', size: 1, type: 'vec'},
                { name: 'uvAnimationScrollX', size: 1, type: 'vec'},
                { name: 'uvAnimationScrollY', size: 1, type: 'vec'},
                { name: 'uvAnimationRotation', size: 1, type: 'vec'},
                { name: 'vEyeUp', size: 3, type: 'vec3'},
                { name: 'alphaCutOff', size: 1, type: 'vec'},
                { name: 'vAmbientColor', size: 3, type: 'vec'},
                { name: 'aspect', size: 1, type: 'vec'},
                { name: 'isOutline', size: 1, type: 'vec'},
                { name: 'time', size: 4, type: 'vec4'},
                { name: 'visibility', size: 1, type: 'vec'},
            ],
        }
    }

    /**
     * 追加テクスチャ一覧
     */
    private getTextureInfoList(): TextureInfo[] {
        return [
            {
                texture: this._rimTexture,
                define: 'RIM',
            },
            {
                texture: this._shadeTexture,
                define: 'SHADE',
            },
            {
                texture: this._matCapTexture,
                define: 'MATCAP',
            },
            {
                texture: this._outlineWidthTexture,
                define: 'OUTLINE_WIDTH',
            },
            {
                texture: this._shadingGradeTexture,
                define: 'SHADING_GRADE',
            },
            {
                texture: this._receiveShadowTexture,
                define: 'RECEIVE_SHADOW',
            },
            {
                texture: this._uvAnimationMaskTexture,
                define: 'UV_ANIMATION_MASK',
            },
        ];
    }

    /**
     * アクティブな追加テクスチャ一覧
     */
    private getActiveTextureInfoList(): ActiveTextureInfo[] {
        return this.getTextureInfoList().filter((t) => !!t.texture) as ActiveTextureInfo[];
    }

    /**
     * 独自メソッド: 定数を設定する
     */
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

// @link https://stackoverflow.com/questions/4068573/convert-string-to-pascal-case-aka-uppercamelcase-in-javascript
function toPascalCase(string: string): string {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w*)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase());
}

function toCamelCase(string: string): string {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w*)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        );
}
