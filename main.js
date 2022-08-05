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
 * @link https://doc.babylonjs.com/toolsAndResources/tools/inspector#extensibility
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
    /**
     * @inheritdoc
     */
    function MToonMaterialDefines(externalProperties) {
        var _this = _super.call(this, externalProperties) || this;
        /** @see light-fragment.frag */
        _this.CUSTOMUSERLIGHTING = true;
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
        _this.MAINUV3 = false;
        _this.MAINUV4 = false;
        _this.MAINUV5 = false;
        _this.MAINUV6 = false;
        _this.DIFFUSE = false;
        _this.DIFFUSEDIRECTUV = 0;
        _this.BAKED_VERTYEX_ANIMATION_TEXTURE = false;
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
        _this.PARALLAX = false;
        _this.PARALLAXOCCLUSION = false;
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
        // public SPECULARTERM = false;
        // public DIFFUSEFRESNEL = false;
        // public OPACITYFRESNEL = false;
        // public REFLECTIONFRESNEL = false;
        // public REFRACTIONFRESNEL = false;
        // public EMISSIVEFRESNEL = false;
        // public FRESNEL = false;
        _this.NORMAL = false;
        // public TANGENT = false;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.UV3 = false;
        _this.UV4 = false;
        _this.UV5 = false;
        _this.UV6 = false;
        _this.VERTEXCOLOR = false;
        _this.VERTEXALPHA = false;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BonesPerMesh = 0;
        _this.BONETEXTURE = false;
        _this.BONES_VELOCITY_ENABLED = false;
        _this.INSTANCES = false;
        _this.THIN_INSTANCES = false;
        // public INSTANCESCOLOR = false;
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
        _this.PREPASS = false;
        _this.PREPASS_IRRADIANCE = false;
        _this.PREPASS_IRRADIANCE_INDEX = -1;
        _this.PREPASS_ALBEDO_SQRT = false;
        _this.PREPASS_ALBEDO_SQRT_INDEX = -1;
        _this.PREPASS_DEPTH = false;
        _this.PREPASS_DEPTH_INDEX = -1;
        _this.PREPASS_NORMAL = false;
        _this.PREPASS_NORMAL_INDEX = -1;
        _this.PREPASS_POSITION = false;
        _this.PREPASS_POSITION_INDEX = -1;
        _this.PREPASS_VELOCITY = false;
        _this.PREPASS_VELOCITY_INDEX = -1;
        _this.PREPASS_REFLECTIVITY = false;
        _this.PREPASS_REFLECTIVITY_INDEX = -1;
        _this.SCENE_MRT_COUNT = 0;
        // public RGBDLIGHTMAP = false;
        // public RGBDREFLECTION = false;
        // public RGBDREFRACTION = false;
        _this.IMAGEPROCESSING = false;
        _this.VIGNETTE = false;
        _this.VIGNETTEBLENDMODEMULTIPLY = false;
        _this.VIGNETTEBLENDMODEOPAQUE = false;
        _this.TONEMAPPING = false;
        _this.TONEMAPPING_ACES = false;
        _this.CONTRAST = false;
        _this.COLORCURVES = false;
        _this.COLORGRADING = false;
        _this.COLORGRADING3D = false;
        _this.SAMPLER3DGREENDEPTH = false;
        _this.SAMPLER3DBGRMAP = false;
        _this.IMAGEPROCESSINGPOSTPROCESS = false;
        _this.SKIPFINALCOLORCLAMP = false;
        _this.MULTIVIEW = false;
        _this.ORDER_INDEPENDENT_TRANSPARENCY = false;
        _this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = false;
        // /**
        //  * If the reflection texture on this material is in linear color space
        //  * @hidden
        //  */
        _this.IS_REFLECTION_LINEAR = false;
        // /**
        //  * If the refraction texture on this material is in linear color space
        //  * @hidden
        //  */
        _this.IS_REFRACTION_LINEAR = false;
        _this.EXPOSURE = false;
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
/* harmony import */ var _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Misc/decorators */ "./node_modules/@babylonjs/core/Misc/decorators.js");
/* harmony import */ var _babylonjs_core_Misc_smartArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Misc/smartArray */ "./node_modules/@babylonjs/core/Misc/smartArray.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Maths/math.vector */ "./node_modules/@babylonjs/core/Maths/math.vector.js");
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Maths/math.color */ "./node_modules/@babylonjs/core/Maths/math.color.js");
/* harmony import */ var _babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Buffers/buffer */ "./node_modules/@babylonjs/core/Buffers/buffer.js");
/* harmony import */ var _babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Materials/imageProcessingConfiguration */ "./node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js");
/* harmony import */ var _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Materials/material */ "./node_modules/@babylonjs/core/Materials/material.js");
/* harmony import */ var _babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Materials/pushMaterial */ "./node_modules/@babylonjs/core/Materials/pushMaterial.js");
/* harmony import */ var _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/Materials/materialHelper */ "./node_modules/@babylonjs/core/Materials/materialHelper.js");
/* harmony import */ var _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Engines/constants */ "./node_modules/@babylonjs/core/Engines/constants.js");
/* harmony import */ var _babylonjs_core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Materials/effectFallbacks */ "./node_modules/@babylonjs/core/Materials/effectFallbacks.js");
/* harmony import */ var _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/Materials/effect */ "./node_modules/@babylonjs/core/Materials/effect.js");
/* harmony import */ var _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babylonjs/core/Materials/material.detailMapConfiguration */ "./node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js");
/* harmony import */ var _babylonjs_core_Materials_materialPluginEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babylonjs/core/Materials/materialPluginEvent */ "./node_modules/@babylonjs/core/Materials/materialPluginEvent.js");
/* harmony import */ var _inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inspectable-custom-properties */ "./src/inspectable-custom-properties.ts");
/* harmony import */ var _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mtoon-outline-renderer */ "./src/mtoon-outline-renderer.ts");
/* harmony import */ var _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mtoon-material-defines */ "./src/mtoon-material-defines.ts");



















var onCreatedEffectParameters = { effect: null, subMesh: null };
// get shader string
var UboDeclaration = __webpack_require__(/*! ./shaders/ubo-declaration.vert */ "./src/shaders/ubo-declaration.vert").default;
var VertexDeclaration = __webpack_require__(/*! ./shaders/vertex-declaration.vert */ "./src/shaders/vertex-declaration.vert").default;
var FragmentDeclaration = __webpack_require__(/*! ./shaders/fragment-declaration.frag */ "./src/shaders/fragment-declaration.frag").default;
var FragmentFunctions = __webpack_require__(/*! ./shaders/mtoon-fragment-functions.frag */ "./src/shaders/mtoon-fragment-functions.frag").default;
var BumpFragment = __webpack_require__(/*! ./shaders/bump-fragment.frag */ "./src/shaders/bump-fragment.frag").default;
var LightFragment = __webpack_require__(/*! ./shaders/light-fragment.frag */ "./src/shaders/light-fragment.frag").default;
var VertexShader = __webpack_require__(/*! ./shaders/mtoon.vert */ "./src/shaders/mtoon.vert").default;
var FragmentShader = __webpack_require__(/*! ./shaders/mtoon.frag */ "./src/shaders/mtoon.frag").default;
/**
 * Debug shading mode
 */
var DebugMode;
(function (DebugMode) {
    DebugMode[DebugMode["None"] = 0] = "None";
    DebugMode[DebugMode["Normal"] = 1] = "Normal";
    DebugMode[DebugMode["LitShadeRate"] = 2] = "LitShadeRate";
})(DebugMode || (DebugMode = {}));
/**
 * Outline color mode
 */
var OutlineColorMode;
(function (OutlineColorMode) {
    OutlineColorMode[OutlineColorMode["FixedColor"] = 0] = "FixedColor";
    OutlineColorMode[OutlineColorMode["MixedLighting"] = 1] = "MixedLighting";
})(OutlineColorMode || (OutlineColorMode = {}));
/**
 * Outline width mode
 */
var OutlineWidthMode;
(function (OutlineWidthMode) {
    OutlineWidthMode[OutlineWidthMode["None"] = 0] = "None";
    OutlineWidthMode[OutlineWidthMode["WorldCorrdinates"] = 1] = "WorldCorrdinates";
    OutlineWidthMode[OutlineWidthMode["ScreenCoordinates"] = 2] = "ScreenCoordinates";
})(OutlineWidthMode || (OutlineWidthMode = {}));
/**
 * Cull mode
 */
var CullMode;
(function (CullMode) {
    CullMode[CullMode["Off"] = 0] = "Off";
    CullMode[CullMode["Front"] = 1] = "Front";
    CullMode[CullMode["Back"] = 2] = "Back";
})(CullMode || (CullMode = {}));
/**
 * MToon は日本のアニメ的表現をすることを目標としています。
 * 主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。
 * VRM での出力パラメータとプロパティのマッピングは下記となります。
 *
 * MToon aims for making Japanese anime expressions.
 * It is achieved by mixing Lit Color and Shade Color based on Lighting parameters and light source environment.
 *
 * @see https://github.com/Santarh/MToon/
 * @see https://vrm.dev/univrm/shaders/mtoon/
 * @see https://doc.babylonjs.com/babylon101/materials
 */
