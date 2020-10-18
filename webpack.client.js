// @ts-nocheck
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/client/index.tsx',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [
                    'style-loader',
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
                exclude: /node_modules/,
                test: /\.ts(x?)$/,
                use: ['ts-loader'],
            },
            {
                exclude: /\.test.tsx?$/,
                include: /ClientApp/,
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader?silent=true',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: 'client.js',
        path: path.join(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
};
