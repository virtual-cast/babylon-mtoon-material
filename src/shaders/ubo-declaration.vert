// include<__decl__mtoonVertex> または include<__decl__mtoonFragment> と書いた時に展開される
// @see effect.ts

layout(std140, column_major) uniform;

uniform Material
{
    vec4 vDiffuseColor;
    vec2 vDiffuseInfos;
    mat4 diffuseMatrix;
    vec4 vEmissiveColor;
    vec2 vEmissiveInfos;
    mat4 emissiveMatrix;
    vec3 vBumpInfos;
    mat4 bumpMatrix;
    vec3 vShadeColor;
    vec2 vShadeInfos;
    mat4 shadeMatrix;
    vec2 vReceiveShadowInfos;
    mat4 receiveShadowMatrix;
    vec2 vShadingGradeInfos;
    mat4 shadingGradeMatrix;
    vec3 vRimColor;
    vec2 vRimInfos;
    mat4 rimMatrix;
    vec2 vMatCapInfos;
    mat4 matCapMatrix;
    vec4 vOutlineColor;
    vec2 vOutlineWidthInfos;
    mat4 outlineWidthMatrix;
    vec2 vUvOffsetNormalInfos;
    mat4 uvOffsetNormalMatrix;
    vec2 vUvAnimationMaskInfos;
    mat4 uvAnimationMaskMatrix;
    vec2 vTangentSpaceParams;
    float pointSize;
    float visibility;
    float shadingGradeRate;
    float receiveShadowRate;
    float shadeShift;
    float shadeToony;
    float lightColorAttenuation;
    float indirectLightIntensity;
    float rimLightingMix;
    float rimFresnelPower;
    float rimLift;
    float outlineWidth;
    float outlineScaledMaxDistance;
    float outlineLightingMix;
    float uvOffsetNormalScale;
    float uvAnimationScrollX;
    float uvAnimationScrollY;
    float uvAnimationRotation;
};

uniform Scene {
    mat4 viewProjection;
#ifdef MULTIVIEW
    mat4 viewProjectionR;
#endif
    mat4 view;
};
