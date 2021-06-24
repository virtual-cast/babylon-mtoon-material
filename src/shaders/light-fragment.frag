#ifdef LIGHT{X}
    #if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
        // No light calculation
    #else
        #ifdef PBR
        // No PBR
        #else
            #ifdef SPOTLIGHT{X}
                info = computeSpotLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDirection, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightDiffuse.a, glossiness);
            #elif defined(HEMILIGHT{X})
                info = computeHemisphericLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightGround, glossiness);
            #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
                info = computeLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightDiffuse.a, glossiness);
            #endif
        #endif

        #ifdef PROJECTEDLIGHTTEXTURE{X}
            info.diffuse *= computeProjectionTextureDiffuseLighting(projectionLightSampler{X}, textureProjectionMatrix{X});
        #endif
    #endif

    #ifdef SHADOW{X}
        #ifdef SHADOWCSM{X}
            for (int i = 0; i < SHADOWCSMNUM_CASCADES{X}; i++)
            {
                #ifdef SHADOWCSM_RIGHTHANDED{X}
                    diff{X} = viewFrustumZ{X}[i] + vPositionFromCamera{X}.z;
                #else
                    diff{X} = viewFrustumZ{X}[i] - vPositionFromCamera{X}.z;
                #endif
                if (diff{X} >= 0.) {
                    index{X} = i;
                    break;
                }
            }

            #ifdef SHADOWCSMUSESHADOWMAXZ{X}
            if (index{X} >= 0)
            #endif
            {
                #if defined(SHADOWPCF{X})
                    #if defined(SHADOWLOWQUALITY{X})
                        shadow = computeShadowWithCSMPCF1(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                    #elif defined(SHADOWMEDIUMQUALITY{X})
                        shadow = computeShadowWithCSMPCF3(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                    #else
                        shadow = computeShadowWithCSMPCF5(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                    #endif
                #elif defined(SHADOWPCSS{X})
                    #if defined(SHADOWLOWQUALITY{X})
                        shadow = computeShadowWithCSMPCSS16(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});
                    #elif defined(SHADOWMEDIUMQUALITY{X})
                        shadow = computeShadowWithCSMPCSS32(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});
                    #else
                        shadow = computeShadowWithCSMPCSS64(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});
                    #endif
                #else
                    shadow = computeShadowCSM(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                #endif

                #ifdef SHADOWCSMDEBUG{X}
                    shadowDebug{X} = vec3(shadow) * vCascadeColorsMultiplier{X}[index{X}];
                #endif

                #ifndef SHADOWCSMNOBLEND{X}
                    float frustumLength = frustumLengths{X}[index{X}];
                    float diffRatio = clamp(diff{X} / frustumLength, 0., 1.) * cascadeBlendFactor{X};
                    if (index{X} < (SHADOWCSMNUM_CASCADES{X} - 1) && diffRatio < 1.)
                    {
                        index{X} += 1;
                        float nextShadow = 0.;
                        #if defined(SHADOWPCF{X})
                            #if defined(SHADOWLOWQUALITY{X})
                                nextShadow = computeShadowWithCSMPCF1(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                            #elif defined(SHADOWMEDIUMQUALITY{X})
                                nextShadow = computeShadowWithCSMPCF3(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                            #else
                                nextShadow = computeShadowWithCSMPCF5(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                            #endif
                        #elif defined(SHADOWPCSS{X})
                            #if defined(SHADOWLOWQUALITY{X})
                                nextShadow = computeShadowWithCSMPCSS16(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});
                            #elif defined(SHADOWMEDIUMQUALITY{X})
                                nextShadow = computeShadowWithCSMPCSS32(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});
                            #else
                                nextShadow = computeShadowWithCSMPCSS64(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});
                            #endif
                        #else
                            nextShadow = computeShadowCSM(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);
                        #endif

                        shadow = mix(nextShadow, shadow, diffRatio);
                        #ifdef SHADOWCSMDEBUG{X}
                            shadowDebug{X} = mix(vec3(nextShadow) * vCascadeColorsMultiplier{X}[index{X}], shadowDebug{X}, diffRatio);
                        #endif
                    }
                #endif
            }
        #elif defined(SHADOWCLOSEESM{X})
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

        #ifdef SHADOWONLY
            #ifndef SHADOWINUSE
                #define SHADOWINUSE
            #endif
            globalShadow += shadow;
            shadowLightCount += 1.0;
        #endif
    #else
        shadow = 1.;
    #endif

    #ifndef SHADOWONLY
        #ifdef CUSTOMUSERLIGHTING
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
            alpha = min(alpha, mtoonDiffuse.a);
            #if defined(ALPHATEST) && ALPHATEST
                alpha = (alpha - alphaCutOff) / max(fwidth(alpha), EPS_COL) + 0.5; // Alpha to Coverage
                if (alpha < alphaCutOff) {
                    discard;
                }
                alpha = 1.0; // Discarded, otherwise it should be assumed to have full opacity
            #else
                if (alpha - 0.0001 < 0.000) { // Slightly improves rendering with layered transparency
                    discard;
                }
            #endif
        #elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
            diffuseBase += lightmapColor.rgb * shadow;
            #ifdef SPECULARTERM
                #ifndef LIGHTMAPNOSPECULAR{X}
                    specularBase += info.specular * shadow * lightmapColor.rgb;
                #endif
            #endif
            #ifdef CLEARCOAT
                #ifndef LIGHTMAPNOSPECULAR{X}
                    clearCoatBase += info.clearCoat.rgb * shadow * lightmapColor.rgb;
                #endif
            #endif
            #ifdef SHEEN
                #ifndef LIGHTMAPNOSPECULAR{X}
                    sheenBase += info.sheen.rgb * shadow;
                #endif
            #endif
        #else
            #ifdef SHADOWCSMDEBUG{X}
                diffuseBase += info.diffuse * shadowDebug{X};
            #else
                diffuseBase += info.diffuse * shadow;
            #endif
            #ifdef SPECULARTERM
                specularBase += info.specular * shadow;
            #endif
            #ifdef CLEARCOAT
                clearCoatBase += info.clearCoat.rgb * shadow;
            #endif
            #ifdef SHEEN
                sheenBase += info.sheen.rgb * shadow;
            #endif
        #endif
    #endif
#endif
