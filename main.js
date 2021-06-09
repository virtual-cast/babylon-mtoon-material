(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["babylon-mtoon-material"] = factory();
	else
		root["babylon-mtoon-material"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpbabylon_mtoon_material"] = window["webpackJsonpbabylon_mtoon_material"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/test/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/inspectable-custom-properties.ts":
/*!**********************************************!*\
  !*** ./src/inspectable-custom-properties.ts ***!
  \**********************************************/
/*! exports provided: getInspectableCustomProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInspectableCustomProperties", function() { return getInspectableCustomProperties; });
/* harmony import */ var _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Misc/iInspectable */ "./node_modules/@babylonjs/core/Misc/iInspectable.js");

/**
 * MToonMaterial に Inspector 上で調整可能なパラメータを設定する
 * @param material
 * @link https://doc.babylonjs.com/how_to/debug_layer#extensibility
 */
function getInspectableCustomProperties() {
    return [
        {
            label: 'DiffuseColor',
            propertyName: 'diffuseColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Color3,
        },
        {
            label: 'AmbientColor',
            propertyName: 'ambientColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Color3,
        },
        {
            label: 'EmissiveColor',
            propertyName: 'emissiveColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Color3,
        },
        {
            label: 'ShadeColor',
            propertyName: 'shadeColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Color3,
        },
        {
            label: 'RimColor',
            propertyName: 'rimColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Color3,
        },
        {
            label: 'OutlineColor',
            propertyName: 'outlineColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Color3,
        },
        {
            label: 'ReceiveShadowRate',
            propertyName: 'receiveShadowRate',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadingGradeRate',
            propertyName: 'shadingGradeRate',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadeShift',
            propertyName: 'shadeShift',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: -1,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadeToony',
            propertyName: 'shadeToony',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'LightColorAttenuation',
            propertyName: 'lightColorAttenuation',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'IndirectLightIntensity',
            propertyName: 'indirectLightIntensity',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'RimLightingMix',
            propertyName: 'rimLightingMix',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'RimFresnelPower',
            propertyName: 'rimFresnelPower',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0.01,
            max: 100,
            step: 4,
        },
        {
            label: 'RimLift',
            propertyName: 'rimLift',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0.0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'OutlineWidth',
            propertyName: 'outlineWidth',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0.01,
            max: 1,
            step: 0.01,
        },
        {
            label: 'OutlineScaledMaxDistance',
            propertyName: 'outlineScaledMaxDistance',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 1.0,
            max: 10.0,
            step: 0.01,
        },
        {
            label: 'OutlineLightingMix',
            propertyName: 'outlineLightingMix',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'DebugMode',
            propertyName: 'debugMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineWidthMode',
            propertyName: 'outlineWidthMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineColorMode',
            propertyName: 'outlineColorMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 1,
        },
        {
            label: 'CullMode',
            propertyName: 'cullMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineCullMode',
            propertyName: 'outlineCullMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'AlphaCutOff',
            propertyName: 'alphaCutOff',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'UV Animation Scroll X',
            propertyName: 'uvAnimationScrollX',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: -1,
            max: 1,
            step: 0.1,
        },
        {
            label: 'UV Animation Scroll Y',
            propertyName: 'uvAnimationScrollY',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: -1,
            max: 1,
            step: 0.1,
        },
        {
            label: 'UV Animation Rotation',
            propertyName: 'uvAnimationRotation',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__["InspectableType"].Slider,
            min: -0.5,
            max: 0.5,
            step: 0.01,
        },
    ];
}


/***/ }),

/***/ "./src/mtoon-material-defines.ts":
/*!***************************************!*\
  !*** ./src/mtoon-material-defines.ts ***!
  \***************************************/
/*! exports provided: MToonMaterialDefines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MToonMaterialDefines", function() { return MToonMaterialDefines; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Materials/materialDefines */ "./node_modules/@babylonjs/core/Materials/materialDefines.js");


/**
 * Material Defines
 */
var MToonMaterialDefines = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MToonMaterialDefines, _super);
    // public PREPASS = false;
    // public PREPASS_IRRADIANCE = false;
    // public PREPASS_IRRADIANCE_INDEX = -1;
    // public PREPASS_ALBEDO = false;
    // public PREPASS_ALBEDO_INDEX = -1;
    // public PREPASS_DEPTH = false;
    // public PREPASS_DEPTH_INDEX = -1;
    // public PREPASS_NORMAL = false;
    // public PREPASS_NORMAL_INDEX = -1;
    // public PREPASS_POSITION = false;
    // public PREPASS_POSITION_INDEX = -1;
    // public PREPASS_VELOCITY = false;
    // public PREPASS_VELOCITY_INDEX = -1;
    // public PREPASS_REFLECTIVITY = false;
    // public PREPASS_REFLECTIVITY_INDEX = -1;
    // public SCENE_MRT_COUNT = 0;
    // public RGBDLIGHTMAP = false;
    // public RGBDREFLECTION = false;
    // public RGBDREFRACTION = false;
    // public IMAGEPROCESSING = false;
    // public VIGNETTE = false;
    // public VIGNETTEBLENDMODEMULTIPLY = false;
    // public VIGNETTEBLENDMODEOPAQUE = false;
    // public TONEMAPPING = false;
    // public TONEMAPPING_ACES = false;
    // public CONTRAST = false;
    // public COLORCURVES = false;
    // public COLORGRADING = false;
    // public COLORGRADING3D = false;
    // public SAMPLER3DGREENDEPTH = false;
    // public SAMPLER3DBGRMAP = false;
    // public IMAGEPROCESSINGPOSTPROCESS = false;
    // public MULTIVIEW = false;
    // /**
    //  * If the reflection texture on this material is in linear color space
    //  * @hidden
    //  */
    // public IS_REFLECTION_LINEAR = false;
    // /**
    //  * If the refraction texture on this material is in linear color space
    //  * @hidden
    //  */
    // public IS_REFRACTION_LINEAR = false;
    // public EXPOSURE = false;
    /**
     * @inheritdoc
     */
    function MToonMaterialDefines() {
        var _this = _super.call(this) || this;
        // MToon Specific
        _this.MTOON_OUTLINE_WIDTH_WORLD = false;
        _this.MTOON_OUTLINE_WIDTH_SCREEN = false;
        _this.MTOON_OUTLINE_COLOR_FIXED = false;
        _this.MTOON_OUTLINE_COLOR_MIXED = false;
        _this.MTOON_DEBUG_NORMAL = false;
        _this.MTOON_DEBUG_LITSHADERRATE = false;
        // MToon textures
        _this.SHADE = false;
        _this.SHADEDIRECTUV = 0;
        _this.RECEIVE_SHADOW = false;
        _this.RECEIVE_SHADOWDIRECTUV = 0;
        _this.SHADING_GRADE = false;
        _this.SHADING_GRADEDIRECTUV = 0;
        _this.RIM = false;
        _this.RIMDIRECTUV = 0;
        _this.MATCAP = false;
        _this.MATCAPDIRECTUV = 0;
        _this.OUTLINE_WIDTH = false;
        _this.OUTLINE_WIDTHDIRECTUV = 0;
        _this.UV_ANIMATION_MASK = false;
        _this.UV_ANIMATION_MASKDIRECTUV = 0;
        // Misc
        _this.MAINUV1 = false;
        _this.MAINUV2 = false;
        _this.DIFFUSE = false;
        _this.DIFFUSEDIRECTUV = 0;
        _this.DETAIL = false;
        _this.DETAILDIRECTUV = 0;
        _this.DETAIL_NORMALBLENDMETHOD = 0;
        // public AMBIENT = false;
        // public AMBIENTDIRECTUV = 0;
        // public OPACITY = false;
        // public OPACITYDIRECTUV = 0;
        // public OPACITYRGB = false;
        // public REFLECTION = false;
        _this.EMISSIVE = false;
        _this.EMISSIVEDIRECTUV = 0;
        // public SPECULAR = false;
        // public SPECULARDIRECTUV = 0;
        _this.BUMP = false;
        _this.BUMPDIRECTUV = 0;
        // public PARALLAX = false;
        // public PARALLAXOCCLUSION = false;
        // public SPECULAROVERALPHA = false;
        _this.CLIPPLANE = false;
        _this.CLIPPLANE2 = false;
        _this.CLIPPLANE3 = false;
        _this.CLIPPLANE4 = false;
        _this.CLIPPLANE5 = false;
        _this.CLIPPLANE6 = false;
        _this.ALPHATEST = false;
        _this.DEPTHPREPASS = false;
        _this.ALPHAFROMDIFFUSE = false;
        _this.POINTSIZE = false;
        _this.FOG = false;
        _this.MULTIVIEW = false;
        // public SPECULARTERM = false;
        // public DIFFUSEFRESNEL = false;
        // public OPACITYFRESNEL = false;
        // public REFLECTIONFRESNEL = false;
        // public REFRACTIONFRESNEL = false;
        // public EMISSIVEFRESNEL = false;
        // public FRESNEL = false;
        _this.NORMAL = false;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.VERTEXCOLOR = false;
        _this.VERTEXALPHA = false;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BonesPerMesh = 0;
        _this.BONETEXTURE = false;
        _this.BONES_VELOCITY_ENABLED = false;
        _this.INSTANCES = false;
        _this.THIN_INSTANCES = false;
        // public GLOSSINESS = false;
        // public ROUGHNESS = false;
        // public EMISSIVEASILLUMINATION = false;
        // public LINKEMISSIVEWITHDIFFUSE = false;
        // public REFLECTIONFRESNELFROMSPECULAR = false;
        // public LIGHTMAP = false;
        // public LIGHTMAPDIRECTUV = 0;
        _this.OBJECTSPACE_NORMALMAP = false;
        // public USELIGHTMAPASSHADOWMAP = false;
        // public REFLECTIONMAP_3D = false;
        // public REFLECTIONMAP_SPHERICAL = false;
        // public REFLECTIONMAP_PLANAR = false;
        // public REFLECTIONMAP_CUBIC = false;
        // public USE_LOCAL_REFLECTIONMAP_CUBIC = false;
        // public USE_LOCAL_REFRACTIONMAP_CUBIC = false;
        // public REFLECTIONMAP_PROJECTION = false;
        // public REFLECTIONMAP_SKYBOX = false;
        // public REFLECTIONMAP_EXPLICIT = false;
        // public REFLECTIONMAP_EQUIRECTANGULAR = false;
        // public REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        // public REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        // public REFLECTIONMAP_OPPOSITEZ = false;
        // public INVERTCUBICMAP = false;
        _this.LOGARITHMICDEPTH = false;
        // public REFRACTION = false;
        // public REFRACTIONMAP_3D = false;
        // public REFLECTIONOVERALPHA = false;
        _this.TWOSIDEDLIGHTING = false;
        _this.SHADOWFLOAT = false;
        _this.MORPHTARGETS = false;
        _this.MORPHTARGETS_NORMAL = false;
        _this.MORPHTARGETS_TANGENT = false;
        _this.MORPHTARGETS_UV = false;
        _this.NUM_MORPH_INFLUENCERS = 0;
        _this.MORPHTARGETS_TEXTURE = false;
        _this.NONUNIFORMSCALING = false; // https://playground.babylonjs.com#V6DWIH
        _this.PREMULTIPLYALPHA = false; // https://playground.babylonjs.com#LNVJJ7
        _this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = false;
        _this.ALPHABLEND = true;
        _this.rebuild();
        return _this;
    }
    MToonMaterialDefines.prototype.setReflectionMode = function (modeToEnable) {
        throw new Error('This material cannot use `setReflectionMode`');
    };
    return MToonMaterialDefines;
}(_babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_1__["MaterialDefines"]));



/***/ }),

/***/ "./src/mtoon-material.ts":
/*!*******************************!*\
  !*** ./src/mtoon-material.ts ***!
  \*******************************/
/*! exports provided: DebugMode, OutlineColorMode, OutlineWidthMode, CullMode, MToonMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugMode", function() { return DebugMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineColorMode", function() { return OutlineColorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineWidthMode", function() { return OutlineWidthMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CullMode", function() { return CullMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MToonMaterial", function() { return MToonMaterial; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Engines/constants */ "./node_modules/@babylonjs/core/Engines/constants.js");
/* harmony import */ var _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Materials/effect */ "./node_modules/@babylonjs/core/Materials/effect.js");
/* harmony import */ var _babylonjs_core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Materials/effectFallbacks */ "./node_modules/@babylonjs/core/Materials/effectFallbacks.js");
/* harmony import */ var _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Materials/material */ "./node_modules/@babylonjs/core/Materials/material.js");
/* harmony import */ var _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Materials/materialHelper */ "./node_modules/@babylonjs/core/Materials/materialHelper.js");
/* harmony import */ var _babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Materials/pushMaterial */ "./node_modules/@babylonjs/core/Materials/pushMaterial.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Meshes/buffer */ "./node_modules/@babylonjs/core/Meshes/buffer.js");
/* harmony import */ var _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Misc/decorators */ "./node_modules/@babylonjs/core/Misc/decorators.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_Materials_prePassConfiguration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Materials/prePassConfiguration */ "./node_modules/@babylonjs/core/Materials/prePassConfiguration.js");
/* harmony import */ var _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Materials/material.detailMapConfiguration */ "./node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js");
/* harmony import */ var _inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inspectable-custom-properties */ "./src/inspectable-custom-properties.ts");
/* harmony import */ var _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mtoon-material-defines */ "./src/mtoon-material-defines.ts");
/* harmony import */ var _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mtoon-outline-renderer */ "./src/mtoon-outline-renderer.ts");
















