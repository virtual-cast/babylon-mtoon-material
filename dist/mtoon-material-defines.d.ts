import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';
/**
 * Material Defines
 */
export declare class MToonMaterialDefines extends MaterialDefines {
    MTOON_OUTLINE_WIDTH_WORLD: boolean;
    MTOON_OUTLINE_WIDTH_SCREEN: boolean;
    MTOON_OUTLINE_COLOR_FIXED: boolean;
    MTOON_OUTLINE_COLOR_MIXED: boolean;
    MTOON_DEBUG_NORMAL: boolean;
    MTOON_DEBUG_LITSHADERRATE: boolean;
    NORMAL: boolean;
    TANGENT: boolean;
    UV1: boolean;
    UV2: boolean;
    VERTEXALPHA: boolean;
    MAINUV1: boolean;
    MAINUV2: boolean;
    DIFFUSE: boolean;
    DIFFUSEDIRECTUV: number;
    EMISSIVE: boolean;
    EMISSIVEDIRECTUV: number;
    BUMP: boolean;
    BUMPDIRECTUV: number;
    SHADE: boolean;
    SHADEDIRECTUV: number;
    RECEIVE_SHADOW: boolean;
    RECEIVE_SHADOWDIRECTUV: number;
    SHADING_GRADE: boolean;
    SHADING_GRADEDIRECTUV: number;
    RIM: boolean;
    RIMDIRECTUV: number;
    MATCAP: boolean;
    MATCAPDIRECTUV: number;
    OUTLINE_WIDTH: boolean;
    OUTLINE_WIDTHDIRECTUV: number;
    MULTIVIEW: boolean;
    FOG: boolean;
    POINTSIZE: boolean;
    LOGARITHMICDEPTH: boolean;
    NONUNIFORMSCALING: boolean;
    ALPHATEST: boolean;
    DEPTHPREPASS: boolean;
    NUM_MORPH_INFLUENCERS: number;
    NUM_BONE_INFLUENCERS: number;
    BonesPerMesh: number;
    TWOSIDEDLIGHTING: boolean;
    CLIPPLANE: boolean;
    CLIPPLANE2: boolean;
    CLIPPLANE3: boolean;
    CLIPPLANE4: boolean;
    BONETEXTURE: boolean;
    INSTANCES: boolean;
    SHADOWFLOAT: boolean;
    MORPHTARGETS: boolean;
    MORPHTARGETS_NORMAL: boolean;
    MORPHTARGETS_TANGENT: boolean;
    PREMULTIPLYALPHA: boolean;
    /**
     * @inheritdoc
     */
    constructor();
}
