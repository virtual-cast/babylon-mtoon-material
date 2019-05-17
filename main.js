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
/******/ 			if(installedChunks[chunkId]) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MToonMaterialDefines, _super);
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
        // Attributes
        _this.NORMAL = false;
        _this.TANGENT = false;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.VERTEXALPHA = false;
        // Textures
        _this.MAINUV1 = false;
        _this.MAINUV2 = false;
        _this.DIFFUSE = false;
        _this.DIFFUSEDIRECTUV = 0;
        _this.EMISSIVE = false;
        _this.EMISSIVEDIRECTUV = 0;
        _this.BUMP = false;
        _this.BUMPDIRECTUV = 0;
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
        // Misc
        _this.MULTIVIEW = false;
        _this.FOG = false;
        _this.POINTSIZE = false;
        _this.LOGARITHMICDEPTH = false;
        _this.NONUNIFORMSCALING = false;
        _this.ALPHATEST = false;
        _this.DEPTHPREPASS = false;
        _this.NUM_MORPH_INFLUENCERS = 0;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BonesPerMesh = 0;
        _this.TWOSIDEDLIGHTING = false;
        _this.CLIPPLANE = false;
        _this.CLIPPLANE2 = false;
        _this.CLIPPLANE3 = false;
        _this.CLIPPLANE4 = false;
        _this.BONETEXTURE = false;
        _this.INSTANCES = false;
        _this.SHADOWFLOAT = false;
        _this.MORPHTARGETS = false;
        _this.MORPHTARGETS_NORMAL = false;
        _this.MORPHTARGETS_TANGENT = false;
        _this.PREMULTIPLYALPHA = false; // https://playground.babylonjs.com#LNVJJ7
        _this.rebuild();
        return _this;
    }
    return MToonMaterialDefines;
}(_babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_1__["MaterialDefines"]));



/***/ }),

/***/ "./src/mtoon-material.ts":
/*!*******************************!*\
  !*** ./src/mtoon-material.ts ***!
  \*******************************/
/*! exports provided: MToonMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MToonMaterial", function() { return MToonMaterial; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Engines/constants */ "./node_modules/@babylonjs/core/Engines/constants.js");
/* harmony import */ var _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Materials/effect */ "./node_modules/@babylonjs/core/Materials/effect.js");
/* harmony import */ var _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Materials/material */ "./node_modules/@babylonjs/core/Materials/material.js");
/* harmony import */ var _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Materials/materialHelper */ "./node_modules/@babylonjs/core/Materials/materialHelper.js");
/* harmony import */ var _babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Materials/pushMaterial */ "./node_modules/@babylonjs/core/Materials/pushMaterial.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Meshes/buffer */ "./node_modules/@babylonjs/core/Meshes/buffer.js");
/* harmony import */ var _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Misc/decorators */ "./node_modules/@babylonjs/core/Misc/decorators.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mtoon-material-defines */ "./src/mtoon-material-defines.ts");
/* harmony import */ var _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mtoon-outline-renderer */ "./src/mtoon-outline-renderer.ts");
/* harmony import */ var _babylonjs_core_Rendering_edgesRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Rendering/edgesRenderer */ "./node_modules/@babylonjs/core/Rendering/edgesRenderer.js");
/* harmony import */ var _babylonjs_core_Rendering_outlineRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/Rendering/outlineRenderer */ "./node_modules/@babylonjs/core/Rendering/outlineRenderer.js");












// side-effect


// シェーダ文字列を取得
var UboDeclaration = __webpack_require__(/*! ./shaders/ubo-declaration.vert */ "./src/shaders/ubo-declaration.vert").default;
var VertexDeclaration = __webpack_require__(/*! ./shaders/vertex-declaration.vert */ "./src/shaders/vertex-declaration.vert").default;
var FragmentDeclaration = __webpack_require__(/*! ./shaders/fragment-declaration.frag */ "./src/shaders/fragment-declaration.frag").default;
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
/**
 * MToonMaterial
 *
 * MToon は日本のアニメ的表現をすることを目標としています。
 * 主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。
 * VRM での出力パラメータとプロパティのマッピングは下記となります。
 *
 * @link https://github.com/Santarh/MToon/
 * @link https://dwango.github.io/vrm/univrm/shaders/mtoon/
 * @property alphaCutOut = _Cutoff
 * @property diffuseColor = _Color
 * @property shadeColor = _ShadeColor
 * @property diffuseTexture = _MainTex
 * @property shadeTexture = _ShadeTexture
 * @property parallaxScaleBias = _BumpScale
 * @property bumpTexture = _BumpMap
 * @property receiveShadowTexture = _ReceiveShadowTexture
 * @property receiveShadowRate = _ReceiveShadowRate
 * @property shadingGradeRate = _ShadingGradeRate
 * @property shadingGradeTexture = _ShadingGradeTexture
 * @property shadeShift = _ShadeShift
 * @property shadeToony = _ShadeToony
 * @property lightColorAttenuation = _LightColorAttenuation
 * @property indirectLightIntensity = _IndirectLightIntensity
 * @property rimTexture = _RimTexture
 * @property rimLightingMix = _RimLightingMix
 * @property rimFresnelPower = _RimFresnelPower
 * @property rimLift = _RimLift
 * @property matCapTexture = _SphereAdd
 * @property emissiveColor = _EmissionColor
 * @property emissiveTexture = _EmissionMap
 * @property outlineWidthTexture = _OutlineWidthTexture
 * @property outlineWidth = _OutlineWidth
 * @property outlineScaledMaxDistance = _OutlineScaledMaxDistance
 * @property outlineColor = _OutlineColor
 * @property outlineLightingMix = _OutlineLightingMix
 * @property debugMode = _DebugMode
 * @property outlineWidthMode = _OutlineWidthMode
 * @property outlineColorMode = _OutlineColorMode
 */
