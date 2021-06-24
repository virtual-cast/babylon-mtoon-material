#include<__decl__mtoonFragment>

#if defined(BUMP) || !defined(NORMAL) || (defined(ALPHATEST) && ALPHATEST)
#extension GL_OES_standard_derivatives : enable
#endif

#include<prePassDeclaration>[SCENE_MRT_COUNT]

#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif

// Constants
#define RECIPROCAL_PI2 0.15915494
#define PI_2 6.28318530718
#define EPS_COL 0.00001

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
#ifdef RIM
    uniform sampler2D rimSampler;
    #if RIMDIRECTUV == 1
        #define vRimUV vMainUV1
    #elif RIMDIRECTUV == 2
        #define vRimUV vMainUV2
    #else
        varying vec2 vRimUV;
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
#ifdef UV_ANIMATION_MASK
    uniform sampler2D uvAnimationMaskSampler;
    #if UV_ANIMATION_MASKDIRECTUV == 1
        #define vUvAnimationMaskUV vMainUV1
    #elif UV_ANIMATION_MASKDIRECTUV == 2
        #define vUvAnimationMaskUV vMainUV2
    #else
        varying vec2 vUvAnimationMaskUV;
    #endif
#endif

/**
* DirectionalLight, PointLight の角度を計算
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
     return normalize(lightData.xyz);
}

/**
* MToon シェーダーの陰実装
*/
vec4 computeMToonDiffuseLighting(vec3 worldView, vec3 worldNormal, vec2 mainUv, vec3 lightDirection, vec4 lightDiffuse, float shadowAttenuation) {
    float _receiveShadow = receiveShadowRate;
#ifdef RECEIVE_SHADOW
    _receiveShadow = _receiveShadow * texture2D(receiveShadowSampler, mainUv).r * vReceiveShadowInfos.y;
#endif

    float _shadingGrade = 0.0;
#ifdef SHADING_GRADE
    _shadingGrade = 1.0 - texture2D(shadingGradeSampler, mainUv).r * vShadingGradeInfos.y;
#endif
    _shadingGrade = 1.0 - shadingGradeRate * _shadingGrade;

    // Lighting
    vec3 _lightColor = lightDiffuse.rgb * step(0.5, length(lightDirection)); // length(lightDir) is zero if directional light is disabled.
    float _dotNL = dot(lightDirection, worldNormal);
#ifdef MTOON_FORWARD_ADD
    float _lightAttenuation = 1.0;
#else
    float _lightAttenuation = shadowAttenuation * mix(1.0, shadowAttenuation, _receiveShadow);
#endif

    // lighting intensity
    float _lightIntensity = _dotNL;
    _lightIntensity = _lightIntensity * 0.5 + 0.5; // from [-1, +1] to [0, 1]
    _lightIntensity = _lightIntensity * _lightAttenuation; // receive shadow
    _lightIntensity = _lightIntensity * _shadingGrade; // darker
    _lightIntensity = _lightIntensity * 2.0 - 1.0; // from [0, 1] to [-1, +1]
    // tooned. mapping from [minIntensityThreshold, maxIntensityThreshold] to [0, 1]
    float _maxIntensityThreshold = mix(1.0, shadeShift, shadeToony);
    float _minIntensityThreshold = shadeShift;
    _lightIntensity = clamp((_lightIntensity - _minIntensityThreshold) / max(EPS_COL, (_maxIntensityThreshold - _minIntensityThreshold)), 0.0, 1.0);

    // Albedo color
    vec3 _shade = vShadeColor;
#ifdef SHADE
    _shade = _shade * texture2D(shadeSampler, mainUv).rgb * vShadeInfos.y;
#endif

    vec4 _lit = vDiffuseColor;
#ifdef DIFFUSE
    _lit = _lit * texture2D(diffuseSampler, mainUv) * vDiffuseInfos.y;
#endif
    vec3 _col = mix(_shade.rgb, _lit.rgb, _lightIntensity);

    // Direct Light
    vec3 _lighting = _lightColor;
    _lighting = mix(_lighting, vec3(max(EPS_COL, max(_lighting.x, max(_lighting.y, _lighting.z)))), lightColorAttenuation); // color atten
#ifdef MTOON_FORWARD_ADD
    _lighting *= 0.5; // darken if additional light
    _lighting *= min(0, dotNL) + 1.0; // darken dotNL < 0 area by using half lambert
    _lighting *= shadowAttenuation; // darken if receiving shadow
#else
    // base light does not darken.
#endif
    _col *= _lighting;

    // Indirect Light
#ifdef MTOON_FORWARD_ADD
#else
    vec3 _toonedGI = vAmbientColor.rgb; // TODO: GI
    vec3 _indirectLighting = mix(_toonedGI, vAmbientColor.rgb, indirectLightIntensity);
    _indirectLighting = mix(_indirectLighting, vec3(max(EPS_COL, max(_indirectLighting.x, max(_indirectLighting.y, _indirectLighting.z)))), lightColorAttenuation); // color atten
    _col += _indirectLighting * _lit.rgb;

    _col = min(_col.rgb, _lit.rgb); // comment out if you want to PBR absolutely.
#endif

    // parametric rim lighting
#ifdef MTOON_FORWARD_ADD
    vec3 _staticRimLighting = vec3(0.0);
    vec3 _mixedRimLighting = _lighting;
#else
    vec3 _staticRimLighting = vec3(1.0);
    vec3 _mixedRimLighting = _lighting + _indirectLighting;
#endif
    vec3 _rimLighting = mix(_staticRimLighting, _mixedRimLighting, rimLightingMix);
    vec3 _rimColor = vRimColor.rgb;
#ifdef RIM
    _rimColor = _rimColor * texture2D(rimSampler, vRimUV + mainUv).rgb * vRimInfos.y;
#endif
    vec3 _rim = pow(clamp(1.0 - dot(worldNormal, worldView) + rimLift, 0.0, 1.0), rimFresnelPower) * _rimColor.rgb;
    _col += mix(_rim * _rimLighting, vec3(0.0), isOutline);

    // additive matcap
#ifdef MTOON_FORWARD_ADD
#else
#ifdef MATCAP
    vec3 _worldViewUp = normalize(vEyeUp - worldView * dot(worldView, vEyeUp));
    vec3 _worldViewRight = normalize(cross(worldView, _worldViewUp));
    vec2 _matCapUv = vec2(dot(_worldViewRight, worldNormal), dot(_worldViewUp, worldNormal)) * 0.5 + 0.5;
    // uv.y is reversed
    _matCapUv.y = (1.0 - _matCapUv.y);
    vec3 _matCapLighting = texture2D(matCapSampler, _matCapUv).rgb * vMatCapInfos.y;
    _col += mix(_matCapLighting, vec3(0.0), isOutline);
#endif
#endif

    // Emission
#ifdef MTOON_FORWARD_ADD
#else
    vec3 _emission = vEmissiveColor.rgb;
#ifdef EMISSIVE
     _emission *= texture2D(emissiveSampler, mainUv).rgb * vEmissiveInfos.y;
#endif
     _col += mix(_emission, vec3(0.0), isOutline);
#endif

    float _alpha = 1.0;

#if defined(ALPHABLEND) || defined(ALPHATEST)
    _alpha = mix(_lit.a, _lit.a * vOutlineColor.a, isOutline);
#endif

    // outline
#ifdef MTOON_OUTLINE_COLOR_FIXED
    _col = mix(_col, vOutlineColor.rgb, isOutline);
#elif defined(MTOON_OUTLINE_COLOR_MIXED)
    _col = mix(_col, vOutlineColor.rgb * mix(vec3(1.0), _col, outlineLightingMix), isOutline);
#else
#endif

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
        return vec4(_lightIntensity, _lit.a);
    #endif
#endif

    return vec4(_col, _alpha);
}

