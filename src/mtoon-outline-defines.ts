import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';

/**
 * Material Defines
 */
export class MToonOutlineDefines extends MaterialDefines {
    public MTOON_OUTLINE_WIDTH_WORLD = false;
    public MTOON_OUTLINE_WIDTH_SCREEN = false;
    public MTOON_OUTLINE_COLOR_FIXED = false;
    public MTOON_OUTLINE_COLOR_MIXED = false;

    public OUTLINE_WIDTH = false;
    public OUTLINE_WIDTHDIRECTUV = 0;

    public NORMAL = true;
    public UV1 = false;
    public UV2 = false;
    public MAINUV1 = false;
    public MAINUV2 = false;

    public NUM_BONE_INFLUENCERS = 0;
    public BONETEXTURE = false;
    public INSTANCES = false;

    public NUM_MORPH_INFLUENCERS = 0;
    public MORPHTARGETS = false;
    public MORPHTARGETS_NORMAL = false;
    public MORPHTARGETS_TANGENT = false;

    public MULTIVIEW = false;
    public NONUNIFORMSCALING = false;

    public constructor() {
        super();
        this.rebuild();
    }
}