var MToonMaterial = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MToonMaterial, _super);
    //#endregion
    /**
     * @inheritdoc
     */
    function MToonMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        //#region Properties
        /**
         * @inheritdoc
         * シリアライズを受け付けない
         */
        _this.doNotSerialize = true;
        /**
         * 通常色テクスチャ
         */
        _this.diffuseTexture = null;
        /**
         * 発光テクスチャ
         */
        _this.emissiveTexture = null;
        /**
         * バンプマップテクスチャ
         */
        _this.bumpTexture = null;
        /**
         * 陰になる部分の色テクスチャ
         */
        _this.shadeTexture = null;
        /**
         * どれだけ影を受け付けるかのテクスチャ
         * receiveShadowRate * texture.a
         */
        _this.receiveShadowTexture = null;
        /**
         * 陰部分の暗さテクスチャ
         * shadingGradeRate * (1.0 - texture.r))
         */
        _this.shadingGradeTexture = null;
        /**
         * Parametric Rim Lighting テクスチャ
         */
        _this.rimTexture = null;
        /**
         * MatCap ライティングテクスチャ
         */
        _this.matCapTexture = null;
        /**
         * アウトラインの幅の調整テクスチャ
         */
        _this.outlineWidthTexture = null;
        /**
         * 現状 MToon は 1 ライトのみ考慮する
         */
        _this.maxSimultaneousLights = 1;
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
        /**
         * Logarithmic depth
         * @link http://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
         */
        _this._useLogarithmicDepth = false;
        /**
         * ライティングを無効にするかどうか
         */
        _this.disableLighting = false;
        /**
         * 両面ライティングを行うかどうか
         */
        _this.twoSidedLighting = false;
        /**
         * アルファテスト時のカットしきい値
         */
        _this.alphaCutOff = 0.5;
        /**
         * diffuseTexture に乗算される色
         */
        _this.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](1.0, 1.0, 1.0);
        /**
         * 環境光
         */
        _this.ambientColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](0.1, 0.1, 0.1);
        /**
         * シーンの AmbientColor と掛け合わせた後の色
         * @see bindForSubMesh
         * @hidden
         */
        _this.globalAmbientColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](0.0, 0.0, 0.0);
        /**
         * 純粋加算される発光色
         */
        _this.emissiveColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](0.0, 0.0, 0.0);
        /**
         * shadeTexture に乗算される色
         */
        _this.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](0.97, 0.81, 0.86);
        /**
         * Rim の色
         */
        _this.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](0.0, 0.0, 0.0);
        /**
         * アウトラインの色
         */
        _this.outlineColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_6__["Color3"](0.0, 0.0, 0.0);
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
        _this.alphaTest = false;
        _this._alphaBlend = false;
        /** @hidden */
        _this.debugMode = DebugMode.None;
        _this._outlineWidthMode = OutlineWidthMode.None;
        _this.outlineColorMode = OutlineColorMode.MixedLighting;
        _this._cullMode = CullMode.Back;
        _this.outlineCullMode = CullMode.Front;
        _this.storedCullMode = CullMode.Back;
        // 裏面描画モードになることがあるのでここで右手座標系に強制する
        // this.sideOrientation = Material.ClockWiseSideOrientation;
        // シェーダストアに登録する
        if (!_babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonUboDeclaration) {
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonUboDeclaration = UboDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonVertexDeclaration = VertexDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonFragmentDeclaration = FragmentDeclaration;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].IncludesShadersStore.mtoonLightFragment = LightFragment;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].ShadersStore.mtoonVertexShader = VertexShader;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["Effect"].ShadersStore.mtoonFragmentShader = FragmentShader;
        }
        return _this;
    }
    Object.defineProperty(MToonMaterial.prototype, "appendedTextures", {
        /**
         * テクスチャ参照の一覧
         */
        get: function () {
            return [
                this.diffuseTexture,
                this.emissiveTexture,
                this.bumpTexture,
                this.shadeTexture,
                this.receiveShadowTexture,
                this.shadingGradeTexture,
                this.matCapTexture,
                this.outlineWidthTexture,
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "appendedActiveTextures", {
        /**
         * アクティブなテクスチャ参照の一覧
         */
        get: function () {
            return this.appendedTextures.filter(function (t) { return t !== null; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "useLogarithmicDepth", {
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "bumpScale", {
        get: function () {
            return this._bumpScale;
        },
        set: function (value) {
            this._bumpScale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "receiveShadowRate", {
        get: function () {
            return this._receiveShadowRate;
        },
        set: function (value) {
            this._receiveShadowRate = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "shadingGradeRate", {
        get: function () {
            return this._shadingGradeRate;
        },
        set: function (value) {
            this._shadingGradeRate = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "shadeShift", {
        get: function () {
            return this._shadeShift;
        },
        set: function (value) {
            this._shadeShift = Math.max(-1.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "shadeToony", {
        get: function () {
            return this._shadeToony;
        },
        set: function (value) {
            this._shadeToony = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "lightColorAttenuation", {
        get: function () {
            return this._lightColorAttenuation;
        },
        set: function (value) {
            this._lightColorAttenuation = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "indirectLightIntensity", {
        get: function () {
            return this._indirectLightIntensity;
        },
        set: function (value) {
            this._indirectLightIntensity = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "rimLightingMix", {
        get: function () {
            return this._rimLightingMix;
        },
        set: function (value) {
            this._rimLightingMix = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "rimFresnelPower", {
        get: function () {
            return this._rimFresnelPower;
        },
        set: function (value) {
            this._rimFresnelPower = Math.max(0.0, Math.min(100.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "rimLift", {
        get: function () {
            return this._rimLift;
        },
        set: function (value) {
            this._rimLift = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineWidth", {
        get: function () {
            return this._outlineWidth;
        },
        set: function (value) {
            this._outlineWidth = Math.max(0.01, Math.min(1.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineScaledMaxDistance", {
        get: function () {
            return this._outlineScaledMaxDistance;
        },
        set: function (value) {
            this._outlineScaledMaxDistance = Math.max(1.0, Math.min(10.0, value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineLightingMix", {
        get: function () {
            return this._outlineLightingMix;
        },
        set: function (value) {
            this._outlineLightingMix = Math.max(0.0, Math.min(1.0, value));
        },
        enumerable: true,
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
            }
        },
        enumerable: true,
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
                this.outlineRenderer = new _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_11__["MToonOutlineRenderer"](this.getScene(), this);
            }
        },
        enumerable: true,
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
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_3__["Material"].ClockWiseSideOrientation;
                    this.twoSidedLighting = false;
                    break;
                case CullMode.Front:
                    // 表面を描画しない(=裏面だけ描画する)
                    this.backFaceCulling = true;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_3__["Material"].CounterClockWiseSideOrientation;
                    this.twoSidedLighting = true;
                    break;
                case CullMode.Back:
                    // 裏面を描画しない(=表面だけ描画する) デフォルト
                    this.backFaceCulling = true;
                    this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_3__["Material"].ClockWiseSideOrientation;
                    this.twoSidedLighting = false;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * アウトライン用 CullMode を設定
     * @hidden
     */
    MToonMaterial.prototype.applyOutlineCullMode = function () {
        this.storedCullMode = this.cullMode;
        this.cullMode = this.outlineCullMode;
    };
    /**
     * CullMode をリストア
     * @hidden
     */
    MToonMaterial.prototype.restoreOutlineCullMode = function () {
        this.cullMode = this.storedCullMode;
    };
    /**
     * @inheritdoc
     * 利用可能かどうかチェックする
     */
    MToonMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh, useInstances) {
        if (useInstances === void 0) { useInstances = false; }
        if (subMesh.effect && this.isFrozen) {
            if (this._wasPreviouslyReady) {
                return true;
            }
        }
        if (!subMesh._materialDefines) {
            subMesh._materialDefines = new _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_10__["MToonMaterialDefines"]();
        }
        var scene = this.getScene();
        var defines = subMesh._materialDefines;
        if (!this.checkReadyOnEveryCall && subMesh.effect) {
            if (defines._renderId === scene.getRenderId()) {
                return true;
            }
        }
        var engine = scene.getEngine();
        // Lights
        defines._needNormals = _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForLights(scene, mesh, defines, this.specularSupported, this.maxSimultaneousLights, this.disableLighting);
        // Multiview
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForMultiview(scene, defines);
        // Textures
        // defines の変更はシェーダのリコンパイルを必要とするため、必要最小限にする
        // そのため若干冗長な記述となっている
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            defines.MAINUV1 = false;
            defines.MAINUV2 = false;
            if (scene.texturesEnabled) {
                // 追加テクスチャの用意を確認する
                if (!this.isReadyForTexture(this.diffuseTexture, defines, 'DIFFUSE')
                    || !this.isReadyForTexture(this.emissiveTexture, defines, 'EMISSIVE')
                    || !this.isReadyForTexture(this.shadeTexture, defines, 'SHADE')
                    || !this.isReadyForTexture(this.receiveShadowTexture, defines, 'RECEIVE_SHADOW')
                    || !this.isReadyForTexture(this.shadingGradeTexture, defines, 'SHADING_GRADE')
                    || !this.isReadyForTexture(this.rimTexture, defines, 'RIM')
                    || !this.isReadyForTexture(this.matCapTexture, defines, 'MATCAP')
                    || !this.isReadyForTexture(this.outlineWidthTexture, defines, 'OUTLINE_WIDTH')) {
                    return false;
                }
                if (scene.getEngine().getCaps().standardDerivatives && this.bumpTexture) {
                    // Bump texure can not be not blocking.
                    if (!this.bumpTexture.isReady()) {
                        return false;
                    }
                    _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForMergedUV(this.bumpTexture, defines, 'BUMP');
                }
                else {
                    defines.BUMP = false;
                }
                defines.TWOSIDEDLIGHTING = !this._backFaceCulling && this.twoSidedLighting;
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
            }
            defines.PREMULTIPLYALPHA = (this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ALPHA_PREMULTIPLIED || this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ALPHA_PREMULTIPLIED_PORTERDUFF);
        }
        // Misc.
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForMisc(mesh, scene, this.useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
        // Attribs
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForAttributes(mesh, defines, this.useVertexColor, this.useBones, this.useMorphTargets, this.useVertexAlpha);
        // Values that need to be evaluated on every frame
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances);
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            // Fallbacks
            var fallbacks = new _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_2__["EffectFallbacks"]();
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
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].HandleFallbacksForShadows(defines, fallbacks, this.maxSimultaneousLights);
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }
            // Attributes
            var attribs = [_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_7__["VertexBuffer"].PositionKind];
            if (defines.NORMAL) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_7__["VertexBuffer"].NormalKind);
            }
            if (defines.TANGENT) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_7__["VertexBuffer"].TangentKind);
            }
            if (defines.UV1) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_7__["VertexBuffer"].UVKind);
            }
            if (defines.UV2) {
                attribs.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_7__["VertexBuffer"].UV2Kind);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareAttributesForInstances(attribs, defines);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareAttributesForMorphTargets(attribs, mesh, defines);
            var shaderName = 'mtoon';
            var uniforms = [
                'world', 'view', 'viewProjection', 'vLightsType',
                'visibility', 'mBones',
                'vClipPlane', 'vClipPlane2', 'vClipPlane3', 'vClipPlane4',
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
                'shadingGradeRate', 'receiveShadowRate', 'shadeShift', 'shadeToony',
                'rimLightingMix', 'rimFresnelPower', 'rimLift',
                'lightColorAttenuation', 'indirectLightIntensity',
                'outlineWidth', 'outlineScaledMaxDistance', 'outlineLightingMix',
                'vEyePosition', 'vEyeUp',
            ];
            var samplers = [
                'diffuseSampler', 'emissiveSampler', 'bumpSampler', 'boneSampler',
                'shadeSampler', 'receiveShadowSampler', 'shadingGradeSampler', 'rimSampler', 'matCapSampler', 'outlineWidthSampler',
            ];
            var uniformBuffers = ['Material', 'Scene'];
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: defines,
                maxSimultaneousLights: this.maxSimultaneousLights,
            });
            this.applyDefines(defines);
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
            }, engine);
            if (effect) {
                // Use previous effect while new one is compiling
                if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                    effect = previousEffect;
                    defines.markAsUnprocessed();
                }
                else {
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
        this._wasPreviouslyReady = true;
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
        this.bindOnlyWorldMatrix(world);
        this.applyDefines(defines);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindBonesParameters(mesh, effect);
        var mustRebind = scene.isCachedMaterialInvalid(this, effect, mesh.visibility);
        if (mustRebind) {
            this._uniformBuffer.bindToEffect(effect, 'Material');
            this.bindViewProjection(effect);
            if (!this._uniformBuffer.useUbo || !this.isFrozen || !this._uniformBuffer.isSync) {
                if (scene.texturesEnabled) {
                    this.bindTexture(this.diffuseTexture, effect, 'diffuse', 'vDiffuseInfos');
                    effect.setFloat('alphaCutOff', this.alphaCutOff);
                    this.bindTexture(this.emissiveTexture, effect, 'emissive', 'vEmissiveInfos');
                    if (this.bumpTexture) {
                        this._uniformBuffer.updateFloat3('vBumpInfos', this.bumpTexture.coordinatesIndex, 1.0 / this.bumpTexture.level, this.bumpScale);
                        var matrix = this.bumpTexture.getTextureMatrix();
                        if (!matrix.isIdentityAs3x2()) {
                            this._uniformBuffer.updateMatrix("bumpMatrix", matrix);
                        }
                        effect.setTexture("bumpSampler", this.bumpTexture);
                        // bumpTexture は babylon.js のデフォルトと反対の状態である
                        if (scene._mirroredCameraPosition) {
                            this._uniformBuffer.updateFloat2('vTangentSpaceParams', 1.0, 1.0);
                        }
                        else {
                            this._uniformBuffer.updateFloat2('vTangentSpaceParams', -1.0, -1.0);
                        }
                    }
                    this.bindTexture(this.shadeTexture, effect, 'shade', 'vShadeInfos');
                    this.bindTexture(this.receiveShadowTexture, effect, 'receiveShadow', 'vReceiveShadowInfos');
                    this.bindTexture(this.shadingGradeTexture, effect, 'shadingGrade', 'vShadingGradeInfos');
                    this.bindTexture(this.rimTexture, effect, 'rim', 'vRimInfos');
                    this.bindTexture(this.matCapTexture, effect, 'matCap', 'vMatCapInfos');
                    this.bindTexture(this.outlineWidthTexture, effect, 'outlineWidth', 'vOutlineWidthInfos');
                }
            }
            // Point size
            if (this.pointsCloud) {
                this._uniformBuffer.updateFloat('pointSize', this.pointSize);
            }
            this._uniformBuffer.updateFloat('visibility', mesh.visibility);
            // MToon uniforms
            this._uniformBuffer.updateFloat('receiveShadowRate', this.receiveShadowRate);
            this._uniformBuffer.updateFloat('shadingGradeRate', this.shadingGradeRate);
            this._uniformBuffer.updateFloat('shadeShift', this.shadeShift);
            this._uniformBuffer.updateFloat('shadeToony', this.shadeToony);
            this._uniformBuffer.updateFloat('lightColorAttenuation', this.lightColorAttenuation);
            this._uniformBuffer.updateFloat('indirectLightIntensity', this.indirectLightIntensity);
            this._uniformBuffer.updateFloat('rimLightingMix', this.rimLightingMix);
            this._uniformBuffer.updateFloat('rimFresnelPower', this.rimFresnelPower);
            this._uniformBuffer.updateFloat('rimLift', this.rimLift);
            this._uniformBuffer.updateFloat('outlineWidth', this.outlineWidth);
            this._uniformBuffer.updateFloat('outlineScaledMaxDistance', this.outlineScaledMaxDistance);
            this._uniformBuffer.updateFloat('outlineLightingMix', this.outlineLightingMix);
            // Clip plane
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindClipPlane(effect, scene);
            // Colors
            scene.ambientColor.multiplyToRef(this.ambientColor, this.globalAmbientColor);
            effect.setColor3('vAmbientColor', this.globalAmbientColor);
            this._uniformBuffer.updateColor4('vDiffuseColor', this.diffuseColor, this.alpha);
            this._uniformBuffer.updateColor3('vEmissiveColor', this.emissiveColor);
            this._uniformBuffer.updateColor3('vShadeColor', this.shadeColor);
            this._uniformBuffer.updateColor3('vRimColor', this.rimColor);
            this._uniformBuffer.updateColor3('vOutlineColor', this.outlineColor);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindEyePosition(effect, scene);
            effect.setVector3('vEyeUp', scene.activeCamera.upVector);
        }
        if (mustRebind || !this.isFrozen) {
            // `freeze` しない限り毎回更新される値
            if (scene.lightsEnabled && !this.disableLighting) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindLights(scene, mesh, effect, defines, this.maxSimultaneousLights);
            }
            // View
            if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_9__["Scene"].FOGMODE_NONE) {
                this.bindView(effect);
            }
            // Fog
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindFogParameters(scene, mesh, effect);
            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindMorphTargetParameters(mesh, effect);
            }
            // Log. depth
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].BindLogDepth(defines, effect, scene);
        }
        this._uniformBuffer.update();
        this._afterBind(mesh, this._activeEffect);
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
        return results;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.getActiveTextures = function () {
        return _super.prototype.getActiveTextures.call(this).concat(this.appendedActiveTextures);
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.hasTexture = function (texture) {
        if (_super.prototype.hasTexture.call(this, texture)) {
            return true;
        }
        return this.appendedActiveTextures.length > 0;
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
        this._uniformBuffer.addUniform('vDiffuseColor', 4);
        this._uniformBuffer.addUniform('vDiffuseInfos', 2);
        this._uniformBuffer.addUniform('diffuseMatrix', 16);
        this._uniformBuffer.addUniform('vEmissiveColor', 3);
        this._uniformBuffer.addUniform('vEmissiveInfos', 2);
        this._uniformBuffer.addUniform('emissiveMatrix', 16);
        this._uniformBuffer.addUniform('vBumpInfos', 3);
        this._uniformBuffer.addUniform('bumpMatrix', 16);
        this._uniformBuffer.addUniform('vShadeColor', 3);
        this._uniformBuffer.addUniform('vShadeInfos', 2);
        this._uniformBuffer.addUniform('shadeMatrix', 16);
        this._uniformBuffer.addUniform('vReceiveShadowInfos', 2);
        this._uniformBuffer.addUniform('receiveShadowMatrix', 16);
        this._uniformBuffer.addUniform('vShadingGradeInfos', 2);
        this._uniformBuffer.addUniform('shadingGradeMatrix', 16);
        this._uniformBuffer.addUniform('vRimColor', 3);
        this._uniformBuffer.addUniform('vRimInfos', 2);
        this._uniformBuffer.addUniform('rimMatrix', 16);
        this._uniformBuffer.addUniform('vMatCapInfos', 2);
        this._uniformBuffer.addUniform('matCapMatrix', 16);
        this._uniformBuffer.addUniform('vOutlineColor', 3);
        this._uniformBuffer.addUniform('vOutlineWidthInfos', 2);
        this._uniformBuffer.addUniform('outlineWidthMatrix', 16);
        this._uniformBuffer.addUniform('vTangentSpaceParams', 2);
        this._uniformBuffer.addUniform('pointSize', 1);
        this._uniformBuffer.addUniform('visibility', 1);
        this._uniformBuffer.addUniform('shadingGradeRate', 1);
        this._uniformBuffer.addUniform('receiveShadowRate', 1);
        this._uniformBuffer.addUniform('shadeShift', 1);
        this._uniformBuffer.addUniform('shadeToony', 1);
        this._uniformBuffer.addUniform('lightColorAttenuation', 1);
        this._uniformBuffer.addUniform('indirectLightIntensity', 1);
        this._uniformBuffer.addUniform('rimLightingMix', 1);
        this._uniformBuffer.addUniform('rimFresnelPower', 1);
        this._uniformBuffer.addUniform('rimLift', 1);
        this._uniformBuffer.addUniform('outlineWidth', 1);
        this._uniformBuffer.addUniform('outlineScaledMaxDistance', 1);
        this._uniformBuffer.addUniform('outlineLightingMix', 1);
        this._uniformBuffer.create();
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
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_4__["MaterialHelper"].PrepareDefinesForMergedUV(texture, defines, key);
        return true;
    };
    /**
     * 定数を設定する
     */
    MToonMaterial.prototype.applyDefines = function (defines) {
        switch (this.debugMode) {
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
    MToonMaterial.prototype.getAlphaTestTexture = function () {
        return this.diffuseTexture;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.needAlphaBlending = function () {
        return this.alphaBlend;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.needAlphaTesting = function () {
        return this.alphaTest;
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.clone = function (name) {
        throw new Error("MToonMaterial cannot be cloned.");
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.prototype.serialize = function () {
        throw new Error("MToonMaterial cannot be serialized");
    };
    /**
     * @inheritdoc
     */
    MToonMaterial.Parse = function (parsedMaterial, scene, rootUrl) {
        throw new Error("MToonMaterial cannot be parsed");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "diffuseTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "emissiveTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "bumpTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "shadeTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "receiveShadowTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "shadingGradeTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "rimTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "matCapTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "outlineWidthTexture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "disableLighting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsTexturesDirty')
    ], MToonMaterial.prototype, "twoSidedLighting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "alphaCutOff", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "diffuseColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "ambientColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "emissiveColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "shadeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "rimColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "outlineColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "receiveShadowRate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "shadingGradeRate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "shadeShift", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "shadeToony", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "lightColorAttenuation", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "indirectLightIntensity", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "rimLightingMix", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "rimFresnelPower", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsLightsDirty')
    ], MToonMaterial.prototype, "rimLift", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsAttributesDirty')
    ], MToonMaterial.prototype, "outlineWidth", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsAttributesDirty')
    ], MToonMaterial.prototype, "outlineScaledMaxDistance", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsAttributesDirty')
    ], MToonMaterial.prototype, "outlineLightingMix", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "alphaTest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "alphaBlend", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "debugMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineWidthMode", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineColorMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "cullMode", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_8__["expandToProperty"])('_markAllSubMeshesAsMiscDirty')
    ], MToonMaterial.prototype, "outlineCullMode", void 0);
    return MToonMaterial;
}(_babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_5__["PushMaterial"]));



/***/ }),

/***/ "./src/mtoon-outline-defines.ts":
/*!**************************************!*\
  !*** ./src/mtoon-outline-defines.ts ***!
  \**************************************/
/*! exports provided: MToonOutlineDefines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MToonOutlineDefines", function() { return MToonOutlineDefines; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Materials/materialDefines */ "./node_modules/@babylonjs/core/Materials/materialDefines.js");


/**
 * Material Defines
 */
var MToonOutlineDefines = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MToonOutlineDefines, _super);
    function MToonOutlineDefines() {
        var _this = _super.call(this) || this;
        _this.MTOON_OUTLINE_WIDTH_WORLD = false;
        _this.MTOON_OUTLINE_WIDTH_SCREEN = false;
        _this.MTOON_OUTLINE_COLOR_FIXED = false;
        _this.MTOON_OUTLINE_COLOR_MIXED = false;
        _this.OUTLINE_WIDTH = false;
        _this.OUTLINE_WIDTHDIRECTUV = 0;
        _this.NORMAL = true;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.MAINUV1 = false;
        _this.MAINUV2 = false;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BONETEXTURE = false;
        _this.INSTANCES = false;
        _this.NUM_MORPH_INFLUENCERS = 0;
        _this.MORPHTARGETS = false;
        _this.MORPHTARGETS_NORMAL = false;
        _this.MORPHTARGETS_TANGENT = false;
        _this.MULTIVIEW = false;
        _this.NONUNIFORMSCALING = false;
        _this.rebuild();
        return _this;
    }
    return MToonOutlineDefines;
}(_babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_1__["MaterialDefines"]));



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
/* harmony import */ var _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Materials/effect */ "./node_modules/@babylonjs/core/Materials/effect.js");
/* harmony import */ var _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Materials/material */ "./node_modules/@babylonjs/core/Materials/material.js");
/* harmony import */ var _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Materials/materialHelper */ "./node_modules/@babylonjs/core/Materials/materialHelper.js");
/* harmony import */ var _babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Meshes/buffer */ "./node_modules/@babylonjs/core/Meshes/buffer.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/sceneComponent */ "./node_modules/@babylonjs/core/sceneComponent.js");
/* harmony import */ var _mtoon_outline_defines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mtoon-outline-defines */ "./src/mtoon-outline-defines.ts");







var VertexShader = __webpack_require__(/*! ./shaders/mtoon-outline.vert */ "./src/shaders/mtoon-outline.vert").default;
var FragmentShader = __webpack_require__(/*! ./shaders/mtoon-outline.frag */ "./src/shaders/mtoon-outline.frag").default;
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
        this.name = BASE_NAME + "_" + material.name;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
        if (!_babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_0__["Effect"].ShadersStore.mtoonOutlineVertexShader) {
            // Register shader
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_0__["Effect"].ShadersStore.mtoonOutlineVertexShader = VertexShader;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_0__["Effect"].ShadersStore.mtoonOutlineFragmentShader = FragmentShader;
        }
    }
    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    MToonOutlineRenderer.prototype.register = function () {
        this.scene._beforeRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_5__["SceneComponentConstants"].STEP_BEFORERENDERINGMESH_OUTLINE, this, this._beforeRenderingMesh);
        this.scene._afterRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_5__["SceneComponentConstants"].STEP_AFTERRENDERINGMESH_OUTLINE, this, this._afterRenderingMesh);
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
        delete this.scene;
        delete this.material;
        delete this._engine;
    };
    /**
     * アウトラインを描画する
     */
    MToonOutlineRenderer.prototype.render = function (mesh, subMesh, batch) {
        if (!this.isReady(mesh, subMesh, batch)) {
            return;
        }
        var effect = this._effect;
        this.material.applyOutlineCullMode();
        this._engine.enableEffect(effect);
        this.bind(mesh);
        mesh._bind(subMesh, effect, _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_1__["Material"].TriangleFillMode);
        this._engine.setZOffset(-1);
        // レンダリング実行
        mesh._processRendering(subMesh, effect, _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_1__["Material"].TriangleFillMode, batch, this.isHardwareInstancedRendering(subMesh._id, batch), function (isInstance, world, effectiveMaterial) {
            effect.setMatrix('world', world);
        });
        this._engine.setZOffset(0);
        this.material.restoreOutlineCullMode();
    };
    /**
     * Effect の状態を確認する
     */
    MToonOutlineRenderer.prototype.isReady = function (mesh, subMesh, batch) {
        if (!this.scene.activeCamera) {
            return false;
        }
        if (!this._defines) {
            this._defines = new _mtoon_outline_defines__WEBPACK_IMPORTED_MODULE_6__["MToonOutlineDefines"]();
        }
        if (this._effect && this._defines._renderId === this.scene.getRenderId()) {
            return true;
        }
        var scene = this.scene;
        var defines = this._defines;
        // Outline のために Normal 属性は必須
        defines._needNormals = true;
        if (this.material.outlineColorMode === 0 && !defines.MTOON_OUTLINE_COLOR_FIXED) {
            // Fixed Color Mode
            defines.MTOON_OUTLINE_COLOR_MIXED = false;
            defines.MTOON_OUTLINE_COLOR_FIXED = true;
            defines.markAsMiscDirty();
        }
        else if (this.material.outlineColorMode === 1 && !defines.MTOON_OUTLINE_COLOR_MIXED) {
            // Mixed Color Mode
            defines.MTOON_OUTLINE_COLOR_MIXED = true;
            defines.MTOON_OUTLINE_COLOR_FIXED = false;
            defines.markAsMiscDirty();
        }
        if (this.material.outlineWidthMode === 0 && (defines.MTOON_OUTLINE_WIDTH_SCREEN || defines.MTOON_OUTLINE_WIDTH_WORLD)) {
            // Width None
            defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
            defines.MTOON_OUTLINE_WIDTH_WORLD = false;
            defines.markAsMiscDirty();
            // 描画しないモードなので常に false
            return false;
        }
        else if (this.material.outlineWidthMode === 1 && !defines.MTOON_OUTLINE_WIDTH_WORLD) {
            // Width World
            defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
            defines.MTOON_OUTLINE_WIDTH_WORLD = true;
            defines.markAsMiscDirty();
        }
        else if (this.material.outlineWidthMode === 2 && !defines.MTOON_OUTLINE_WIDTH_SCREEN) {
            // Width Screen
            defines.MTOON_OUTLINE_WIDTH_SCREEN = true;
            defines.MTOON_OUTLINE_WIDTH_WORLD = false;
            defines.markAsMiscDirty();
        }
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareDefinesForMultiview(scene, defines);
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            defines.MAINUV1 = false;
            defines.MAINUV2 = false;
            if (scene.texturesEnabled) {
                if (this.material.outlineWidthTexture) {
                    if (!this.material.outlineWidthTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                    _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareDefinesForMergedUV(this.material.outlineWidthTexture, defines, 'OUTLINE_WIDTH');
                }
                else {
                    defines.OUTLINE_WIDTH = false;
                }
            }
            else {
                defines.OUTLINE_WIDTH = false;
            }
        }
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareDefinesForMisc(mesh, scene, false, false, true, false, defines);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareDefinesForAttributes(mesh, defines, false, true, true, false);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareDefinesForFrameBoundValues(scene, this._engine, defines, this.isHardwareInstancedRendering(subMesh._id, batch));
        if (defines.isDirty || !this._effect) {
            defines.markAsProcessed();
            var fallbacks = new _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_0__["EffectFallbacks"]();
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }
            var attributes = [_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_3__["VertexBuffer"].PositionKind];
            attributes.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_3__["VertexBuffer"].NormalKind);
            if (defines.UV1) {
                attributes.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_3__["VertexBuffer"].UVKind);
            }
            if (defines.UV2) {
                attributes.push(_babylonjs_core_Meshes_buffer__WEBPACK_IMPORTED_MODULE_3__["VertexBuffer"].UV2Kind);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareAttributesForBones(attributes, mesh, defines, fallbacks);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareAttributesForInstances(attributes, defines);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].PrepareAttributesForMorphTargets(attributes, mesh, defines);
            this._effect = this._engine.createEffect('mtoonOutline', {
                attributes: attributes,
                defines: defines.toString(),
                fallbacks: fallbacks,
                uniformsNames: [
                    'world', 'view', 'viewProjection',
                    'vFogInfos', 'vFogColor',
                    'mBones', 'boneTextureWidth', 'morphTargetInfluences',
                    'vOutlineWidthInfos', 'outlineWidthMatrix',
                    'vOutlineColor', 'outlineWidth', 'outlineScaledMaxDistance', 'outlineLightingMix', 'aspect',
                ],
                uniformBuffersNames: [],
                samplers: ['outlineWidthSampler', 'boneSampler'],
                maxSimultaneousLights: 0,
                indexParameters: {
                    maxSimultaneousLights: 0,
                    maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                },
                onCompiled: null,
                onError: function (effect, errors) {
                    console.error("MToonOutlineRenderer Compile Error", errors);
                },
                transformFeedbackVaryings: null,
            }, this._engine);
        }
        return this._effect.isReady();
    };
    /**
     * アウトラインの描画に必要な変数を設定
     */
    MToonOutlineRenderer.prototype.bind = function (mesh) {
        if (!this._defines || !this._effect) {
            return;
        }
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].BindBonesParameters(mesh, this._effect);
        if (this.scene.texturesEnabled) {
            if (this.material.outlineWidthTexture && this.material.diffuseTexture) {
                // サンプラ以外は diffuse の設定を流用する
                var texture = this.material.diffuseTexture;
                this._effect.setFloat2('vOutlineWidthInfos', texture.coordinatesIndex, texture.level);
                if (!texture.getTextureMatrix().isIdentityAs3x2()) {
                    this._effect.setMatrix('outlineWidthMatrix', texture.getTextureMatrix());
                }
                this._effect.setTexture('outlineWidthSampler', this.material.outlineWidthTexture);
            }
        }
        if (this._defines.NUM_MORPH_INFLUENCERS) {
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].BindMorphTargetParameters(mesh, this._effect);
        }
        if (this.scene.fogEnabled && mesh.applyFog && this.scene.fogMode !== _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].FOGMODE_NONE) {
            this._effect.setMatrix('view', this.scene.getViewMatrix());
        }
        this._effect.setMatrix('viewProjection', this.scene.getTransformMatrix());
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_2__["MaterialHelper"].BindFogParameters(this.scene, mesh, this._effect);
        this._effect.setColor3('vOutlineColor', this.material.outlineColor);
        this._effect.setFloat('outlineWidth', this.material.outlineWidth);
        this._effect.setFloat('outlineScaledMaxDistance', this.material.outlineScaledMaxDistance);
        this._effect.setFloat('outlineLightingMix', this.material.outlineLightingMix);
        this._effect.setFloat('aspect', this._engine.getAspectRatio(this.scene.activeCamera));
    };
    /**
     * このメッシュを描画する前に実行されるコールバック
     */
    MToonOutlineRenderer.prototype._beforeRenderingMesh = function (mesh, subMesh, batch) {
        this._savedDepthWrite = this._engine.getDepthWrite();
        if (!this.willRender(subMesh)) {
            return;
        }
        // 深度ナシで後ろに描画
        this._engine.setDepthWrite(false);
        this.render(subMesh.getRenderingMesh(), subMesh, batch);
        this._engine.setDepthWrite(this._savedDepthWrite);
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
    MToonOutlineRenderer.prototype.isHardwareInstancedRendering = function (subMeshId, batch) {
        return (this._engine.getCaps().instancedArrays)
            && (batch.visibleInstances[subMeshId] !== null)
            && (typeof batch.visibleInstances[subMeshId] !== 'undefined');
    };
    /**
    * このメッシュでアウトラインを描画するかどうか
    */
    MToonOutlineRenderer.prototype.willRender = function (subMesh) {
        var material = subMesh.getMaterial();
        if (!material || material.name !== this.material.name) {
            // このコンポーネントの Material ではない
            return false;
        }
        if (material.needAlphaBlending() || material.needAlphaTesting()) {
            // TODO: アルファがあるものはアウトラインを使えない
            return false;
        }
        return true;
    };
    return MToonOutlineRenderer;
}());



