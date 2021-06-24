uniform vec4 vEyePosition;

// Colors
uniform vec4 vDiffuseColor;
uniform vec3 vEmissiveColor;
uniform vec3 vShadeColor;
uniform vec3 vRimColor;
uniform vec4 vOutlineColor;
uniform vec3 vAmbientColor;

uniform vec3 vEyeUp;
uniform float alphaCutOff;
uniform float visibility;
uniform float isOutline;
uniform vec4 time;

// Samplers
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif

#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif

#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif

#ifdef SHADE
uniform vec2 vShadeInfos;
#endif

#ifdef RECEIVE_SHADOW
uniform vec2 vReceiveShadowInfos;
#endif

#ifdef SHADING_GRADE
uniform vec2 vShadingGradeInfos;
#endif

#ifdef RIM
uniform vec2 vRimInfos;
#endif

#ifdef MATCAP
uniform vec2 vMatCapInfos;
#endif

#ifdef OUTLINE_WIDTH
uniform vec2 vOutlineWidthInfos;
#endif

#ifdef UV_ANIMATION_MASK
uniform vec2 vUvAnimationMaskInfos;
#endif

// MToon params
uniform float shadingGradeRate;
uniform float receiveShadowRate;
uniform float shadeShift;
uniform float shadeToony;
uniform float lightColorAttenuation;
uniform float indirectLightIntensity;
uniform float rimLightingMix;
uniform float rimFresnelPower;
uniform float rimLift;
uniform float outlineWidth;
uniform float outlineScaledMaxDistance;
uniform float outlineLightingMix;
uniform float uvAnimationScrollX;
uniform float uvAnimationScrollY;
uniform float uvAnimationRotation;
