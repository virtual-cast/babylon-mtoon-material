import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';

/**
 * Material Defines
 */
export class MToonMaterialDefines extends MaterialDefines {
    /** @see light-fragment.frag */
    public CUSTOMUSERLIGHTING = true;

    // MToon Specific
    public MTOON_OUTLINE_WIDTH_WORLD = false;
    public MTOON_OUTLINE_WIDTH_SCREEN = false;
    public MTOON_OUTLINE_COLOR_FIXED = false;
    public MTOON_OUTLINE_COLOR_MIXED = false;
    public MTOON_DEBUG_NORMAL = false;
    public MTOON_DEBUG_LITSHADERRATE = false;

    // MToon textures
    public SHADE = false;
    public SHADEDIRECTUV = 0;
    public RECEIVE_SHADOW = false;
    public RECEIVE_SHADOWDIRECTUV = 0;
    public SHADING_GRADE = false;
    public SHADING_GRADEDIRECTUV = 0;
    public RIM = false;
    public RIMDIRECTUV = 0;
    public MATCAP = false;
    public MATCAPDIRECTUV = 0;
    public OUTLINE_WIDTH = false;
    public OUTLINE_WIDTHDIRECTUV = 0;
    public UV_ANIMATION_MASK = false;
    public UV_ANIMATION_MASKDIRECTUV = 0;

    // Misc
    public MAINUV1 = false;
    public MAINUV2 = false;
    public DIFFUSE = false;
    public DIFFUSEDIRECTUV = 0;
    public DETAIL = false;
    public DETAILDIRECTUV = 0;
    public DETAIL_NORMALBLENDMETHOD = 0;
    // public AMBIENT = false;
    // public AMBIENTDIRECTUV = 0;
    // public OPACITY = false;
    // public OPACITYDIRECTUV = 0;
    // public OPACITYRGB = false;
    // public REFLECTION = false;
    public EMISSIVE = false;
    public EMISSIVEDIRECTUV = 0;
    // public SPECULAR = false;
    // public SPECULARDIRECTUV = 0;
    public BUMP = false;
    public BUMPDIRECTUV = 0;
    public PARALLAX = false;
    public PARALLAXOCCLUSION = false;
    // public SPECULAROVERALPHA = false;
    public CLIPPLANE = false;
    public CLIPPLANE2 = false;
    public CLIPPLANE3 = false;
    public CLIPPLANE4 = false;
    public CLIPPLANE5 = false;
    public CLIPPLANE6 = false;
    public ALPHATEST = false;
    public DEPTHPREPASS = false;
    public ALPHAFROMDIFFUSE = false;
    public POINTSIZE = false;
    public FOG = false;
    // public SPECULARTERM = false;
    // public DIFFUSEFRESNEL = false;
    // public OPACITYFRESNEL = false;
    // public REFLECTIONFRESNEL = false;
    // public REFRACTIONFRESNEL = false;
    // public EMISSIVEFRESNEL = false;
    // public FRESNEL = false;
    public NORMAL = false;
    // public TANGENT = false;
    public UV1 = false;
    public UV2 = false;
    public VERTEXCOLOR = false;
    public VERTEXALPHA = false;
    public NUM_BONE_INFLUENCERS = 0;
    public BonesPerMesh = 0;
    public BONETEXTURE = false;
    public BONES_VELOCITY_ENABLED = false;
    public INSTANCES = false;
    public THIN_INSTANCES = false;
    // public GLOSSINESS = false;
    // public ROUGHNESS = false;
    // public EMISSIVEASILLUMINATION = false;
    // public LINKEMISSIVEWITHDIFFUSE = false;
    // public REFLECTIONFRESNELFROMSPECULAR = false;
    // public LIGHTMAP = false;
    // public LIGHTMAPDIRECTUV = 0;
    public OBJECTSPACE_NORMALMAP = false;
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
    public LOGARITHMICDEPTH = false;
    // public REFRACTION = false;
    // public REFRACTIONMAP_3D = false;
    // public REFLECTIONOVERALPHA = false;
    public TWOSIDEDLIGHTING = false;
    public SHADOWFLOAT = false;
    public MORPHTARGETS = false;
    public MORPHTARGETS_NORMAL = false;
    public MORPHTARGETS_TANGENT = false;
    public MORPHTARGETS_UV = false;
    public NUM_MORPH_INFLUENCERS = 0;
    public MORPHTARGETS_TEXTURE = false;
    public NONUNIFORMSCALING = false; // https://playground.babylonjs.com#V6DWIH
    public PREMULTIPLYALPHA = false; // https://playground.babylonjs.com#LNVJJ7
    public ALPHATEST_AFTERALLALPHACOMPUTATIONS = false;
    public ALPHABLEND = true;

    public PREPASS = false;
    public PREPASS_IRRADIANCE = false;
    public PREPASS_IRRADIANCE_INDEX = -1;
    public PREPASS_ALBEDO = false;
    public PREPASS_ALBEDO_INDEX = -1;
    public PREPASS_DEPTH = false;
    public PREPASS_DEPTH_INDEX = -1;
    public PREPASS_NORMAL = false;
    public PREPASS_NORMAL_INDEX = -1;
    public PREPASS_POSITION = false;
    public PREPASS_POSITION_INDEX = -1;
    public PREPASS_VELOCITY = false;
    public PREPASS_VELOCITY_INDEX = -1;
    public PREPASS_REFLECTIVITY = false;
    public PREPASS_REFLECTIVITY_INDEX = -1;
    public SCENE_MRT_COUNT = 0;

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
    public MULTIVIEW = false;
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
    constructor() {
        super();
        this.rebuild();
    }

    public setReflectionMode(modeToEnable: string) {
        throw new Error('This material cannot use `setReflectionMode`');
    }
}
