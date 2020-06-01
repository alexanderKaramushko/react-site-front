const path = require('path');

module.exports = {
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                    },
                ],
            },
            {
                test: /\.scss$/,
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
                include: path.resolve(__dirname, '../'),
            },
        );
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