/***/ }),

/***/ "./src/shaders/fragment-declaration.frag":
/*!***********************************************!*\
  !*** ./src/shaders/fragment-declaration.frag ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("uniform mat4 viewProjection;\r\nuniform mat4 view;\r\nuniform vec4 vDiffuseColor;\r\nuniform vec3 vEmissiveColor;\r\nuniform vec3 vShadeColor;\r\nuniform vec3 vRimColor;\r\nuniform vec3 vOutlineColor;\r\n\r\nuniform float visibility;\r\n\r\n// Samplers\r\n#ifdef DIFFUSE\r\nuniform vec2 vDiffuseInfos;\r\n#endif\r\n\r\n#ifdef EMISSIVE\r\nuniform vec2 vEmissiveInfos;\r\n#endif\r\n\r\n#ifdef BUMP\r\nuniform vec3 vBumpInfos;\r\nuniform vec2 vTangentSpaceParams;\r\n#endif\r\n\r\n#ifdef SHADE\r\nuniform vec2 vShadeInfos;\r\n#endif\r\n\r\n#ifdef RECEIVE_SHADOW\r\nuniform vec2 vReceiveShadowInfos;\r\n#endif\r\n\r\n#ifdef SHADING_GRADE\r\nuniform vec2 vShadingGradeInfos;\r\n#endif\r\n\r\n#ifdef RIM\r\nuniform vec2 vRimInfos;\r\n#endif\r\n\r\n#ifdef MATCAP\r\nuniform vec2 vMatCapInfos;\r\n#endif\r\n\r\n#ifdef OUTLINE_WIDTH\r\nuniform vec2 vOutlineWidthInfos;\r\n#endif\r\n\r\nuniform float shadingGradeRate;\r\nuniform float receiveShadowRate;\r\nuniform float shadeShift;\r\nuniform float shadeToony;\r\nuniform float lightColorAttenuation;\r\nuniform float indirectLightIntensity;\r\nuniform float rimLightingMix;\r\nuniform float rimFresnelPower;\r\nuniform float rimLift;\r\nuniform float outlineWidth;\r\nuniform float outlineScaledMaxDistance;\r\nuniform float outlineLightingMix;\r\n");

/***/ }),

