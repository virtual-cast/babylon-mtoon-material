const { resolve } = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: resolve(__dirname, 'src', 'test', 'index'),
    output: {
        library: {
            name: 'babylon-mtoon-material',
            type: 'umd',
        },
        filename: '[name].js',
        path: resolve(__dirname, 'test'),
    },
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
    devServer: {
        static: {
            directory: resolve(__dirname, 'test'),
        },
        port: 8080,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name(_module, chunks, _cacheGroupKey) {
                        return `vendors~${chunks[0].name}`;
                    },
                },
            },
        },
    },
    target: 'web',
};
