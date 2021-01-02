const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const root = path.resolve(__dirname, '..');

module.exports = {
    serverEntry: path.join(root, 'src/server/server.tsx'),
    serverOutputPath: path.join(root, 'build'),
    serverOutputFile: 'server.js',

    clientEntry: path.join(root, 'src/client/index.tsx'),
    clientOutputPath: path.join(root, 'build'),
    clientOutputFile: 'client.js',

    resolve: {
        alias: {
            "@client": path.resolve(__dirname, 'src/client/*'),
            "@server": path.resolve(__dirname, 'src/server/*'),
        },
        extensions: ['.js', '.ts', '.tsx', '.scss'],
    },

    loaders: [
        {
            exclude: /node_modules/,
            test: /\.js$/,
            use: ['babel-loader'],
        },
        {
            exclude: /node_modules/,
            test: /\.ts(x?)$/,
            use: ['ts-loader'],
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    ],

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ]
};