// シェーダ文字列を取得
var UboDeclaration = __webpack_require__(/*! ./shaders/ubo-declaration.vert */ "./src/shaders/ubo-declaration.vert").default;
var VertexDeclaration = __webpack_require__(/*! ./shaders/vertex-declaration.vert */ "./src/shaders/vertex-declaration.vert").default;
var FragmentDeclaration = __webpack_require__(/*! ./shaders/fragment-declaration.frag */ "./src/shaders/fragment-declaration.frag").default;
var BumpFragment = __webpack_require__(/*! ./shaders/bump-fragment.frag */ "./src/shaders/bump-fragment.frag").default;
var LightFragment = __webpack_require__(/*! ./shaders/light-fragment.frag */ "./src/shaders/light-fragment.frag").default;
var VertexShader = __webpack_require__(/*! ./shaders/mtoon.vert */ "./src/shaders/mtoon.vert").default;
var FragmentShader = __webpack_require__(/*! ./shaders/mtoon.frag */ "./src/shaders/mtoon.frag").default;
/**
 * デバッグモード
 */
var DebugMode;
(function (DebugMode) {
    DebugMode[DebugMode["None"] = 0] = "None";
    DebugMode[DebugMode["Normal"] = 1] = "Normal";
    DebugMode[DebugMode["LitShadeRate"] = 2] = "LitShadeRate";
})(DebugMode || (DebugMode = {}));
/**
 * アウトラインカラーモード
 */
var OutlineColorMode;
(function (OutlineColorMode) {
    OutlineColorMode[OutlineColorMode["FixedColor"] = 0] = "FixedColor";
    OutlineColorMode[OutlineColorMode["MixedLighting"] = 1] = "MixedLighting";
})(OutlineColorMode || (OutlineColorMode = {}));
/**
 * アウトライン幅モード
 */
var OutlineWidthMode;
(function (OutlineWidthMode) {
    OutlineWidthMode[OutlineWidthMode["None"] = 0] = "None";
    OutlineWidthMode[OutlineWidthMode["WorldCorrdinates"] = 1] = "WorldCorrdinates";
    OutlineWidthMode[OutlineWidthMode["ScreenCoordinates"] = 2] = "ScreenCoordinates";
})(OutlineWidthMode || (OutlineWidthMode = {}));
/**
 * Cull モード
 */
var CullMode;
(function (CullMode) {
    CullMode[CullMode["Off"] = 0] = "Off";
    CullMode[CullMode["Front"] = 1] = "Front";
    CullMode[CullMode["Back"] = 2] = "Back";
})(CullMode || (CullMode = {}));
var onCreatedEffectParameters = { effect: null, subMesh: null };
/**
 * MToonMaterial
 *
 * MToon は日本のアニメ的表現をすることを目標としています。
 * 主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。
 * VRM での出力パラメータとプロパティのマッピングは下記となります。
 *
 * @link https://github.com/Santarh/MToon/
 * @link https://vrm.dev/univrm/shaders/mtoon/
 */
