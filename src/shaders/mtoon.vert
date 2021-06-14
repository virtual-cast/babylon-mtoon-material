// この include は特別で、 UboDeclaration または VertexDeclaration のどちらかに置換される
// @see effect.ts
#include<__decl__mtoonVertex>

// 基本的に default.vertex.fx を踏襲している

// Attributes

attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif

#include<helperFunctions>

#include<bonesDeclaration>

// Uniforms
#include<instancesDeclaration>
#include<prePassVertexDeclaration>

#ifdef MAINUV1
varying vec2 vMainUV1;
#endif

#ifdef MAINUV2
varying vec2 vMainUV2;
#endif

#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0
varying vec2 vDiffuseUV;
#endif

#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0
varying vec2 vEmissiveUV;
#endif

#if defined(BUMP) && BUMPDIRECTUV == 0
varying vec2 vBumpUV;
#endif

// Output
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif

#include<bumpVertexDeclaration>

#include<clipPlaneVertexDeclaration>

#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]

#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]

#include<logDepthDeclaration>


// Additional Uniforms
#if defined(SHADE) && SHADEDIRECTUV == 0
    varying vec2 vShadeUV;
#endif
#if defined(RECEIVE_SHADOW) && RECEIVE_SHADOWDIRECTUV == 0
    varying vec2 vReceiveShadowUV;
#endif
#if defined(SHADING_GRADE) && SHADING_GRADEDIRECTUV == 0
    varying vec2 vShadingGradeUV;
#endif
#if defined(RIM) && RIMDIRECTUV == 0
    varying vec2 vRimUV;
#endif
#if defined(MATCAP) && MATCAPDIRECTUV == 0
    varying vec2 vMatCapUV;
#endif
#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0
    varying vec2 vOutlineWidthUV;
#endif
#ifdef OUTLINE_WIDTH
    uniform sampler2D outlineWidthSampler;
#endif
#if defined(UV_ANIMATION_MASK) && UV_ANIMATION_MASKDIRECTUV == 0
    varying vec2 vUvAnimationMaskUV;
#endif

void main(void) {

    vec3 positionUpdated = position;
#ifdef NORMAL
    vec3 normalUpdated = normal;
#endif
#ifdef TANGENT
    vec4 tangentUpdated = tangent;
#endif

#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]

#include<instancesVertex>

#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
    // Compute velocity before bones computation
    vCurrentPosition = viewProjection * finalWorld * vec4(positionUpdated, 1.0);
    vPreviousPosition = previousViewProjection * finalPreviousWorld * vec4(positionUpdated, 1.0);
#endif

#include<bonesVertex>

    // Texture coordinates
#ifndef UV1
    vec2 uv = vec2(0., 0.);
#endif
#ifndef UV2
    vec2 uv2 = vec2(0., 0.);
#endif

#ifdef MAINUV1
    vMainUV1 = uv;
#endif

#ifdef MAINUV2
    vMainUV2 = uv2;
#endif

    float outlineTex = 1.0;
    if (isOutline == 1.0) {
#ifdef OUTLINE_WIDTH
    #if OUTLINE_WIDTHDIRECTUV == 0
        if (vOutlineWidthInfos.x == 0.) {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv, 1.0, 0.0));
        } else {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));
        }
    #elif defined(MAINUV1)
        vec2 vOutlineWidthUV = vMainUV1;
    #elif defined(MAINUV2)
        vec2 vOutlineWidthUV = vMainUV2;
    #else
        vec2 vOutlineWidthUV = vec2(0., 0.);
    #endif
    outlineTex = texture2D(outlineWidthSampler, vOutlineWidthUV).r * vOutlineWidthInfos.y;
#endif

#if defined(MTOON_OUTLINE_WIDTH_WORLD) && defined(NORMAL)
        // ワールド座標の normal 分だけ移動する
        vec3 outlineOffset = normalize(finalWorld * vec4(normalUpdated, 1.0)).xyz * 0.01 * outlineWidth * outlineTex;
        positionUpdated.xyz += outlineOffset;
#endif
    } // End isOutline == 1.0

    vec4 vertex = vec4(1.0);
#ifdef MULTIVIEW
    if (gl_ViewID_OVR == 0u) {
        vertex = viewProjection * finalWorld * vec4(positionUpdated, 1.0);
    } else {
        vertex = viewProjectionR * finalWorld * vec4(positionUpdated, 1.0);
    }
#else
    vertex = viewProjection * finalWorld * vec4(positionUpdated, 1.0);
#endif

#if defined(MTOON_OUTLINE_WIDTH_SCREEN) && defined(NORMAL)
    if (isOutline == 1.0) {
        vec4 projectedNormal = normalize(viewProjection * finalWorld * vec4(normalUpdated, 1.0));
        projectedNormal *= min(vertex.w, outlineScaledMaxDistance);
        projectedNormal.x *= aspect;
        vertex.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy * clamp(1.0 - abs(normalize(view * vec4(normalUpdated, 1.0)).z), 0.0, 1.0); // ignore offset when normal toward camera
    }
#endif

    if (isOutline == 1.0) {
        vertex.z += 1E-2 * vertex.w; // anti-artifact magic from three-vrm
    }

    gl_Position = vertex;

    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
    vPositionW = vec3(worldPos);

#include<prePassVertex>

#ifdef NORMAL
    mat3 normalWorld = mat3(finalWorld);

    #ifdef NONUNIFORMSCALING
        normalWorld = transposeMat3(inverseMat3(normalWorld));
    #endif

    vNormalW = normalize(normalWorld * normalUpdated);
#endif

#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0
    if (vDiffuseInfos.x == 0.)
    {
        vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));
    }
    else
    {
        vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif

#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0
    if (vEmissiveInfos.x == 0.)
    {
        vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));
    }
    else
    {
        vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif

#if defined(BUMP) && BUMPDIRECTUV == 0
    if (vBumpInfos.x == 0.)
    {
        vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));
    }
    else
    {
        vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif

#if defined(SHADE) && SHADEDIRECTUV == 0
    if (vShadeInfos.x == 0.) {
        vShadeUV = vec2(shadeMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vShadeUV = vec2(shadeMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif
#if defined(RECEIVE_SHADOW) && RECEIVE_SHADOWDIRECTUV == 0
    if (vReceiveShadowInfos.x == 0.) {
        vReceiveShadowUV = vec2(receiveShadowMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vReceiveShadowUV = vec2(receiveShadowMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif
#if defined(SHADING_GRADE) && SHADING_GRADEDIRECTUV == 0
    if (vShadingGradeInfos.x == 0.) {
        vShadingGradeUV = vec2(shadingGradeMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vShadingGradeUV = vec2(shadingGradeMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif
#if defined(RIM) && RIMDIRECTUV == 0
    if (vRimInfos.x == 0.) {
        vRimUV = vec2(rimMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vRimUV = vec2(rimMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif
#if defined(MATCAP) && MATCAPDIRECTUV == 0
    if (vMatCapInfos.x == 0.) {
        vMatCapUV = vec2(matCapMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vMatCapUV = vec2(matCapMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif
#if defined(UV_ANIMATION_MASK) && UV_ANIMATION_MASKDIRECTUV == 0
    if (vUvAnimationMaskInfos.x == 0.) {
        vUvAnimationMaskUV = vec2(uvAnimationMaskMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vUvAnimationMaskUV = vec2(uvAnimationMaskMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif

#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]

#include<pointCloudVertex>
#include<logDepthVertex>

}
