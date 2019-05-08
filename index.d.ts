// シェーダーファイルをテキストを出力すると宣言
declare module "*.vert" {
    const shaderString: string
    export default shaderString
}
declare module "*.frag" {
    const shaderString: string
    export default shaderString
}
