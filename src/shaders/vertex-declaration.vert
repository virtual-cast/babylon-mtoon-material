// Uniforms
uniform mat4 viewProjection;
uniform mat4 view;
uniform float outlineWidth;
uniform float outlineScaledMaxDistance;
uniform float outlineLightingMix;
uniform float isOutline;

#ifdef DIFFUSE
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif

#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif

#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif

#ifdef SHADE
uniform vec2 vShadeInfos;
uniform mat4 shadeMatrix;
#endif

#ifdef RECEIVE_SHADOW
uniform vec2 vReceiveShadowInfos;
uniform mat4 receiveShadowMatrix;
#endif

#ifdef SHADING_GRADE
uniform vec2 vShadingGradeInfos;
uniform mat4 shadingGradeMatrix;
#endif

#ifdef RIM
uniform vec2 vRimInfos;
uniform mat4 rimMatrix;
#endif

#ifdef MATCAP
uniform vec2 vMatCapInfos;
uniform mat4 matCapMatrix;
#endif

#ifdef OUTLINE_WIDTH
uniform vec2 vOutlineWidthInfos;
uniform mat4 outlineWidthMatrix;
#endif

#ifdef UV_ANIMATION_MASK
uniform vec2 vUvAnimationMaskInfos;
uniform mat4 uvAnimationMaskMatrix;
#endif

#ifdef POINTSIZE
uniform float pointSize;
#endif
