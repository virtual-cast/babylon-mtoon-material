const { resolve } = require('path');
const { merge } = require('webpack-merge');

const baseConfig = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index'),
    module: {
        rules: [
            {
                test: /\.(vert|frag)$/,
                type: 'asset/source',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
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
            library: {
                name: 'babylon-mtoon-material',
                type: 'umd',
            },
            filename: 'index.module.js',
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
            library: {
                name: 'MToonMaterial',
                type: 'window',
                export: 'MToonMaterial',
            },
            filename: 'index.js',
        },
        externals: [
            ({context, request}, callback) => {
                if (/^@babylonjs\/core.*$/.test(request)) {
                    return callback(null, `window BABYLON`);
                }
                callback();
            },
        ],
    }),
]
