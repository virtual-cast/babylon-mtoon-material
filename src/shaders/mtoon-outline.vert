uniform mat4 viewProjection;

// Attribute
attribute vec3 position;
attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif

#include<helperFunctions>

#include<bonesDeclaration>

#include<instancesDeclaration>

#include<fogVertexDeclaration>

#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]

// Uniform
uniform vec2 vOutlineWidthInfos;
uniform mat4 outlineWidthMatrix;
uniform sampler2D outlineWidthSampler;
uniform float outlineWidth;
uniform float outlineScaledMaxDistance;
uniform float aspect;

void main(void)
{
    // Texture coordinates
#ifndef UV1
    vec2 uv = vec2(0., 0.);
#endif
#ifndef UV2
    vec2 uv2 = vec2(0., 0.);
#endif

    vec3 positionUpdated = position;
    vec3 normalUpdated = normal;

#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]

#include<instancesVertex>
#include<bonesVertex>

    float outlineTex = 1.0;
    vec2 texUV = uv;
#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0
    if (vOutlineWidthInfos.x == 0.)
    {
        texUV = vec2(outlineWidthMatrix * vec4(uv, 1.0, 0.0));
    }
    else
    {
        texUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));
    }
#endif
#ifdef OUTLINE_WIDTH
    outlineTex = texture2D(outlineWidthSampler, texUV).r * vOutlineWidthInfos.y;
#endif

#ifdef MTOON_OUTLINE_WIDTH_WORLD
    // ワールド座標の normal 分だけ移動する
    vec3 outlineOffset = normalize(finalWorld * vec4(normalUpdated, 1.0)).xyz * 0.01 * outlineWidth * outlineTex;
    positionUpdated.xyz += outlineOffset;
#endif

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

#ifdef MTOON_OUTLINE_WIDTH_SCREEN
    vec4 projectedNormal = normalize(viewProjection * finalWorld * vec4(normalUpdated, 1.0));
    projectedNormal *= min(vertex.w, outlineScaledMaxDistance);
    projectedNormal.x *= aspect;
    vertex.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy;
#endif

    // for fogVertex
    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);

#include<fogVertex>

    gl_Position = vertex;
}