var MToonMaterial = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MToonMaterial, _super);
    //#endregion
    //#endregion
    /**
     * {@inheritdoc}
     */
    function MToonMaterial(name, scene) {
        var _a;
        var _this = _super.call(this, name, scene) || this;
        //#region Properties
        //#region Textures
        _this._diffuseTexture = null;
        /**
         * The basic texture of the material as viewed under a light.
         */
        _this.diffuseTexture = null;
        _this._emissiveTexture = null;
        /**
         * Define texture of the material as if self lit.
         * This will be mixed in the final result even in the absence of light.
         */
        _this.emissiveTexture = null;
        _this._bumpTexture = null;
        /**
         * Bump mapping is a technique to simulate bump and dents on a rendered surface.
         * These are made by creating a normal map from an image. The means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this.
         * @see https://doc.babylonjs.com/how_to/more_materials#bump-map
         */
        _this.bumpTexture = null;
        _this._shadeTexture = null;
        /**
         * The basic texture of the material as viewed does not receive a light
         */
        _this.shadeTexture = null;
        _this._receiveShadowTexture = null;
        /**
         * Receiving shadow rate with texture
         * receiveShadowRate * texture.a
         */
        _this.receiveShadowTexture = null;
        _this._shadingGradeTexture = null;
        /**
         * Shading grade rate
         * shadingGradeRate * (1.0 - texture.r))
         */
        _this.shadingGradeTexture = null;
        _this._rimTexture = null;
        /**
         * Parametric Rim Lighting
         */
        _this.rimTexture = null;
        _this._matCapTexture = null;
        /**
         * MatCap Lighting
         */
        _this.matCapTexture = null;
        _this._outlineWidthTexture = null;
        /**
         * Adjust outline width
         */
        _this.outlineWidthTexture = null;
        _this._uvAnimationMaskTexture = null;
        /**
         * UV animation mask
         */
        _this.uvAnimationMaskTexture = null;
        //#endregion
        //#region Colors
        /**
         * Multiplier of diffuseTexture
         */
        _this.diffuseColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](1.0, 1.0, 1.0);
        /**
          * babylon.js Ambient light
          */
        _this.ambientColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](0.0, 0.0, 0.0);
        /**
          * Emissive color
          */
        _this.emissiveColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](0.0, 0.0, 0.0);
        /**
          * Multiplier of shadeTexture
          */
        _this.shadeColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](0.97, 0.81, 0.86);
        /**
          * Rim color
          */
        _this.rimColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](0.0, 0.0, 0.0);
        /**
          * Outline color
          */
        _this.outlineColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](0.0, 0.0, 0.0);
        //#endregion
        //#region StandardMaterial parameters
        /**
         * If true, the emissive value is added into the end result, otherwise it is multiplied in.
         */
        _this.useEmissiveAsIllumination = false;
        /**
         * If true, some kind of energy conservation will prevent the end result to be more than 1 by reducing
         * the emissive level when the final color is close to one.
         */
        _this.linkEmissiveWithDiffuse = false;
        /**
         * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.
         */
        _this.useReflectionOverAlpha = false;
        _this._disableLighting = false;
        /**
         * Allows using an object space normal map (instead of tangent space).
         * No support
         */
        _this.useObjectSpaceNormalMap = false;
        /**
         * Is parallax enabled or not.
         * @see https://doc.babylonjs.com/how_to/using_parallax_mapping
         * No support
         */
        _this.useParallax = false;
        /**
         * Is parallax occlusion enabled or not.
         * If true, the outcome is way more realistic than traditional Parallax but you can expect a performance hit that worthes consideration.
         * @see https://doc.babylonjs.com/how_to/using_parallax_mapping
         * No support
         */
        _this.useParallaxOcclusion = false;
        /**
         * No support for specular
         */
        _this.specularSupported = false;
        /**
         * In case of light mapping, define whether the map contains light or shadow informations.
         * No support
         */
        _this.useLightmapAsShadowmap = false;
        /**
         * No support for vertex colors
         */
        _this.useVertexColor = false;
        /**
         * Support for bones in shader
         */
        _this.useBones = true;
        /**
         * Support for morph targets in shader
         */
        _this.useMorphTargets = true;
        /**
         * No support for vertex alpha
         */
        _this.useVertexAlpha = false;
        /**
         * Defines the alpha limits in alpha test mode.
         */
        _this.alphaCutOff = 0.4;
        _this._useAlphaFromDiffuseTexture = true;
        _this._maxSimultaneousLights = 4;
        /**
         * inverted state equals with Unity
         */
        _this._invertNormalMapX = true;
        /**
         * inverted state equals with Unity
         */
        _this._invertNormalMapY = true;
        _this._twoSidedLighting = false;
        _this._renderTargets = new _babylonjs_core_Misc_smartArray__WEBPACK_IMPORTED_MODULE_2__["SmartArray"](16);
        _this._worldViewProjectionMatrix = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__["Matrix"].Zero();
        _this._globalAmbientColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__["Color3"](0, 0, 0);
        _this._cacheHasRenderTargetTextures = false;
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
        _this.isOutline = 0.0;
        _this.outlineColorMode = OutlineColorMode.MixedLighting;
        _this._cullMode = CullMode.Back;
        _this._outlineCullMode = CullMode.Front;
        _this.outlineCullMode = CullMode.Front;
        _this.storedCullMode = CullMode.Back;
        _this.detailMap = new _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_14__["DetailMapConfiguration"](_this);
        // Setup the default processing configuration to the scene.
        _this._attachImageProcessingConfiguration(null);
        _this.getRenderTargetTextures = function () {
            _this._renderTargets.reset();
            // if (StandardMaterial.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            //     this._renderTargets.push(<RenderTargetTexture>this._reflectionTexture);
            // }
            // if (StandardMaterial.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            //     this._renderTargets.push(<RenderTargetTexture>this._refractionTexture);
            // }
            _this._eventInfo.renderTargets = _this._renderTargets;
            _this._callbackPluginEventFillRenderTargetTextures(_this._eventInfo);
            return _this._renderTargets;
        };
        // Register shaders to ShadersStore
        if (!_babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonUboDeclaration) {
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonUboDeclaration = UboDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonVertexDeclaration = VertexDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonFragmentDeclaration = FragmentDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonFragmentFunctions = FragmentFunctions;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonLightFragment = LightFragment;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].IncludesShadersStore.mtoonBumpFragment = BumpFragment;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].ShadersStore.mtoonVertexShader = VertexShader;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_13__["Effect"].ShadersStore.mtoonFragmentShader = FragmentShader;
        }
        // Add properties to Inspactor
        _this.inspectableCustomProperties = _this.inspectableCustomProperties || [];
        (_a = _this.inspectableCustomProperties).push.apply(_a, Object(_inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_16__["getInspectableCustomProperties"])());
        return _this;
    }
    Object.defineProperty(MToonMaterial.prototype, "appendedTextures", {
        /**
         * the list of textures
         *
         * @returns {Array<Nullable<BaseTexture>>}
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
         * the list of active textures
         *
         * @returns {BaseTexture[]}
         */
        get: function () {
            return this.appendedTextures.filter(function (t) { return t !== null; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "imageProcessingConfiguration", {
        /**
         * Gets the image processing configuration used either in this material.
         */
        get: function () {
            return this._imageProcessingConfiguration;
        },
        /**
         * Sets the Default image processing configuration used either in the this material.
         *
         * If sets to null, the scene one is in use.
         */
        set: function (value) {
            this._attachImageProcessingConfiguration(value);
            // Ensure the effect will be rebuilt.
            this._markAllSubMeshesAsTexturesDirty();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Attaches a new image processing configuration to the Standard Material.
     * @param configuration
     */
    MToonMaterial.prototype._attachImageProcessingConfiguration = function (configuration) {
        var _this = this;
        if (configuration === this._imageProcessingConfiguration) {
            return;
        }
        // Detaches observer
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        // Pick the scene configuration if needed
        if (!configuration) {
            this._imageProcessingConfiguration = this.getScene().imageProcessingConfiguration;
        }
        else {
            this._imageProcessingConfiguration = configuration;
        }
        // Attaches observer
        if (this._imageProcessingConfiguration) {
            this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add(function () {
                _this._markAllSubMeshesAsImageProcessingDirty();
            });
        }
    };
    Object.defineProperty(MToonMaterial.prototype, "isPrePassCapable", {
        /**
         * Can this material render to prepass
         */
        get: function () {
            return !this.disableDepthWrite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraColorCurvesEnabled", {
        /**
         * Gets whether the color curves effect is enabled.
         */
        get: function () {
            return this.imageProcessingConfiguration.colorCurvesEnabled;
        },
        /**
         * Sets whether the color curves effect is enabled.
         */
        set: function (value) {
            this.imageProcessingConfiguration.colorCurvesEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraColorGradingEnabled", {
        /**
         * Gets whether the color grading effect is enabled.
         */
        get: function () {
            return this.imageProcessingConfiguration.colorGradingEnabled;
        },
        /**
         * Gets whether the color grading effect is enabled.
         */
        set: function (value) {
            this.imageProcessingConfiguration.colorGradingEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraToneMappingEnabled", {
        /**
         * Gets whether tonemapping is enabled or not.
         */
        get: function () {
            return this._imageProcessingConfiguration.toneMappingEnabled;
        },
        /**
         * Sets whether tonemapping is enabled or not
         */
        set: function (value) {
            this._imageProcessingConfiguration.toneMappingEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraExposure", {
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */
        get: function () {
            return this._imageProcessingConfiguration.exposure;
        },
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */
        set: function (value) {
            this._imageProcessingConfiguration.exposure = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraContrast", {
        /**
         * Gets The camera contrast used on this material.
         */
        get: function () {
            return this._imageProcessingConfiguration.contrast;
        },
        /**
         * Sets The camera contrast used on this material.
         */
        set: function (value) {
            this._imageProcessingConfiguration.contrast = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraColorGradingTexture", {
        /**
         * Gets the Color Grading 2D Lookup Texture.
         */
        get: function () {
            return this._imageProcessingConfiguration.colorGradingTexture;
        },
        /**
         * Sets the Color Grading 2D Lookup Texture.
         */
        set: function (value) {
            this._imageProcessingConfiguration.colorGradingTexture = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cameraColorCurves", {
        /**
         * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
         * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
         * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
         * corresponding to low luminance, medium luminance, and high luminance areas respectively.
         */
        get: function () {
            return this._imageProcessingConfiguration.colorCurves;
        },
        /**
         * The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
         * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
         * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
         * corresponding to low luminance, medium luminance, and high luminance areas respectively.
         */
        set: function (value) {
            this._imageProcessingConfiguration.colorCurves = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "canRenderToMRT", {
        /**
         * Can this material render to several textures at once
         */
        get: function () {
            return true;
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
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_ALPHATESTANDBLEND;
                }
                else {
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_ALPHATEST;
                }
            }
            else {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_OPAQUE;
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
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_ALPHATESTANDBLEND;
                }
                else {
                    this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_ALPHABLEND;
                }
            }
            else {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_OPAQUE;
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
                this.outlineRenderer = new _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_17__["MToonOutlineRenderer"](this.getScene(), this);
            }
            this._markAllSubMeshesAsMiscDirty();
        },
        enumerable: false,
        configurable: true
    });
    MToonMaterial.prototype.enableOutlineRender = function () {
        this.isOutline = 1.0;
    };
    MToonMaterial.prototype.disaableOutlineRender = function () {
        this.isOutline = 0.0;
    };
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
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].ClockWiseSideOrientation;
                    this.twoSidedLighting = false;
                    break;
                case CullMode.Front:
                    // 表面を描画しない(=裏面だけ描画する)
                    this.backFaceCulling = true;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].CounterClockWiseSideOrientation;
                    this.twoSidedLighting = true;
                    break;
                case CullMode.Back:
                    // 裏面を描画しない(=表面だけ描画する) デフォルト
                    this.backFaceCulling = true;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].ClockWiseSideOrientation;
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
    Object.defineProperty(MToonMaterial.prototype, "hasRenderTargetTextures", {
        /**
         * Gets a boolean indicating that current material needs to register RTT
         */
        get: function () {
            // if (StandardMaterial.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            //     return true;
            // }
            // if (StandardMaterial.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            //     return true;
            // }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.getClassName = function () {
        return 'MToonMaterial';
    };
    Object.defineProperty(MToonMaterial.prototype, "useLogarithmicDepth", {
        /**
         * In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
         * You can try switching to logarithmic depth.
         * @see https://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
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
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.needAlphaBlending = function () {
        if (this._disableAlphaBlending) {
            return false;
        }
        // return (this.alpha < 1.0) || (this._opacityTexture != null) || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled;
        return (this.alpha < 1.0) || this._shouldUseAlphaFromDiffuseTexture();
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.needAlphaTesting = function () {
        if (this._forceAlphaTest) {
            return true;
        }
        if (this._alphaTest) {
            return true;
        }
        return this._hasAlphaChannel() && (this._transparencyMode == null || this._transparencyMode === _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_ALPHATEST);
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype._shouldUseAlphaFromDiffuseTexture = function () {
        return this._diffuseTexture != null
            && this._diffuseTexture.hasAlpha
            && this._useAlphaFromDiffuseTexture
            && this._transparencyMode !== _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_8__["Material"].MATERIAL_OPAQUE;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype._hasAlphaChannel = function () {
        return (this._diffuseTexture !== null && this._diffuseTexture.hasAlpha); // || this._opacityTexture != null;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.getAlphaTestTexture = function () {
        return this._diffuseTexture;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh, useInstances) {
        if (useInstances === void 0) { useInstances = false; }
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }
        if (subMesh.effect && this.isFrozen) {
            if (subMesh.effect._wasPreviouslyReady) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            this._callbackPluginEventGeneric(_babylonjs_core_Materials_materialPluginEvent__WEBPACK_IMPORTED_MODULE_15__["MaterialPluginEvent"].GetDefineNames, this._eventInfo);
            subMesh.materialDefines = new _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_18__["MToonMaterialDefines"]();
        }
        var scene = this.getScene();
        var defines = subMesh.materialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        var engine = scene.getEngine();
        // Lights
        defines._needNormals = _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForLights(scene, mesh, defines, this.specularSupported, this._maxSimultaneousLights, this._disableLighting);
        if (this.outlineWidthMode !== OutlineWidthMode.None) {
            // Normals is needed when rendering outline
            defines._needNormals = true;
        }
        this.applyDefines(defines);
        // Multiview
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForMultiview(scene, defines);
        // PrePass
        var oit = this.needAlphaBlendingForMesh(mesh) && scene.useOrderIndependentTransparency;
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForPrePass(scene, defines, this.canRenderToMRT && !oit);
        // Order independant transparency
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForOIT(scene, defines, oit);
        // Textures
        if (defines._areTexturesDirty) {
            this._eventInfo.hasRenderTargetTextures = false;
            this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
            this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures;
            defines._needUVs = false;
            for (var i = 1; i <= _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].MAX_SUPPORTED_UV_SETS; ++i) {
                defines["MAINUV" + i] = false;
            }
            if (scene.texturesEnabled) {
                // Check texture is ready
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
                    _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForMergedUV(this._bumpTexture, defines, 'BUMP');
                    defines.PARALLAX = this.useParallax;
                    defines.PARALLAXOCCLUSION = this.useParallaxOcclusion;
                    defines.OBJECTSPACE_NORMALMAP = this.useObjectSpaceNormalMap;
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
            defines.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture();
            // defines.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination;
            // defines.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse;
            // defines.SPECULAROVERALPHA = this._useSpecularOverAlpha;
            defines.PREMULTIPLYALPHA = (this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ALPHA_PREMULTIPLIED || this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ALPHA_PREMULTIPLIED_PORTERDUFF);
            defines.ALPHATEST_AFTERALLALPHACOMPUTATIONS = this.transparencyMode !== null;
            defines.ALPHABLEND = this.transparencyMode === null || this.needAlphaBlendingForMesh(mesh); // check on null for backward compatibility
        }
        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = defines;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);
        if (!this._eventInfo.isReadyForSubMesh) {
            return false;
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) {
                return false;
            }
            this._imageProcessingConfiguration.prepareDefines(defines);
            // defines.IS_REFLECTION_LINEAR = (this.reflectionTexture != null && !this.reflectionTexture.gammaSpace);
            // defines.IS_REFRACTION_LINEAR = (this.refractionTexture != null && !this.refractionTexture.gammaSpace);
        }
        // Misc.
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForMisc(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh) || this._forceAlphaTest, defines);
        // Attribs
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForAttributes(mesh, defines, this.useVertexColor, this.useBones, this.useMorphTargets, this.useVertexAlpha);
        // Values that need to be evaluated on every frame
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances, null, subMesh.getRenderingMesh().hasThinInstances);
        // External config
        this._eventInfo.defines = defines;
        this._eventInfo.mesh = mesh;
        this._callbackPluginEventPrepareDefines(this._eventInfo);
        // Get correct effect
        if (defines.isDirty) {
            var lightDisposed = defines._areLightsDisposed;
            defines.markAsProcessed();
            // Fallbacks
            var fallbacks = new _babylonjs_core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_12__["EffectFallbacks"]();
            if (defines.BUMP) {
                fallbacks.addFallback(0, 'BUMP');
            }
            if (defines.PARALLAX) {
                fallbacks.addFallback(1, "PARALLAX");
            }
            if (defines.PARALLAXOCCLUSION) {
                fallbacks.addFallback(0, "PARALLAXOCCLUSION");
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
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].HandleFallbacksForShadows(defines, fallbacks, this._maxSimultaneousLights);
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }
            // Attributes
            var attribs = [_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__["VertexBuffer"].PositionKind];
            if (defines.NORMAL) {
                attribs.push(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__["VertexBuffer"].NormalKind);
            }
            if (defines.TANGENT) {
                attribs.push(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__["VertexBuffer"].TangentKind);
            }
            for (var i = 1; i <= _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].MAX_SUPPORTED_UV_SETS; ++i) {
                if (defines["UV" + i]) {
                    attribs.push("uv".concat(i === 1 ? "" : i));
                }
            }
            if (defines.INSTANCESCOLOR) {
                attribs.push(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__["VertexBuffer"].ColorInstanceKind);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareAttributesForInstances(attribs, defines);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareAttributesForMorphTargets(attribs, mesh, defines);
            var shaderName = 'mtoon';
            var uniforms = [
                // StandardMaterial uniforms
                'world', 'view', 'viewProjection', 'vEyePosition', 'vLightsType', 'vAmbientColor', 'visibility',
                'vFogInfos', 'vFogColor', 'pointSize',
                'mBones',
                'vClipPlane', 'vClipPlane2', 'vClipPlane3', 'vClipPlane4', 'vClipPlane5', 'vClipPlane6',
                // "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor",
                // "vReflectionPosition", "vReflectionSize", "vRefractionPosition", "vRefractionSize",
                'logarithmicDepthConstant', 'vTangentSpaceParams', 'alphaCutOff', 'boneTextureWidth',
                'morphTargetTextureInfo', 'morphTargetTextureIndices',
                // Texture uniforms
                'vDiffuseColor', 'vDiffuseInfos', 'diffuseMatrix',
                'vEmissiveColor', 'vEmissiveInfos', 'emissiveMatrix',
                'vBumpInfos', 'bumpMatrix',
                'vShadeColor', 'vShadeInfos', 'shadeMatrix',
                'vReceiveShadowInfos', 'receiveShadowMatrix',
                'vShadingGradeInfos', 'shadingGradeMatrix',
                'vRimColor', 'vRimInfos', 'RimMatrix',
                'vMatCapInfos', 'MatCapMatrix',
                'vOutlineColor', 'vOutlineWidthInfos', 'outlineWidthMatrix',
                // MToon uniforms
                'aspect', 'isOutline',
                'shadingGradeRate', 'receiveShadowRate', 'shadeShift', 'shadeToony',
                'rimLightingMix', 'rimFresnelPower', 'rimLift',
                'lightColorAttenuation', 'indirectLightIntensity',
                'outlineWidth', 'outlineScaledMaxDistance', 'outlineLightingMix',
                'uvAnimationScrollX', 'uvAnimationScrollY', 'uvAnimationRotation',
                'vEyeUp', 'time',
                // Material#bindViewProjection
                'projection',
            ];
            var samplers = [
                // StandardMaterial samplers
                'diffuseSampler', 'ambientSampler', 'emissiveSampler', 'bumpSampler', 'boneSampler', 'morphTargets', 'oitDepthSampler', 'oitFrontColorSampler',
                // MToon samplers
                'shadeSampler', 'receiveShadowSampler', 'shadingGradeSampler',
                'rimSampler', 'matCapSampler', 'outlineWidthSampler',
                'uvAnimationMaskSampler',
            ];
            var uniformBuffers = ['Material', 'Scene', 'Mesh'];
            this._eventInfo.fallbacks = fallbacks;
            this._eventInfo.fallbackRank = 0;
            this._eventInfo.defines = defines;
            this._eventInfo.uniforms = uniforms;
            this._eventInfo.samplers = samplers;
            this._eventInfo.uniformBuffersNames = uniformBuffers;
            this._eventInfo.customCode = undefined;
            this._callbackPluginEventGeneric(_babylonjs_core_Materials_materialPluginEvent__WEBPACK_IMPORTED_MODULE_15__["MaterialPluginEvent"].PrepareEffect, this._eventInfo);
            if (_babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_7__["ImageProcessingConfiguration"]) {
                _babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_7__["ImageProcessingConfiguration"].PrepareUniforms(uniforms, defines);
                _babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_7__["ImageProcessingConfiguration"].PrepareSamplers(samplers, defines);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: defines,
                maxSimultaneousLights: this._maxSimultaneousLights,
            });
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
                    maxSimultaneousLights: this._maxSimultaneousLights,
                    maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                },
                processFinalCode: csnrOptions.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
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
                    defines.markAsUnprocessed();
                    if (lightDisposed) {
                        // re register in case it takes more than one frame.
                        defines._areLightsDisposed = true;
                        return false;
                    }
                }
                else {
                    scene.resetCachedMaterial();
                    subMesh.setEffect(effect, defines, this._materialContext);
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
     * Determine the layout of the UniformBufferObject
     * Must be added in the same order as the `uniform Material` in the shader
     * UBOs can be used to efficiently pass variables to shaders, but only WebGL v2 is supported.
     * babylon.js automatically falls back on WebGL v1
     * The second argument is the number of floats
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
        ubo.addUniform('vEyeUp', 3);
        ubo.addUniform('alphaCutOff', 1);
        ubo.addUniform('vAmbientColor', 3);
        ubo.addUniform('aspect', 1);
        ubo.addUniform('isOutline', 1);
        ubo.addUniform('time', 4);
        ubo.addUniform('visibility', 1);
        _super.prototype.buildUniformLayout.call(this);
    };
    /**
     * {@inheritdoc}
     * Binds current shader variables
     * This method is called every frame, so even if it is redundant, it prefers speed.
     */
    MToonMaterial.prototype.bindForSubMesh = function (world, mesh, subMesh) {
        var _a;
        var scene = this.getScene();
        var defines = subMesh.materialDefines;
        var effect = subMesh.effect;
        if (!defines || !effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices Mesh.
        mesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
        mesh.transferToEffect(world);
        // Binding unconditionally
        this._uniformBuffer.bindToEffect(effect, "Material");
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventHardBindForSubMesh(this._eventInfo);
        // Normal Matrix
        if (defines.OBJECTSPACE_NORMALMAP) {
            world.toNormalMatrix(this._normalMatrix);
            this.bindOnlyNormalMatrix(this._normalMatrix);
        }
        var mustRebind = this._mustRebind(scene, effect, mesh.visibility);
        // Bones
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindBonesParameters(mesh, effect);
        var ubo = this._uniformBuffer;
        if (mustRebind) {
            this.bindViewProjection(effect);
            if (!ubo.useUbo || !this.isFrozen || !ubo.isSync) {
                if (scene.texturesEnabled) {
                    this.bindTexture(this._diffuseTexture, ubo, effect, 'diffuse', 'vDiffuseInfos');
                    this.bindTexture(this._emissiveTexture, ubo, effect, 'emissive', 'vEmissiveInfos');
                    if (this._bumpTexture && scene.getEngine().getCaps().standardDerivatives) {
                        ubo.updateFloat3('vBumpInfos', this._bumpTexture.coordinatesIndex, 1.0 / this._bumpTexture.level, this._bumpScale);
                        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindTextureMatrix(this._bumpTexture, ubo, "bump");
                        effect.setTexture("bumpSampler", this._bumpTexture);
                        // bumpTexture は babylon.js のデフォルトと反対の状態である
                        if (scene._mirroredCameraPosition) {
                            ubo.updateFloat2('vTangentSpaceParams', this._invertNormalMapX ? 1.0 : -1.0, this._invertNormalMapY ? 1.0 : -1.0);
                        }
                        else {
                            ubo.updateFloat2('vTangentSpaceParams', this._invertNormalMapX ? -1.0 : 1.0, this._invertNormalMapY ? -1.0 : 1.0);
                        }
                    }
                    this.bindTexture(this._shadeTexture, ubo, effect, 'shade', 'vShadeInfos');
                    this.bindTexture(this._receiveShadowTexture, ubo, effect, 'receiveShadow', 'vReceiveShadowInfos');
                    this.bindTexture(this._shadingGradeTexture, ubo, effect, 'shadingGrade', 'vShadingGradeInfos');
                    this.bindTexture(this._rimTexture, ubo, effect, 'rim', 'vRimInfos');
                    this.bindTexture(this._matCapTexture, ubo, effect, 'matCap', 'vMatCapInfos');
                    this.bindTexture(this._outlineWidthTexture, ubo, effect, 'outlineWidth', 'vOutlineWidthInfos');
                    this.bindTexture(this._uvAnimationMaskTexture, ubo, effect, 'uvAnimationMask', 'vUvAnimationMaskInfos');
                    if (this._hasAlphaChannel()) {
                        ubo.updateFloat('alphaCutOff', this.alphaCutOff);
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
                // Colors
                scene.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor);
                ubo.updateColor3('vAmbientColor', this._globalAmbientColor);
                ubo.updateColor4('vDiffuseColor', this.diffuseColor, this.alpha);
                ubo.updateColor3('vEmissiveColor', this.emissiveColor);
                ubo.updateColor3('vShadeColor', this.shadeColor);
                ubo.updateColor3('vRimColor', this.rimColor);
                ubo.updateColor4('vOutlineColor', this.outlineColor, 1.0);
                ubo.updateVector3('vEyeUp', scene.activeCamera.upVector);
            }
            // OIT with depth peeling
            var anyScene = scene;
            if (anyScene.useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mesh) && anyScene.depthPeelingRenderer) {
                anyScene.depthPeelingRenderer.bind(effect);
            }
            this._eventInfo.subMesh = subMesh;
            this._callbackPluginEventBindForSubMesh(this._eventInfo);
            // Clip plane
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindClipPlane(effect, scene);
            // Colors
            this.bindEyePosition(effect);
        }
        else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._needToBindSceneUbo = true;
        }
        if (mustRebind || !this.isFrozen) {
            // Lights
            if (scene.lightsEnabled && !this._disableLighting) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindLights(scene, mesh, effect, defines, this._maxSimultaneousLights);
            }
            // View
            if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].FOGMODE_NONE || mesh.receiveShadows) {
                this.bindView(effect);
            }
            // Fog
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindFogParameters(scene, mesh, effect);
            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindMorphTargetParameters(mesh, effect);
            }
            if (defines.BAKED_VERTEX_ANIMATION_TEXTURE) {
                (_a = mesh.bakedVertexAnimationManager) === null || _a === void 0 ? void 0 : _a.bind(effect, defines.INSTANCES);
            }
            // Log. depth
            if (this.useLogarithmicDepth) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindLogDepth(defines, effect, scene);
            }
            // image processing
            if (this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess) {
                this._imageProcessingConfiguration.bind(this._activeEffect);
            }
            // MToon bindings
            ubo.updateFloat('aspect', scene.getEngine().getAspectRatio(scene.activeCamera));
            ubo.updateFloat('isOutline', this.isOutline);
            // this variable is compatible with [Unity's _Time](https://docs.unity3d.com/Manual/SL-UnityShaderVariables.html)
            var t = window.performance.now() / 1000;
            ubo.updateVector4('time', new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__["Vector4"](t / 20, t, t * 2, t * 3));
        }
        this._afterBind(mesh, this._activeEffect);
        ubo.update();
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.getAnimatables = function () {
        var results = _super.prototype.getAnimatables.call(this);
        for (var _i = 0, _a = this.appendedActiveTextures; _i < _a.length; _i++) {
            var texture = _a[_i];
            if (texture.animations && texture.animations.length > 0) {
                results.push(texture);
            }
        }
        return results;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.getActiveTextures = function () {
        var activeTextures = _super.prototype.getActiveTextures.call(this).concat(this.appendedActiveTextures);
        return activeTextures;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.hasTexture = function (texture) {
        if (_super.prototype.hasTexture.call(this, texture)) {
            return true;
        }
        for (var _i = 0, _a = this.appendedActiveTextures; _i < _a.length; _i++) {
            var tex = _a[_i];
            if (tex === texture) {
                return true;
            }
        }
        return false;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.dispose = function (forceDisposeEffect, forceDisposeTextures) {
        delete this.outlineRenderer;
        if (forceDisposeTextures) {
            for (var _i = 0, _a = this.appendedActiveTextures; _i < _a.length; _i++) {
                var texture = _a[_i];
                texture.dispose();
            }
        }
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        _super.prototype.dispose.call(this, forceDisposeEffect, forceDisposeTextures);
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.prototype.clone = function (name) {
        var _this = this;
        var result = _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["SerializationHelper"].Clone(function () { return new MToonMaterial(name, _this.getScene()); }, this);
        result.name = name;
        result.id = name;
        this.stencil.copyTo(result.stencil);
        return result;
    };
    /**
     * {@inheritdoc}
     */
    MToonMaterial.Parse = function (source, scene, rootUrl) {
        var material = _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["SerializationHelper"].Parse(function () { return new MToonMaterial(source.name, scene); }, source, scene, rootUrl);
        if (source.stencil) {
            material.stencil.parse(source.stencil, scene, rootUrl);
        }
        return material;
    };
    /**
     * 独自メソッド: テクスチャ情報をバインドする
     * @param texture
     * @param effect
     * @param name
     * @param infoName
     */
    MToonMaterial.prototype.bindTexture = function (texture, ubo, effect, name, infoName) {
        if (!texture) {
            return;
        }
        this._uniformBuffer.updateFloat2(infoName, texture.coordinatesIndex, texture.level);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].BindTextureMatrix(texture, ubo, name);
        effect.setTexture("".concat(name, "Sampler"), texture);
    };
    /**
     * 独自メソッド: テクスチャの用意が終わっているか確認する
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
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_10__["MaterialHelper"].PrepareDefinesForMergedUV(texture, defines, key);
        return true;
    };
    /**
     * 独自メソッド: 定数を設定する
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('diffuseTexture')
    ], MToonMaterial.prototype, "_diffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesAndMiscDirty')
    ], MToonMaterial.prototype, "diffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('emissiveTexture')
    ], MToonMaterial.prototype, "_emissiveTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "emissiveTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('bumpTexture')
    ], MToonMaterial.prototype, "_bumpTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "bumpTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('shadeTexture')
    ], MToonMaterial.prototype, "_shadeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "shadeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('receiveShadowTexture')
    ], MToonMaterial.prototype, "_receiveShadowTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "receiveShadowTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('shadingGradeTexture')
    ], MToonMaterial.prototype, "_shadingGradeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "shadingGradeTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('rimTexture')
    ], MToonMaterial.prototype, "_rimTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "rimTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('matCapTexture')
    ], MToonMaterial.prototype, "_matCapTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "matCapTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('outlineWidthTexture')
    ], MToonMaterial.prototype, "_outlineWidthTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "outlineWidthTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsTexture"])('outlineWidthTexture')
    ], MToonMaterial.prototype, "_uvAnimationMaskTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "uvAnimationMaskTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serializeAsColor3"])('diffuse')
    ], MToonMaterial.prototype, "diffuseColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('ambient')
    ], MToonMaterial.prototype, "ambientColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('emissive')
    ], MToonMaterial.prototype, "emissiveColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('shade')
    ], MToonMaterial.prototype, "shadeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('rim')
    ], MToonMaterial.prototype, "rimColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('outline')
    ], MToonMaterial.prototype, "outlineColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
    ], MToonMaterial.prototype, "useEmissiveAsIllumination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
    ], MToonMaterial.prototype, "linkEmissiveWithDiffuse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
    ], MToonMaterial.prototype, "useReflectionOverAlpha", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('disableLighting')
    ], MToonMaterial.prototype, "_disableLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "disableLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "alphaCutOff", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('useAlphaFromDiffuseTexture')
    ], MToonMaterial.prototype, "_useAlphaFromDiffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
    ], MToonMaterial.prototype, "useAlphaFromDiffuseTexture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])("maxSimultaneousLights")
    ], MToonMaterial.prototype, "_maxSimultaneousLights", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
    ], MToonMaterial.prototype, "maxSimultaneousLights", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])("invertNormalMapX")
    ], MToonMaterial.prototype, "_invertNormalMapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
    ], MToonMaterial.prototype, "invertNormalMapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])("invertNormalMapY")
    ], MToonMaterial.prototype, "_invertNormalMapY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
    ], MToonMaterial.prototype, "invertNormalMapY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('twoSidedLighting')
    ], MToonMaterial.prototype, "_twoSidedLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "twoSidedLighting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "bumpScale", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "receiveShadowRate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "shadingGradeRate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "shadeShift", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "shadeToony", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "lightColorAttenuation", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "indirectLightIntensity", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "rimLightingMix", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "rimFresnelPower", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "rimLift", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "outlineWidth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "outlineScaledMaxDistance", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "outlineLightingMix", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "uvAnimationScrollX", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "uvAnimationScrollY", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "uvAnimationRotation", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('alphaTest')
    ], MToonMaterial.prototype, "_alphaTest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "alphaTest", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "alphaBlend", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])('debugMode')
    ], MToonMaterial.prototype, "_debugMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "debugMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineColorMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "cullMode", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "_outlineCullMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineCullMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__["serialize"])()
    ], MToonMaterial.prototype, "useLogarithmicDepth", null);
    return MToonMaterial;
}(_babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_9__["PushMaterial"]));



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
/* harmony import */ var _babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/sceneComponent */ "./node_modules/@babylonjs/core/sceneComponent.js");
/* harmony import */ var _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Engines/constants */ "./node_modules/@babylonjs/core/Engines/constants.js");


var BASE_NAME = 'MToonOutline';
/**
 * MToon outline renderer
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
        /**
         * Defines a zOffset default Factor to prevent zFighting between the overlay and the mesh.
         */
        this.zOffset = 1;
        /**
          * Defines a zOffset default Unit to prevent zFighting between the overlay and the mesh.
          */
        this.zOffsetUnits = 4; // 4 to account for projection a bit by default
        this._savedDepthWrite = false;
        this.name = "".concat(BASE_NAME, "_").concat(material.name, "_").concat(MToonOutlineRenderer.rendererId++);
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
        this._passIdForDrawWrapper = [];
        for (var i = 0; i < 4; ++i) {
            this._passIdForDrawWrapper[i] = this._engine.createRenderPassId("Outline Renderer (".concat(i, ")"));
        }
    }
    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    MToonOutlineRenderer.prototype.register = function () {
        this.scene._beforeRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_0__["SceneComponentConstants"].STEP_BEFORERENDERINGMESH_OUTLINE, this, this._beforeRenderingMesh);
        this.scene._afterRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_0__["SceneComponentConstants"].STEP_AFTERRENDERINGMESH_OUTLINE, this, this._afterRenderingMesh);
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
        for (var i = 0; i < this._passIdForDrawWrapper.length; ++i) {
            this._engine.releaseRenderPassId(this._passIdForDrawWrapper[i]);
        }
    };
    /**
     * Renders the outline in the canvas.
     * @param subMesh Defines the sumesh to render
     * @param batch Defines the batch of meshes in case of instances
     * @param useOverlay Defines if the rendering is for the overlay or the outline
     * @param renderPassId Render pass id to use to render the mesh
     */
    MToonOutlineRenderer.prototype.render = function (subMesh, batch, useOverlay, renderPassId) {
        if (useOverlay === void 0) { useOverlay = false; }
        renderPassId = renderPassId !== null && renderPassId !== void 0 ? renderPassId : this._passIdForDrawWrapper[0];
        var scene = this.scene;
        var effect = subMesh.effect;
        if (!effect || !effect.isReady() || !this.scene.activeCamera) {
            return;
        }
        var drawWrapper = subMesh._getDrawWrapper(renderPassId, true);
        if (!drawWrapper) {
            return;
        }
        drawWrapper.setEffect(effect);
        if (!drawWrapper.effect || !drawWrapper.effect.isReady()) {
            return;
        }
        var ownerMesh = subMesh.getMesh();
        var replacementMesh = ownerMesh._internalAbstractMeshDataInfo._actAsRegularMesh ? ownerMesh : null;
        var renderingMesh = subMesh.getRenderingMesh();
        var effectiveMesh = replacementMesh ? replacementMesh : renderingMesh;
        if (!scene.activeCamera) {
            return;
        }
        this.material.applyOutlineCullMode();
        this._engine.enableEffect(drawWrapper);
        if (!this.isHardwareInstancedRendering(subMesh, batch)) {
            renderingMesh._bind(subMesh, effect, this.material.fillMode);
        }
        this._engine.setZOffset(-this.zOffset);
        this._engine.setZOffsetUnits(-this.zOffsetUnits);
        renderingMesh._processRendering(effectiveMesh, subMesh, effect, this.material.fillMode, batch, this.isHardwareInstancedRendering(subMesh, batch), function (isInstance, world, effectiveMaterial) {
            if (effectiveMaterial) {
                var m = effectiveMaterial;
                m.enableOutlineRender();
                m.bindForSubMesh(world, effectiveMesh, subMesh);
                m.disaableOutlineRender();
            }
        }, this.material);
        this._engine.setZOffset(0);
        this._engine.setZOffsetUnits(0);
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
            this._engine.setStencilOperationPass(_babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].REPLACE);
            this._engine.setStencilFunction(_babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ALWAYS);
            this._engine.setStencilMask(MToonOutlineRenderer._StencilReference);
            this._engine.setStencilFunctionReference(MToonOutlineRenderer._StencilReference);
            this._engine.stencilStateComposer.useStencilGlobalOnly = true;
            this.render(subMesh, batch, /* This sets offset to 0 */ true, this._passIdForDrawWrapper[1]);
            this._engine.setColorWrite(true);
            this._engine.setStencilFunction(_babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NOTEQUAL);
        }
        // Draw the outline using the above stencil if needed to avoid drawing within the mesh
        this._engine.setDepthWrite(false);
        this.render(subMesh, batch, false, this._passIdForDrawWrapper[0]);
        this._engine.setDepthWrite(this._savedDepthWrite);
        if (material && material.needAlphaBlendingForMesh(mesh)) {
            this._engine.stencilStateComposer.useStencilGlobalOnly = false;
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
            this.render(subMesh, batch, false, this._passIdForDrawWrapper[2]);
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
        if (batch.visibleInstances[subMesh._id] === null) {
            return false;
        }
        if (typeof batch.visibleInstances[subMesh._id] === 'undefined') {
            return false;
        }
        return subMesh.getRenderingMesh().hasThinInstances;
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
/* harmony default export */ __webpack_exports__["default"] = ("// replace vBumpUV to mainUv\nvec2 uvOffset = vec2(0.0, 0.0);\n\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n    #ifdef NORMALXYSCALE\n        float normalScale = 1.0;\n    #elif defined(BUMP)\n        float normalScale = vBumpInfos.y;\n    #else\n        float normalScale = 1.0;\n    #endif\n\n    #if defined(TANGENT) && defined(NORMAL)\n        mat3 TBN = vTBN;\n    #elif defined(BUMP)\n        // vec2 TBNUV = gl_FrontFacing ? vBumpUV : -vBumpUV;\n        vec2 TBNUV = gl_FrontFacing ? mainUv : -mainUv;\n        mat3 TBN = cotangent_frame(normalW * normalScale, vPositionW, TBNUV, vTangentSpaceParams);\n    #else\n        vec2 TBNUV = gl_FrontFacing ? vDetailUV : -vDetailUV;\n        mat3 TBN = cotangent_frame(normalW * normalScale, vPositionW, TBNUV, vec2(1., 1.));\n    #endif\n#elif defined(ANISOTROPIC)\n    #if defined(TANGENT) && defined(NORMAL)\n        mat3 TBN = vTBN;\n    #else\n        // flip the uv for the backface\n        vec2 TBNUV = gl_FrontFacing ? vMainUV1 : -vMainUV1;\n        mat3 TBN = cotangent_frame(normalW, vPositionW, TBNUV, vec2(1., 1.));\n    #endif\n#endif\n\n#ifdef PARALLAX\n    mat3 invTBN = transposeMat3(TBN);\n\n    #ifdef PARALLAXOCCLUSION\n        // uvOffset = parallaxOcclusion(invTBN * -viewDirectionW, invTBN * normalW, vBumpUV, vBumpInfos.z);\n        uvOffset = parallaxOcclusion(invTBN * -viewDirectionW, invTBN * normalW, mainUv, vBumpInfos.z);\n    #else\n        uvOffset = parallaxOffset(invTBN * viewDirectionW, vBumpInfos.z);\n    #endif\n#endif\n\n#ifdef DETAIL\n    vec4 detailColor = texture2D(detailSampler, vDetailUV + uvOffset);\n    vec2 detailNormalRG = detailColor.wy * 2.0 - 1.0;\n    float detailNormalB = sqrt(1. - saturate(dot(detailNormalRG, detailNormalRG)));\n    vec3 detailNormal = vec3(detailNormalRG, detailNormalB);\n#endif\n\n#ifdef BUMP\n    #ifdef OBJECTSPACE_NORMALMAP\n        // normalW = normalize(texture2D(bumpSampler, vBumpUV).xyz  * 2.0 - 1.0);\n        normalW = normalize(texture2D(bumpSampler, mainUv).xyz  * 2.0 - 1.0);\n        normalW = normalize(mat3(normalMatrix) * normalW);\n    #elif !defined(DETAIL)\n        // normalW = perturbNormal(TBN, texture2D(bumpSampler, vBumpUV + uvOffset).xyz, vBumpInfos.y);\n        normalW = perturbNormal(TBN, texture2D(bumpSampler, mainUv + uvOffset).xyz, vBumpInfos.y);\n    #else\n        // vec3 bumpNormal = texture2D(bumpSampler, vBumpUV + uvOffset).xyz * 2.0 - 1.0;\n        vec3 bumpNormal = texture2D(bumpSampler, mainUv + uvOffset).xyz * 2.0 - 1.0;\n        // Reference for normal blending: https://blog.selfshadow.com/publications/blending-in-detail/\n        #if DETAIL_NORMALBLENDMETHOD == 0 // whiteout\n            detailNormal.xy *= vDetailInfos.z;\n            vec3 blendedNormal = normalize(vec3(bumpNormal.xy + detailNormal.xy, bumpNormal.z * detailNormal.z));\n        #elif DETAIL_NORMALBLENDMETHOD == 1 // RNM\n            detailNormal.xy *= vDetailInfos.z;\n            bumpNormal += vec3(0.0, 0.0, 1.0);\n            detailNormal *= vec3(-1.0, -1.0, 1.0);\n            vec3 blendedNormal = bumpNormal * dot(bumpNormal, detailNormal) / bumpNormal.z - detailNormal;\n        #endif\n        normalW = perturbNormalBase(TBN, blendedNormal, vBumpInfos.y);\n    #endif\n#elif defined(DETAIL)\n        detailNormal.xy *= vDetailInfos.z;\n        normalW = perturbNormalBase(TBN, detailNormal, vDetailInfos.z);\n#endif\n");

/***/ }),

/***/ "./src/shaders/fragment-declaration.frag":
/*!***********************************************!*\
  !*** ./src/shaders/fragment-declaration.frag ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("uniform vec4 vEyePosition;\n\n// Colors\nuniform vec4 vDiffuseColor;\nuniform vec3 vEmissiveColor;\nuniform vec3 vShadeColor;\nuniform vec3 vRimColor;\nuniform vec4 vOutlineColor;\nuniform vec3 vAmbientColor;\n\nuniform vec3 vEyeUp;\nuniform float aspect;\nuniform float alphaCutOff;\nuniform float visibility;\nuniform float isOutline;\nuniform vec4 time;\n\n// Samplers\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef EMISSIVE\nuniform vec2 vEmissiveInfos;\n#endif\n\n#ifdef BUMP\nuniform vec3 vBumpInfos;\nuniform vec2 vTangentSpaceParams;\n#endif\n\n#ifdef SHADE\nuniform vec2 vShadeInfos;\n#endif\n\n#ifdef RECEIVE_SHADOW\nuniform vec2 vReceiveShadowInfos;\n#endif\n\n#ifdef SHADING_GRADE\nuniform vec2 vShadingGradeInfos;\n#endif\n\n#ifdef RIM\nuniform vec2 vRimInfos;\n#endif\n\n#ifdef MATCAP\nuniform vec2 vMatCapInfos;\n#endif\n\n#ifdef OUTLINE_WIDTH\nuniform vec2 vOutlineWidthInfos;\n#endif\n\n#ifdef UV_ANIMATION_MASK\nuniform vec2 vUvAnimationMaskInfos;\n#endif\n\n// MToon params\nuniform float shadingGradeRate;\nuniform float receiveShadowRate;\nuniform float shadeShift;\nuniform float shadeToony;\nuniform float lightColorAttenuation;\nuniform float indirectLightIntensity;\nuniform float rimLightingMix;\nuniform float rimFresnelPower;\nuniform float rimLift;\nuniform float outlineWidth;\nuniform float outlineScaledMaxDistance;\nuniform float outlineLightingMix;\nuniform float uvAnimationScrollX;\nuniform float uvAnimationScrollY;\nuniform float uvAnimationRotation;\n");

/***/ }),

/***/ "./src/shaders/light-fragment.frag":
/*!*****************************************!*\
  !*** ./src/shaders/light-fragment.frag ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef LIGHT{X}\n    #if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n        //No light calculation\n    #else\n        #ifdef PBR\n            // Compute Pre Lighting infos\n            #ifdef SPOTLIGHT{X}\n                preInfo = computePointAndSpotPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #elif defined(POINTLIGHT{X})\n                preInfo = computePointAndSpotPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #elif defined(HEMILIGHT{X})\n                preInfo = computeHemisphericPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #elif defined(DIRLIGHT{X})\n                preInfo = computeDirectionalPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #endif\n\n            preInfo.NdotV = NdotV;\n\n            // Compute Attenuation infos\n            #ifdef SPOTLIGHT{X}\n                #ifdef LIGHT_FALLOFF_GLTF{X}\n                    preInfo.attenuation = computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared, light{X}.vLightFalloff.y);\n                    preInfo.attenuation *= computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightFalloff.z, light{X}.vLightFalloff.w);\n                #elif defined(LIGHT_FALLOFF_PHYSICAL{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);\n                    preInfo.attenuation *= computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightDirection.w);\n                #elif defined(LIGHT_FALLOFF_STANDARD{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Standard(preInfo.lightOffset, light{X}.vLightFalloff.x);\n                    preInfo.attenuation *= computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightDirection.w, light{X}.vLightData.w);\n                #else\n                    preInfo.attenuation = computeDistanceLightFalloff(preInfo.lightOffset, preInfo.lightDistanceSquared, light{X}.vLightFalloff.x, light{X}.vLightFalloff.y);\n                    preInfo.attenuation *= computeDirectionalLightFalloff(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightDirection.w, light{X}.vLightData.w, light{X}.vLightFalloff.z, light{X}.vLightFalloff.w);\n                #endif\n            #elif defined(POINTLIGHT{X})\n                #ifdef LIGHT_FALLOFF_GLTF{X}\n                    preInfo.attenuation = computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared, light{X}.vLightFalloff.y);\n                #elif defined(LIGHT_FALLOFF_PHYSICAL{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);\n                #elif defined(LIGHT_FALLOFF_STANDARD{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Standard(preInfo.lightOffset, light{X}.vLightFalloff.x);\n                #else\n                    preInfo.attenuation = computeDistanceLightFalloff(preInfo.lightOffset, preInfo.lightDistanceSquared, light{X}.vLightFalloff.x, light{X}.vLightFalloff.y);\n                #endif\n            #else\n                preInfo.attenuation = 1.0;\n            #endif\n\n            // Simulates Light radius for diffuse and spec term\n            // clear coat is using a dedicated roughness\n            #ifdef HEMILIGHT{X}\n                preInfo.roughness = roughness;\n            #else\n                preInfo.roughness = adjustRoughnessFromLightProperties(roughness, light{X}.vLightSpecular.a, preInfo.lightDistance);\n            #endif\n\n            // Diffuse contribution\n            #ifdef HEMILIGHT{X}\n                info.diffuse = computeHemisphericDiffuseLighting(preInfo, light{X}.vLightDiffuse.rgb, light{X}.vLightGround);\n            #elif defined(SS_TRANSLUCENCY)\n                info.diffuse = computeDiffuseAndTransmittedLighting(preInfo, light{X}.vLightDiffuse.rgb, subSurfaceOut.transmittance);\n            #else\n                info.diffuse = computeDiffuseLighting(preInfo, light{X}.vLightDiffuse.rgb);\n            #endif\n\n            // Specular contribution\n            #ifdef SPECULARTERM\n                #ifdef ANISOTROPIC\n                    info.specular = computeAnisotropicSpecularLighting(preInfo, viewDirectionW, normalW, anisotropicOut.anisotropicTangent, anisotropicOut.anisotropicBitangent, anisotropicOut.anisotropy, clearcoatOut.specularEnvironmentR0, specularEnvironmentR90, AARoughnessFactors.x, light{X}.vLightDiffuse.rgb);\n                #else\n                    info.specular = computeSpecularLighting(preInfo, normalW, clearcoatOut.specularEnvironmentR0, specularEnvironmentR90, AARoughnessFactors.x, light{X}.vLightDiffuse.rgb);\n                #endif\n            #endif\n\n            // Sheen contribution\n            #ifdef SHEEN\n                #ifdef SHEEN_LINKWITHALBEDO\n                    // BE Carefull: Sheen intensity is replacing the roughness value.\n                    preInfo.roughness = sheenOut.sheenIntensity;\n                #else\n                    #ifdef HEMILIGHT{X}\n                        preInfo.roughness = sheenOut.sheenRoughness;\n                    #else\n                        preInfo.roughness = adjustRoughnessFromLightProperties(sheenOut.sheenRoughness, light{X}.vLightSpecular.a, preInfo.lightDistance);\n                    #endif\n                #endif\n                info.sheen = computeSheenLighting(preInfo, normalW, sheenOut.sheenColor, specularEnvironmentR90, AARoughnessFactors.x, light{X}.vLightDiffuse.rgb);\n            #endif\n\n            // Clear Coat contribution\n            #ifdef CLEARCOAT\n                // Simulates Light radius\n                #ifdef HEMILIGHT{X}\n                    preInfo.roughness = clearcoatOut.clearCoatRoughness;\n                #else\n                    preInfo.roughness = adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness, light{X}.vLightSpecular.a, preInfo.lightDistance);\n                #endif\n\n                info.clearCoat = computeClearCoatLighting(preInfo, clearcoatOut.clearCoatNormalW, clearcoatOut.clearCoatAARoughnessFactors.x, clearcoatOut.clearCoatIntensity, light{X}.vLightDiffuse.rgb);\n\n                #ifdef CLEARCOAT_TINT\n                    // Absorption\n                    absorption = computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract, preInfo.L, clearcoatOut.clearCoatNormalW, clearcoatOut.clearCoatColor, clearcoatOut.clearCoatThickness, clearcoatOut.clearCoatIntensity);\n                    info.diffuse *= absorption;\n                    #ifdef SPECULARTERM\n                        info.specular *= absorption;\n                    #endif\n                #endif\n\n                // Apply energy conservation on diffuse and specular term.\n                info.diffuse *= info.clearCoat.w;\n                #ifdef SPECULARTERM\n                    info.specular *= info.clearCoat.w;\n                #endif\n                #ifdef SHEEN\n                    info.sheen *= info.clearCoat.w;\n                #endif\n            #endif\n        #else\n            #ifdef SPOTLIGHT{X}\n                info = computeSpotLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDirection, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightDiffuse.a, glossiness);\n            #elif defined(HEMILIGHT{X})\n                info = computeHemisphericLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightGround, glossiness);\n            #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})\n                info = computeLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightDiffuse.a, glossiness);\n            #endif\n        #endif\n\n        #ifdef PROJECTEDLIGHTTEXTURE{X}\n            info.diffuse *= computeProjectionTextureDiffuseLighting(projectionLightSampler{X}, textureProjectionMatrix{X});\n        #endif\n    #endif\n\n    #ifdef SHADOW{X}\n        #ifdef SHADOWCSM{X}\n            for (int i = 0; i < SHADOWCSMNUM_CASCADES{X}; i++)\n            {\n                #ifdef SHADOWCSM_RIGHTHANDED{X}\n                    diff{X} = viewFrustumZ{X}[i] + vPositionFromCamera{X}.z;\n                #else\n                    diff{X} = viewFrustumZ{X}[i] - vPositionFromCamera{X}.z;\n                #endif\n                if (diff{X} >= 0.) {\n                    index{X} = i;\n                    break;\n                }\n            }\n\n            #ifdef SHADOWCSMUSESHADOWMAXZ{X}\n            if (index{X} >= 0)\n            #endif\n            {\n                #if defined(SHADOWPCF{X})\n                    #if defined(SHADOWLOWQUALITY{X})\n                        shadow = computeShadowWithCSMPCF1(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                    #elif defined(SHADOWMEDIUMQUALITY{X})\n                        shadow = computeShadowWithCSMPCF3(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                    #else\n                        shadow = computeShadowWithCSMPCF5(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                    #endif\n                #elif defined(SHADOWPCSS{X})\n                    #if defined(SHADOWLOWQUALITY{X})\n                        shadow = computeShadowWithCSMPCSS16(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                    #elif defined(SHADOWMEDIUMQUALITY{X})\n                        shadow = computeShadowWithCSMPCSS32(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                    #else\n                        shadow = computeShadowWithCSMPCSS64(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                    #endif\n                #else\n                    shadow = computeShadowCSM(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                #endif\n\n                #ifdef SHADOWCSMDEBUG{X}\n                    shadowDebug{X} = vec3(shadow) * vCascadeColorsMultiplier{X}[index{X}];\n                #endif\n\n                #ifndef SHADOWCSMNOBLEND{X}\n                    float frustumLength = frustumLengths{X}[index{X}];\n                    float diffRatio = clamp(diff{X} / frustumLength, 0., 1.) * cascadeBlendFactor{X};\n                    if (index{X} < (SHADOWCSMNUM_CASCADES{X} - 1) && diffRatio < 1.)\n                    {\n                        index{X} += 1;\n                        float nextShadow = 0.;\n                        #if defined(SHADOWPCF{X})\n                            #if defined(SHADOWLOWQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCF1(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                            #elif defined(SHADOWMEDIUMQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCF3(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                            #else\n                                nextShadow = computeShadowWithCSMPCF5(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                            #endif\n                        #elif defined(SHADOWPCSS{X})\n                            #if defined(SHADOWLOWQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCSS16(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                            #elif defined(SHADOWMEDIUMQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCSS32(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                            #else\n                                nextShadow = computeShadowWithCSMPCSS64(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                            #endif\n                        #else\n                            nextShadow = computeShadowCSM(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                        #endif\n\n                        shadow = mix(nextShadow, shadow, diffRatio);\n                        #ifdef SHADOWCSMDEBUG{X}\n                            shadowDebug{X} = mix(vec3(nextShadow) * vCascadeColorsMultiplier{X}[index{X}], shadowDebug{X}, diffRatio);\n                        #endif\n                    }\n                #endif\n            }\n        #elif defined(SHADOWCLOSEESM{X})\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowWithCloseESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\n            #else\n                shadow = computeShadowWithCloseESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWESM{X})\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowWithESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\n            #else\n                shadow = computeShadowWithESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWPOISSON{X})\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.depthValues);\n            #else\n                shadow = computeShadowWithPoissonSampling(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWPCF{X})\n            #if defined(SHADOWLOWQUALITY{X})\n                shadow = computeShadowWithPCF1(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #elif defined(SHADOWMEDIUMQUALITY{X})\n                shadow = computeShadowWithPCF3(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #else\n                shadow = computeShadowWithPCF5(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWPCSS{X})\n            #if defined(SHADOWLOWQUALITY{X})\n                shadow = computeShadowWithPCSS16(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #elif defined(SHADOWMEDIUMQUALITY{X})\n                shadow = computeShadowWithPCSS32(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #else\n                shadow = computeShadowWithPCSS64(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #else\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.depthValues);\n            #else\n                shadow = computeShadow(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #endif\n\n        #ifdef SHADOWONLY\n            #ifndef SHADOWINUSE\n                #define SHADOWINUSE\n            #endif\n            globalShadow += shadow;\n            shadowLightCount += 1.0;\n        #endif\n    #else\n        shadow = 1.;\n    #endif\n\n    #ifndef SHADOWONLY\n        #ifdef CUSTOMUSERLIGHTING\n            // Compute and reflect MToon lighting\n            #ifdef SPOTLIGHT{X}\n                lightDirection = computeSpotLightDirection(light{X}.vLightData);\n            #elif defined(HEMILIGHT{X})\n                lightDirection = computeHemisphericLightDirection(light{X}.vLightData, normalW.xyz);\n            #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})\n                lightDirection = computeLightDirection(light{X}.vLightData);\n            #endif\n            mtoonDiffuse = computeMToonDiffuseLighting(viewDirectionW.xyz, normalW.xyz, mainUv, lightDirection, light{X}.vLightDiffuse.rgba, shadow);\n            diffuseBase += mtoonDiffuse.rgb;\n            alpha = min(alpha, mtoonDiffuse.a);\n            #if defined(ALPHATEST) && ALPHATEST\n                alpha = (alpha - alphaCutOff) / max(fwidth(alpha), EPS_COL) + 0.5; // Alpha to Coverage\n                if (alpha < alphaCutOff) {\n                    discard;\n                }\n                alpha = 1.0; // Discarded, otherwise it should be assumed to have full opacity\n            #else\n                if (alpha - 0.0001 < 0.000) { // Slightly improves rendering with layered transparency\n                    discard;\n                }\n            #endif\n        #elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})\n            diffuseBase += lightmapColor.rgb * shadow;\n            #ifdef SPECULARTERM\n                #ifndef LIGHTMAPNOSPECULAR{X}\n                    specularBase += info.specular * shadow * lightmapColor.rgb;\n                #endif\n            #endif\n            #ifdef CLEARCOAT\n                #ifndef LIGHTMAPNOSPECULAR{X}\n                    clearCoatBase += info.clearCoat.rgb * shadow * lightmapColor.rgb;\n                #endif\n            #endif\n            #ifdef SHEEN\n                #ifndef LIGHTMAPNOSPECULAR{X}\n                    sheenBase += info.sheen.rgb * shadow;\n                #endif\n            #endif\n        #else\n            #ifdef SHADOWCSMDEBUG{X}\n                diffuseBase += info.diffuse * shadowDebug{X};\n            #else\n                diffuseBase += info.diffuse * shadow;\n            #endif\n            #ifdef SPECULARTERM\n                specularBase += info.specular * shadow;\n            #endif\n            #ifdef CLEARCOAT\n                clearCoatBase += info.clearCoat.rgb * shadow;\n            #endif\n            #ifdef SHEEN\n                sheenBase += info.sheen.rgb * shadow;\n            #endif\n        #endif\n    #endif\n#endif\n");

/***/ }),

/***/ "./src/shaders/mtoon-fragment-functions.frag":
/*!***************************************************!*\
  !*** ./src/shaders/mtoon-fragment-functions.frag ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/**\n* Compute Directional or Point light direction\n*/\nvec3 computeLightDirection(vec4 lightData) {\n    return normalize(mix(lightData.xyz - vPositionW, -lightData.xyz, lightData.w));\n}\n\n/**\n* Compute Spot Light direction\n*/\nvec3 computeSpotLightDirection(vec4 lightData) {\n    return normalize(lightData.xyz - vPositionW);\n}\n\n/**\n* Compute Hemispheric light direction\n*/\nvec3 computeHemisphericLightDirection(vec4 lightData, vec3 vNormal) {\n    return normalize(lightData.xyz);\n}\n\n/**\n* Compute MToon diffuse lighting\n*/\nvec4 computeMToonDiffuseLighting(vec3 worldView, vec3 worldNormal, vec2 mainUv, vec3 lightDirection, vec4 lightDiffuse, float shadowAttenuation) {\n    float _receiveShadow = receiveShadowRate;\n#ifdef RECEIVE_SHADOW\n    _receiveShadow = _receiveShadow * texture2D(receiveShadowSampler, mainUv).r * vReceiveShadowInfos.y;\n#endif\n\n    float _shadingGrade = 0.0;\n#ifdef SHADING_GRADE\n    _shadingGrade = 1.0 - texture2D(shadingGradeSampler, mainUv).r * vShadingGradeInfos.y;\n#endif\n    _shadingGrade = 1.0 - shadingGradeRate * _shadingGrade;\n\n    // Lighting\n    vec3 _lightColor = lightDiffuse.rgb * step(0.5, length(lightDirection)); // length(lightDir) is zero if directional light is disabled.\n    float _dotNL = dot(lightDirection, worldNormal);\n#ifdef MTOON_FORWARD_ADD\n    float _lightAttenuation = 1.0;\n#else\n    float _lightAttenuation = shadowAttenuation * mix(1.0, shadowAttenuation, _receiveShadow);\n#endif\n\n    // lighting intensity\n    float _lightIntensity = _dotNL;\n    _lightIntensity = _lightIntensity * 0.5 + 0.5; // from [-1, +1] to [0, 1]\n    _lightIntensity = _lightIntensity * _lightAttenuation; // receive shadow\n    _lightIntensity = _lightIntensity * _shadingGrade; // darker\n    _lightIntensity = _lightIntensity * 2.0 - 1.0; // from [0, 1] to [-1, +1]\n    // tooned. mapping from [minIntensityThreshold, maxIntensityThreshold] to [0, 1]\n    float _maxIntensityThreshold = mix(1.0, shadeShift, shadeToony);\n    float _minIntensityThreshold = shadeShift;\n    _lightIntensity = clamp((_lightIntensity - _minIntensityThreshold) / max(EPS_COL, (_maxIntensityThreshold - _minIntensityThreshold)), 0.0, 1.0);\n\n    // Albedo color\n    vec3 _shade = vShadeColor;\n#ifdef SHADE\n    _shade = _shade * texture2D(shadeSampler, mainUv).rgb * vShadeInfos.y;\n#endif\n\n    vec4 _lit = vDiffuseColor;\n#ifdef DIFFUSE\n    _lit = _lit * texture2D(diffuseSampler, mainUv) * vDiffuseInfos.y;\n#endif\n    vec3 _col = mix(_shade.rgb, _lit.rgb, _lightIntensity);\n\n    // Direct Light\n    vec3 _lighting = _lightColor;\n    _lighting = mix(_lighting, vec3(max(EPS_COL, max(_lighting.x, max(_lighting.y, _lighting.z)))), lightColorAttenuation); // color atten\n#ifdef MTOON_FORWARD_ADD\n    _lighting *= 0.5; // darken if additional light\n    _lighting *= min(0, dotNL) + 1.0; // darken dotNL < 0 area by using half lambert\n    _lighting *= shadowAttenuation; // darken if receiving shadow\n#else\n    // base light does not darken.\n#endif\n    _col *= _lighting;\n\n    // Indirect Light\n#ifdef MTOON_FORWARD_ADD\n#else\n    vec3 _toonedGI = vAmbientColor.rgb; // TODO: GI\n    vec3 _indirectLighting = mix(_toonedGI, vAmbientColor.rgb, indirectLightIntensity);\n    _indirectLighting = mix(_indirectLighting, vec3(max(EPS_COL, max(_indirectLighting.x, max(_indirectLighting.y, _indirectLighting.z)))), lightColorAttenuation); // color atten\n    _col += _indirectLighting * _lit.rgb;\n\n    _col = min(_col.rgb, _lit.rgb); // comment out if you want to PBR absolutely.\n#endif\n\n    // parametric rim lighting\n#ifdef MTOON_FORWARD_ADD\n    vec3 _staticRimLighting = vec3(0.0);\n    vec3 _mixedRimLighting = _lighting;\n#else\n    vec3 _staticRimLighting = vec3(1.0);\n    vec3 _mixedRimLighting = _lighting + _indirectLighting;\n#endif\n    vec3 _rimLighting = mix(_staticRimLighting, _mixedRimLighting, rimLightingMix);\n    vec3 _rimColor = vRimColor.rgb;\n#ifdef RIM\n    _rimColor = _rimColor * texture2D(rimSampler, vRimUV + mainUv).rgb * vRimInfos.y;\n#endif\n    vec3 _rim = pow(clamp(1.0 - dot(worldNormal, worldView) + rimLift, 0.0, 1.0), rimFresnelPower) * _rimColor.rgb;\n    _col += mix(_rim * _rimLighting, vec3(0.0), isOutline);\n\n    // additive matcap\n#ifdef MTOON_FORWARD_ADD\n#else\n#ifdef MATCAP\n    vec3 _worldViewUp = normalize(vEyeUp - worldView * dot(worldView, vEyeUp));\n    vec3 _worldViewRight = normalize(cross(worldView, _worldViewUp));\n    vec2 _matCapUv = vec2(dot(_worldViewRight, worldNormal), dot(_worldViewUp, worldNormal)) * 0.5 + 0.5;\n    // uv.y is reversed\n    _matCapUv.y = (1.0 - _matCapUv.y);\n    vec3 _matCapLighting = texture2D(matCapSampler, _matCapUv).rgb * vMatCapInfos.y;\n    _col += mix(_matCapLighting, vec3(0.0), isOutline);\n#endif\n#endif\n\n    // Emission\n#ifdef MTOON_FORWARD_ADD\n#else\n    vec3 _emission = vEmissiveColor.rgb;\n#ifdef EMISSIVE\n    _emission *= texture2D(emissiveSampler, mainUv).rgb * vEmissiveInfos.y;\n#endif\n    _col += mix(_emission, vec3(0.0), isOutline);\n#endif\n\n    float _alpha = 1.0;\n\n#if defined(ALPHABLEND) || defined(ALPHATEST)\n    _alpha = mix(_lit.a, _lit.a * vOutlineColor.a, isOutline);\n#endif\n\n    // outline\n#ifdef MTOON_OUTLINE_COLOR_FIXED\n    _col = mix(_col, vOutlineColor.rgb, isOutline);\n#elif defined(MTOON_OUTLINE_COLOR_MIXED)\n    _col = mix(_col, vOutlineColor.rgb * mix(vec3(1.0), _col, outlineLightingMix), isOutline);\n#else\n#endif\n\n    // debug\n#ifdef MTOON_DEBUG_NORMAL\n    #ifdef MTOON_FORWARD_ADD\n        return vec4(0.0);\n    #else\n        return vec4(worldNormal * 0.5 + 0.5, _lit.a);\n    #endif\n#elif defined(MTOON_DEBUG_LITSHADERATE)\n    #ifdef MTOON_FORWARD_ADD\n        return vec4(0.0);\n    #else\n        return vec4(_lightIntensity, _lit.a);\n    #endif\n#endif\n\n    return vec4(_col, _alpha);\n}\n");

/***/ }),

/***/ "./src/shaders/mtoon.frag":
/*!********************************!*\
  !*** ./src/shaders/mtoon.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#include<__decl__mtoonFragment>\n\n#extension GL_OES_standard_derivatives : enable\n\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n\n#define CUSTOM_FRAGMENT_BEGIN\n\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n\n// Constants\n#define RECIPROCAL_PI2 0.15915494\n#define PI_2 6.28318530718\n#define EPS_COL 0.00001\n\n// Input\nvarying vec3 vPositionW;\n\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)\nvarying vec4 vColor;\n#endif\n\n#include<mainUVVaryingDeclaration>[1..7]\n\n// Helper functions\n#include<helperFunctions>\n\n// Lights\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n\n// Samplers\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade,_SAMPLERNAME_,shade)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow,_SAMPLERNAME_,receiveShadow)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade,_SAMPLERNAME_,shadingGrade)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim,_SAMPLERNAME_,rim)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap,_SAMPLERNAME_,matCap)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,OUTLINE_WIDTH,_VARYINGNAME_,OutlineWidth,_SAMPLERNAME_,outlineWidth)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask,_SAMPLERNAME_,uvAnimationMask)\n\n#include<mtoonFragmentFunctions>\n\n// # ifdef REFRACTION\n\n// # ifdef REFRACTIONMAP_3D\n// uniform samplerCube refractionCubeSampler;\n// # else\n// uniform sampler2D refraction2DSampler;\n// # endif\n\n// # endif\n\n// # if defined(SPECULARTERM)\n//     # include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)\n// # endif\n\n// // Fresnel\n// # include<fresnelFunction>\n\n// // Reflection\n// # ifdef REFLECTION\n// # ifdef REFLECTIONMAP_3D\n// uniform samplerCube reflectionCubeSampler;\n// # else\n// uniform sampler2D reflection2DSampler;\n// # endif\n\n// # ifdef REFLECTIONMAP_SKYBOX\n// varying vec3 vPositionUVW;\n// # else\n// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\n// varying vec3 vDirectionW;\n// # endif\n\n// # endif\n\n// # include<reflectionFunction>\n\n// # endif\n\n#include<imageProcessingDeclaration>\n\n#include<imageProcessingFunctions>\n\n#include<bumpFragmentMainFunctions>\n#include<bumpFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n\n#define CUSTOM_FRAGMENT_DEFINITIONS\n\nvoid main(void) {\n#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE\n    #ifdef MTOON_OUTLINE_WIDTH_WORLD\n    #elif defined(MTOON_OUTLINE_WIDTH_SCREEN)\n    #else\n        discard;\n    #endif\n#endif\n\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n\n#include<oitFragment>\n\n#include<clipPlaneFragment>\n\n    vec3 viewDirectionW = normalize(vEyePosition.xyz - vPositionW);\n\n    // Base color\n    vec4 baseColor = vec4(1., 1., 1., 1.);\n    vec3 diffuseColor = vec3(1., 1., 1.);\n\n    // Alpha\n    float alpha = 1.0;\n\n    // Bump\n#ifdef NORMAL\n    vec3 normalW = normalize(vNormalW);\n#else\n    vec3 normalW = normalize(-cross(dFdx(vPositionW), dFdy(vPositionW)));\n#endif\n\n#include<depthPrePass>\n\n    // Ambient color\n    vec3 baseAmbientColor = vec3(1., 1., 1.);\n    float glossiness = 0.;\n\n    // Lighting\n    vec3 diffuseBase = vec3(0., 0., 0.);\n    lightingInfo info;\n    float shadow = 1.;\n    vec3 lightDirection = vec3(0.0, 1.0, 0.0);\n    vec4 mtoonDiffuse = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // MToon UV\n    // All textures will use diffuse(_MainTex) UV\n    vec2 mainUv = vec2(0.0);\n#ifdef DIFFUSE\n    mainUv += vDiffuseUV;\n#elif defined(MAINUV1)\n    mainUv += vMainUV1;\n#elif defined(MAINUV2)\n    mainUv += vMainUV2;\n#endif\n\n    // uv anim\n    float uvAnim = time.y;\n#ifdef UV_ANIMATION_MASK\n    uvAnim *= texture2D(uvAnimationMaskSampler, mainUv).r;\n#endif\n    // translate uv in bottom-left origin coordinates.\n    // uv is reversed\n    mainUv += vec2(-uvAnimationScrollX, -uvAnimationScrollY) * uvAnim;\n    // rotate uv counter-clockwise around (0.5, 0.5) in bottom-left origin coordinates.\n    float rotateRad = uvAnimationRotation * PI_2 * uvAnim;\n    vec2 rotatePivot = vec2(0.5, 0.5);\n    mainUv = mat2(cos(rotateRad), -sin(rotateRad), sin(rotateRad), cos(rotateRad)) * (mainUv - rotatePivot) + rotatePivot;\n\n#include<mtoonBumpFragment>\n\n#ifdef TWOSIDEDLIGHTING\n    normalW = gl_FrontFacing ? normalW : -normalW;\n#endif\n\n// include customized lightFragment\n#include<mtoonLightFragment>[0..maxSimultaneousLights]\n\n    vec3 finalDiffuse = clamp(diffuseBase, 0.0, 1.0) * baseColor.rgb;\n\n    // Composition\n    vec4 color = vec4(finalDiffuse, clamp(alpha, 0.0, 1.0));\n\n    color.rgb = max(color.rgb, 0.);\n#include<logDepthFragment>\n#include<fogFragment>\n\n// Apply image processing if relevant. As this applies in linear space,\n// We first move from gamma to linear.\n#ifdef IMAGEPROCESSINGPOSTPROCESS\n    color.rgb = toLinearSpace(color.rgb);\n#else\n    #ifdef IMAGEPROCESSING\n        // FIXME: support image processing\n        // color.rgb = toLinearSpace(color.rgb);\n        // color = applyImageProcessing(color);\n    #endif\n#endif\n\n    color.a *= visibility;\n\n#ifdef PREMULTIPLYALPHA\n    // Convert to associative (premultiplied) format if needed.\n    color.rgb *= color.a;\n#endif\n\n#ifdef PREPASS\n    float writeGeometryInfo = color.a > 0.4 ? 1.0 : 0.0;\n\n    gl_FragData[0] = color; // We can't split irradiance on std material\n\n    #ifdef PREPASS_POSITION\n    gl_FragData[PREPASS_POSITION_INDEX] = vec4(vPositionW, writeGeometryInfo);\n    #endif\n\n    #ifdef PREPASS_VELOCITY\n    vec2 a = (vCurrentPosition.xy / vCurrentPosition.w) * 0.5 + 0.5;\n    vec2 b = (vPreviousPosition.xy / vPreviousPosition.w) * 0.5 + 0.5;\n\n    vec2 velocity = abs(a - b);\n    velocity = vec2(pow(velocity.x, 1.0 / 3.0), pow(velocity.y, 1.0 / 3.0)) * sign(a - b) * 0.5 + 0.5;\n\n    gl_FragData[PREPASS_VELOCITY_INDEX] = vec4(velocity, 0.0, writeGeometryInfo);\n    #endif\n\n    #ifdef PREPASS_IRRADIANCE\n        gl_FragData[PREPASS_IRRADIANCE_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); //  We can't split irradiance on std material\n    #endif\n\n    #ifdef PREPASS_DEPTH\n        gl_FragData[PREPASS_DEPTH_INDEX] = vec4(vViewPos.z, 0.0, 0.0, writeGeometryInfo); // Linear depth\n    #endif\n\n    #ifdef PREPASS_NORMAL\n        gl_FragData[PREPASS_NORMAL_INDEX] = vec4((view * vec4(normalW, 0.0)).rgb, writeGeometryInfo); // Normal\n    #endif\n\n    #ifdef PREPASS_ALBEDO_SQRT\n        gl_FragData[PREPASS_ALBEDO_SQRT_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); // We can't split albedo on std material\n    #endif\n    #ifdef PREPASS_REFLECTIVITY\n        #if defined(SPECULAR)\n            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(specularMapColor.rgb, specularMapColor.a * writeGeometryInfo);\n        #else\n            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo);\n        #endif\n    #endif\n#endif\n\n#if !defined(PREPASS) || defined(WEBGL2)\n    gl_FragColor = color;\n#endif\n\n#if ORDER_INDEPENDENT_TRANSPARENCY\n    if (fragDepth == nearestDepth) {\n        frontColor.rgb += color.rgb * color.a * alphaMultiplier;\n        frontColor.a = 1.0 - alphaMultiplier * (1.0 - color.a);\n    } else {\n        backColor += color;\n    }\n#endif\n\n#define CUSTOM_FRAGMENT_MAIN_END\n\n}\n");

/***/ }),

