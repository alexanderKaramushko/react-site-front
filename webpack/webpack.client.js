const {
    clientEntry,
    clientOutputPath,
    clientOutputFile,
    resolve,
    loaders,
    plugins
} = require('./common');
    
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [clientEntry, 'webpack-hot-middleware/client']
    },
    output: {
        filename: clientOutputFile,
        path: clientOutputPath,
    },
    module: {
        rules: [
            {
                exclude: /\.test.tsx?$/,
                include: /ClientApp/,
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader?silent=true',
            },
            ...loaders,
        ],
    },
    plugins: [
        ...plugins,
    ],
    resolve,
};
