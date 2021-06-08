const { resolve } = require('path');
const { merge } = require('webpack-merge');

const baseConfig = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index'),
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
};

module.exports = [
    /**
     * to UMD for npm
     */
    merge(baseConfig, {
        output: {
            library: 'babylon-mtoon-material',
            libraryTarget: 'umd',
            filename: 'index.module.js',
            path: resolve(__dirname, 'dist'),
        },
        externals: [
            /^@babylonjs\/core.*$/,
        ],
    }),
    /**
     * to window.MToonMaterial
     */
    merge(baseConfig, {
        output: {
            library: 'MToonMaterial',
            libraryTarget: 'window',
            libraryExport: 'MToonMaterial',
            filename: 'index.js',
            path: resolve(__dirname, 'dist'),
        },
        externals: [
            function (context, request, callback) {
                if (/^@babylonjs\/core.*$/.test(request)) {
                    return callback(null, `window BABYLON`);
                }
                callback();
            },
        ],
    }),
]
