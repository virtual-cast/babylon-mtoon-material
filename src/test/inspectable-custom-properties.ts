import { InspectableType } from '@babylonjs/core/Misc/iInspectable';
import { MToonMaterial } from '../index';

/**
 * MToonMaterial に Inspector 上で調整可能なパラメータを設定する
 * @param material
 * @link https://doc.babylonjs.com/how_to/debug_layer#extensibility
 */
export function addInspectableCustomProperties(material: MToonMaterial) {
    material.inspectableCustomProperties = [
        {
            label: 'DiffuseColor',
            propertyName: 'diffuseColor',
            type: InspectableType.Color3,
        },
        {
            label: 'AmbientColor',
            propertyName: 'ambientColor',
            type: InspectableType.Color3,
        },
        {
            label: 'EmissiveColor',
            propertyName: 'emissiveColor',
            type: InspectableType.Color3,
        },
        {
            label: 'ShadeColor',
            propertyName: 'shadeColor',
            type: InspectableType.Color3,
        },
        {
            label: 'OutlineColor',
            propertyName: 'outlineColor',
            type: InspectableType.Color3,
        },
        {
            label: 'ReceiveShadowRate',
            propertyName: 'receiveShadowRate',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadingGradeRate',
            propertyName: 'shadingGradeRate',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadeShift',
            propertyName: 'shadeShift',
            type: InspectableType.Slider,
            min: -1,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadeToony',
            propertyName: 'shadeToony',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'LightColorAttenuation',
            propertyName: 'lightColorAttenuation',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'IndirectLightIntensity',
            propertyName: 'indirectLightIntensity',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'OutlineWidth',
            propertyName: 'outlineWidth',
            type: InspectableType.Slider,
            min: 0.01,
            max: 1,
            step: 0.01,
        },
        {
            label: 'OutlineScaledMaxDistance',
            propertyName: 'outlineScaledMaxDistance',
            type: InspectableType.Slider,
            min: 1.0,
            max: 10.0,
            step: 0.01,
        },
        {
            label: 'OutlineLightingMix',
            propertyName: 'outlineLightingMix',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'DebugMode',
            propertyName: 'debugMode',
            type: InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineWidthMode',
            propertyName: 'outlineWidthMode',
            type: InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineColorMode',
            propertyName: 'outlineColorMode',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 1,
        },
        {
            label: 'CullMode',
            propertyName: 'cullMode',
            type: InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineCullMode',
            propertyName: 'outlineCullMode',
            type: InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'AlphaCutOff',
            propertyName: 'alphaCutOff',
            type: InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
    ];
}