#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>

void main(void) {
#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE
    #ifdef MTOON_OUTLINE_WIDTH_WORLD
    #elif defined(MTOON_OUTLINE_WIDTH_SCREEN)
    #else
        discard;
    #endif
#endif

#include<clipPlaneFragment>

    vec3 viewDirectionW = normalize(vEyePosition.xyz - vPositionW);

    // Base color
    vec4 baseColor = vec4(1., 1., 1., 1.);
    vec3 diffuseColor = vec3(1., 1., 1.);

    // Alpha
    float alpha = 1.0;

    // Bump
#ifdef NORMAL
     vec3 normalW = normalize(vNormalW);
#else
     vec3 normalW = normalize(-cross(dFdx(vPositionW), dFdy(vPositionW)));
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

    // MToon UV
    // 全てのテクスチャは diffuse(_MainTex) の UV 情報を利用する
    vec2 mainUv = vec2(0.0);
#ifdef DIFFUSE
    mainUv += vDiffuseUV;
#elif defined(MAINUV1)
    mainUv += vMainUV1;
#elif defined(MAINUV2)
    mainUv += vMainUV2;
#endif

    // uv anim
    float uvAnim = time.y;
#ifdef UV_ANIMATION_MASK
    uvAnim *= texture2D(uvAnimationMaskSampler, mainUv).r;
#endif
    // translate uv in bottom-left origin coordinates.
    // uv is reversed
    mainUv += vec2(-uvAnimationScrollX, -uvAnimationScrollY) * uvAnim;
    // rotate uv counter-clockwise around (0.5, 0.5) in bottom-left origin coordinates.
    float rotateRad = uvAnimationRotation * PI_2 * uvAnim;
    vec2 rotatePivot = vec2(0.5, 0.5);
    mainUv = mat2(cos(rotateRad), -sin(rotateRad), sin(rotateRad), cos(rotateRad)) * (mainUv - rotatePivot) + rotatePivot;

#include<mtoonBumpFragment>

#ifdef TWOSIDEDLIGHTING
    normalW = gl_FrontFacing ? normalW : -normalW;
#endif

// 通常の lightFragment ではなく、自前実装の mtoonLightFragment を読み込む
#include<mtoonLightFragment>[0..maxSimultaneousLights]

    vec3 finalDiffuse = clamp(diffuseBase, 0.0, 1.0) * baseColor.rgb;

    // Composition
    vec4 color = vec4(finalDiffuse, clamp(alpha, 0.0, 1.0));

    color.rgb = max(color.rgb, 0.);
#include<logDepthFragment>
#include<fogFragment>

    color.a *= visibility;

#ifdef PREMULTIPLYALPHA
    // Convert to associative (premultiplied) format if needed.
    color.rgb *= color.a;
#endif

#ifdef PREPASS
    float writeGeometryInfo = color.a > 0.4 ? 1.0 : 0.0;

    gl_FragData[0] = color; // We can't split irradiance on std material

    #ifdef PREPASS_POSITION
    gl_FragData[PREPASS_POSITION_INDEX] = vec4(vPositionW, writeGeometryInfo);
    #endif

    #ifdef PREPASS_VELOCITY
    vec2 a = (vCurrentPosition.xy / vCurrentPosition.w) * 0.5 + 0.5;
    vec2 b = (vPreviousPosition.xy / vPreviousPosition.w) * 0.5 + 0.5;

    vec2 velocity = abs(a - b);
    velocity = vec2(pow(velocity.x, 1.0 / 3.0), pow(velocity.y, 1.0 / 3.0)) * sign(a - b) * 0.5 + 0.5;

    gl_FragData[PREPASS_VELOCITY_INDEX] = vec4(velocity, 0.0, writeGeometryInfo);
    #endif

    #ifdef PREPASS_IRRADIANCE
        gl_FragData[PREPASS_IRRADIANCE_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); //  We can't split irradiance on std material
    #endif

    #ifdef PREPASS_DEPTH
        gl_FragData[PREPASS_DEPTH_INDEX] = vec4(vViewPos.z, 0.0, 0.0, writeGeometryInfo); // Linear depth
    #endif

    #ifdef PREPASS_NORMAL
        gl_FragData[PREPASS_NORMAL_INDEX] = vec4((view * vec4(normalW, 0.0)).rgb, writeGeometryInfo); // Normal
    #endif

    #ifdef PREPASS_ALBEDO
        gl_FragData[PREPASS_ALBEDO_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); // We can't split albedo on std material
    #endif
    #ifdef PREPASS_REFLECTIVITY
        #if defined(SPECULAR)
            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(specularMapColor.rgb, writeGeometryInfo);
        #else
            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo);
        #endif
    #endif
#endif

#if !defined(PREPASS) || defined(WEBGL2)
    gl_FragColor = color;
#endif
}