var MToonMaterial = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MToonMaterial, _super);
    //#endregion
    //#endregion
    /**
     * @inheritdoc
     */
    function MToonMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        //#region Properties
        //#region Textures
        _this._diffuseTexture = null;
        /**
         * 通常色テクスチャ
         */
        _this.diffuseTexture = null;
        _this._emissiveTexture = null;
        /**
         * 発光テクスチャ
         */
        _this.emissiveTexture = null;
        _this._bumpTexture = null;
        /**
         * バンプマップテクスチャ
         */
        _this.bumpTexture = null;
        _this._shadeTexture = null;
        /**
         * 陰になる部分の色テクスチャ
         */
        _this.shadeTexture = null;
        _this._receiveShadowTexture = null;
        /**
         * どれだけ影を受け付けるかのテクスチャ
         * receiveShadowRate * texture.a
         */
        _this.receiveShadowTexture = null;
        _this._shadingGradeTexture = null;
        /**
         * 陰部分の暗さテクスチャ
         * shadingGradeRate * (1.0 - texture.r))
         */
        _this.shadingGradeTexture = null;
        _this._rimTexture = null;
        /**
         * Parametric Rim Lighting テクスチャ
         */
        _this.rimTexture = null;
        _this._matCapTexture = null;
        /**
         * MatCap ライティングテクスチャ
         */
        _this.matCapTexture = null;
        _this._outlineWidthTexture = null;
        /**
         * アウトラインの幅の調整テクスチャ
         */
        _this.outlineWidthTexture = null;
        _this._uvAnimationMaskTexture = null;
        /**
         * UV アニメーションマスクテクスチャ
         */
        _this.uvAnimationMaskTexture = null;
        //#endregion
        //#region babylon parameters
        /**
         * 対応最大ライト数
         */
        _this.maxSimultaneousLights = 16;
        /**
         * Specular 非対応
         */
        _this.specularSupported = false;
        /**
         * 頂点カラー非対応
         */
        _this.useVertexColor = false;
        /**
         * シェーダボーンは利用可能
         */
        _this.useBones = true;
        /**
         * シェーダモーフターゲットは利用可能
         */
        _this.useMorphTargets = true;
        /**
         * 頂点アルファは非対応
         */
        _this.useVertexAlpha = false;
        _this._useLogarithmicDepth = false;
        _this._disableLighting = false;
        /**
         * ライティングを無効にするかどうか
         */
        _this.disableLighting = false;
        _this._twoSidedLighting = false;
        /**
         * 両面ライティングを行うかどうか
         */
        _this.twoSidedLighting = false;
        _this._useAlphaFromDiffuseTexture = true;
        /**
         * アルファテスト時のカットしきい値
         */
        _this.alphaCutOff = 0.5;
        _this._rebuildInParallel = false;
        _this.detailMap = new _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_12__["DetailMapConfiguration"](_this._markAllSubMeshesAsTexturesDirty.bind(_this));
        //#endregion
        //#region Colors
        /**
         * diffuseTexture に乗算される色
         */
        _this.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](1.0, 1.0, 1.0);
        /**
         * 環境光
         */
        _this.ambientColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](0.1, 0.1, 0.1);
        /**
         * シーンの AmbientColor と掛け合わせた後の色
         * @see bindForSubMesh
         * @hidden
         */
        _this.globalAmbientColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](0.0, 0.0, 0.0);
        /**
         * 純粋加算される発光色
         */
        _this.emissiveColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](0.0, 0.0, 0.0);
        /**
         * shadeTexture に乗算される色
         */
        _this.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](0.97, 0.81, 0.86);
        /**
         * Rim の色
         */
        _this.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](0.0, 0.0, 0.0);
        /**
         * アウトラインの色
         */
        _this.outlineColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Color3"](0.0, 0.0, 0.0);
        //#endregion
        //#region MToon parameters
        _this._bumpScale = 1.0;
        _this._receiveShadowRate = 1.0;
        _this._shadingGradeRate = 1.0;
        _this._shadeShift = 0.0;
        _this._shadeToony = 0.9;
        _this._lightColorAttenuation = 0.0;
        _this._indirectLightIntensity = 0.1;
        _this._rimLightingMix = 0;
        _this._rimFresnelPower = 1;
        _this._rimLift = 0;
        _this._outlineWidth = 0.5;
        _this._outlineScaledMaxDistance = 1.0;
        _this._outlineLightingMix = 1.0;
        _this._uvAnimationScrollX = 0.0;
        _this._uvAnimationScrollY = 0.0;
        _this._uvAnimationRotation = 0.0;
        _this._alphaTest = false;
        _this._alphaBlend = false;
        _this._debugMode = DebugMode.None;
        /** @hidden */
        _this.debugMode = DebugMode.None;
        _this._outlineWidthMode = OutlineWidthMode.None;
        _this.outlineColorMode = OutlineColorMode.MixedLighting;
        _this._cullMode = CullMode.Back;
        _this._outlineCullMode = CullMode.Front;
        _this.outlineCullMode = CullMode.Front;
        _this.storedCullMode = CullMode.Back;
        _this.prePassConfiguration = new _babylonjs_core_Materials_prePassConfiguration__WEBPACK_IMPORTED_MODULE_11__["PrePassConfiguration"]();
        // シェーダストアに登録する
        if (!_babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonUboDeclaration) {
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonUboDeclaration = UboDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonVertexDeclaration = VertexDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonFragmentDeclaration = FragmentDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonLightFragment = LightFragment;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonBumpFragment = BumpFragment;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].ShadersStore.mtoonVertexShader = VertexShader;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].ShadersStore.mtoonFragmentShader = FragmentShader;
        }
        // Inspector にプロパティを追加
        _this.inspectableCustomProperties = _this.inspectableCustomProperties || [];
        _this.inspectableCustomProperties.concat(Object(_inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_13__["getInspectableCustomProperties"])());
        return _this;
    }
    Object.defineProperty(MToonMaterial.prototype, "appendedTextures", {
        /**
         * テクスチャ参照の一覧
         */
        get: function () {
            return [
                this._diffuseTexture,
                this._emissiveTexture,
                this._bumpTexture,
                this._shadeTexture,
                this._receiveShadowTexture,
                this._shadingGradeTexture,
                this._rimTexture,
                this._matCapTexture,
                this._outlineWidthTexture,
                this._uvAnimationMaskTexture,
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "appendedActiveTextures", {
        /**
         * アクティブなテクスチャ参照の一覧
         */
        get: function () {
            return this.appendedTextures.filter(function (t) { return t !== null; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "useLogarithmicDepth", {
        /**
         * Logarithmic depth
         * @link http://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
         */
        get: function () {
            return this._useLogarithmicDepth;
        },
        set: function (value) {
            var newValue = value && this.getScene().getEngine().getCaps().fragmentDepthSupported;
            if (this._useLogarithmicDepth !== newValue) {
                this._useLogarithmicDepth = newValue;
                this._markAllSubMeshesAsMiscDirty();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "isPrePassCapable", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "canRenderToMRT", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "bumpScale", {
        get: function () {
            return this._bumpScale;
        },
        set: function (value) {
            this._bumpScale = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "receiveShadowRate", {
        get: function () {
            return this._receiveShadowRate;
        },
        set: function (value) {
            this._receiveShadowRate = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "shadingGradeRate", {
        get: function () {
            return this._shadingGradeRate;
        },
        set: function (value) {
            this._shadingGradeRate = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "shadeShift", {
        get: function () {
            return this._shadeShift;
        },
        set: function (value) {
            this._shadeShift = Math.max(-1.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "shadeToony", {
        get: function () {
            return this._shadeToony;
        },
        set: function (value) {
            this._shadeToony = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "lightColorAttenuation", {
        get: function () {
            return this._lightColorAttenuation;
        },
        set: function (value) {
            this._lightColorAttenuation = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "indirectLightIntensity", {
        get: function () {
            return this._indirectLightIntensity;
        },
        set: function (value) {
            this._indirectLightIntensity = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "rimLightingMix", {
        get: function () {
            return this._rimLightingMix;
        },
        set: function (value) {
            this._rimLightingMix = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "rimFresnelPower", {
        get: function () {
            return this._rimFresnelPower;
        },
        set: function (value) {
            this._rimFresnelPower = Math.max(0.0, Math.min(100.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "rimLift", {
        get: function () {
            return this._rimLift;
        },
        set: function (value) {
            this._rimLift = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsLightsDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineWidth", {
        get: function () {
            return this._outlineWidth;
        },
        set: function (value) {
            this._outlineWidth = Math.max(0.01, Math.min(1.0, value));
            this._markAllSubMeshesAsAttributesDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineScaledMaxDistance", {
        get: function () {
            return this._outlineScaledMaxDistance;
        },
        set: function (value) {
            this._outlineScaledMaxDistance = Math.max(1.0, Math.min(10.0, value));
            this._markAllSubMeshesAsAttributesDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineLightingMix", {
        get: function () {
            return this._outlineLightingMix;
        },
        set: function (value) {
            this._outlineLightingMix = Math.max(0.0, Math.min(1.0, value));
            this._markAllSubMeshesAsAttributesDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "uvAnimationScrollX", {
        get: function () {
            return this._uvAnimationScrollX;
        },
        set: function (value) {
            this._uvAnimationScrollX = value;
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "uvAnimationScrollY", {
        get: function () {
            return this._uvAnimationScrollY;
        },
        set: function (value) {
            this._uvAnimationScrollY = value;
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "uvAnimationRotation", {
        get: function () {
            return this._uvAnimationRotation;
        },
        set: function (value) {
            this._uvAnimationRotation = value;
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "alphaTest", {
        get: function () {
            return this._alphaTest;
        },
        set: function (value) {
            this._alphaTest = value;
            if (value) {
                if (this.alphaBlend) {
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_ALPHATESTANDBLEND;
                }
                else {
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_ALPHATEST;
                }
            }
            else {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_OPAQUE;
            }
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "alphaBlend", {
        get: function () {
            return this._alphaBlend;
        },
        set: function (value) {
            this._alphaBlend = value;
            if (value) {
                this.backFaceCulling = true;
                if (this.alphaTest) {
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_ALPHATESTANDBLEND;
                }
                else {
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_ALPHABLEND;
                }
            }
            else {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_OPAQUE;
            }
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineWidthMode", {
        get: function () {
            return this._outlineWidthMode;
        },
        set: function (value) {
            this._outlineWidthMode = value;
            if (value !== OutlineWidthMode.None && !this.outlineRenderer) {
                /**
                 * このマテリアル用のアウトラインレンダラーを生成する
                 */
                this.outlineRenderer = new _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_15__["MToonOutlineRenderer"](this.getScene(), this);
            }
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cullMode", {
        get: function () {
            return this._cullMode;
        },
        set: function (value) {
            this._cullMode = value;
            switch (this._cullMode) {
                case CullMode.Off:
                    // 両面を描画する
                    this.backFaceCulling = false;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].ClockWiseSideOrientation;
                    this.twoSidedLighting = false;
                    break;
                case CullMode.Front:
                    // 表面を描画しない(=裏面だけ描画する)
                    this.backFaceCulling = true;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].CounterClockWiseSideOrientation;
                    this.twoSidedLighting = true;
                    break;
                case CullMode.Back:
                    // 裏面を描画しない(=表面だけ描画する) デフォルト
                    this.backFaceCulling = true;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].ClockWiseSideOrientation;
                    this.twoSidedLighting = false;
                    break;
            }
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * アウトライン用 CullMode を設定
     * @hidden
     */
    MToonMaterial.prototype.applyOutlineCullMode = function () {
        this.storedCullMode = this.cullMode;
        this.cullMode = this._outlineCullMode;
    };
    /**
     * CullMode をリストア
     * @hidden
     */
    MToonMaterial.prototype.restoreOutlineCullMode = function () {
        this.cullMode = this.storedCullMode;
    };
    /**
     * @hidden
     */
    MToonMaterial.prototype.getOutlineRendererName = function () {
        if (!this.outlineRenderer) {
            return '';
        }
        return this.outlineRenderer.name;
    };
    /**
     * @inheritdoc
     * SubMesh が利用可能かどうかチェックする
     */
    MToonMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh, useInstances) {
        if (useInstances === void 0) { useInstances = false; }
        if (subMesh.effect && this.isFrozen) {
            if (subMesh.effect._wasPreviouslyReady) {
                return true;
            }
        }
        if (!subMesh._materialDefines) {
            subMesh.materialDefines = new _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_14__["MToonMaterialDefines"]();
        }
        var scene = this.getScene();
        var defines = subMesh._materialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        var engine = scene.getEngine();
        // Lights
        defines._needNormals = _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForLights(scene, mesh, defines, this.specularSupported, this.maxSimultaneousLights, this._disableLighting);
        if (this.outlineWidthMode !== OutlineWidthMode.None) {
            // アウトライン描画のためには normal が必要
            defines._needNormals = true;
        }
        this.applyDefines(defines);
        // Multiview
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForMultiview(scene, defines);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForPrePass(scene, defines, this.canRenderToMRT);
        // Textures
        // defines の変更はシェーダのリコンパイルを必要とするため、必要最小限にする
        // そのため若干冗長な記述となっている
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            defines.MAINUV1 = false;
            defines.MAINUV2 = false;
            if (scene.texturesEnabled) {
                // 追加テクスチャの用意を確認する
                if (!this.isReadyForTexture(this._diffuseTexture, defines, 'DIFFUSE')
                    || !this.isReadyForTexture(this._emissiveTexture, defines, 'EMISSIVE')
                    || !this.isReadyForTexture(this._shadeTexture, defines, 'SHADE')
                    || !this.isReadyForTexture(this._receiveShadowTexture, defines, 'RECEIVE_SHADOW')
                    || !this.isReadyForTexture(this._shadingGradeTexture, defines, 'SHADING_GRADE')
                    || !this.isReadyForTexture(this._rimTexture, defines, 'RIM')
                    || !this.isReadyForTexture(this._matCapTexture, defines, 'MATCAP')
                    || !this.isReadyForTexture(this._outlineWidthTexture, defines, 'OUTLINE_WIDTH')
                    || !this.isReadyForTexture(this._uvAnimationMaskTexture, defines, 'UV_ANIMATION_MASK')) {
                    return false;
                }
                if (scene.getEngine().getCaps().standardDerivatives && this._bumpTexture) {
                    // Bump texure can not be not blocking.
                    if (!this._bumpTexture.isReady()) {
                        return false;
                    }
                    _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForMergedUV(this._bumpTexture, defines, 'BUMP');
                }
                else {
                    defines.BUMP = false;
                }
                defines.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting;
            }
            else {
                defines.DIFFUSE = false;
                defines.EMISSIVE = false;
                defines.SHADE = false;
                defines.RECEIVE_SHADOW = false;
                defines.SHADING_GRADE = false;
                defines.RIM = false;
                defines.MATCAP = false;
                defines.OUTLINE_WIDTH = false;
                defines.BUMP = false;
                defines.UV_ANIMATION_MASK = false;
            }
            defines.PREMULTIPLYALPHA = (this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ALPHA_PREMULTIPLIED || this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ALPHA_PREMULTIPLIED_PORTERDUFF);
            defines.ALPHATEST_AFTERALLALPHACOMPUTATIONS = this.transparencyMode !== null;
            defines.ALPHABLEND = this.transparencyMode === null || this.needAlphaBlendingForMesh(mesh);
        }
        if (!this.detailMap.isReadyForSubMesh(defines, scene)) {
            return false;
        }
        // Misc.
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForMisc(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh) || this._forceAlphaTest, defines);
        // Attribs
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForAttributes(mesh, defines, this.useVertexColor, this.useBones, this.useMorphTargets, this.useVertexAlpha);
        // Values that need to be evaluated on every frame
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances, null, subMesh.getRenderingMesh().hasThinInstances);
        // External config
        this.detailMap.prepareDefines(defines, scene);
        // Get correct effect
        if (defines.isDirty) {
            var lightDisposed = defines._areLightsDisposed;
            defines.markAsProcessed();
            // Fallbacks
            var fallbacks = new _babylonjs_core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_3__["EffectFallbacks"]();
            if (defines.BUMP) {
                fallbacks.addFallback(0, 'BUMP');
            }
            if (defines.FOG) {
                fallbacks.addFallback(1, 'FOG');
            }
            if (defines.POINTSIZE) {
                fallbacks.addFallback(0, 'POINTSIZE');
            }
            if (defines.LOGARITHMICDEPTH) {
                fallbacks.addFallback(0, 'LOGARITHMICDEPTH');
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].HandleFallbacksForShadows(defines, fallbacks, this.maxSimultaneousLights);
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }
            // Attributes
            var attribs = [_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_8__["VertexBuffer"].PositionKind];
            if (defines.NORMAL) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_8__["VertexBuffer"].NormalKind);
            }
            if (defines.TANGENT) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_8__["VertexBuffer"].TangentKind);
            }
            if (defines.UV1) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_8__["VertexBuffer"].UVKind);
            }
            if (defines.UV2) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_8__["VertexBuffer"].UV2Kind);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareAttributesForInstances(attribs, defines);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareAttributesForMorphTargets(attribs, mesh, defines);
            var shaderName = 'mtoon';
            var uniforms = [
                'world', 'view', 'viewProjection', 'vLightsType',
                'visibility', 'mBones',
                'vClipPlane', 'vClipPlane2', 'vClipPlane3', 'vClipPlane4', 'vClipPlane5', 'vClipPlane6',
                'vFogInfos', 'vFogColor', 'pointSize',
                'alphaCutOff', 'logarithmicDepthConstant', 'vTangentSpaceParams', 'boneTextureWidth',
                'vDiffuseColor', 'vDiffuseInfos', 'diffuseMatrix',
                'vEmissiveColor', 'vEmissiveInfos', 'emissiveMatrix',
                'vBumpInfos', 'bumpMatrix',
                'vShadeColor', 'vShadeInfos', 'shadeMatrix',
                'vReceiveShadowInfos', 'receiveShadowMatrix',
                'vShadingGradeInfos', 'shadingGradeMatrix',
                'vRimColor', 'vRimInfos', 'RimMatrix',
                'vMatCapInfos', 'MatCapMatrix',
                'vOutlineColor', 'vOutlineWidthInfos', 'outlineWidthMatrix',
                'aspect', 'isOutline',
                'shadingGradeRate', 'receiveShadowRate', 'shadeShift', 'shadeToony',
                'rimLightingMix', 'rimFresnelPower', 'rimLift',
                'lightColorAttenuation', 'indirectLightIntensity',
                'outlineWidth', 'outlineScaledMaxDistance', 'outlineLightingMix',
                'uvAnimationScrollX', 'uvAnimationScrollY', 'uvAnimationRotation',
                'vEyePosition', 'vEyeUp', 'time',
                "morphTargetTextureInfo", "morphTargetTextureIndices"
            ];
            var samplers = [
                'diffuseSampler', 'emissiveSampler', 'bumpSampler', 'boneSampler',
                'shadeSampler', 'receiveShadowSampler', 'shadingGradeSampler',
                'rimSampler', 'matCapSampler', 'outlineWidthSampler',
                'uvAnimationMaskSampler', 'morphTargets',
            ];
            var uniformBuffers = ['Material', 'Scene'];
            _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_12__["DetailMapConfiguration"].AddUniforms(uniforms);
            _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_12__["DetailMapConfiguration"].AddSamplers(samplers);
            _babylonjs_core_Materials_prePassConfiguration__WEBPACK_IMPORTED_MODULE_11__["PrePassConfiguration"].AddUniforms(uniforms);
            _babylonjs_core_Materials_prePassConfiguration__WEBPACK_IMPORTED_MODULE_11__["PrePassConfiguration"].AddSamplers(samplers);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: defines,
                maxSimultaneousLights: this.maxSimultaneousLights,
            });
            this.applyDefines(defines);
            var csnrOptions = {};
            var join = defines.toString();
            var previousEffect = subMesh.effect;
            var effect = scene.getEngine().createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: join,
                fallbacks: fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: {
                    maxSimultaneousLights: this.maxSimultaneousLights,
                    maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                },
                processFinalCode: csnrOptions.processFinalCode,
                multiTarget: defines.PREPASS,
            }, engine);
            if (effect) {
                if (this._onEffectCreatedObservable) {
                    onCreatedEffectParameters.effect = effect;
                    onCreatedEffectParameters.subMesh = subMesh;
                    this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
                }
                // Use previous effect while new one is compiling
                if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                    effect = previousEffect;
                    this._rebuildInParallel = true;
                    defines.markAsUnprocessed();
                    if (lightDisposed) {
                        // re register in case it takes more than one frame.
                        defines._areLightsDisposed = true;
                        return false;
                    }
                }
                else {
                    this._rebuildInParallel = false;
                    scene.resetCachedMaterial();
                    subMesh.setEffect(effect, defines);
                    this.buildUniformLayout();
                }
            }
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        subMesh.effect._wasPreviouslyReady = true;
        return true;
    };
    /**
     * @inheritdoc
     * 現在の値をシェーダにバインドする
     * このメソッドは毎フレームごとに呼ばれるため、冗長でも高速化を優先する
     */
    MToonMaterial.prototype.bindForSubMesh = function (world, mesh, subMesh) {
        var scene = this.getScene();
        var defines = subMesh._materialDefines;
        var effect = subMesh.effect;
        if (!defines || !effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices
        if (!defines.INSTANCES || defines.THIN_INSTANCES) {
            this.bindOnlyWorldMatrix(world);
        }
        // PrePass
        this.prePassConfiguration.bindForSubMesh(this._activeEffect, scene, mesh, world, this.isFrozen);
        // Normal Matrix
        if (defines.OBJECTSPACE_NORMALMAP) {
            world.toNormalMatrix(this._normalMatrix);
            this.bindOnlyNormalMatrix(this._normalMatrix);
        }
        var mustRebind = scene.isCachedMaterialInvalid(this, effect, mesh.visibility);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindBonesParameters(mesh, effect);
        var ubo = this._uniformBuffer;
        if (mustRebind) {
            ubo.bindToEffect(effect, 'Material');
            this.bindViewProjection(effect);
            if (!ubo.useUbo || !this.isFrozen || !ubo.isSync) {
                if (scene.texturesEnabled) {
                    this.bindTexture(this._diffuseTexture, effect, 'diffuse', 'vDiffuseInfos');
                    this.bindTexture(this._emissiveTexture, effect, 'emissive', 'vEmissiveInfos');
                    if (this._bumpTexture) {
                        ubo.updateFloat3('vBumpInfos', this._bumpTexture.coordinatesIndex, 1.0 / this._bumpTexture.level, this._bumpScale);
                        var matrix = this._bumpTexture.getTextureMatrix();
                        if (!matrix.isIdentityAs3x2()) {
                            ubo.updateMatrix("bumpMatrix", matrix);
                        }
                        effect.setTexture("bumpSampler", this._bumpTexture);
                        // bumpTexture は babylon.js のデフォルトと反対の状態である
                        if (scene._mirroredCameraPosition) {
                            ubo.updateFloat2('vTangentSpaceParams', 1.0, 1.0);
                        }
                        else {
                            ubo.updateFloat2('vTangentSpaceParams', -1.0, -1.0);
                        }
                    }
                    this.bindTexture(this._shadeTexture, effect, 'shade', 'vShadeInfos');
                    this.bindTexture(this._receiveShadowTexture, effect, 'receiveShadow', 'vReceiveShadowInfos');
                    this.bindTexture(this._shadingGradeTexture, effect, 'shadingGrade', 'vShadingGradeInfos');
                    this.bindTexture(this._rimTexture, effect, 'rim', 'vRimInfos');
                    this.bindTexture(this._matCapTexture, effect, 'matCap', 'vMatCapInfos');
                    this.bindTexture(this._outlineWidthTexture, effect, 'outlineWidth', 'vOutlineWidthInfos');
                    this.bindTexture(this._uvAnimationMaskTexture, effect, 'uvAnimationMask', 'vUvAnimationMaskInfos');
                }
                if (this._hasAlphaChannel()) {
                    effect.setFloat('alphaCutOff', this.alphaCutOff);
                }
            }
            // Point size
            if (this.pointsCloud) {
                ubo.updateFloat('pointSize', this.pointSize);
            }
            // MToon uniforms
            ubo.updateFloat('receiveShadowRate', this._receiveShadowRate);
            ubo.updateFloat('shadingGradeRate', this._shadingGradeRate);
            ubo.updateFloat('shadeShift', this._shadeShift);
            ubo.updateFloat('shadeToony', this._shadeToony);
            ubo.updateFloat('lightColorAttenuation', this._lightColorAttenuation);
            ubo.updateFloat('indirectLightIntensity', this._indirectLightIntensity);
            ubo.updateFloat('rimLightingMix', this._rimLightingMix);
            ubo.updateFloat('rimFresnelPower', this._rimFresnelPower);
            ubo.updateFloat('rimLift', this._rimLift);
            ubo.updateFloat('outlineWidth', this._outlineWidth);
            ubo.updateFloat('outlineScaledMaxDistance', this._outlineScaledMaxDistance);
            ubo.updateFloat('outlineLightingMix', this._outlineLightingMix);
            ubo.updateFloat('uvAnimationScrollX', this._uvAnimationScrollX);
            ubo.updateFloat('uvAnimationScrollY', this._uvAnimationScrollY);
            ubo.updateFloat('uvAnimationRotation', this._uvAnimationRotation);
            this.detailMap.bindForSubMesh(ubo, scene, this.isFrozen);
            // Clip plane
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindClipPlane(effect, scene);
            // Colors
            scene.ambientColor.multiplyToRef(this.ambientColor, this.globalAmbientColor);
            effect.setColor3('vAmbientColor', this.globalAmbientColor);
            ubo.updateColor4('vDiffuseColor', this.diffuseColor, this.alpha);
            ubo.updateColor3('vEmissiveColor', this.emissiveColor);
            ubo.updateColor3('vShadeColor', this.shadeColor);
            ubo.updateColor3('vRimColor', this.rimColor);
            ubo.updateColor4('vOutlineColor', this.outlineColor, 1.0);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindEyePosition(effect, scene);
            effect.setVector3('vEyeUp', scene.activeCamera.upVector);
        }
        if (mustRebind || !this.isFrozen) {
            // `freeze` しない限り毎回更新される値
            if (scene.lightsEnabled && !this.disableLighting) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindLights(scene, mesh, effect, defines, this.maxSimultaneousLights, this._rebuildInParallel);
            }
            // View
            if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_10__["Scene"].FOGMODE_NONE) {
                this.bindView(effect);
            }
            // Fog
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindFogParameters(scene, mesh, effect);
            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindMorphTargetParameters(mesh, effect);
            }
            // Log. depth
            if (this.useLogarithmicDepth) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].BindLogDepth(defines, effect, scene);
            }
        }
        effect.setFloat('aspect', scene.getEngine().getAspectRatio(scene.activeCamera));
        effect.setFloat('isOutline', 0.0);
        var t = window.performance.now() / 1000;
        effect.setVector4('time', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__["Vector4"](t / 20, t, t * 2, t * 3));
        this._afterBind(mesh, this._activeEffect);
        ubo.update();
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.getAnimatables = function () {
        var results = [];
        for (var _i = 0, _a = this.appendedActiveTextures; _i < _a.length; _i++) {
            var texture = _a[_i];
            if (texture.animations && texture.animations.length > 0) {
                results.push(texture);
            }
        }
        this.detailMap.getAnimatables(results);
        return results;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.getActiveTextures = function () {
        var activeTextures = _super.prototype.getActiveTextures.call(this).concat(this.appendedActiveTextures);
        this.detailMap.getActiveTextures(activeTextures);
        return activeTextures;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.hasTexture = function (texture) {
        if (_super.prototype.hasTexture.call(this, texture)) {
            return true;
        }
        else if (this.appendedActiveTextures.length > 0) {
            for (var _i = 0, _a = this.appendedActiveTextures; _i < _a.length; _i++) {
                var tex = _a[_i];
                if (tex === texture) {
                    return true;
                }
            }
        }
        return this.detailMap.hasTexture(texture);
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.dispose = function (forceDisposeEffect, forceDisposeTextures, notBoundToMesh) {
        delete this.outlineRenderer;
        if (forceDisposeTextures) {
            for (var _i = 0, _a = this.appendedActiveTextures; _i < _a.length; _i++) {
                var texture = _a[_i];
                texture.dispose();
            }
        }
        this.detailMap.dispose(forceDisposeTextures);
        _super.prototype.dispose.call(this, forceDisposeEffect, forceDisposeTextures, notBoundToMesh);
    };
    /**
     * UniformBufferObject のレイアウトを決定する
     * シェーダー内の `uniform Material` と同じ順序で add する必要がある
     * UBO を利用すると効率的に変数をシェーダに渡せるが、 WebGL v2 のみ対応
     * babylon.js では WebGL v1 の場合自動でフォールバックしてくれる
     * 第二引数は float の数
     */
    MToonMaterial.prototype.buildUniformLayout = function () {
        var ubo = this._uniformBuffer;
        ubo.addUniform('vDiffuseColor', 4);
        ubo.addUniform('vDiffuseInfos', 2);
        ubo.addUniform('diffuseMatrix', 16);
        ubo.addUniform('vEmissiveColor', 3);
        ubo.addUniform('vEmissiveInfos', 2);
        ubo.addUniform('emissiveMatrix', 16);
        ubo.addUniform('vBumpInfos', 3);
        ubo.addUniform('bumpMatrix', 16);
        ubo.addUniform('vShadeColor', 3);
        ubo.addUniform('vShadeInfos', 2);
        ubo.addUniform('shadeMatrix', 16);
        ubo.addUniform('vReceiveShadowInfos', 2);
        ubo.addUniform('receiveShadowMatrix', 16);
        ubo.addUniform('vShadingGradeInfos', 2);
        ubo.addUniform('shadingGradeMatrix', 16);
        ubo.addUniform('vRimColor', 3);
        ubo.addUniform('vRimInfos', 2);
        ubo.addUniform('rimMatrix', 16);
        ubo.addUniform('vMatCapInfos', 2);
        ubo.addUniform('matCapMatrix', 16);
        ubo.addUniform('vOutlineColor', 3);
        ubo.addUniform('vOutlineWidthInfos', 2);
        ubo.addUniform('outlineWidthMatrix', 16);
        ubo.addUniform('vUvAnimationMaskInfos', 2);
        ubo.addUniform('uvAnimationMaskMatrix', 16);
        ubo.addUniform('vTangentSpaceParams', 2);
        ubo.addUniform('pointSize', 1);
        ubo.addUniform('shadingGradeRate', 1);
        ubo.addUniform('receiveShadowRate', 1);
        ubo.addUniform('shadeShift', 1);
        ubo.addUniform('shadeToony', 1);
        ubo.addUniform('lightColorAttenuation', 1);
        ubo.addUniform('indirectLightIntensity', 1);
        ubo.addUniform('rimLightingMix', 1);
        ubo.addUniform('rimFresnelPower', 1);
        ubo.addUniform('rimLift', 1);
        ubo.addUniform('outlineWidth', 1);
        ubo.addUniform('outlineScaledMaxDistance', 1);
        ubo.addUniform('outlineLightingMix', 1);
        ubo.addUniform('uvAnimationScrollX', 1);
        ubo.addUniform('uvAnimationScrollY', 1);
        ubo.addUniform('uvAnimationRotation', 1);
        _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_12__["DetailMapConfiguration"].PrepareUniformBuffer(ubo);
        ubo.create();
    };
    /**
     * テクスチャ情報をバインドする
     * @param texture
     * @param effect
     * @param name
     * @param infoName
     */
    MToonMaterial.prototype.bindTexture = function (texture, effect, name, infoName) {
        if (!texture) {
            return;
        }
        this._uniformBuffer.updateFloat2(infoName, texture.coordinatesIndex, texture.level);
        var matrix = texture.getTextureMatrix();
        if (!matrix.isIdentityAs3x2()) {
            this._uniformBuffer.updateMatrix(name + "Matrix", matrix);
        }
        effect.setTexture(name + "Sampler", texture);
    };
    /**
     * テクスチャの用意が終わっているか確認する
     * @param texture
     * @param defines
     * @param key
     */
    MToonMaterial.prototype.isReadyForTexture = function (texture, defines, key) {
        if (!texture) {
            defines[key] = false;
            return true;
        }
        if (!texture.isReadyOrNotBlocking()) {
            return false;
        }
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_5__["MaterialHelper"].PrepareDefinesForMergedUV(texture, defines, key);
        return true;
    };
    /**
     * 定数を設定する
     */
    MToonMaterial.prototype.applyDefines = function (defines) {
        switch (this._debugMode) {
            case DebugMode.Normal:
                if (defines.MTOON_DEBUG_NORMAL !== true) {
                    defines.MTOON_DEBUG_NORMAL = true;
                    defines.MTOON_DEBUG_LITSHADERATE = false;
                    defines.markAsUnprocessed();
                }
                break;
            case DebugMode.LitShadeRate:
                if (defines.MTOON_DEBUG_LITSHADERATE !== true) {
                    defines.MTOON_DEBUG_NORMAL = false;
                    defines.MTOON_DEBUG_LITSHADERATE = true;
                    defines.markAsUnprocessed();
                }
                break;
            case DebugMode.None:
                if (defines.MTOON_DEBUG_NORMAL === true) {
                    defines.MTOON_DEBUG_NORMAL = false;
                    defines.markAsUnprocessed();
                }
                if (defines.MTOON_DEBUG_LITSHADERATE === true) {
                    defines.MTOON_DEBUG_LITSHADERATE = false;
                    defines.markAsUnprocessed();
                }
                break;
        }
        switch (this.outlineWidthMode) {
            case OutlineWidthMode.WorldCorrdinates:
                if (defines.MTOON_OUTLINE_WIDTH_WORLD !== true) {
                    defines.MTOON_OUTLINE_WIDTH_WORLD = true;
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineWidthMode.ScreenCoordinates:
                if (defines.MTOON_OUTLINE_WIDTH_SCREEN !== true) {
                    defines.MTOON_OUTLINE_WIDTH_WORLD = false;
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = true;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineWidthMode.None:
                if (defines.MTOON_OUTLINE_WIDTH_SCREEN !== false || defines.MTOON_OUTLINE_WIDTH_WORLD !== false) {
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
                    defines.MTOON_OUTLINE_WIDTH_WORLD = false;
                    defines.markAsUnprocessed();
                }
                break;
        }
        switch (this.outlineColorMode) {
            case OutlineColorMode.FixedColor:
                if (defines.MTOON_OUTLINE_COLOR_FIXED !== true) {
                    defines.MTOON_OUTLINE_COLOR_FIXED = true;
                    defines.MTOON_OUTLINE_COLOR_MIXED = false;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineColorMode.MixedLighting:
                if (defines.MTOON_OUTLINE_COLOR_MIXED !== true) {
                    defines.MTOON_OUTLINE_COLOR_FIXED = false;
                    defines.MTOON_OUTLINE_COLOR_MIXED = true;
                    defines.markAsUnprocessed();
                }
                break;
        }
    };
    //#region Misc
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.getClassName = function () {
        return 'MToonMaterial';
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.needAlphaBlending = function () {
        if (this._disableAlphaBlending) {
            return false;
        }
        return this._alphaBlend || (this.alpha < 1.0) || this._shouldUseAlphaFromDiffuseTexture();
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.needAlphaTesting = function () {
        if (this._forceAlphaTest) {
            return true;
        }
        return this._alphaTest
            || (this._hasAlphaChannel() && (this._transparencyMode == null || this._transparencyMode === _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_ALPHATEST));
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype._shouldUseAlphaFromDiffuseTexture = function () {
        return this._diffuseTexture != null
            && this._diffuseTexture.hasAlpha
            && this._useAlphaFromDiffuseTexture
            && this._transparencyMode !== _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_4__["Material"].MATERIAL_OPAQUE;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype._hasAlphaChannel = function () {
        return (this._diffuseTexture !== null && this._diffuseTexture.hasAlpha); // || this._opacityTexture != null;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.getAlphaTestTexture = function () {
        return this.diffuseTexture;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.clone = function (name) {
        var _this = this;
        var result = _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["SerializationHelper"].Clone(function () { return new MToonMaterial(name, _this.getScene()); }, this);
        result.name = name;
        result.id = name;
        return result;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.serialize = function () {
        return _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["SerializationHelper"].Serialize(this);
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.Parse = function (parsedMaterial, scene, rootUrl) {
        return _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["SerializationHelper"].Parse(function () { return new MToonMaterial(parsedMaterial.name, scene); }, parsedMaterial, scene, rootUrl);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('diffuseTexture')
    ], MToonMaterial.prototype, "_diffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesAndMiscDirty')
    ], MToonMaterial.prototype, "diffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('emissiveTexture')
    ], MToonMaterial.prototype, "_emissiveTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "emissiveTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('bumpTexture')
    ], MToonMaterial.prototype, "_bumpTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "bumpTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('shadeTexture')
    ], MToonMaterial.prototype, "_shadeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "shadeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('receiveShadowTexture')
    ], MToonMaterial.prototype, "_receiveShadowTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "receiveShadowTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('shadingGradeTexture')
    ], MToonMaterial.prototype, "_shadingGradeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "shadingGradeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('rimTexture')
    ], MToonMaterial.prototype, "_rimTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "rimTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('matCapTexture')
    ], MToonMaterial.prototype, "_matCapTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "matCapTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('outlineWidthTexture')
    ], MToonMaterial.prototype, "_outlineWidthTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "outlineWidthTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsTexture"])('outlineWidthTexture')
    ], MToonMaterial.prototype, "_uvAnimationMaskTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "uvAnimationMaskTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "useLogarithmicDepth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('disableLighting')
    ], MToonMaterial.prototype, "_disableLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "disableLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('twoSidedLighting')
    ], MToonMaterial.prototype, "_twoSidedLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "twoSidedLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('useAlphaFromDiffuseTexture')
    ], MToonMaterial.prototype, "_useAlphaFromDiffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
    ], MToonMaterial.prototype, "useAlphaFromDiffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])(),
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "alphaCutOff", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serializeAsColor3"])('diffuse')
    ], MToonMaterial.prototype, "diffuseColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('ambient')
    ], MToonMaterial.prototype, "ambientColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('emissive')
    ], MToonMaterial.prototype, "emissiveColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('shade')
    ], MToonMaterial.prototype, "shadeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('rim')
    ], MToonMaterial.prototype, "rimColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('outline')
    ], MToonMaterial.prototype, "outlineColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "bumpScale", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "receiveShadowRate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "shadingGradeRate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "shadeShift", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "shadeToony", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "lightColorAttenuation", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "indirectLightIntensity", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "rimLightingMix", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "rimFresnelPower", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "rimLift", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "outlineWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "outlineScaledMaxDistance", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "outlineLightingMix", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "uvAnimationScrollX", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "uvAnimationScrollY", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "uvAnimationRotation", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('alphaTest')
    ], MToonMaterial.prototype, "_alphaTest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "alphaTest", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "alphaBlend", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])('debugMode')
    ], MToonMaterial.prototype, "_debugMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "debugMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineColorMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "cullMode", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["serialize"])()
    ], MToonMaterial.prototype, "_outlineCullMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_9__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineCullMode", void 0);
    return MToonMaterial;
}(_babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_6__["PushMaterial"]));



/***/ }),

/***/ "./src/mtoon-outline-renderer.ts":
/*!***************************************!*\
  !*** ./src/mtoon-outline-renderer.ts ***!
  \***************************************/
/*! exports provided: MToonOutlineRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MToonOutlineRenderer", function() { return MToonOutlineRenderer; });
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
/* harmony import */ var _babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/sceneComponent */ "./node_modules/@babylonjs/core/sceneComponent.js");
/* harmony import */ var _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Engines/constants */ "./node_modules/@babylonjs/core/Engines/constants.js");



var BASE_NAME = 'MToonOutline';
/**
 * MToonMaterial を別のパスで描画するレンダラ
 * @see OutlineRenderer
 */
var MToonOutlineRenderer = /** @class */ (function () {
    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    function MToonOutlineRenderer(scene, material) {
        this.scene = scene;
        this.material = material;
        this._savedDepthWrite = false;
        this.name = BASE_NAME + "_" + material.name + "_" + MToonOutlineRenderer.rendererId++;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
    }
    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    MToonOutlineRenderer.prototype.register = function () {
        this.scene._beforeRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_1__["SceneComponentConstants"].STEP_BEFORERENDERINGMESH_OUTLINE, this, this._beforeRenderingMesh);
        this.scene._afterRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_1__["SceneComponentConstants"].STEP_AFTERRENDERINGMESH_OUTLINE, this, this._afterRenderingMesh);
    };
    /**
     * @inheritdoc
     */
    MToonOutlineRenderer.prototype.rebuild = function () {
        // Nothing to do here.
    };
    /**
     * @inheritdoc
     */
    MToonOutlineRenderer.prototype.dispose = function () {
        // Nothing to do here
    };
    /**
     * アウトラインを描画する
     */
    MToonOutlineRenderer.prototype.render = function (mesh, subMesh, batch, useOverlay) {
        if (useOverlay === void 0) { useOverlay = false; }
        var effect = subMesh.effect;
        if (!effect || !effect.isReady() || !this.scene.activeCamera) {
            return;
        }
        var ownerMesh = subMesh.getMesh();
        var replacementMesh = ownerMesh._internalAbstractMeshDataInfo._actAsRegularMesh ? ownerMesh : null;
        var renderingMesh = subMesh.getRenderingMesh();
        var effectiveMesh = replacementMesh ? replacementMesh : renderingMesh;
        this.material.applyOutlineCullMode();
        this._engine.enableEffect(effect);
        renderingMesh._bind(subMesh, effect, this.material.fillMode);
        this._engine.setZOffset(-1);
        // レンダリング実行
        if (_babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_0__["Engine"].Version.startsWith('4.0') || _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_0__["Engine"].Version.startsWith('4.1')) {
            // for 4.0, 4.1
            renderingMesh._processRendering(subMesh, effect, this.material.fillMode, batch, this.isHardwareInstancedRendering(subMesh, batch), function (isInstance, world, effectiveMaterial) {
                effectiveMaterial.bindForSubMesh(world, mesh, subMesh);
                effect.setMatrix('world', world);
                effect.setFloat('isOutline', 1.0);
            }, this.material);
        }
        else {
            // for 4.2.0-alpha.0 +
            renderingMesh._processRendering(effectiveMesh, subMesh, effect, this.material.fillMode, batch, this.isHardwareInstancedRendering(subMesh, batch), function (isInstance, world, effectiveMaterial) {
                effectiveMaterial.bindForSubMesh(world, mesh, subMesh);
                effect.setMatrix('world', world);
                effect.setFloat('isOutline', 1.0);
            }, this.material);
        }
        this._engine.setZOffset(0);
        this.material.restoreOutlineCullMode();
    };
    /**
     * このメッシュを描画する前に実行されるコールバック
     */
    MToonOutlineRenderer.prototype._beforeRenderingMesh = function (mesh, subMesh, batch) {
        this._savedDepthWrite = this._engine.getDepthWrite();
        if (!this.willRender(subMesh)) {
            return;
        }
        var material = subMesh.getMaterial();
        if (material.needAlphaBlendingForMesh(mesh)) {
            this._engine.cacheStencilState();
            // Draw only to stencil buffer for the original mesh
            // The resulting stencil buffer will be used so the outline is not visible inside the mesh when the mesh is transparent
            this._engine.setDepthWrite(false);
            this._engine.setColorWrite(false);
            this._engine.setStencilBuffer(true);
            this._engine.setStencilOperationPass(_babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].REPLACE);
            this._engine.setStencilFunction(_babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ALWAYS);
            this._engine.setStencilMask(MToonOutlineRenderer._StencilReference);
            this._engine.setStencilFunctionReference(MToonOutlineRenderer._StencilReference);
            this.render(subMesh.getRenderingMesh(), subMesh, batch, /* This sets offset to 0 */ true);
            this._engine.setColorWrite(true);
            this._engine.setStencilFunction(_babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].NOTEQUAL);
        }
        // 深度ナシで後ろに描画
        this._engine.setDepthWrite(false);
        this.render(subMesh.getRenderingMesh(), subMesh, batch);
        this._engine.setDepthWrite(this._savedDepthWrite);
        if (material.needAlphaBlendingForMesh(mesh)) {
            this._engine.restoreStencilState();
        }
    };
    /**
     * このメッシュを描画した後に実行されるコールバック
     */
    MToonOutlineRenderer.prototype._afterRenderingMesh = function (mesh, subMesh, batch) {
        if (!this.willRender(subMesh)) {
            return;
        }
        if (this._savedDepthWrite) {
            // 深度アリで再度書き込む
            this._engine.setDepthWrite(true);
            this._engine.setColorWrite(false);
            this.render(subMesh.getRenderingMesh(), subMesh, batch);
            this._engine.setColorWrite(true);
        }
    };
    /**
     * インスタンシングを行うかどうか
     */
    MToonOutlineRenderer.prototype.isHardwareInstancedRendering = function (subMesh, batch) {
        if (!this._engine.getCaps().instancedArrays) {
            return false;
        }
        var hasThinInstances = false;
        // from 4.2.0
        hasThinInstances = subMesh.getRenderingMesh().hasThinInstances;
        return (batch.visibleInstances[subMesh._id] !== null)
            && (typeof batch.visibleInstances[subMesh._id] !== 'undefined')
            || hasThinInstances;
    };
    /**
    * このメッシュでアウトラインを描画するかどうか
    */
    MToonOutlineRenderer.prototype.willRender = function (subMesh) {
        var material = subMesh.getMaterial();
        if (!material || material.getClassName() !== 'MToonMaterial' || material.getOutlineRendererName() !== this.name) {
            // このコンポーネントの Material ではない
            return false;
        }
        return true;
    };
    /**
     * Stencil value used to avoid outline being seen within the mesh when the mesh is transparent
     */
    MToonOutlineRenderer._StencilReference = 0x04;
    MToonOutlineRenderer.rendererId = 0;
    return MToonOutlineRenderer;
}());



/***/ }),

/***/ "./src/shaders/bump-fragment.frag":
/*!****************************************!*\
  !*** ./src/shaders/bump-fragment.frag ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// replace vBumpUV to mainUv\r\nvec2 uvOffset = vec2(0.0, 0.0);\r\n\r\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\r\n    #ifdef NORMALXYSCALE\r\n        float normalScale = 1.0;\r\n    #elif defined(BUMP)\r\n        float normalScale = vBumpInfos.y;\r\n    #else\r\n        float normalScale = 1.0;\r\n    #endif\r\n\r\n    #if defined(TANGENT) && defined(NORMAL)\r\n        mat3 TBN = vTBN;\r\n    #elif defined(BUMP)\r\n        mat3 TBN = cotangent_frame(normalW * normalScale, vPositionW, mainUv);\r\n    #else\r\n        mat3 TBN = cotangent_frame(normalW * normalScale, vPositionW, vDetailUV, vec2(1., 1.));\r\n    #endif\r\n#elif defined(ANISOTROPIC)\r\n    #if defined(TANGENT) && defined(NORMAL)\r\n        mat3 TBN = vTBN;\r\n    #else\r\n        mat3 TBN = cotangent_frame(normalW, vPositionW, vMainUV1, vec2(1., 1.));\r\n    #endif\r\n#endif\r\n\r\n#ifdef PARALLAX\r\n    mat3 invTBN = transposeMat3(TBN);\r\n\r\n    #ifdef PARALLAXOCCLUSION\r\n        uvOffset = parallaxOcclusion(invTBN * -viewDirectionW, invTBN * normalW, mainUv, vBumpInfos.z);\r\n    #else\r\n        uvOffset = parallaxOffset(invTBN * viewDirectionW, vBumpInfos.z);\r\n    #endif\r\n#endif\r\n\r\n#ifdef DETAIL\r\n    vec4 detailColor = texture2D(detailSampler, vDetailUV + uvOffset);\r\n    vec2 detailNormalRG = detailColor.wy * 2.0 - 1.0;\r\n    float detailNormalB = sqrt(1. - saturate(dot(detailNormalRG, detailNormalRG)));\r\n    vec3 detailNormal = vec3(detailNormalRG, detailNormalB);\r\n#endif\r\n\r\n#ifdef BUMP\r\n    #ifdef OBJECTSPACE_NORMALMAP\r\n        normalW = normalize(texture2D(bumpSampler, mainUv).xyz  * 2.0 - 1.0);\r\n        normalW = normalize(mat3(normalMatrix) * normalW);\r\n    #elif !defined(DETAIL)\r\n        normalW = perturbNormal(TBN, mainUv + uvOffset);\r\n    #else\r\n        vec3 bumpNormal = texture2D(bumpSampler, mainUv + uvOffset).xyz * 2.0 - 1.0;\r\n        // Reference for normal blending: https://blog.selfshadow.com/publications/blending-in-detail/\r\n        #if DETAIL_NORMALBLENDMETHOD == 0 // whiteout\r\n            detailNormal.xy *= vDetailInfos.z;\r\n            vec3 blendedNormal = normalize(vec3(bumpNormal.xy + detailNormal.xy, bumpNormal.z * detailNormal.z));\r\n        #elif DETAIL_NORMALBLENDMETHOD == 1 // RNM\r\n            detailNormal.xy *= vDetailInfos.z;\r\n            bumpNormal += vec3(0.0, 0.0, 1.0);\r\n            detailNormal *= vec3(-1.0, -1.0, 1.0);\r\n            vec3 blendedNormal = bumpNormal * dot(bumpNormal, detailNormal) / bumpNormal.z - detailNormal;\r\n        #endif\r\n        normalW = perturbNormalBase(TBN, blendedNormal, vBumpInfos.y);\r\n    #endif\r\n#elif defined(DETAIL)\r\n        detailNormal.xy *= vDetailInfos.z;\r\n        normalW = perturbNormalBase(TBN, detailNormal, vDetailInfos.z);\r\n#endif\r\n");

/***/ }),

/***/ "./src/shaders/fragment-declaration.frag":
/*!***********************************************!*\
  !*** ./src/shaders/fragment-declaration.frag ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("uniform mat4 viewProjection;\r\nuniform mat4 view;\r\n\r\n// Colors\r\nuniform vec4 vDiffuseColor;\r\nuniform vec3 vEmissiveColor;\r\nuniform vec3 vShadeColor;\r\nuniform vec3 vRimColor;\r\nuniform vec4 vOutlineColor;\r\n\r\n// Samplers\r\n#ifdef DIFFUSE\r\nuniform vec2 vDiffuseInfos;\r\n#endif\r\n\r\n#ifdef EMISSIVE\r\nuniform vec2 vEmissiveInfos;\r\n#endif\r\n\r\n#ifdef BUMP\r\nuniform vec3 vBumpInfos;\r\nuniform vec2 vTangentSpaceParams;\r\n#endif\r\n\r\n#ifdef SHADE\r\nuniform vec2 vShadeInfos;\r\n#endif\r\n\r\n#ifdef RECEIVE_SHADOW\r\nuniform vec2 vReceiveShadowInfos;\r\n#endif\r\n\r\n#ifdef SHADING_GRADE\r\nuniform vec2 vShadingGradeInfos;\r\n#endif\r\n\r\n#ifdef RIM\r\nuniform vec2 vRimInfos;\r\n#endif\r\n\r\n#ifdef MATCAP\r\nuniform vec2 vMatCapInfos;\r\n#endif\r\n\r\n#ifdef OUTLINE_WIDTH\r\nuniform vec2 vOutlineWidthInfos;\r\n#endif\r\n\r\n#ifdef UV_ANIMATION_MASK\r\nuniform vec2 vUvAnimationMaskInfos;\r\n#endif\r\n\r\n// MToon params\r\nuniform float shadingGradeRate;\r\nuniform float receiveShadowRate;\r\nuniform float shadeShift;\r\nuniform float shadeToony;\r\nuniform float lightColorAttenuation;\r\nuniform float indirectLightIntensity;\r\nuniform float rimLightingMix;\r\nuniform float rimFresnelPower;\r\nuniform float rimLift;\r\nuniform float outlineWidth;\r\nuniform float outlineScaledMaxDistance;\r\nuniform float outlineLightingMix;\r\nuniform float uvAnimationScrollX;\r\nuniform float uvAnimationScrollY;\r\nuniform float uvAnimationRotation;\r\n");

/***/ }),