/***/ "./src/shaders/light-fragment.frag":
/*!*****************************************!*\
  !*** ./src/shaders/light-fragment.frag ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef LIGHT{X}\r\n    // 影の計算は流用\r\n    #ifdef SHADOW{X}\r\n        #ifdef SHADOWCLOSEESM{X}\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowWithCloseESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadowWithCloseESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWESM{X})\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowWithESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadowWithESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWPOISSON{X})\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadowWithPoissonSampling(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWPCF{X})\r\n            #if defined(SHADOWLOWQUALITY{X})\r\n                shadow = computeShadowWithPCF1(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #elif defined(SHADOWMEDIUMQUALITY{X})\r\n                shadow = computeShadowWithPCF3(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #else\r\n                shadow = computeShadowWithPCF5(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #elif defined(SHADOWPCSS{X})\r\n            #if defined(SHADOWLOWQUALITY{X})\r\n                shadow = computeShadowWithPCSS16(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #elif defined(SHADOWMEDIUMQUALITY{X})\r\n                shadow = computeShadowWithPCSS32(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #else\r\n                shadow = computeShadowWithPCSS64(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #else\r\n            #if defined(SHADOWCUBE{X})\r\n                shadow = computeShadowCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.depthValues);\r\n            #else\r\n                shadow = computeShadow(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\r\n            #endif\r\n        #endif\r\n    #else\r\n        shadow = 1.;\r\n    #endif\r\n\r\n    // ここで MToon のライティングを適用\r\n    #ifdef SPOTLIGHT{X}\r\n        lightDirection = computeSpotLightDirection(light{X}.vLightData);\r\n    #elif defined(HEMILIGHT{X})\r\n        lightDirection = computeHemisphericLightDirection(light{X}.vLightData, normalW.xyz);\r\n    #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})\r\n        lightDirection = computeLightDirection(light{X}.vLightData);\r\n    #endif\r\n    mtoonDiffuse = computeMToonDiffuseLighting(viewDirectionW.xyz, normalW.xyz, uvOffset, lightDirection, light{X}.vLightDiffuse.rgba, shadow);\r\n    diffuseBase = mtoonDiffuse.rgb;\r\n    alpha = alpha * mtoonDiffuse.a;\r\n    #ifdef ALPHATEST\r\n        if (alpha < alphaCutOff) {\r\n            discard;\r\n        }\r\n    #endif\r\n\r\n    #ifdef SPECULARTERM\r\n        specularBase += info.specular * shadow;\r\n    #endif\r\n    #ifdef CLEARCOAT\r\n        clearCoatBase += info.clearCoat.rgb * shadow;\r\n    #endif\r\n    #ifdef SHEEN\r\n        sheenBase += info.sheen.rgb * shadow;\r\n    #endif\r\n#endif\r\n");

/***/ }),

