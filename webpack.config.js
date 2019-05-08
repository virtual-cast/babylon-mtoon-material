const resolve = require('path').resolve;

module.exports = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index'),
    output: {
        library: 'babylon-mtoon-material',
        libraryTarget: 'umd',
        filename: 'index.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(vert|frag)$/,
                use: 'raw-loader',
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        modules: [resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.ts', '.vert', '.frag'],
    },
    target: 'web',
    externals: [
        /^@babylonjs\/core.*$/,
    ],
};
