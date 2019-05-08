#include<__decl__mtoonFragment>

#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif

#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif

// Constants
#define RECIPROCAL_PI2 0.15915494

uniform vec3 vEyePosition;
uniform vec3 vEyeUp;
uniform vec3 vAmbientColor;

// Input
varying vec3 vPositionW;

#ifdef NORMAL
varying vec3 vNormalW;
#endif

#ifdef MAINUV1
    varying vec2 vMainUV1;
#endif

#ifdef MAINUV2
    varying vec2 vMainUV2;
#endif

// Helper functions
#include<helperFunctions>

// Lights
#include<__decl__lightFragment>[0..maxSimultaneousLights]

#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>

// Samplers
#ifdef DIFFUSE
    #if DIFFUSEDIRECTUV == 1
        #define vDiffuseUV vMainUV1
    #elif DIFFUSEDIRECTUV == 2
        #define vDiffuseUV vMainUV2
    #else
        varying vec2 vDiffuseUV;
    #endif
    uniform sampler2D diffuseSampler;
#endif

#ifdef EMISSIVE
    #if EMISSIVEDIRECTUV == 1
        #define vEmissiveUV vMainUV1
    #elif EMISSIVEDIRECTUV == 2
        #define vEmissiveUV vMainUV2
    #else
        varying vec2 vEmissiveUV;
    #endif
    uniform sampler2D emissiveSampler;
#endif

#ifdef ALPHATEST
     uniform float alphaCutOff;
#endif

#ifdef SHADE
    uniform sampler2D shadeSampler;
    #if SHADEDIRECTUV == 1
        #define vShadeUV vMainUV1
    #elif SHADEDIRECTUV == 2
        #define vShadeUV vMainUV2
    #else
        varying vec2 vShadeUV;
    #endif
#endif
#ifdef RECEIVE_SHADOW
    uniform sampler2D receiveShadowSampler;
    #if RECEIVE_SHADOWDIRECTUV == 1
        #define vReceiveShadowUV vMainUV1
    #elif RECEIVE_SHADOWDIRECTUV == 2
        #define vReceiveShadowUV vMainUV2
    #else
        varying vec2 vReceiveShadowUV;
    #endif
#endif
#ifdef SHADING_GRADE
    uniform sampler2D shadingGradeSampler;
    #if SHADING_GRADEDIRECTUV == 1
        #define vShadingGradeUV vMainUV1
    #elif SHADING_GRADEDIRECTUV == 2
        #define vShadingGradeUV vMainUV2
    #else
        varying vec2 vShadingGradeUV;
    #endif
#endif
#ifdef MATCAP
    uniform sampler2D matCapSampler;
    #if MATCAPDIRECTUV == 1
        #define vMatCapUV vMainUV1
    #elif MATCAPDIRECTUV == 2
        #define vMatCapUV vMainUV2
    #else
        varying vec2 vMatCapUV;
    #endif
#endif
#ifdef OUTLINE_WIDTH
    uniform sampler2D outlineWidthSampler;
    #if OUTLINE_WIDTHDIRECTUV == 1
        #define vOutlineWidthUV vMainUV1
    #elif OUTLINE_WIDTHDIRECTUV == 2
        #define vOutlineWidthUV vMainUV2
    #else
        varying vec2 vOutlineWidthUV;
    #endif
#endif

/**
* DirectionLight, PointLight の角度を計算
*/
vec3 computeLightDirection(vec4 lightData) {
      return normalize(mix(lightData.xyz - vPositionW, -lightData.xyz, lightData.w));
}

/**
* SpotLight の角度を計算
*/
vec3 computeSpotLightDirection(vec4 lightData) {
     return normalize(lightData.xyz - vPositionW);
}

/**
* HemisphericLight の角度を計算
*/
vec3 computeHemisphericLightDirection(vec4 lightData, vec3 vNormal) {
     return normalize(-lightData.xyz);
}