/***/ "./src/shaders/mtoon-outline.frag":
/*!****************************************!*\
  !*** ./src/shaders/mtoon-outline.frag ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("uniform vec3 vOutlineColor;\r\n\r\n#include<fogFragmentDeclaration>\r\n\r\nvoid main(void) {\r\n    vec4 color = vec4(vOutlineColor, 1.0);\r\n\r\n#include<fogFragment>\r\n\r\n    gl_FragColor = color;\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/mtoon-outline.vert":
/*!****************************************!*\
  !*** ./src/shaders/mtoon-outline.vert ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("uniform mat4 viewProjection;\r\n\r\n// Attribute\r\nattribute vec3 position;\r\nattribute vec3 normal;\r\n#ifdef UV1\r\nattribute vec2 uv;\r\n#endif\r\n#ifdef UV2\r\nattribute vec2 uv2;\r\n#endif\r\n\r\n#include<helperFunctions>\r\n\r\n#include<bonesDeclaration>\r\n\r\n#include<instancesDeclaration>\r\n\r\n#include<fogVertexDeclaration>\r\n\r\n#include<morphTargetsVertexGlobalDeclaration>\r\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\r\n\r\n// Uniform\r\nuniform vec2 vOutlineWidthInfos;\r\nuniform mat4 outlineWidthMatrix;\r\nuniform sampler2D outlineWidthSampler;\r\nuniform float outlineWidth;\r\nuniform float outlineScaledMaxDistance;\r\nuniform float aspect;\r\n\r\nvoid main(void)\r\n{\r\n    // Texture coordinates\r\n#ifndef UV1\r\n    vec2 uv = vec2(0., 0.);\r\n#endif\r\n#ifndef UV2\r\n    vec2 uv2 = vec2(0., 0.);\r\n#endif\r\n\r\n    vec3 positionUpdated = position;\r\n    vec3 normalUpdated = normal;\r\n\r\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\r\n\r\n#include<instancesVertex>\r\n#include<bonesVertex>\r\n\r\n    float outlineTex = 1.0;\r\n    vec2 texUV = uv;\r\n#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0\r\n    if (vOutlineWidthInfos.x == 0.)\r\n    {\r\n        texUV = vec2(outlineWidthMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        texUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#ifdef OUTLINE_WIDTH\r\n    outlineTex = texture2D(outlineWidthSampler, texUV).r * vOutlineWidthInfos.y;\r\n#endif\r\n\r\n#ifdef MTOON_OUTLINE_WIDTH_WORLD\r\n    // ワールド座標の normal 分だけ移動する\r\n    vec3 outlineOffset = normalize(finalWorld * vec4(normalUpdated, 1.0)).xyz * 0.01 * outlineWidth * outlineTex;\r\n    positionUpdated.xyz += outlineOffset;\r\n#endif\r\n\r\n    vec4 vertex = vec4(1.0);\r\n#ifdef MULTIVIEW\r\n    if (gl_ViewID_OVR == 0u) {\r\n        vertex = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\r\n    } else {\r\n        vertex = viewProjectionR * finalWorld * vec4(positionUpdated, 1.0);\r\n    }\r\n#else\r\n    vertex = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\r\n#endif\r\n\r\n#ifdef MTOON_OUTLINE_WIDTH_SCREEN\r\n    vec4 projectedNormal = normalize(viewProjection * finalWorld * vec4(normalUpdated, 1.0));\r\n    projectedNormal *= min(vertex.w, outlineScaledMaxDistance);\r\n    projectedNormal.x *= aspect;\r\n    vertex.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy;\r\n#endif\r\n\r\n    // for fogVertex\r\n    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);\r\n\r\n#include<fogVertex>\r\n\r\n    gl_Position = vertex;\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/mtoon.frag":
/*!********************************!*\
  !*** ./src/shaders/mtoon.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#include<__decl__mtoonFragment>\r\n\r\n#if defined(BUMP) || !defined(NORMAL)\r\n#extension GL_OES_standard_derivatives : enable\r\n#endif\r\n\r\n#ifdef LOGARITHMICDEPTH\r\n#extension GL_EXT_frag_depth : enable\r\n#endif\r\n\r\n// Constants\r\n#define RECIPROCAL_PI2 0.15915494\r\n\r\nuniform vec3 vEyePosition;\r\nuniform vec3 vEyeUp;\r\nuniform vec3 vAmbientColor;\r\n\r\n// Input\r\nvarying vec3 vPositionW;\r\n\r\n#ifdef NORMAL\r\nvarying vec3 vNormalW;\r\n#endif\r\n\r\n#ifdef MAINUV1\r\n    varying vec2 vMainUV1;\r\n#endif\r\n\r\n#ifdef MAINUV2\r\n    varying vec2 vMainUV2;\r\n#endif\r\n\r\n// Helper functions\r\n#include<helperFunctions>\r\n\r\n// Lights\r\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\r\n\r\n#include<lightsFragmentFunctions>\r\n#include<shadowsFragmentFunctions>\r\n\r\n// Samplers\r\n#ifdef DIFFUSE\r\n    #if DIFFUSEDIRECTUV == 1\r\n        #define vDiffuseUV vMainUV1\r\n    #elif DIFFUSEDIRECTUV == 2\r\n        #define vDiffuseUV vMainUV2\r\n    #else\r\n        varying vec2 vDiffuseUV;\r\n    #endif\r\n    uniform sampler2D diffuseSampler;\r\n#endif\r\n\r\n#ifdef EMISSIVE\r\n    #if EMISSIVEDIRECTUV == 1\r\n        #define vEmissiveUV vMainUV1\r\n    #elif EMISSIVEDIRECTUV == 2\r\n        #define vEmissiveUV vMainUV2\r\n    #else\r\n        varying vec2 vEmissiveUV;\r\n    #endif\r\n    uniform sampler2D emissiveSampler;\r\n#endif\r\n\r\n#ifdef ALPHATEST\r\n     uniform float alphaCutOff;\r\n#endif\r\n\r\n#ifdef SHADE\r\n    uniform sampler2D shadeSampler;\r\n    #if SHADEDIRECTUV == 1\r\n        #define vShadeUV vMainUV1\r\n    #elif SHADEDIRECTUV == 2\r\n        #define vShadeUV vMainUV2\r\n    #else\r\n        varying vec2 vShadeUV;\r\n    #endif\r\n#endif\r\n#ifdef RECEIVE_SHADOW\r\n    uniform sampler2D receiveShadowSampler;\r\n    #if RECEIVE_SHADOWDIRECTUV == 1\r\n        #define vReceiveShadowUV vMainUV1\r\n    #elif RECEIVE_SHADOWDIRECTUV == 2\r\n        #define vReceiveShadowUV vMainUV2\r\n    #else\r\n        varying vec2 vReceiveShadowUV;\r\n    #endif\r\n#endif\r\n#ifdef SHADING_GRADE\r\n    uniform sampler2D shadingGradeSampler;\r\n    #if SHADING_GRADEDIRECTUV == 1\r\n        #define vShadingGradeUV vMainUV1\r\n    #elif SHADING_GRADEDIRECTUV == 2\r\n        #define vShadingGradeUV vMainUV2\r\n    #else\r\n        varying vec2 vShadingGradeUV;\r\n    #endif\r\n#endif\r\n#ifdef RIM\r\n    uniform sampler2D rimSampler;\r\n    #if RIMDIRECTUV == 1\r\n        #define vRimUV vMainUV1\r\n    #elif RIMDIRECTUV == 2\r\n        #define vRimUV vMainUV2\r\n    #else\r\n        varying vec2 vRimUV;\r\n    #endif\r\n#endif\r\n#ifdef MATCAP\r\n    uniform sampler2D matCapSampler;\r\n    #if MATCAPDIRECTUV == 1\r\n        #define vMatCapUV vMainUV1\r\n    #elif MATCAPDIRECTUV == 2\r\n        #define vMatCapUV vMainUV2\r\n    #else\r\n        varying vec2 vMatCapUV;\r\n    #endif\r\n#endif\r\n#ifdef OUTLINE_WIDTH\r\n    uniform sampler2D outlineWidthSampler;\r\n    #if OUTLINE_WIDTHDIRECTUV == 1\r\n        #define vOutlineWidthUV vMainUV1\r\n    #elif OUTLINE_WIDTHDIRECTUV == 2\r\n        #define vOutlineWidthUV vMainUV2\r\n    #else\r\n        varying vec2 vOutlineWidthUV;\r\n    #endif\r\n#endif\r\n\r\n/**\r\n* DirectionLight, PointLight の角度を計算\r\n*/\r\nvec3 computeLightDirection(vec4 lightData) {\r\n      return normalize(mix(lightData.xyz - vPositionW, -lightData.xyz, lightData.w));\r\n}\r\n\r\n/**\r\n* SpotLight の角度を計算\r\n*/\r\nvec3 computeSpotLightDirection(vec4 lightData) {\r\n     return normalize(lightData.xyz - vPositionW);\r\n}\r\n\r\n/**\r\n* HemisphericLight の角度を計算\r\n*/\r\nvec3 computeHemisphericLightDirection(vec4 lightData, vec3 vNormal) {\r\n     return normalize(-lightData.xyz);\r\n}\r\n\r\n/**\r\n* MToon シェーダーの陰実装\r\n*/\r\nvec4 computeMToonDiffuseLighting(vec3 worldView, vec3 worldNormal, vec2 uvOffset, vec3 lightDirection, vec4 lightDiffuse, float shadow) {\r\n    float _receiveShadow = receiveShadowRate;\r\n#ifdef RECEIVE_SHADOW\r\n    _receiveShadow = _receiveShadow * texture2D(receiveShadowSampler, vReceiveShadowUV + uvOffset).a;\r\n#endif\r\n\r\n    float _shadingGrade = shadingGradeRate;\r\n#ifdef SHADING_GRADE\r\n    _shadingGrade = _shadingGrade * (1.0 - texture2D(shadingGradeSampler, vShadingGradeUV + uvOffset).r);\r\n#endif\r\n\r\n    // lighting intensity\r\n    float _lightIntensity = dot(lightDirection, worldNormal);\r\n    _lightIntensity = _lightIntensity * 0.5 + 0.5; // from [-1, +1] to [0, 1]\r\n    _lightIntensity = _lightIntensity * (1.0 - _receiveShadow * (1.0 - (shadow * 0.5 + 0.5))); // receive shadow\r\n    _lightIntensity = _lightIntensity * _shadingGrade; // darker\r\n    _lightIntensity = _lightIntensity * 2.0 - 1.0; // from [0, 1] to [-1, +1]\r\n    _lightIntensity = smoothstep(shadeShift, shadeShift + (1.0 - shadeToony), _lightIntensity); // shade & tooned\r\n\r\n    // lighting with color\r\n    vec3 _directLighting = lightDiffuse.rgb; // direct\r\n    vec3 _lighting = _directLighting;\r\n    _lighting = mix(_lighting, vec3(max(0.001, max(_lighting.x, max(_lighting.y, _lighting.z)))), lightColorAttenuation);\r\n\r\n    // GI\r\n    vec3 _indirectLighting = indirectLightIntensity * vAmbientColor.rgb;\r\n    _indirectLighting = mix(_indirectLighting, vec3(max(0.001, max(_indirectLighting.x, max(_indirectLighting.y, _indirectLighting.z)))), lightColorAttenuation);\r\n\r\n    // color lerp\r\n    vec3 _shade = vShadeColor;\r\n#ifdef SHADE\r\n    _shade = _shade * texture2D(shadeSampler, vShadeUV + uvOffset).rgb;\r\n#endif\r\n\r\n    vec4 _lit = vDiffuseColor;\r\n#ifdef DIFFUSE\r\n    _lit = _lit * texture2D(diffuseSampler, vDiffuseUV + uvOffset);\r\n#endif\r\n\r\n    vec3 _result = mix(_shade.rgb, _lit.rgb, _lightIntensity);\r\n    _result = _result * _lighting + _indirectLighting * _lit.rgb;\r\n\r\n    // pure light\r\n    vec3 _pureLight = _lighting * _lightIntensity * _indirectLighting;\r\n    _pureLight = mix(_pureLight, vec3(max(_pureLight.x, max(_pureLight.y, _pureLight.z))), lightColorAttenuation);\r\n\r\n    // parametric rim lighting\r\n#ifdef MTOON_FORWARD_ADD\r\n#else\r\n    vec3 _rimColor = vRimColor.rgb;\r\n#ifdef RIM\r\n    _rimColor = _rimColor * texture2D(rimSampler, vRimUV + uvoffset).rgb;\r\n#endif\r\n    vec3 _rim = pow(clamp(1.0 - dot(worldNormal, worldView) + rimLift, 0.0, 1.0), rimFresnelPower) * _rimColor.rgb;\r\n    _rim *= mix(vec3(1.0), _pureLight, rimLightingMix);\r\n    _result += _rim;\r\n#endif\r\n\r\n    // additive matcap\r\n#ifdef MTOON_FORWARD_ADD\r\n#else\r\n#ifdef MATCAP\r\n    vec3 _worldViewUp = normalize(vEyeUp - worldView * dot(worldView, vEyeUp));\r\n    vec3 _worldViewRight = normalize(cross(worldView, _worldViewUp));\r\n    vec2 _matCapUv = vec2(dot(_worldViewRight, worldNormal), dot(_worldViewUp, worldNormal)) * 0.5 + 0.5;\r\n    _matCapUv.y = (1.0 - _matCapUv.y);\r\n    vec3 _matCapLighting = texture2D(matCapSampler, _matCapUv + uvOffset).rgb;\r\n    _result += _matCapLighting;\r\n#endif\r\n#endif\r\n\r\n    // TODO outline\r\n\r\n    // debug\r\n#ifdef MTOON_DEBUG_NORMAL\r\n    #ifdef MTOON_FORWARD_ADD\r\n        return vec4(0.0);\r\n    #else\r\n        return vec4(worldNormal * 0.5 + 0.5, _lit.a);\r\n    #endif\r\n#elif defined(MTOON_DEBUG_LITSHADERATE)\r\n    #ifdef MTOON_FORWARD_ADD\r\n        return vec4(0.0);\r\n    #else\r\n        return vec4(_lightIntensity * _lighting, _lit.a);\r\n    #endif\r\n#endif\r\n\r\n    return vec4(_result, _lit.a);\r\n}\r\n\r\n#include<bumpFragmentFunctions>\r\n#include<clipPlaneFragmentDeclaration>\r\n#include<logDepthDeclaration>\r\n#include<fogFragmentDeclaration>\r\n\r\nvoid main(void) {\r\n#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE\r\n    #ifdef MTOON_OUTLINE_WIDTH_WORLD\r\n    #elif MTOON_OUTLINE_WIDTH_SCREEN\r\n    #else\r\n        discard;\r\n    #endif\r\n#endif\r\n\r\n#include<clipPlaneFragment>\r\n\r\n    vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\r\n\r\n    // Base color\r\n    vec4 baseColor = vec4(1., 1., 1., 1.);\r\n    vec3 diffuseColor = vDiffuseColor.rgb;\r\n\r\n\r\n#ifdef DIFFUSE\r\n    baseColor.rgb *= vDiffuseInfos.y;\r\n#endif\r\n\r\n    // Alpha\r\n    float alpha = 1.0;\r\n\r\n    // Bump\r\n#ifdef NORMAL\r\n     vec3 normalW = normalize(vNormalW);\r\n#else\r\n     vec3 normalW = normalize(-cross(dFdx(vPositionW), dFdy(vPositionW)));\r\n#endif\r\n\r\n#include<bumpFragment>\r\n\r\n#ifdef TWOSIDEDLIGHTING\r\n     normalW = gl_FrontFacing ? normalW : -normalW;\r\n#endif\r\n\r\n#include<depthPrePass>\r\n\r\n    // Ambient color\r\n    vec3 baseAmbientColor = vec3(1., 1., 1.);\r\n    float glossiness = 0.;\r\n\r\n    // Lighting\r\n    vec3 diffuseBase = vec3(0., 0., 0.);\r\n    lightingInfo info;\r\n    float shadow = 1.;\r\n    vec3 lightDirection = vec3(0.0, 1.0, 0.0);\r\n    vec4 mtoonDiffuse = vec4(0.0, 0.0, 0.0, 1.0);\r\n\r\n// 通常の lightFragment ではなく、自前実装の mtoonLightFragment を読み込む\r\n#include<mtoonLightFragment>[0..maxSimultaneousLights]\r\n\r\n    // Emissive\r\n    vec3 emissiveColor = vEmissiveColor.rgb;\r\n#ifdef EMISSIVE\r\n     emissiveColor *= texture2D(emissiveSampler, vEmissiveUV + uvOffset).rgb * vEmissiveInfos.y;\r\n#endif\r\n\r\n    vec3 finalDiffuse = clamp(diffuseBase + emissiveColor, 0.0, 1.0) * baseColor.rgb;\r\n\r\n    // Composition\r\n    vec4 color = vec4(finalDiffuse, alpha);\r\n\r\n    color.rgb = max(color.rgb, 0.);\r\n#include<logDepthFragment>\r\n#include<fogFragment>\r\n\r\n     color.a *= visibility;\r\n\r\n#ifdef PREMULTIPLYALPHA\r\n    // Convert to associative (premultiplied) format if needed.\r\n    color.rgb *= color.a;\r\n#endif\r\n\r\n     gl_FragColor = color;\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/mtoon.vert":
/*!********************************!*\
  !*** ./src/shaders/mtoon.vert ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// この include は特別で、 UboDeclaration または VertexDeclaration のどちらかに置換される\r\n// @see effect.ts\r\n#include<__decl__mtoonVertex>\r\n\r\n// 基本的に default.vertex.fx のまま\r\n\r\n// Attributes\r\n\r\nattribute vec3 position;\r\n#ifdef NORMAL\r\nattribute vec3 normal;\r\n#endif\r\n#ifdef TANGENT\r\nattribute vec4 tangent;\r\n#endif\r\n#ifdef UV1\r\nattribute vec2 uv;\r\n#endif\r\n#ifdef UV2\r\nattribute vec2 uv2;\r\n#endif\r\n\r\n#include<helperFunctions>\r\n\r\n#include<bonesDeclaration>\r\n\r\n// Uniforms\r\n#include<instancesDeclaration>\r\n\r\n#ifdef MAINUV1\r\nvarying vec2 vMainUV1;\r\n#endif\r\n\r\n#ifdef MAINUV2\r\nvarying vec2 vMainUV2;\r\n#endif\r\n\r\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\r\nvarying vec2 vDiffuseUV;\r\n#endif\r\n\r\n#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0\r\nvarying vec2 vEmissiveUV;\r\n#endif\r\n\r\n#if defined(BUMP) && BUMPDIRECTUV == 0\r\nvarying vec2 vBumpUV;\r\n#endif\r\n\r\n// Output\r\nvarying vec3 vPositionW;\r\n#ifdef NORMAL\r\nvarying vec3 vNormalW;\r\n#endif\r\n\r\n#include<bumpVertexDeclaration>\r\n\r\n#include<clipPlaneVertexDeclaration>\r\n\r\n#include<fogVertexDeclaration>\r\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\r\n\r\n#include<morphTargetsVertexGlobalDeclaration>\r\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\r\n\r\n#include<logDepthDeclaration>\r\n\r\n\r\n// Additional Uniforms\r\n#if defined(SHADE) && SHADEDIRECTUV == 0\r\n    varying vec2 vShadeUV;\r\n#endif\r\n#if defined(RECEIVE_SHADOW) && RECEIVE_SHADOWDIRECTUV == 0\r\n    varying vec2 vReceiveShadowUV;\r\n#endif\r\n#if defined(SHADING_GRADE) && SHADING_GRADEDIRECTUV == 0\r\n    varying vec2 vShadingGradeUV;\r\n#endif\r\n#if defined(RIM) && RIMDIRECTUV == 0\r\n    varying vec2 vRimUV;\r\n#endif\r\n#if defined(MATCAP) && MATCAPDIRECTUV == 0\r\n    varying vec2 vMatCapUV;\r\n#endif\r\n#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0\r\n    varying vec2 vOutlineWidthUV;\r\n#endif\r\n\r\nvoid main(void) {\r\n\r\n    vec3 positionUpdated = position;\r\n#ifdef NORMAL\r\n    vec3 normalUpdated = normal;\r\n#endif\r\n#ifdef TANGENT\r\n    vec4 tangentUpdated = tangent;\r\n#endif\r\n\r\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\r\n\r\n#include<instancesVertex>\r\n#include<bonesVertex>\r\n\r\n#ifdef MULTIVIEW\r\n    if (gl_ViewID_OVR == 0u) {\r\n        gl_Position = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\r\n    } else {\r\n        gl_Position = viewProjectionR * finalWorld * vec4(positionUpdated, 1.0);\r\n    }\r\n#else\r\n    gl_Position = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\r\n#endif\r\n\r\n    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);\r\n    vPositionW = vec3(worldPos);\r\n\r\n#ifdef NORMAL\r\n    mat3 normalWorld = mat3(finalWorld);\r\n\r\n    #ifdef NONUNIFORMSCALING\r\n        normalWorld = transposeMat3(inverseMat3(normalWorld));\r\n    #endif\r\n\r\n    vNormalW = normalize(normalWorld * normalUpdated);\r\n#endif\r\n\r\n    // Texture coordinates\r\n#ifndef UV1\r\n    vec2 uv = vec2(0., 0.);\r\n#endif\r\n#ifndef UV2\r\n    vec2 uv2 = vec2(0., 0.);\r\n#endif\r\n\r\n#ifdef MAINUV1\r\n    vMainUV1 = uv;\r\n#endif\r\n\r\n#ifdef MAINUV2\r\n    vMainUV2 = uv2;\r\n#endif\r\n\r\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\r\n    if (vDiffuseInfos.x == 0.)\r\n    {\r\n        vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0\r\n    if (vEmissiveInfos.x == 0.)\r\n    {\r\n        vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#if defined(BUMP) && BUMPDIRECTUV == 0\r\n    if (vBumpInfos.x == 0.)\r\n    {\r\n        vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\r\n    }\r\n    else\r\n    {\r\n        vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#if defined(SHADE) && SHADEDIRECTUV == 0\r\n    if (vShadeInfos.x == 0.) {\r\n        vShadeUV = vec2(shadeMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vShadeUV = vec2(shadeMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(RECEIVE_SHADOW) && RECEIVE_SHADOWDIRECTUV == 0\r\n    if (vReceiveShadowInfos.x == 0.) {\r\n        vReceiveShadowUV = vec2(receiveShadowMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vReceiveShadowUV = vec2(receiveShadowMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(SHADING_GRADE) && SHADING_GRADEDIRECTUV == 0\r\n    if (vShadingGradeInfos.x == 0.) {\r\n        vShadingGradeUV = vec2(shadingGradeMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vShadingGradeUV = vec2(shadingGradeMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(RIM) && RIMDIRECTUV == 0\r\n    if (vRimInfos.x == 0.) {\r\n        vRimUV = vec2(rimMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vRimUV = vec2(rimMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(MATCAP) && MATCAPDIRECTUV == 0\r\n    if (vMatCapInfos.x == 0.) {\r\n        vMatCapUV = vec2(matCapMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vMatCapUV = vec2(matCapMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n#if defined(OUTLINE_WIDTH) && OUTLINE_WIDTHDIRECTUV == 0\r\n    if (vOutlineWidthInfos.x == 0.) {\r\n        vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv, 1.0, 0.0));\r\n    } else {\r\n        vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));\r\n    }\r\n#endif\r\n\r\n#include<bumpVertex>\r\n#include<clipPlaneVertex>\r\n#include<fogVertex>\r\n#include<shadowsVertex>[0..maxSimultaneousLights]\r\n\r\n#include<pointCloudVertex>\r\n#include<logDepthVertex>\r\n\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/ubo-declaration.vert":
/*!******************************************!*\
  !*** ./src/shaders/ubo-declaration.vert ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// include<__decl__mtoonVertex> または include<__decl__mtoonFragment> と書いた時に展開される\r\n// @see effect.ts\r\n\r\nlayout(std140, column_major) uniform;\r\n\r\nuniform Material\r\n{\r\n    vec4 vDiffuseColor;\r\n    vec2 vDiffuseInfos;\r\n    mat4 diffuseMatrix;\r\n    vec4 vEmissiveColor;\r\n    vec2 vEmissiveInfos;\r\n    mat4 emissiveMatrix;\r\n    vec3 vBumpInfos;\r\n    mat4 bumpMatrix;\r\n    vec3 vShadeColor;\r\n    vec2 vShadeInfos;\r\n    mat4 shadeMatrix;\r\n    vec2 vReceiveShadowInfos;\r\n    mat4 receiveShadowMatrix;\r\n    vec2 vShadingGradeInfos;\r\n    mat4 shadingGradeMatrix;\r\n    vec3 vRimColor;\r\n    vec2 vRimInfos;\r\n    mat4 rimMatrix;\r\n    vec2 vMatCapInfos;\r\n    mat4 matCapMatrix;\r\n    vec4 vOutlineColor;\r\n    vec2 vOutlineWidthInfos;\r\n    mat4 outlineWidthMatrix;\r\n    vec2 vTangentSpaceParams;\r\n    float pointSize;\r\n    float visibility;\r\n    float shadingGradeRate;\r\n    float receiveShadowRate;\r\n    float shadeShift;\r\n    float shadeToony;\r\n    float lightColorAttenuation;\r\n    float indirectLightIntensity;\r\n    float rimLightingMix;\r\n    float rimFresnelPower;\r\n    float rimLift;\r\n    float outlineWidth;\r\n    float outlineScaledMaxDistance;\r\n    float outlineLightingMix;\r\n};\r\n\r\nuniform Scene {\r\n    mat4 viewProjection;\r\n#ifdef MULTIVIEW\r\n    mat4 viewProjectionR;\r\n#endif\r\n    mat4 view;\r\n};\r\n");

/***/ }),