/***/ "./src/shaders/light-fragment.frag":
/*!*****************************************!*\
  !*** ./src/shaders/light-fragment.frag ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef LIGHT{X}\r\n    #ifdef SHADOW{X}\r\n        #ifdef SHADOWCLOSEESM{X}\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowWithCloseESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadowWithCloseESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWESM{X})\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowWithESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadowWithESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWPOISSON{X})\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadowWithPoissonSampling(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWPCF{X})\r\n            #if defined(SHADOWLOWQUALITY{X})\r\n                shadow = computeShadowWithPCF1(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #elif defined(SHADOWMEDIUMQUALITY{X})\r\n                shadow = computeShadowWithPCF3(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #else\r\n                shadow = computeShadowWithPCF5(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWPCSS{X})\r\n            #if defined(SHADOWLOWQUALITY{X})\r\n                shadow = computeShadowWithPCSS16(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #elif defined(SHADOWMEDIUMQUALITY{X})\r\n                shadow = computeShadowWithPCSS32(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #else\r\n                shadow = computeShadowWithPCSS64(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #else\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadow(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #endif\r\n    #else\r\n        shadow = 1.;\r\n    #endif\r\n\r\n    // ここで MToon のライティングを適用\r\n    #ifdef SPOTLIGHT{X}\r\n        lightDirection = computeSpotLightDirection(light{X}.vLightData);\r\n    #elif defined(HEMILIGHT{X})\r\n        lightDirection = computeHemisphericLightDirection(light{X}.vLightData, normalW.xyz);\r\n    #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})\r\n        lightDirection = computeLightDirection(light{X}.vLightData);\r\n    #endif\r\n    mtoonDiffuse = computeMToonDiffuseLighting(viewDirectionW.xyz, normalW.xyz, mainUv, lightDirection, light{X}.vLightDiffuse.rgba, shadow);\r\n    diffuseBase += mtoonDiffuse.rgb;\r\n    alpha = min(alpha, mtoonDiffuse.a);\r\n    #if defined(ALPHATEST) && ALPHATEST\r\n        alpha = (alpha - alphaCutOff) / max(fwidth(alpha), EPS_COL) + 0.5; // Alpha to Coverage\r\n        if (alpha < alphaCutOff) {\r\n            discard;\r\n        }\r\n        alpha = 1.0; // Discarded, otherwise it should be assumed to have full opacity\r\n    #else\r\n        if (alpha - 0.0001 < 0.000) { // Slightly improves rendering with layered transparency\r\n            discard;\r\n        }\r\n    #endif\r\n#endif\r\n");

/***/ }),

