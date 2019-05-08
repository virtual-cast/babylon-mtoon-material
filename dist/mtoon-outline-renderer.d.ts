import { Scene } from '@babylonjs/core/scene';
import { ISceneComponent } from '@babylonjs/core/sceneComponent';
import { MToonMaterial } from './mtoon-material';
/**
 * MToonMaterial を別のパスで描画するレンダラ
 * @see OutlineRenderer
 */
export declare class MToonOutlineRenderer implements ISceneComponent {
    scene: Scene;
    material: MToonMaterial;
    /**
     * @inheritdoc
     */
    readonly name: string;
    private _engine;
    private _effect?;
    private _defines?;
    private _savedDepthWrite;
    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    constructor(scene: Scene, material: MToonMaterial);
    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    register(): void;
    /**
     * @inheritdoc
     */
    rebuild(): void;
    /**
     * @inheritdoc
     */
    dispose(): void;
    /**
     * アウトラインを描画する
     */
    private render;
    /**
     * Effect の状態を確認する
     */
    private isReady;
    /**
     * アウトラインの描画に必要な変数を設定
     */
    private bind;
    /**
     * このメッシュを描画する前に実行されるコールバック
     */
    private _beforeRenderingMesh;
    /**
     * このメッシュを描画した後に実行されるコールバック
     */
    private _afterRenderingMesh;
    /**
     * インスタンシングを行うかどうか
     */
    private isHardwareInstancedRendering;
    /**
    * このメッシュでアウトラインを描画するかどうか
    */
    private willRender;
}