/***/ "./src/shaders/vertex-declaration.vert":
/*!*********************************************!*\
  !*** ./src/shaders/vertex-declaration.vert ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// Uniforms\r\nuniform mat4 viewProjection;\r\nuniform mat4 view;\r\n\r\n#ifdef DIFFUSE\r\nuniform mat4 diffuseMatrix;\r\nuniform vec2 vDiffuseInfos;\r\n#endif\r\n\r\n#ifdef EMISSIVE\r\nuniform vec2 vEmissiveInfos;\r\nuniform mat4 emissiveMatrix;\r\n#endif\r\n\r\n#ifdef BUMP\r\nuniform vec3 vBumpInfos;\r\nuniform mat4 bumpMatrix;\r\n#endif\r\n\r\n#ifdef SHADE\r\nuniform vec2 vShadeInfos;\r\nuniform mat4 shadeMatrix;\r\n#endif\r\n\r\n#ifdef RECEIVE_SHADOW\r\nuniform vec2 vReceiveShadowInfos;\r\nuniform mat4 receiveShadowMatrix;\r\n#endif\r\n\r\n#ifdef SHADING_GRADE\r\nuniform vec2 vShadingGradeInfos;\r\nuniform mat4 shadingGradeMatrix;\r\n#endif\r\n\r\n#ifdef RIM\r\nuniform vec2 vRimInfos;\r\nuniform mat4 rimMatrix;\r\n#endif\r\n\r\n#ifdef MATCAP\r\nuniform vec2 vMatCapInfos;\r\nuniform mat4 matCapMatrix;\r\n#endif\r\n\r\n#ifdef OUTLINE_WIDTH\r\nuniform vec2 vOutlineWidthInfos;\r\nuniform mat4 outlineWidthMatrix;\r\n#endif\r\n\r\n#ifdef POINTSIZE\r\nuniform float pointSize;\r\n#endif\r\n");

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
/* harmony import */ var _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "./node_modules/@babylonjs/core/Meshes/mesh.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _mtoon_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mtoon-material */ "./src/mtoon-material.ts");
/* harmony import */ var _inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inspectable-custom-properties */ "./src/test/inspectable-custom-properties.ts");
/* harmony import */ var _babylonjs_core_Helpers_sceneHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/Helpers/sceneHelpers */ "./node_modules/@babylonjs/core/Helpers/sceneHelpers.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/torusKnotBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babylonjs/inspector */ "./node_modules/@babylonjs/inspector/babylon.inspector.bundle.max.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_16__);

















