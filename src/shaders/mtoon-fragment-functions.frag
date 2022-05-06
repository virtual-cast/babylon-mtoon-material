
/**
* Compute Directional or Point light direction
*/
vec3 computeLightDirection(vec4 lightData) {
    return normalize(mix(lightData.xyz - vPositionW, -lightData.xyz, lightData.w));
}

/**
* Compute Spot Light direction
*/
vec3 computeSpotLightDirection(vec4 lightData) {
    return normalize(lightData.xyz - vPositionW);
}

/**
* Compute Hemispheric light direction
*/
vec3 computeHemisphericLightDirection(vec4 lightData, vec3 vNormal) {
    return normalize(lightData.xyz);
}

/**
* Compute MToon diffuse lighting
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
