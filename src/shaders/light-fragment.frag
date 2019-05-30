#ifdef LIGHT{X}
    // 影の計算は流用
    #ifdef SHADOW{X}
        #ifdef SHADOWCLOSEESM{X}
            #if defined(SHADOWCUBE{X})
                shadow = computeShadowWithCloseESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);
            #else
                shadow = computeShadowWithCloseESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);
            #endif
        #elif defined(SHADOWESM{X})
            #if defined(SHADOWCUBE{X})
                shadow = computeShadowWithESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);
            #else
                shadow = computeShadowWithESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);
            #endif
        #elif defined(SHADOWPOISSON{X})
            #if defined(SHADOWCUBE{X})
                shadow = computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.depthValues);
            #else
                shadow = computeShadowWithPoissonSampling(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #endif
        #elif defined(SHADOWPCF{X})
            #if defined(SHADOWLOWQUALITY{X})
                shadow = computeShadowWithPCF1(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #elif defined(SHADOWMEDIUMQUALITY{X})
                shadow = computeShadowWithPCF3(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #else
                shadow = computeShadowWithPCF5(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #endif
        #elif defined(SHADOWPCSS{X})
            #if defined(SHADOWLOWQUALITY{X})
                shadow = computeShadowWithPCSS16(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #elif defined(SHADOWMEDIUMQUALITY{X})
                shadow = computeShadowWithPCSS32(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #else
                shadow = computeShadowWithPCSS64(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #endif
        #else
            #if defined(SHADOWCUBE{X})
                shadow = computeShadowCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.depthValues);
            #else
                shadow = computeShadow(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
            #endif
        #endif
    #else
        shadow = 1.;
    #endif

    // ここで MToon のライティングを適用
    #ifdef SPOTLIGHT{X}
        lightDirection = computeSpotLightDirection(light{X}.vLightData);
    #elif defined(HEMILIGHT{X})
        lightDirection = computeHemisphericLightDirection(light{X}.vLightData, normalW.xyz);
    #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
        lightDirection = computeLightDirection(light{X}.vLightData);
    #endif
    mtoonDiffuse = computeMToonDiffuseLighting(viewDirectionW.xyz, normalW.xyz, mainUv, lightDirection, light{X}.vLightDiffuse.rgba, shadow);
    diffuseBase += mtoonDiffuse.rgb;
    alpha = alpha * mtoonDiffuse.a;
    #ifdef ALPHATEST
        if (alpha < alphaCutOff) {
            discard;
        }
    #endif
#endif