/***/ "./src/shaders/mtoon.frag":
/*!********************************!*\
  !*** ./src/shaders/mtoon.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#include<__decl__mtoonFragment>\r\n\r\n#if defined(BUMP) || !defined(NORMAL) || (defined(ALPHATEST) && ALPHATEST)\r\n#extension GL_OES_standard_derivatives : enable\r\n#endif\r\n\r\n#ifdef LOGARITHMICDEPTH\r\n#extension GL_EXT_frag_depth : enable\r\n#endif\r\n\r\n// Constants\r\n#define RECIPROCAL_PI2 0.15915494\r\n#define PI_2 6.28318530718\r\n#define EPS_COL 0.00001\r\n\r\nuniform vec3 vEyePosition;\r\nuniform vec3 vEyeUp;\r\nuniform vec3 vAmbientColor;\r\nuniform float aspect;\r\nuniform float isOutline;\r\nuniform vec4 time;\r\n\r\n// Input\r\nvarying vec3 vPositionW;\r\n\r\n#ifdef NORMAL\r\nvarying vec3 vNormalW;\r\n#endif\r\n\r\n#ifdef MAINUV1\r\n    varying vec2 vMainUV1;\r\n#endif\r\n\r\n#ifdef MAINUV2\r\n    varying vec2 vMainUV2;\r\n#endif\r\n\r\n// Helper functions\r\n#include<helperFunctions>\r\n\r\n// Lights\r\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\r\n\r\n#include<lightsFragmentFunctions>\r\n#include<shadowsFragmentFunctions>\r\n\r\n// Samplers\r\n#ifdef DIFFUSE\r\n    #if DIFFUSEDIRECTUV == 1\r\n        #define vDiffuseUV vMainUV1\r\n    #elif DIFFUSEDIRECTUV == 2\r\n        #define vDiffuseUV vMainUV2\r\n    #else\r\n        varying vec2 vDiffuseUV;\r\n    #endif\r\n    uniform sampler2D diffuseSampler;\r\n#endif\r\n\r\n#ifdef EMISSIVE\r\n    #if EMISSIVEDIRECTUV == 1\r\n        #define vEmissiveUV vMainUV1\r\n    #elif EMISSIVEDIRECTUV == 2\r\n        #define vEmissiveUV vMainUV2\r\n    #else\r\n        varying vec2 vEmissiveUV;\r\n    #endif\r\n    uniform sampler2D emissiveSampler;\r\n#endif\r\n\r\n#ifdef ALPHATEST\r\n     uniform float alphaCutOff;\r\n#endif\r\n\r\n#ifdef SHADE\r\n    uniform sampler2D shadeSampler;\r\n    #if SHADEDIRECTUV == 1\r\n        #define vShadeUV vMainUV1\r\n    #elif SHADEDIRECTUV == 2\r\n        #define vShadeUV vMainUV2\r\n    #else\r\n        varying vec2 vShadeUV;\r\n    #endif\r\n#endif\r\n#ifdef RECEIVE_SHADOW\r\n    uniform sampler2D receiveShadowSampler;\r\n    #if RECEIVE_SHADOWDIRECTUV == 1\r\n        #define vReceiveShadowUV vMainUV1\r\n    #elif RECEIVE_SHADOWDIRECTUV == 2\r\n        #define vReceiveShadowUV vMainUV2\r\n    #else\r\n        varying vec2 vReceiveShadowUV;\r\n    #endif\r\n#endif\r\n#ifdef SHADING_GRADE\r\n    uniform sampler2D shadingGradeSampler;\r\n    #if SHADING_GRADEDIRECTUV == 1\r\n        #define vShadingGradeUV vMainUV1\r\n    #elif SHADING_GRADEDIRECTUV == 2\r\n        #define vShadingGradeUV vMainUV2\r\n    #else\r\n        varying vec2 vShadingGradeUV;\r\n    #endif\r\n#endif\r\n#ifdef RIM\r\n    uniform sampler2D rimSampler;\r\n    #if RIMDIRECTUV == 1\r\n        #define vRimUV vMainUV1\r\n    #elif RIMDIRECTUV == 2\r\n        #define vRimUV vMainUV2\r\n    #else\r\n        varying vec2 vRimUV;\r\n    #endif\r\n#endif\r\n#ifdef MATCAP\r\n    uniform sampler2D matCapSampler;\r\n    #if MATCAPDIRECTUV == 1\r\n        #define vMatCapUV vMainUV1\r\n    #elif MATCAPDIRECTUV == 2\r\n        #define vMatCapUV vMainUV2\r\n    #else\r\n        varying vec2 vMatCapUV;\r\n    #endif\r\n#endif\r\n#ifdef OUTLINE_WIDTH\r\n    uniform sampler2D outlineWidthSampler;\r\n    #if OUTLINE_WIDTHDIRECTUV == 1\r\n        #define vOutlineWidthUV vMainUV1\r\n    #elif OUTLINE_WIDTHDIRECTUV == 2\r\n        #define vOutlineWidthUV vMainUV2\r\n    #else\r\n        varying vec2 vOutlineWidthUV;\r\n    #endif\r\n#endif\r\n#ifdef UV_ANIMATION_MASK\r\n    uniform sampler2D uvAnimationMaskSampler;\r\n    #if UV_ANIMATION_MASKDIRECTUV == 1\r\n        #define vUvAnimationMaskUV vMainUV1\r\n    #elif UV_ANIMATION_MASKDIRECTUV == 2\r\n        #define vUvAnimationMaskUV vMainUV2\r\n    #else\r\n        varying vec2 vUvAnimationMaskUV;\r\n    #endif\r\n#endif\r\n\r\n/**\r\n* DirectionalLight, PointLight の角度を計算\r\n*/\r\nvec3 computeLightDirection(vec4 lightData) {\r\n      return normalize(mix(lightData.xyz - vPositionW, -lightData.xyz, lightData.w));\r\n}\r\n\r\n/**\r\n* SpotLight の角度を計算\r\n*/\r\nvec3 computeSpotLightDirection(vec4 lightData) {\r\n     return normalize(lightData.xyz - vPositionW);\r\n}\r\n\r\n/**\r\n* HemisphericLight の角度を計算\r\n*/\r\nvec3 computeHemisphericLightDirection(vec4 lightData, vec3 vNormal) {\r\n     return normalize(lightData.xyz);\r\n}\r\n\r\n/**\r\n* MToon シェーダーの陰実装\r\n*/\r\nvec4 computeMToonDiffuseLighting(vec3 worldView, vec3 worldNormal, vec2 mainUv, vec3 lightDirection, vec4 lightDiffuse, float shadowAttenuation) {\r\n    float _receiveShadow = receiveShadowRate;\r\n#ifdef RECEIVE_SHADOW\r\n    _receiveShadow = _receiveShadow * texture2D(receiveShadowSampler, mainUv).r * vReceiveShadowInfos.y;\r\n#endif\r\n\r\n    float _shadingGrade = 0.0;\r\n#ifdef SHADING_GRADE\r\n    _shadingGrade = 1.0 - texture2D(shadingGradeSampler, mainUv).r * vShadingGradeInfos.y;\r\n#endif\r\n    _shadingGrade = 1.0 - shadingGradeRate * _shadingGrade;\r\n\r\n    // Lighting\r\n    vec3 _lightColor = lightDiffuse.rgb * step(0.5, length(lightDirection)); // length(lightDir) is zero if directional light is disabled.\r\n    float _dotNL = dot(lightDirection, worldNormal);\r\n#ifdef MTOON_FORWARD_ADD\r\n    float _lightAttenuation = 1.0;\r\n#else\r\n    float _lightAttenuation = shadowAttenuation * mix(1.0, shadowAttenuation, _receiveShadow);\r\n#endif\r\n\r\n    // lighting intensity\r\n    float _lightIntensity = _dotNL;\r\n    _lightIntensity = _lightIntensity * 0.5 + 0.5; // from [-1, +1] to [0, 1]\r\n    _lightIntensity = _lightIntensity * _lightAttenuation; // receive shadow\r\n    _lightIntensity = _lightIntensity * _shadingGrade; // darker\r\n    _lightIntensity = _lightIntensity * 2.0 - 1.0; // from [0, 1] to [-1, +1]\r\n    // tooned. mapping from [minIntensityThreshold, maxIntensityThreshold] to [0, 1]\r\n    float _maxIntensityThreshold = mix(1.0, shadeShift, shadeToony);\r\n    float _minIntensityThreshold = shadeShift;\r\n    _lightIntensity = clamp((_lightIntensity - _minIntensityThreshold) / max(EPS_COL, (_maxIntensityThreshold - _minIntensityThreshold)), 0.0, 1.0);\r\n\r\n    // Albedo color\r\n    vec3 _shade = vShadeColor;\r\n#ifdef SHADE\r\n    _shade = _shade * texture2D(shadeSampler, mainUv).rgb * vShadeInfos.y;\r\n#endif\r\n\r\n    vec4 _lit = vDiffuseColor;\r\n#ifdef DIFFUSE\r\n    _lit = _lit * texture2D(diffuseSampler, mainUv) * vDiffuseInfos.y;\r\n#endif\r\n    vec3 _col = mix(_shade.rgb, _lit.rgb, _lightIntensity);\r\n\r\n    // Direct Light\r\n    vec3 _lighting = _lightColor;\r\n    _lighting = mix(_lighting, vec3(max(EPS_COL, max(_lighting.x, max(_lighting.y, _lighting.z)))), lightColorAttenuation); // color atten\r\n#ifdef MTOON_FORWARD_ADD\r\n    _lighting *= 0.5; // darken if additional light\r\n    _lighting *= min(0, dotNL) + 1.0; // darken dotNL < 0 area by using half lambert\r\n    _lighting *= shadowAttenuation; // darken if receiving shadow\r\n#else\r\n    // base light does not darken.\r\n#endif\r\n    _col *= _lighting;\r\n\r\n    // Indirect Light\r\n#ifdef MTOON_FORWARD_ADD\r\n#else\r\n    vec3 _toonedGI = vAmbientColor.rgb; // TODO: GI\r\n    vec3 _indirectLighting = mix(_toonedGI, vAmbientColor.rgb, indirectLightIntensity);\r\n    _indirectLighting = mix(_indirectLighting, vec3(max(EPS_COL, max(_indirectLighting.x, max(_indirectLighting.y, _indirectLighting.z)))), lightColorAttenuation); // color atten\r\n    _col += _indirectLighting * _lit.rgb;\r\n\r\n    _col = min(_col.rgb, _lit.rgb); // comment out if you want to PBR absolutely.\r\n#endif\r\n\r\n    // parametric rim lighting\r\n#ifdef MTOON_FORWARD_ADD\r\n    vec3 _staticRimLighting = vec3(0.0);\r\n    vec3 _mixedRimLighting = _lighting;\r\n#else\r\n    vec3 _staticRimLighting = vec3(1.0);\r\n    vec3 _mixedRimLighting = _lighting + _indirectLighting;\r\n#endif\r\n    vec3 _rimLighting = mix(_staticRimLighting, _mixedRimLighting, rimLightingMix);\r\n    vec3 _rimColor = vRimColor.rgb;\r\n#ifdef RIM\r\n    _rimColor = _rimColor * texture2D(rimSampler, vRimUV + mainUv).rgb * vRimInfos.y;\r\n#endif\r\n    vec3 _rim = pow(clamp(1.0 - dot(worldNormal, worldView) + rimLift, 0.0, 1.0), rimFresnelPower) * _rimColor.rgb;\r\n    _col += mix(_rim * _rimLighting, vec3(0.0), isOutline);\r\n\r\n    // additive matcap\r\n#ifdef MTOON_FORWARD_ADD\r\n#else\r\n#ifdef MATCAP\r\n    vec3 _worldViewUp = normalize(vEyeUp - worldView * dot(worldView, vEyeUp));\r\n    vec3 _worldViewRight = normalize(cross(worldView, _worldViewUp));\r\n    vec2 _matCapUv = vec2(dot(_worldViewRight, worldNormal), dot(_worldViewUp, worldNormal)) * 0.5 + 0.5;\r\n    // uv.y is reversed\r\n    _matCapUv.y = (1.0 - _matCapUv.y);\r\n    vec3 _matCapLighting = texture2D(matCapSampler, _matCapUv).rgb * vMatCapInfos.y;\r\n    _col += mix(_matCapLighting, vec3(0.0), isOutline);\r\n#endif\r\n#endif\r\n\r\n    // Emission\r\n#ifdef MTOON_FORWARD_ADD\r\n#else\r\n    vec3 _emission = vEmissiveColor.rgb;\r\n#ifdef EMISSIVE\r\n     _emission *= texture2D(emissiveSampler, mainUv).rgb * vEmissiveInfos.y;\r\n#endif\r\n     _col += mix(_emission, vec3(0.0), isOutline);\r\n#endif\r\n\r\n    float _alpha = 1.0;\r\n\r\n#if defined(ALPHABLEND) || defined(ALPHATEST)\r\n    _alpha = mix(_lit.a, _lit.a * vOutlineColor.a, isOutline);\r\n#endif\r\n\r\n    // outline\r\n#ifdef MTOON_OUTLINE_COLOR_FIXED\r\n    _col = mix(_col, vOutlineColor.rgb, isOutline);\r\n#elif defined(MTOON_OUTLINE_COLOR_MIXED)\r\n    _col = mix(_col, vOutlineColor.rgb * mix(vec3(1.0), _col, outlineLightingMix), isOutline);\r\n#else\r\n#endif\r\n\r\n    // debug\r\n#ifdef MTOON_DEBUG_NORMAL\r\n    #ifdef MTOON_FORWARD_ADD\r\n        return vec4(0.0);\r\n    #else\r\n        return vec4(worldNormal * 0.5 + 0.5, _lit.a);\r\n    #endif\r\n#elif defined(MTOON_DEBUG_LITSHADERATE)\r\n    #ifdef MTOON_FORWARD_ADD\r\n        return vec4(0.0);\r\n    #else\r\n        return vec4(_lightIntensity, _lit.a);\r\n    #endif\r\n#endif\r\n\r\n    return vec4(_col, _alpha);\r\n}\r\n\r\n#include<bumpFragmentMainFunctions>\r\n#include<bumpFragmentFunctions>\r\n#include<clipPlaneFragmentDeclaration>\r\n#include<logDepthDeclaration>\r\n#include<fogFragmentDeclaration>\r\n\r\nvoid main(void) {\r\n#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE\r\n    #ifdef MTOON_OUTLINE_WIDTH_WORLD\r\n    #elif defined(MTOON_OUTLINE_WIDTH_SCREEN)\r\n    #else\r\n        discard;\r\n    #endif\r\n#endif\r\n\r\n#include<clipPlaneFragment>\r\n\r\n    vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\r\n\r\n    // Base color\r\n    vec4 baseColor = vec4(1., 1., 1., 1.);\r\n    vec3 diffuseColor = vec3(1., 1., 1.);\r\n\r\n    // Alpha\r\n    float alpha = 1.0;\r\n\r\n    // Bump\r\n#ifdef NORMAL\r\n     vec3 normalW = normalize(vNormalW);\r\n#else\r\n     vec3 normalW = normalize(-cross(dFdx(vPositionW), dFdy(vPositionW)));\r\n#endif\r\n\r\n#include<depthPrePass>\r\n\r\n    // Ambient color\r\n    vec3 baseAmbientColor = vec3(1., 1., 1.);\r\n    float glossiness = 0.;\r\n\r\n    // Lighting\r\n    vec3 diffuseBase = vec3(0., 0., 0.);\r\n    lightingInfo info;\r\n    float shadow = 1.;\r\n    vec3 lightDirection = vec3(0.0, 1.0, 0.0);\r\n    vec4 mtoonDiffuse = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n    // MToon UV\r\n    // 全てのテクスチャは diffuse(_MainTex) の UV 情報を利用する\r\n    vec2 mainUv = vec2(0.0);\r\n#ifdef DIFFUSE\r\n    mainUv += vDiffuseUV;\r\n#elif defined(MAINUV1)\r\n    mainUv += vMainUV1;\r\n#elif defined(MAINUV2)\r\n    mainUv += vMainUV2;\r\n#endif\r\n\r\n    // uv anim\r\n    float uvAnim = time.y;\r\n#ifdef UV_ANIMATION_MASK\r\n    uvAnim *= texture2D(uvAnimationMaskSampler, mainUv).r;\r\n#endif\r\n    // translate uv in bottom-left origin coordinates.\r\n    // uv is reversed\r\n    mainUv += vec2(-uvAnimationScrollX, -uvAnimationScrollY) * uvAnim;\r\n    // rotate uv counter-clockwise around (0.5, 0.5) in bottom-left origin coordinates.\r\n    float rotateRad = uvAnimationRotation * PI_2 * uvAnim;\r\n    vec2 rotatePivot = vec2(0.5, 0.5);\r\n    mainUv = mat2(cos(rotateRad), -sin(rotateRad), sin(rotateRad), cos(rotateRad)) * (mainUv - rotatePivot) + rotatePivot;\r\n\r\n#include<mtoonBumpFragment>\r\n\r\n#ifdef TWOSIDEDLIGHTING\r\n    normalW = gl_FrontFacing ? normalW : -normalW;\r\n#endif\r\n\r\n// 通常の lightFragment ではなく、自前実装の mtoonLightFragment を読み込む\r\n#include<mtoonLightFragment>[0..maxSimultaneousLights]\r\n\r\n    vec3 finalDiffuse = clamp(diffuseBase, 0.0, 1.0) * baseColor.rgb;\r\n\r\n    // Composition\r\n    vec4 color = vec4(finalDiffuse, clamp(alpha, 0.0, 1.0));\r\n\r\n    color.rgb = max(color.rgb, 0.);\r\n#include<logDepthFragment>\r\n#include<fogFragment>\r\n\r\n#ifdef PREMULTIPLYALPHA\r\n    // Convert to associative (premultiplied) format if needed.\r\n    color.rgb *= color.a;\r\n#endif\r\n\r\n    gl_FragColor = color;\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/mtoon.vert":
/*!********************************!*\
  !*** ./src/shaders/mtoon.vert ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// この include は特別で、 UboDeclaration または VertexDeclaration のどちらかに置換される\r\n// @see effect.ts\r\n#include<__decl__mtoonVertex>\r\n\r\n// 基本的に default.vertex.fx を踏襲している\r\n\r\n// Attributes\r\n\r\nattribute vec3 position;\r\n#ifdef NORMAL\r\nattribute vec3 normal;\r\n#endif\r\n#ifdef TANGENT\r\nattribute vec4 tangent;\r\n#endif\r\n#ifdef UV1\r\nattribute vec2 uv;\r\n#endif\r\n#ifdef UV2\r\nattribute vec2 uv2;\r\n#endif\r\n\r\n#include<helperFunctions>\r\n\r\n#include<bonesDeclaration>\r\n\r\n// Uniforms\r\n#include<instancesDeclaration>\r\n\r\n#ifdef MAINUV1\r\nvarying vec2 vMainUV1;\r\n#endif\r\n\r\n#ifdef MAINUV2\r\nvarying vec2 vMainUV2;\r\n#endif\r\n\r\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\r\nvarying vec2 vDiffuseUV;\r\n#endif\r\n\r\n#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0\r\nvarying vec2 vEmissiveUV;\r\n#endif\r\n\r\n#if defined(BUMP) && BUMPDIRECTUV == 0\r\nvarying vec2 vBumpUV;\r\n#endif\r\n\r\n// Output\r\nvarying vec3 vPositionW;\r\n#ifdef NORMAL\r\nvarying vec3 vNormalW;\r\n#endif\r\n\r\n#include<bumpVertexDeclaration>\r\n\r\n#include<clipPlaneVertexDeclaration>\r\n\r\n#include<fogVertexDeclaration>\r\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\r\n\r\n#include<morphTargetsVertexGlobalDeclaration>\r\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\r\n\r\n#include<logDepthDeclaration>\r\n\r\n\r\n// Additional Uniforms\r\n#if defined(SHADE) && SHADEDIRECTUV == 0\r\n    varying vec2 vShadeUV;\r\n#endif\r\n#if defined(RECEIVE_SHADOW) && RECEIVE_SHADOWDIRECTUV == 0\r\n    varying vec2 vReceiveShadowUV;\r\n#endif\r\n#if defined(SHADING_GRADE) && SHADING_GRADEDIRECTUV == 0\r\n    varying vec2 vShadingGradeUV;\r\n#endif\r\n#if defined(RIM) && RIMDIRECTUV == 0\r\n    varying vec2 vRimUV;\r\n#endif\r\n#if defined(MATCAP) && MATCAPDIRECTUV == 0\r\n    varying vec2 vMatCapUV;\r\n#endif\r\n#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0\r\n    varying vec2 vOutlineWidthUV;\r\n#endif\r\n#ifdef OUTLINE_WIDTH\r\n    uniform sampler2D outlineWidthSampler;\r\n#endif\r\n#if defined(UV_ANIMATION_MASK) && UV_ANIMATION_MASKDIRECTUV == 0\r\n    varying vec2 vUvAnimationMaskUV;\r\n#endif\r\n\r\nuniform float aspect;\r\nuniform float isOutline;\r\n\r\nvoid main(void) {\r\n\r\n    vec3 positionUpdated = position;\r\n#ifdef NORMAL\r\n    vec3 normalUpdated = normal;\r\n#endif\r\n#ifdef TANGENT\r\n    vec4 tangentUpdated = tangent;\r\n#endif\r\n\r\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\r\n\r\n#include<instancesVertex>\r\n#include<bonesVertex>\r\n\r\n    // Texture coordinates\r\n#ifndef UV1\r\n    vec2 uv = vec2(0., 0.);\r\n#endif\r\n#ifndef UV2\r\n    vec2 uv2 = vec2(0., 0.);\r\n#endif\r\n\r\n#ifdef MAINUV1\r\n    vMainUV1 = uv;\r\n#endif\r\n\r\n#ifdef MAINUV2\r\n    vMainUV2 = uv2;\r\n#endif\r\n\r\n    float outlineTex = 1.0;\r\n    if (isOutline == 1.0) {\r\n#ifdef OUTLINE_WIDTH\r\n    #if OUTLINE_WIDTHDIRECTUV == 0\r\n        if (vOutlineWidthInfos.x == 0.) {\r\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv, 1.0, 0.0));\r\n        } else {\r\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));\r\n        }\r\n    #elif defined(MAINUV1)\r\n        vec2 vOutlineWidthUV = vMainUV1;\r\n    #elif defined(MAINUV2)\r\n        vec2 vOutlineWidthUV = vMainUV2;\r\n    #else\r\n        vec2 vOutlineWidthUV = vec2(0., 0.);\r\n    #endif\r\n    outlineTex = texture2D(outlineWidthSampler, vOutlineWidthUV).r * vOutlineWidthInfos.y;\r\n#endif\r\n\r\n#if defined(MTOON_OUTLINE_WIDTH_WORLD) && defined(NORMAL)\r\n        // ワールド座標の normal 分だけ移動する\r\n        vec3 outlineOffset = normalize(finalWorld * vec4(normalUpdated, 1.0)).xyz * 0.01 * outlineWidth * outlineTex;\r\n        positionUpdated.xyz += outlineOffset;\r\n#endif\r\n    } // End isOutline == 1.0\r\n\r\n    vec4 vertex = vec4(1.0);\r\n#ifdef MULTIVIEW\r\n    if (gl_ViewID_OVR == 0u) {\r\n        vertex = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\r\n    } else {\r\n        vertex = viewProjectionR * finalWorld * vec4(positionUpdated, 1.0);\r\n    }\r\n#else\r\n    vertex = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\r\n#endif\r\n\r\n#if defined(MTOON_OUTLINE_WIDTH_SCREEN) && defined(NORMAL)\r\n    if (isOutline == 1.0) {\r\n        vec4 projectedNormal = normalize(viewProjection * finalWorld * vec4(normalUpdated, 1.0));\r\n        projectedNormal *= min(vertex.w, outlineScaledMaxDistance);\r\n        projectedNormal.x *= aspect;\r\n        vertex.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy * clamp(1.0 - abs(normalize(view * vec4(normalUpdated, 1.0)).z), 0.0, 1.0); // ignore offset when normal toward camera\r\n    }\r\n#endif\r\n\r\n    if (isOutline == 1.0) {\r\n        vertex.z += 1E-2 * vertex.w; // anti-artifact magic from three-vrm\r\n    }\r\n\r\n    gl_Position = vertex;\r\n\r\n    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);\r\n    vPositionW = vec3(worldPos);\r\n\r\n#ifdef NORMAL\r\n    mat3 normalWorld = mat3(finalWorld);\r\n\r\n    #ifdef NONUNIFORMSCALING\r\n        normalWorld = transposeMat3(inverseMat3(normalWorld));\r\n    #endif\r\n\r\n    vNormalW = normalize(normalWorld * normalUpdated);\r\n#endif\r\n\r\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\r\n    if (vDiffuseInfos.x == 0.)\r\n    {\r\n        vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0\r\n    if (vEmissiveInfos.x == 0.)\r\n    {\r\n        vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#if defined(BUMP) && BUMPDIRECTUV == 0\r\n    if (vBumpInfos.x == 0.)\r\n    {\r\n        vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#if defined(SHADE) && SHADEDIRECTUV == 0\r\n    if (vShadeInfos.x == 0.) {\r\n        vShadeUV = vec2(shadeMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vShadeUV = vec2(shadeMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(RECEIVE_SHADOW) && RECEIVE_SHADOWDIRECTUV == 0\r\n    if (vReceiveShadowInfos.x == 0.) {\r\n        vReceiveShadowUV = vec2(receiveShadowMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vReceiveShadowUV = vec2(receiveShadowMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(SHADING_GRADE) && SHADING_GRADEDIRECTUV == 0\r\n    if (vShadingGradeInfos.x == 0.) {\r\n        vShadingGradeUV = vec2(shadingGradeMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vShadingGradeUV = vec2(shadingGradeMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(RIM) && RIMDIRECTUV == 0\r\n    if (vRimInfos.x == 0.) {\r\n        vRimUV = vec2(rimMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vRimUV = vec2(rimMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(MATCAP) && MATCAPDIRECTUV == 0\r\n    if (vMatCapInfos.x == 0.) {\r\n        vMatCapUV = vec2(matCapMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vMatCapUV = vec2(matCapMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(UV_ANIMATION_MASK) && UV_ANIMATION_MASKDIRECTUV == 0\r\n    if (vUvAnimationMaskInfos.x == 0.) {\r\n        vUvAnimationMaskUV = vec2(uvAnimationMaskMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vUvAnimationMaskUV = vec2(uvAnimationMaskMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#include<bumpVertex>\r\n#include<clipPlaneVertex>\r\n#include<fogVertex>\r\n#include<shadowsVertex>[0..maxSimultaneousLights]\r\n\r\n#include<pointCloudVertex>\r\n#include<logDepthVertex>\r\n\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/ubo-declaration.vert":
/*!******************************************!*\
  !*** ./src/shaders/ubo-declaration.vert ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// include<__decl__mtoonVertex> または include<__decl__mtoonFragment> と書いた時に WebGL2 の場合展開される\r\n// @see effect.ts\r\n\r\nlayout(std140, column_major) uniform;\r\n\r\nuniform Material\r\n{\r\n    // Color & Texture\r\n    vec4 vDiffuseColor;\r\n    vec2 vDiffuseInfos;\r\n    mat4 diffuseMatrix;\r\n    vec4 vEmissiveColor;\r\n    vec2 vEmissiveInfos;\r\n    mat4 emissiveMatrix;\r\n    vec3 vBumpInfos;\r\n    mat4 bumpMatrix;\r\n    vec3 vShadeColor;\r\n    vec2 vShadeInfos;\r\n    mat4 shadeMatrix;\r\n    vec2 vReceiveShadowInfos;\r\n    mat4 receiveShadowMatrix;\r\n    vec2 vShadingGradeInfos;\r\n    mat4 shadingGradeMatrix;\r\n    vec3 vRimColor;\r\n    vec2 vRimInfos;\r\n    mat4 rimMatrix;\r\n    vec2 vMatCapInfos;\r\n    mat4 matCapMatrix;\r\n    vec4 vOutlineColor;\r\n    vec2 vOutlineWidthInfos;\r\n    mat4 outlineWidthMatrix;\r\n    vec2 vUvAnimationMaskInfos;\r\n    mat4 uvAnimationMaskMatrix;\r\n\r\n    // babylon specific\r\n    vec2 vTangentSpaceParams;\r\n    float pointSize;\r\n\r\n    // MToon params\r\n    float shadingGradeRate;\r\n    float receiveShadowRate;\r\n    float shadeShift;\r\n    float shadeToony;\r\n    float lightColorAttenuation;\r\n    float indirectLightIntensity;\r\n    float rimLightingMix;\r\n    float rimFresnelPower;\r\n    float rimLift;\r\n    float outlineWidth;\r\n    float outlineScaledMaxDistance;\r\n    float outlineLightingMix;\r\n    float uvAnimationScrollX;\r\n    float uvAnimationScrollY;\r\n    float uvAnimationRotation;\r\n};\r\n\r\n// babylon specific\r\nuniform Scene {\r\n    mat4 viewProjection;\r\n#ifdef MULTIVIEW\r\n    mat4 viewProjectionR;\r\n#endif\r\n    mat4 view;\r\n};\r\n");

/***/ }),

