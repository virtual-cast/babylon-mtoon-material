// この include は特別で、 UboDeclaration または VertexDeclaration のどちらかに置換される
// @see effect.ts
#include<__decl__mtoonVertex>

// 基本的に default.vertex.fx のまま

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
#include<__decl__lightFragment>[0..maxSimultaneousLights]

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

void main(void) {

    vec3 positionUpdated = position;
#ifdef NORMAL
    vec3 normalUpdated = normal;
#endif
#ifdef TANGENT
    vec4 tangentUpdated = tangent;
#endif

#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]

#include<instancesVertex>
#include<bonesVertex>

#ifdef MULTIVIEW
    if (gl_ViewID_OVR == 0u) {
        gl_Position = viewProjection * finalWorld * vec4(positionUpdated, 1.0);
    } else {
        gl_Position = viewProjectionR * finalWorld * vec4(positionUpdated, 1.0);
    }
#else
    gl_Position = viewProjection * finalWorld * vec4(positionUpdated, 1.0);
#endif

    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
    vPositionW = vec3(worldPos);

#ifdef NORMAL
    mat3 normalWorld = mat3(finalWorld);

    #ifdef NONUNIFORMSCALING
        normalWorld = transposeMat3(inverseMat3(normalWorld));
    #endif

    vNormalW = normalize(normalWorld * normalUpdated);
#endif

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
#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0
    if (vOutlineWidthInfos.x == 0.) {
        vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv, 1.0, 0.0));
    } else {
        vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif

#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]

#include<pointCloudVertex>
#include<logDepthVertex>

}
