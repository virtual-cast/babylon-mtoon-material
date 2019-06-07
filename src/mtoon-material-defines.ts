import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';

/**
 * Material Defines
 */
export class MToonMaterialDefines extends MaterialDefines {
    // MToon Specific
    public MTOON_OUTLINE_WIDTH_WORLD = false;
    public MTOON_OUTLINE_WIDTH_SCREEN = false;
    public MTOON_OUTLINE_COLOR_FIXED = false;
    public MTOON_OUTLINE_COLOR_MIXED = false;
    public MTOON_DEBUG_NORMAL = false;
    public MTOON_DEBUG_LITSHADERRATE = false;
    public ALPHABLEND = false;

    // Attributes
    public NORMAL = false;
    public TANGENT = false;
    public UV1 = false;
    public UV2 = false;
    public VERTEXALPHA = false;

    // Textures
    public MAINUV1 = false;
    public MAINUV2 = false;
    public DIFFUSE = false;
    public DIFFUSEDIRECTUV = 0;
    public EMISSIVE = false;
    public EMISSIVEDIRECTUV = 0;
    public BUMP = false;
    public BUMPDIRECTUV = 0;
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
    public MULTIVIEW = false;
    public FOG = false;
    public POINTSIZE = false;
    public LOGARITHMICDEPTH = false;
    public NONUNIFORMSCALING = false;
    public ALPHATEST = false;
    public DEPTHPREPASS = false;
    public NUM_MORPH_INFLUENCERS = 0;
    public NUM_BONE_INFLUENCERS = 0;
    public BonesPerMesh = 0;
    public TWOSIDEDLIGHTING = false;
    public CLIPPLANE = false;
    public CLIPPLANE2 = false;
    public CLIPPLANE3 = false;
    public CLIPPLANE4 = false;
    public BONETEXTURE = false;
    public INSTANCES = false;
    public SHADOWFLOAT = false;
    public MORPHTARGETS = false;
    public MORPHTARGETS_NORMAL = false;
    public MORPHTARGETS_TANGENT = false;
    public PREMULTIPLYALPHA = false; // https://playground.babylonjs.com#LNVJJ7

    /**
     * @inheritdoc
     */
    public constructor() {
        super();
        this.rebuild();
    }
}