/***/ "./src/shaders/vertex-declaration.vert":
/*!*********************************************!*\
  !*** ./src/shaders/vertex-declaration.vert ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// Uniforms\r\nuniform mat4 viewProjection;\r\nuniform mat4 view;\r\nuniform float outlineWidth;\r\nuniform float outlineScaledMaxDistance;\r\nuniform float outlineLightingMix;\r\n\r\n#ifdef DIFFUSE\r\nuniform mat4 diffuseMatrix;\r\nuniform vec2 vDiffuseInfos;\r\n#endif\r\n\r\n#ifdef EMISSIVE\r\nuniform vec2 vEmissiveInfos;\r\nuniform mat4 emissiveMatrix;\r\n#endif\r\n\r\n#ifdef BUMP\r\nuniform vec3 vBumpInfos;\r\nuniform mat4 bumpMatrix;\r\n#endif\r\n\r\n#ifdef SHADE\r\nuniform vec2 vShadeInfos;\r\nuniform mat4 shadeMatrix;\r\n#endif\r\n\r\n#ifdef RECEIVE_SHADOW\r\nuniform vec2 vReceiveShadowInfos;\r\nuniform mat4 receiveShadowMatrix;\r\n#endif\r\n\r\n#ifdef SHADING_GRADE\r\nuniform vec2 vShadingGradeInfos;\r\nuniform mat4 shadingGradeMatrix;\r\n#endif\r\n\r\n#ifdef RIM\r\nuniform vec2 vRimInfos;\r\nuniform mat4 rimMatrix;\r\n#endif\r\n\r\n#ifdef MATCAP\r\nuniform vec2 vMatCapInfos;\r\nuniform mat4 matCapMatrix;\r\n#endif\r\n\r\n#ifdef OUTLINE_WIDTH\r\nuniform vec2 vOutlineWidthInfos;\r\nuniform mat4 outlineWidthMatrix;\r\n#endif\r\n\r\n#ifdef UV_ANIMATION_MASK\r\nuniform vec2 vUvAnimationMaskInfos;\r\nuniform mat4 uvAnimationMaskMatrix;\r\n#endif\r\n\r\n#ifdef POINTSIZE\r\nuniform float pointSize;\r\n#endif\r\n");

/***/ }),

