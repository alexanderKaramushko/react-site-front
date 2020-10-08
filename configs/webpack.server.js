// @ts-nocheck
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, '..', 'src/server/server.ts'),
    externals: [nodeExternals({
        modulesDir: './node_modules',
    })],
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    output: {
        filename: 'server.js',
        path: path.join(__dirname, '..', '/build'),
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: ['.ts', '.tsx', 'js', '.scss'],
    },
    target: 'node',
};