function main() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var debugProperties, canvas, engine, scene, camera, directionalLight, hemisphericLight, pointLight, standardMaterialSphere, shadowCaster, shadowGenerator, mtoonMaterials, mat, mat, diffuse, bump, mat, mat;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    debugProperties = getDebugProperties();
                    canvas = document.getElementById('main-canvas');
                    engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](canvas, true, {
                        alpha: false,
                        disableWebGL2Support: debugProperties.webgl1,
                    });
                    scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_10__["Scene"](engine);
                    camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__["ArcRotateCamera"]('MainCamera1', 0, 0, 3, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 1.2, 0), scene, true);
                    camera.lowerRadiusLimit = 0.1;
                    camera.upperRadiusLimit = 20;
                    camera.wheelDeltaPercentage = 0.01;
                    camera.attachControl(canvas);
                    scene.createDefaultEnvironment({
                        createGround: true,
                        createSkybox: false,
                        enableGroundMirror: false,
                        enableGroundShadow: false,
                    });
                    directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_3__["DirectionalLight"]('DirectionalLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](1, -0.5, 0.0), scene);
                    directionalLight.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](-50, 25, 0);
                    directionalLight.setEnabled(true);
                    hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__["HemisphericLight"]('HemisphericLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](-0.2, -0.8, -1), scene);
                    hemisphericLight.setEnabled(false);
                    pointLight = new _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_5__["PointLight"]('PointLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](0, 0, 1), scene);
                    pointLight.setEnabled(false);
                    standardMaterialSphere = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__["Mesh"].CreateSphere('StandardMaterialSphere1', 16, 1, scene);
                    standardMaterialSphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](1.2, 1.2, 0);
                    standardMaterialSphere.receiveShadows = true;
                    shadowCaster = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__["Mesh"].CreateTorusKnot('ShadowCaster', 1, 0.2, 32, 32, 2, 3, scene);
                    shadowCaster.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](-10.0, 5.0, 0.0);
                    shadowCaster.setEnabled(debugProperties.shadow);
                    if (debugProperties.shadow) {
                        shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__["ShadowGenerator"](1024, directionalLight);
                        shadowGenerator.addShadowCaster(shadowCaster);
                    }
                    mtoonMaterials = [];
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_11__["MToonMaterial"]('MtoonMaterialDefault', scene);
                        mat.outlineWidthMode = 1;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_11__["MToonMaterial"]('MtoonMaterialNormal', scene);
                        mat.outlineWidthMode = 1;
                        diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_7__["Texture"]('http://i.imgur.com/Wk1cGEq.png', scene);
                        diffuse.uScale = 4;
                        diffuse.vScale = 4;
                        mat.diffuseTexture = diffuse;
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Color3"](0.871, 0.196, 0.416);
                        bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_7__["Texture"]('http://i.imgur.com/wGyk6os.png', scene);
                        bump.uScale = 4;
                        bump.vScale = 4;
                        mat.bumpTexture = bump;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_11__["MToonMaterial"]('MtoonMaterialTransparent', scene);
                        mat.outlineWidthMode = 1;
                        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
                        mat.diffuseTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_7__["Texture"]('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
                        mat.shadeTexture = mat.diffuseTexture.clone();
                        mat.alphaBlend = true;
                        mtoonMaterials.push(mat);
                    }
                    {
                        mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_11__["MToonMaterial"]('MtoonMaterialRim', scene);
                        mat.outlineWidthMode = 1;
                        mat.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Color3"](0, 0, 0);
                        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Color3"](0, 0, 0);
                        mat.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Color3"](1, 1, 1);
                        mtoonMaterials.push(mat);
                    }
                    mtoonMaterials.forEach(function (mat, index) {
                        // MToonMaterial は glTF(右手座標) を考慮しているため、 CullMode をデフォルトから反転させる
                        mat.cullMode = 1;
                        mat.outlineCullMode = 2;
                        Object(_inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_12__["addInspectableCustomProperties"])(mat);
                        var sphere = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__["Mesh"].CreateSphere(mat.name + "_Sphere", 16, 1, scene);
                        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"](-1.2 * index, 1.2, 0);
                        sphere.receiveShadows = true;
                        sphere.material = mat;
                    });
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
                        shadowCaster.rotate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_8__["Vector3"].Up(), 0.01);
                    });
                    window.addEventListener('resize', function () {
                        engine.resize();
                    });
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


/***/ }),

/***/ "./src/test/inspectable-custom-properties.ts":
/*!***************************************************!*\
  !*** ./src/test/inspectable-custom-properties.ts ***!
  \***************************************************/
/*! exports provided: addInspectableCustomProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInspectableCustomProperties", function() { return addInspectableCustomProperties; });
/* harmony import */ var _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Misc/iInspectable */ "./node_modules/@babylonjs/core/Misc/iInspectable.js");

/**
 * MToonMaterial に Inspector 上で調整可能なパラメータを設定する
 * @param material
 * @link https://doc.babylonjs.com/how_to/debug_layer#extensibility
 */
function addInspectableCustomProperties(material) {
    material.inspectableCustomProperties = [
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
    ];
}


/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map