/***/ "./src/shaders/mtoon.vert":
/*!********************************!*\
  !*** ./src/shaders/mtoon.vert ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// it is based on default.vertex.fx\n// This include is special, it will be replaced to UboDeclaration(WebGL2) or VertexDeclaration(WebGL1).\n// @see effect.ts\n#include<__decl__mtoonVertex>\n\n// Attributes\n\n#define CUSTOM_VERTEX_BEGIN\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uvAttributeDeclaration>[2..7]\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n\n#include<helperFunctions>\n\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n\n// Uniforms\n#include<instancesDeclaration>\n#include<prePassVertexDeclaration>\n\n#include<mainUVVaryingDeclaration>[1..7]\n\n#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)\n// # if defined(SPECULARTERM)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)\n// # endif\n#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade)\n#include<samplerVertexDeclaration>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade)\n#include<samplerVertexDeclaration>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim)\n#include<samplerVertexDeclaration>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap)\n#include<samplerVertexDeclaration>(_DEFINENAME_,OUTLINE_WIDTH,_VARYINGNAME_,OutlineWidth)\n#include<samplerVertexDeclaration>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask)\n\n// Additional Uniforms\n#ifdef OUTLINE_WIDTH\n    uniform sampler2D outlineWidthSampler;\n#endif\n\n// Output\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)\nvarying vec4 vColor;\n#endif\n\n#include<bumpVertexDeclaration>\n\n#include<clipPlaneVertexDeclaration>\n\n#include<fogVertexDeclaration>\n#include<__decl__lightVxFragment>[0..maxSimultaneousLights]\n\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n\n// # ifdef REFLECTIONMAP_SKYBOX\n// varying vec3 vPositionUVW;\n// # endif\n\n// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\n// varying vec3 vDirectionW;\n// # endif\n\n#include<logDepthDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n\nvoid main(void) {\n\n    #define CUSTOM_VERTEX_MAIN_BEGIN\n\n    vec3 positionUpdated = position;\n#ifdef NORMAL\n    vec3 normalUpdated = normal;\n#endif\n#ifdef TANGENT\n    vec4 tangentUpdated = tangent;\n#endif\n#ifdef UV1\n    vec2 uvUpdated = uv;\n#endif\n\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n\n// # ifdef REFLECTIONMAP_SKYBOX\n//     vPositionUVW = positionUpdated;\n// # endif\n\n#define CUSTOM_VERTEX_UPDATE_POSITION\n\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n\n#include<instancesVertex>\n\n#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)\n    // Compute velocity before bones computation\n    vCurrentPosition = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\n    vPreviousPosition = previousViewProjection * finalPreviousWorld * vec4(positionUpdated, 1.0);\n#endif\n\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n\n    // Texture coordinates\n#ifndef UV1\n    vec2 uvUpdated = vec2(0., 0.);\n#endif\n#ifdef MAINUV1\n    vMainUV1 = uvUpdated;\n#endif\n#include<uvVariableDeclaration>[2..7]\n\n    float outlineTex = 1.0;\n    if (isOutline == 1.0) {\n#ifdef OUTLINE_WIDTH\n    #if OUTLINE_WIDTHDIRECTUV == 0\n        if (vOutlineWidthInfos.x == 0.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uvUpdated, 1.0, 0.0));\n        }\n        #ifdef UV2\n        else if (vOutlineWidthInfos.x == 1.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV3\n        else if (vOutlineWidthInfos.x == 2.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv3, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV4\n        else if (vOutlineWidthInfos.x == 3.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv4, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV5\n        else if (vOutlineWidthInfos.x == 4.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv5, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV6\n        else if (vOutlineWidthInfos.x == 5.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv6, 1.0, 0.0));\n        }\n        #endif\n    #elif defined(MAINUV1)\n        vec2 vOutlineWidthUV = vMainUV1;\n    #elif defined(MAINUV2)\n        vec2 vOutlineWidthUV = vMainUV2;\n    #else\n        vec2 vOutlineWidthUV = vec2(0., 0.);\n    #endif\n        outlineTex = texture2D(outlineWidthSampler, vOutlineWidthUV).r * vOutlineWidthInfos.y;\n#endif\n\n#if defined(MTOON_OUTLINE_WIDTH_WORLD) && defined(NORMAL)\n        // move slightly world normal\n        vec3 outlineOffset = 0.01 * outlineWidth * outlineTex * length(transposeMat3(inverseMat3(mat3(finalWorld))) * normalUpdated) * normalUpdated;\n        positionUpdated += outlineOffset;\n#endif\n    } // End isOutline == 1.0\n\n    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);\n\n#ifdef NORMAL\n    mat3 normalWorld = mat3(finalWorld);\n\n    #if defined(INSTANCES) && defined(THIN_INSTANCES)\n        vNormalW = normalUpdated / vec3(dot(normalWorld[0], normalWorld[0]), dot(normalWorld[1], normalWorld[1]), dot(normalWorld[2], normalWorld[2]));\n        vNormalW = normalize(normalWorld * vNormalW);\n    #else\n        #ifdef NONUNIFORMSCALING\n            normalWorld = transposeMat3(inverseMat3(normalWorld));\n        #endif\n\n        vNormalW = normalize(normalWorld * normalUpdated);\n    #endif\n#endif\n\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\n\n#ifdef MULTIVIEW\n    if (gl_ViewID_OVR == 0u) {\n        gl_Position = viewProjection * worldPos;\n    } else {\n        gl_Position = viewProjectionR * worldPos;\n    }\n#else\n    gl_Position = viewProjection * worldPos;\n#endif\n\n    if (isOutline == 1.0) {\n#if defined(MTOON_OUTLINE_WIDTH_SCREEN) && defined(NORMAL)\n        vec3 viewNormal = transposeMat3(inverseMat3(mat3(view) * mat3(finalWorld))) * normalUpdated;\n        vec3 clipNormal = mat3(projection) * viewNormal;\n        vec2 projectedNormal = normalize(clipNormal.xy);\n        projectedNormal *= min(gl_Position.w, outlineScaledMaxDistance);\n        projectedNormal.x /= aspect; // aspect in original mtoon is y/x. aspect in babylon is x/y.\n        gl_Position.xy += 0.01 * outlineWidth * outlineTex * projectedNormal * clamp(1.0 - abs(normalize(viewNormal).z), 0.0, 1.0); // ignore offset when normal toward camera\n#endif\n\n        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic from three-vrm\n    }\n\n    worldPos = finalWorld * vec4(positionUpdated, 1.0);\n    vPositionW = vec3(worldPos);\n\n#include<prePassVertex>\n\n// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\n//     vDirectionW = normalize(vec3(finalWorld * vec4(positionUpdated, 0.0)));\n// # endif\n\n    #include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)\n    // # if defined(SPECULARTERM)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)\n    // # endif\n    #include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade,_MATRIXNAME_,shade,_INFONAME_,ShadeInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow,_MATRIXNAME_,receiveShadow,_INFONAME_,ReceiveShadowInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade,_MATRIXNAME_,shadingGrade,_INFONAME_,ShadingGradeInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim,_MATRIXNAME_,rim,_INFONAME_,RimInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap,_MATRIXNAME_,matCap,_INFONAME_,MatCapInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask,_MATRIXNAME_,uvAnimationMask,_INFONAME_,uvAnimationMaskInfos.x)\n\n#include<bumpVertex>\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\n    vColor = color;\n#elif defined(INSTANCESCOLOR) && INSTANCESCOLOR\n    vColor = instanceColor;\n#endif\n\n#include<pointCloudVertex>\n#include<logDepthVertex>\n\n#define CUSTOM_VERTEX_MAIN_END\n\n}\n");

/***/ }),

