const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
    serverEntry,
    serverOutputPath,
    serverOutputFile,
    resolve,
    loaders,
    plugins
} = require('./common');

module.exports = {
    target: 'node',
    entry: serverEntry,
    output: {
        filename: serverOutputFile,
        path: serverOutputPath,
        libraryTarget: 'commonjs2',
    },
    mode: 'development',
    module: {
        rules: [
            ...loaders,
        ],
    },
    externals: [nodeExternals({
        modulesDir: './node_modules',
    })],
    plugins: [
        ...plugins,
    ],
    resolve,
    watch: true,
};
