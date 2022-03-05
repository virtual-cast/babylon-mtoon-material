const { resolve } = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: resolve(__dirname, 'src', 'test', 'index'),
    output: {
        library: 'babylon-mtoon-material',
        libraryTarget: 'umd',
        filename: '[name].js',
        path: resolve(__dirname, 'test'),
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
    devServer: {
        static: {
            directory: resolve(__dirname, 'test'),
        },
        port: 8080,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    target: 'web',
};