/***/ "./src/shaders/ubo-declaration.vert":
/*!******************************************!*\
  !*** ./src/shaders/ubo-declaration.vert ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// it will be replaced to UboDeclaration(WebGL2) or VertexDeclaration(WebGL1).\n\nlayout(std140, column_major) uniform;\n\nuniform Material\n{\n    // Color & Texture\n    vec4 vDiffuseColor;\n    vec2 vDiffuseInfos;\n    mat4 diffuseMatrix;\n    vec4 vEmissiveColor;\n    vec2 vEmissiveInfos;\n    mat4 emissiveMatrix;\n    vec3 vBumpInfos;\n    mat4 bumpMatrix;\n    vec3 vShadeColor;\n    vec2 vShadeInfos;\n    mat4 shadeMatrix;\n    vec2 vReceiveShadowInfos;\n    mat4 receiveShadowMatrix;\n    vec2 vShadingGradeInfos;\n    mat4 shadingGradeMatrix;\n    vec3 vRimColor;\n    vec2 vRimInfos;\n    mat4 rimMatrix;\n    vec2 vMatCapInfos;\n    mat4 matCapMatrix;\n    vec4 vOutlineColor;\n    vec2 vOutlineWidthInfos;\n    mat4 outlineWidthMatrix;\n    vec2 vUvAnimationMaskInfos;\n    mat4 uvAnimationMaskMatrix;\n\n    // babylon specific\n    vec2 vTangentSpaceParams;\n    float pointSize;\n\n    // MToon params\n    float shadingGradeRate;\n    float receiveShadowRate;\n    float shadeShift;\n    float shadeToony;\n    float lightColorAttenuation;\n    float indirectLightIntensity;\n    float rimLightingMix;\n    float rimFresnelPower;\n    float rimLift;\n    float outlineWidth;\n    float outlineScaledMaxDistance;\n    float outlineLightingMix;\n    float uvAnimationScrollX;\n    float uvAnimationScrollY;\n    float uvAnimationRotation;\n\n    vec3 vEyeUp;\n    float alphaCutOff;\n    vec3 vAmbientColor;\n    float aspect;\n    float isOutline;\n    vec4 time;\n};\n\n// babylon specific\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\n");

/***/ }),

