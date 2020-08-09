const path = require('path');

module.exports = {
    webpackFinal: async (config) => {
        const rules = config.module.rules;
        const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));

        // process .svg with the help of svgr
        fileLoaderRule.exclude = /\.svg$/;

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
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        );
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