/***/ "./src/test/index.ts":
/*!***************************!*\
  !*** ./src/test/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Cameras/arcRotateCamera */ "./node_modules/@babylonjs/core/Cameras/arcRotateCamera.js");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Lights/directionalLight */ "./node_modules/@babylonjs/core/Lights/directionalLight.js");
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "./node_modules/@babylonjs/core/Lights/hemisphericLight.js");
/* harmony import */ var _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Lights/pointLight */ "./node_modules/@babylonjs/core/Lights/pointLight.js");
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Lights/Shadows/shadowGenerator */ "./node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js");
/* harmony import */ var _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Materials/material */ "./node_modules/@babylonjs/core/Materials/material.js");
/* harmony import */ var _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/torusKnotBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Meshes/buffer */ "./node_modules/@babylonjs/core/Meshes/buffer.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _mtoon_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mtoon-material */ "./src/mtoon-material.ts");
/* harmony import */ var _babylonjs_core_Helpers_sceneHelpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babylonjs/core/Helpers/sceneHelpers */ "./node_modules/@babylonjs/core/Helpers/sceneHelpers.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babylonjs/inspector */ "./node_modules/@babylonjs/inspector/babylon.inspector.bundle.max.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_16__);

















function main() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var debugProperties, canvas, engine, scene, camera, directionalLight, hemisphericLight, pointLight, standardMaterialSphere, shadowCaster, shadowGenerator, mtoonMaterials, mat, mat, diffuse, bump, mat, mat, mat, mat, mat, diffuse, bump, mat, diffuse, bump, mat, diffuse, bump, mat, sphere;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debugProperties = getDebugProperties();
                    canvas = document.getElementById('main-canvas');
                    engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](canvas, true, {
                        alpha: false,
                        disableWebGL2Support: debugProperties.webgl1,
                    });
                    scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_13__["Scene"](engine);
                    camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__["ArcRotateCamera"]('MainCamera1', 0, 0, 3, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 1.5, 0), scene, true);
                    camera.lowerRadiusLimit = 0.1;
                    camera.upperRadiusLimit = 20;
                    camera.wheelDeltaPercentage = 0.01;
                    camera.setPosition(new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 1.5, -3));
                    camera.setTarget(new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 1.5, 0));
                    camera.attachControl(canvas);
                    scene.createDefaultEnvironment({
                        createGround: true,
                        createSkybox: false,
                        enableGroundMirror: false,
                        enableGroundShadow: false,
                    });
                    directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_3__["DirectionalLight"]('DirectionalLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](1, -0.5, 0.0), scene);
                    directionalLight.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](-50, 25, 0);
                    directionalLight.setEnabled(true);
                    hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__["HemisphericLight"]('HemisphericLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](-0.2, -0.8, -1), scene);
                    hemisphericLight.setEnabled(false);
                    pointLight = new _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_5__["PointLight"]('PointLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](0, 0, 1), scene);
                    pointLight.setEnabled(false);
                    standardMaterialSphere = _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__["SphereBuilder"].CreateSphere('StandardMaterialSphere1', {}, scene);
                    standardMaterialSphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](1.2, 1.2, 0);
                    standardMaterialSphere.receiveShadows = true;
                    shadowCaster = _babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_11__["TorusKnotBuilder"].CreateTorusKnot('ShadowCaster', {}, scene);
                    shadowCaster.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](-10.0, 5.0, 0.0);
                    shadowCaster.setEnabled(debugProperties.shadow);
                    if (debugProperties.shadow) {
                        shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__["ShadowGenerator"](1024, directionalLight);
                        shadowGenerator.addShadowCaster(shadowCaster);
                    }
                    mtoonMaterials = [];
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialDefault', scene);
                        mat.outlineWidthMode = 1;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialNormal', scene);
                        mat.outlineWidthMode = 1;
                        diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/Wk1cGEq.png', scene);
                        diffuse.uScale = 4;
                        diffuse.vScale = 4;
                        mat.diffuseTexture = diffuse;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0.871, 0.196, 0.416);
                        bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/wGyk6os.png', scene);
                        bump.uScale = 4;
                        bump.vScale = 4;
                        mat.bumpTexture = bump;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialTransparent', scene);
                        mat.outlineWidthMode = 1;
                        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
                        mat.diffuseTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
                        mat.diffuseTexture.hasAlpha = true;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.alphaBlend = true;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialTransparentCutout', scene);
                        mat.outlineWidthMode = 1;
                        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
                        mat.diffuseTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
                        mat.diffuseTexture.hasAlpha = true;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.alphaTest = true;
                        mat.alphaCutOff = 0.500;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialRim', scene);
                        mat.outlineWidthMode = 1;
                        mat.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0, 0, 0);
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0, 0, 0);
                        mat.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](1, 1, 1);
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialMatCap', scene);
                        // Textures from https://www.outworldz.com/cgi/free-seamless-textures.plx?c=UV%20Checker
                        mat.matCapTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('resources/matcap.png', scene, true, false);
                        mat.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0, 0, 0);
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0, 0, 0);
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialScroll', scene);
                        mat.outlineWidthMode = 1;
                        diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/Wk1cGEq.png', scene);
                        diffuse.uScale = 4;
                        diffuse.vScale = 4;
                        mat.diffuseTexture = diffuse;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0.5, 0.5, 0.5);
                        bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/wGyk6os.png', scene);
                        bump.uScale = 4;
                        bump.vScale = 4;
                        mat.bumpTexture = bump;
                        mat.uvAnimationScrollX = 0.5;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialScrollY', scene);
                        mat.outlineWidthMode = 1;
                        diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/Wk1cGEq.png', scene);
                        diffuse.uScale = 4;
                        diffuse.vScale = 4;
                        mat.diffuseTexture = diffuse;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0.5, 0.5, 0.5);
                        bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/wGyk6os.png', scene);
                        bump.uScale = 4;
                        bump.vScale = 4;
                        mat.bumpTexture = bump;
                        mat.uvAnimationScrollY = 0.5;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MtoonMaterialRotation', scene);
                        mat.outlineWidthMode = 1;
                        diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/Wk1cGEq.png', scene);
                        diffuse.uScale = 4;
                        diffuse.vScale = 4;
                        mat.diffuseTexture = diffuse;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Color3"](0.5, 0.5, 0.5);
                        bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_8__["Texture"]('http://i.imgur.com/wGyk6os.png', scene);
                        bump.uScale = 4;
                        bump.vScale = 4;
                        mat.bumpTexture = bump;
                        mat.uvAnimationRotation = 0.1;
                        mtoonMaterials.push(mat);
                    }
                    mtoonMaterials.forEach(function (mat, index) {
                        // MToonMaterial は glTF(右手座標) を考慮しているため、 CullMode をデフォルトから反転させる
                        mat.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__["Material"].CounterClockWiseSideOrientation;
                        mat.cullMode = 1;
                        mat.outlineCullMode = 2;
                        var sphere = _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__["SphereBuilder"].CreateSphere(mat.name + "_Sphere", {}, scene);
                        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](-1.2 * index, 1.2, 0);
                        sphere.receiveShadows = true;
                        sphere.material = mat;
                    });
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MToonMaterialNoNormal', scene);
                        mat.cullMode = 1;
                        mat.outlineCullMode = 2;
                        mat.outlineWidthMode = 1;
                        sphere = _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__["SphereBuilder"].CreateSphere('MToonMaterialNoNormal_Sphere', {}, scene);
                        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](2.4, 1.2, 0);
                        sphere.receiveShadows = true;
                        sphere.material = mat;
                        if (sphere.geometry) {
                            sphere.geometry.removeVerticesData(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_12__["VertexBuffer"].NormalKind);
                        }
                    }
                    if (!debugProperties.inspector) return [3 /*break*/, 2];
                    return [4 /*yield*/, scene.debugLayer.show({
                            globalRoot: document.getElementById('wrapper'),
                            handleResize: true,
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    engine.runRenderLoop(function () {
                        scene.render();
                        shadowCaster.rotate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"].Up(), 0.01);
                    });
                    window.addEventListener('resize', function () {
                        engine.resize();
                    });
                    window.currentScene = scene;
                    return [2 /*return*/];
            }
        });
    });
}
function getDebugProperties() {
    var href = window.location.href;
    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}
main().catch(function (reason) {
    console.error(reason);
});


/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map