/***/ "./src/shaders/vertex-declaration.vert":
/*!*********************************************!*\
  !*** ./src/shaders/vertex-declaration.vert ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// Uniforms\nuniform mat4 viewProjection;\nuniform mat4 view;\nuniform mat4 projection;\nuniform float outlineWidth;\nuniform float outlineScaledMaxDistance;\nuniform float outlineLightingMix;\nuniform float isOutline;\nuniform float aspect;\n\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef EMISSIVE\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef BUMP\nuniform vec3 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef SHADE\nuniform vec2 vShadeInfos;\nuniform mat4 shadeMatrix;\n#endif\n\n#ifdef RECEIVE_SHADOW\nuniform vec2 vReceiveShadowInfos;\nuniform mat4 receiveShadowMatrix;\n#endif\n\n#ifdef SHADING_GRADE\nuniform vec2 vShadingGradeInfos;\nuniform mat4 shadingGradeMatrix;\n#endif\n\n#ifdef RIM\nuniform vec2 vRimInfos;\nuniform mat4 rimMatrix;\n#endif\n\n#ifdef MATCAP\nuniform vec2 vMatCapInfos;\nuniform mat4 matCapMatrix;\n#endif\n\n#ifdef OUTLINE_WIDTH\nuniform vec2 vOutlineWidthInfos;\nuniform mat4 outlineWidthMatrix;\n#endif\n\n#ifdef UV_ANIMATION_MASK\nuniform vec2 vUvAnimationMaskInfos;\nuniform mat4 uvAnimationMaskMatrix;\n#endif\n\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n");

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
/* harmony import */ var _babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Buffers/buffer */ "./node_modules/@babylonjs/core/Buffers/buffer.js");
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
                    standardMaterialSphere = Object(_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__["CreateSphere"])('StandardMaterialSphere1', {}, scene);
                    standardMaterialSphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](1.2, 1.2, 0);
                    standardMaterialSphere.receiveShadows = true;
                    shadowCaster = Object(_babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_11__["CreateTorusKnot"])('ShadowCaster', {}, scene);
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
                        mat.outlineWidthMode = 2;
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
                        var sphere = Object(_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__["CreateSphere"])("".concat(mat.name, "_Sphere"), {}, scene);
                        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](-1.2 * index, 1.2, 0);
                        sphere.receiveShadows = true;
                        sphere.material = mat;
                    });
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_14__["MToonMaterial"]('MToonMaterialNoNormal', scene);
                        mat.cullMode = 1;
                        mat.outlineCullMode = 2;
                        mat.outlineWidthMode = 1;
                        sphere = Object(_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_10__["CreateSphere"])('MToonMaterialNoNormal_Sphere', {}, scene);
                        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_9__["Vector3"](2.4, 1.2, 0);
                        sphere.receiveShadows = true;
                        sphere.material = mat;
                        if (sphere.geometry) {
                            sphere.geometry.removeVerticesData(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_12__["VertexBuffer"].NormalKind);
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