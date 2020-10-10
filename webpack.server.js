// @ts-nocheck
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/server/server.tsx',
    externals: [nodeExternals({
        modulesDir: './node_modules',
    })],
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
        filename: 'bundle.js',
        path: path.join(__dirname, 'build/server'),
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: ['.ts', '.tsx', 'js', '.scss'],
    },
    target: 'node',
};
