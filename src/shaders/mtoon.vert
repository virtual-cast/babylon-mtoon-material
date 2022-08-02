// it is based on default.vertex.fx
// This include is special, it will be replaced to UboDeclaration(WebGL2) or VertexDeclaration(WebGL1).
// @see effect.ts
#include<__decl__mtoonVertex>

// Attributes

#define CUSTOM_VERTEX_BEGIN

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
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif

#include<helperFunctions>

#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>

// Uniforms
#include<instancesDeclaration>
#include<prePassVertexDeclaration>

#include<mainUVVaryingDeclaration>[1..7]

#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
// # include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
// # include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
// # include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
// # include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
// # if defined(SPECULARTERM)
// # include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
// # endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade)
#include<samplerVertexDeclaration>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade)
#include<samplerVertexDeclaration>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim)
#include<samplerVertexDeclaration>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap)
#include<samplerVertexDeclaration>(_DEFINENAME_,OUTLINE_WIDTH,_VARYINGNAME_,OutlineWidth)
#include<samplerVertexDeclaration>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask)

// Additional Uniforms
#ifdef OUTLINE_WIDTH
    uniform sampler2D outlineWidthSampler;
#endif

// Output
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif

#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)
varying vec4 vColor;
#endif

#include<bumpVertexDeclaration>

#include<clipPlaneVertexDeclaration>

#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]

#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]

// # ifdef REFLECTIONMAP_SKYBOX
// varying vec3 vPositionUVW;
// # endif

// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
// varying vec3 vDirectionW;
// # endif

#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS

void main(void) {

    #define CUSTOM_VERTEX_MAIN_BEGIN

    vec3 positionUpdated = position;
#ifdef NORMAL
    vec3 normalUpdated = normal;
#endif
#ifdef TANGENT
    vec4 tangentUpdated = tangent;
#endif
#ifdef UV1
    vec2 uvUpdated = uv;
#endif

#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]

// # ifdef REFLECTIONMAP_SKYBOX
//     vPositionUVW = positionUpdated;
// # endif

#define CUSTOM_VERTEX_UPDATE_POSITION

#define CUSTOM_VERTEX_UPDATE_NORMAL

#include<instancesVertex>

#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
    // Compute velocity before bones computation
    vCurrentPosition = viewProjection * finalWorld * vec4(positionUpdated, 1.0);
    vPreviousPosition = previousViewProjection * finalPreviousWorld * vec4(positionUpdated, 1.0);
#endif

#include<bonesVertex>
#include<bakedVertexAnimation>

    // Texture coordinates
#ifndef UV1
    vec2 uvUpdated = vec2(0., 0.);
#endif
#ifdef MAINUV1
    vMainUV1 = uvUpdated;
#endif
#include<uvVariableDeclaration>[2..7]

    float outlineTex = 1.0;
    if (isOutline == 1.0) {
#ifdef OUTLINE_WIDTH
    #if OUTLINE_WIDTHDIRECTUV == 0
        if (vOutlineWidthInfos.x == 0.)
        {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uvUpdated, 1.0, 0.0));
        }
        #ifdef UV2
        else if (vOutlineWidthInfos.x == 1.)
        {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));
        }
        #endif
        #ifdef UV3
        else if (vOutlineWidthInfos.x == 2.)
        {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv3, 1.0, 0.0));
        }
        #endif
        #ifdef UV4
        else if (vOutlineWidthInfos.x == 3.)
        {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv4, 1.0, 0.0));
        }
        #endif
        #ifdef UV5
        else if (vOutlineWidthInfos.x == 4.)
        {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv5, 1.0, 0.0));
        }
        #endif
        #ifdef UV6
        else if (vOutlineWidthInfos.x == 5.)
        {
            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv6, 1.0, 0.0));
        }
        #endif
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
        // move slightly world normal
        vec3 outlineOffset = 0.01 * outlineWidth * outlineTex * length(transposeMat3(inverseMat3(mat3(finalWorld))) * normalUpdated) * normalUpdated;
        positionUpdated += outlineOffset;
#endif
    } // End isOutline == 1.0

    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);

#ifdef NORMAL
    mat3 normalWorld = mat3(finalWorld);

    #if defined(INSTANCES) && defined(THIN_INSTANCES)
        vNormalW = normalUpdated / vec3(dot(normalWorld[0], normalWorld[0]), dot(normalWorld[1], normalWorld[1]), dot(normalWorld[2], normalWorld[2]));
        vNormalW = normalize(normalWorld * vNormalW);
    #else
        #ifdef NONUNIFORMSCALING
            normalWorld = transposeMat3(inverseMat3(normalWorld));
        #endif

        vNormalW = normalize(normalWorld * normalUpdated);
    #endif
#endif

#define CUSTOM_VERTEX_UPDATE_WORLDPOS

#ifdef MULTIVIEW
    if (gl_ViewID_OVR == 0u) {
        gl_Position = viewProjection * worldPos;
    } else {
        gl_Position = viewProjectionR * worldPos;
    }
#else
    gl_Position = viewProjection * worldPos;
#endif

    if (isOutline == 1.0) {
#if defined(MTOON_OUTLINE_WIDTH_SCREEN) && defined(NORMAL)
        vec3 viewNormal = transposeMat3(inverseMat3(mat3(view) * mat3(finalWorld))) * normalUpdated;
        vec3 clipNormal = mat3(projection) * viewNormal;
        vec2 projectedNormal = normalize(clipNormal.xy);
        projectedNormal *= min(gl_Position.w, outlineScaledMaxDistance);
        projectedNormal.x /= aspect; // aspect in original mtoon is y/x. aspect in babylon is x/y.
        gl_Position.xy += 0.01 * outlineWidth * outlineTex * projectedNormal * clamp(1.0 - abs(normalize(viewNormal).z), 0.0, 1.0); // ignore offset when normal toward camera
#endif

        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic from three-vrm
    }

    worldPos = finalWorld * vec4(positionUpdated, 1.0);
    vPositionW = vec3(worldPos);

#include<prePassVertex>

// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
//     vDirectionW = normalize(vec3(finalWorld * vec4(positionUpdated, 0.0)));
// # endif

    #include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
    // # include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
    // # include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
    // # include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
    // # include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
    // # if defined(SPECULARTERM)
    // # include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
    // # endif
    #include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade,_MATRIXNAME_,shade,_INFONAME_,ShadeInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow,_MATRIXNAME_,receiveShadow,_INFONAME_,ReceiveShadowInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade,_MATRIXNAME_,shadingGrade,_INFONAME_,ShadingGradeInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim,_MATRIXNAME_,rim,_INFONAME_,RimInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap,_MATRIXNAME_,matCap,_INFONAME_,MatCapInfos.x)
    #include<samplerVertexImplementation>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask,_MATRIXNAME_,uvAnimationMask,_INFONAME_,uvAnimationMaskInfos.x)

#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]

#ifdef VERTEXCOLOR
    vColor = color;
#elif defined(INSTANCESCOLOR) && INSTANCESCOLOR
    vColor = instanceColor;
#endif

#include<pointCloudVertex>
#include<logDepthVertex>

#define CUSTOM_VERTEX_MAIN_END

}
