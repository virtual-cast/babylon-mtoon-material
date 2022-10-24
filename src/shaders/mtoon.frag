#include<__decl__mtoonFragment>

#extension GL_OES_standard_derivatives : enable

#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>

#define CUSTOM_FRAGMENT_BEGIN

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

#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)
varying vec4 vColor;
#endif

#include<mainUVVaryingDeclaration>[1..7]

// Helper functions
#include<helperFunctions>

// Lights
#include<__decl__lightFragment>[0..maxSimultaneousLights]

#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>

// Samplers
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade,_SAMPLERNAME_,shade)
#include<samplerFragmentDeclaration>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow,_SAMPLERNAME_,receiveShadow)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade,_SAMPLERNAME_,shadingGrade)
#include<samplerFragmentDeclaration>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim,_SAMPLERNAME_,rim)
#include<samplerFragmentDeclaration>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap,_SAMPLERNAME_,matCap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OUTLINE_WIDTH,_VARYINGNAME_,OutlineWidth,_SAMPLERNAME_,outlineWidth)
#include<samplerFragmentDeclaration>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask,_SAMPLERNAME_,uvAnimationMask)

#include<mtoonFragmentFunctions>

// # ifdef REFRACTION

// # ifdef REFRACTIONMAP_3D
// uniform samplerCube refractionCubeSampler;
// # else
// uniform sampler2D refraction2DSampler;
// # endif

// # endif

// # if defined(SPECULARTERM)
//     # include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
// # endif

// // Fresnel
// # include<fresnelFunction>

// // Reflection
// # ifdef REFLECTION
// # ifdef REFLECTIONMAP_3D
// uniform samplerCube reflectionCubeSampler;
// # else
// uniform sampler2D reflection2DSampler;
// # endif

// # ifdef REFLECTIONMAP_SKYBOX
// varying vec3 vPositionUVW;
// # else
// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
// varying vec3 vDirectionW;
// # endif

// # endif

// # include<reflectionFunction>

// # endif

#include<imageProcessingDeclaration>

#include<imageProcessingFunctions>

#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>

#define CUSTOM_FRAGMENT_DEFINITIONS

void main(void) {
#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE
    #ifdef MTOON_OUTLINE_WIDTH_WORLD
    #elif defined(MTOON_OUTLINE_WIDTH_SCREEN)
    #else
        discard;
    #endif
#endif

#define CUSTOM_FRAGMENT_MAIN_BEGIN

#include<oitFragment>

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
    // All textures will use diffuse(_MainTex) UV
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

#ifdef FLIP_U
    mainUv.x = 1.0 - mainUv.x;
#endif
#ifdef FLIP_V
    mainUv.y = 1.0 - mainUv.y;
#endif

#include<mtoonBumpFragment>

#ifdef TWOSIDEDLIGHTING
    normalW = gl_FrontFacing ? normalW : -normalW;
#endif

// include customized lightFragment
#include<mtoonLightFragment>[0..maxSimultaneousLights]

    vec3 finalDiffuse = clamp(diffuseBase, 0.0, 1.0) * baseColor.rgb;

    // Composition
    vec4 color = vec4(finalDiffuse, clamp(alpha, 0.0, 1.0));

    color.rgb = max(color.rgb, 0.);
#include<logDepthFragment>
#include<fogFragment>

// Apply image processing if relevant. As this applies in linear space,
// We first move from gamma to linear.
#ifdef IMAGEPROCESSINGPOSTPROCESS
    color.rgb = toLinearSpace(color.rgb);
#else
    #ifdef IMAGEPROCESSING
        // FIXME: support image processing
        // color.rgb = toLinearSpace(color.rgb);
        // color = applyImageProcessing(color);
    #endif
#endif

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

    #ifdef PREPASS_ALBEDO_SQRT
        gl_FragData[PREPASS_ALBEDO_SQRT_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); // We can't split albedo on std material
    #endif
    #ifdef PREPASS_REFLECTIVITY
        #if defined(SPECULAR)
            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(specularMapColor.rgb, specularMapColor.a * writeGeometryInfo);
        #else
            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo);
        #endif
    #endif
#endif

#if !defined(PREPASS) || defined(WEBGL2)
    gl_FragColor = color;
#endif

#if ORDER_INDEPENDENT_TRANSPARENCY
    if (fragDepth == nearestDepth) {
        frontColor.rgb += color.rgb * color.a * alphaMultiplier;
        frontColor.a = 1.0 - alphaMultiplier * (1.0 - color.a);
    } else {
        backColor += color;
    }
#endif

#define CUSTOM_FRAGMENT_MAIN_END

}
