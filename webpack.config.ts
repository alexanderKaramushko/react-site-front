const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: ['babel-loader'],
        }, {
            test: /\.s(a|c)ss$/i,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                },
            }, 'sass-loader'],
        }, {
            exclude: /node_modules/,
            test: /\.ts(x?)$/,
            use: [{
                loader: 'ts-loader',
            }],
        }, {
            enforce: 'pre',
            loader: 'source-map-loader',
            test: /\.js$/,
        }, {
            exclude: /\.test.tsx?$/,
            include: /ClientApp/,
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader?silent=true',
        }, {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }],
    },
    output: {
        filename: 'index-bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
};