/**
* MToon シェーダーの陰実装
*/
vec4 computeMToonDiffuseLighting(vec3 worldView, vec3 worldNormal, vec2 uvOffset, vec3 lightDirection, vec4 lightDiffuse, float shadow) {
    float _receiveShadow = receiveShadowRate;
#ifdef RECEIVE_SHADOW
    _receiveShadow = _receiveShadow * texture2D(receiveShadowSampler, vReceiveShadowUV + uvOffset).a;
#endif

    float _shadingGrade = shadingGradeRate;
#ifdef SHADING_GRADE
    _shadingGrade = _shadingGrade * (1.0 - texture2D(shadingGradeSampler, vShadingGradeUV + uvOffset).r);
#endif

    // lighting intensity
    float _lightIntensity = dot(lightDirection, worldNormal);
    _lightIntensity = _lightIntensity * 0.5 + 0.5; // from [-1, +1] to [0, 1]
    _lightIntensity = _lightIntensity * (_receiveShadow * shadow); // receive shadow
    _lightIntensity = _lightIntensity * _shadingGrade; // darker
    _lightIntensity = _lightIntensity * 2.0 - 1.0; // from [0, 1] to [-1, +1]
    _lightIntensity = smoothstep(shadeShift, shadeShift + (1.0 - shadeToony), _lightIntensity); // shade & tooned

    // lighting with color
    vec3 _directLighting = lightDiffuse.rgb; // direct
    vec3 _lighting = _directLighting;
    _lighting = mix(_lighting, vec3(max(0.001, max(_lighting.x, max(_lighting.y, _lighting.z)))), lightColorAttenuation);

    // GI
    vec3 _indirectLighting = indirectLightIntensity * vAmbientColor.rgb;
    _indirectLighting = mix(_indirectLighting, vec3(max(0.001, max(_indirectLighting.x, max(_indirectLighting.y, _indirectLighting.z)))), lightColorAttenuation);

    // color lerp
    vec3 _shade = vShadeColor;
#ifdef SHADE
    _shade = _shade * texture2D(shadeSampler, vShadeUV + uvOffset).rgb;
#endif

    vec4 _lit = vDiffuseColor;
#ifdef DIFFUSE
    _lit = _lit * texture2D(diffuseSampler, vDiffuseUV + uvOffset);
#endif

    vec3 _result = mix(_shade.rgb, _lit.rgb, _lightIntensity);
    _result = _result * _lighting + _indirectLighting * _lit.rgb;

    // additive matcap
#ifdef MTOON_FORWARD_ADD
#else
#ifdef MATCAP
    vec3 _worldViewUp = normalize(vEyeUp - worldView * dot(worldView, vEyeUp));
    vec3 _worldViewRight = normalize(cross(worldView, _worldViewUp));
    vec2 _matCapUv = vec2(dot(_worldViewRight, worldNormal), dot(_worldViewUp, worldNormal)) * 0.5 + 0.5;
    _matCapUv.y = (1.0 - _matCapUv.y);
    vec3 _matCapLighting = texture2D(matCapSampler, _matCapUv + uvOffset).rgb;
    _result += _matCapLighting;
#endif
#endif

    // TODO outline

    // debug
#ifdef MTOON_DEBUG_NORMAL
    #ifdef MTOON_FORWARD_ADD
        return vec4(0.0);
    #else
        return vec4(worldNormal * 0.5 + 0.5, _lit.a);
    #endif
#elif defined(MTOON_DEBUG_LITSHADERATE)
    #ifdef MTOON_FORWARD_ADD
        return vec4(0.0);
    #else
        return vec4(_lightIntensity * _lighting, _lit.a);
    #endif
#endif

    return vec4(_result, _lit.a);
}

#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>

void main(void) {
#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE
    #ifdef MTOON_OUTLINE_WIDTH_WORLD
    #elif MTOON_OUTLINE_WIDTH_SCREEN
    #else
        discard;
    #endif
#endif

#include<clipPlaneFragment>

    vec3 viewDirectionW = normalize(vEyePosition - vPositionW);

    // Base color
    vec4 baseColor = vec4(1., 1., 1., 1.);
    vec3 diffuseColor = vDiffuseColor.rgb;


#ifdef DIFFUSE
    baseColor.rgb *= vDiffuseInfos.y;
#endif

    // Alpha
    float alpha = 1.0;

    // Bump
#ifdef NORMAL
     vec3 normalW = normalize(vNormalW);
#else
     vec3 normalW = normalize(-cross(dFdx(vPositionW), dFdy(vPositionW)));
#endif

#include<bumpFragment>

#ifdef TWOSIDEDLIGHTING
     normalW = gl_FrontFacing ? normalW : -normalW;
#endif

#include<depthPrePass>

    // Ambient color
    vec3 baseAmbientColor = vec3(1., 1., 1.);
    float glossiness = 0.;

    // Lighting
    vec3 diffuseBase = vec3(0., 0., 0.);
    lightingInfo info;
    float shadow = 1.;
    vec3 lightDirection = vec3(0.0, 1.0, 0.0);
    vec4 mtoonDiffuse = vec4(0.0, 0.0, 0.0, 1.0);

// 通常の lightFragment ではなく、自前実装の mtoonLightFragment を読み込む
#include<mtoonLightFragment>[0..maxSimultaneousLights]

    // Emissive
    vec3 emissiveColor = vEmissiveColor.rgb;
#ifdef EMISSIVE
     emissiveColor *= texture2D(emissiveSampler, vEmissiveUV + uvOffset).rgb * vEmissiveInfos.y;
#endif

    vec3 finalDiffuse = clamp(diffuseBase + emissiveColor, 0.0, 1.0) * baseColor.rgb;

    // Composition
    vec4 color = vec4(finalDiffuse, alpha);

    color.rgb = max(color.rgb, 0.);
#include<logDepthFragment>
#include<fogFragment>

     color.a *= visibility;

#ifdef PREMULTIPLYALPHA
    // Convert to associative (premultiplied) format if needed.
    color.rgb *= color.a;
#endif

     gl_FragColor = color;
}
