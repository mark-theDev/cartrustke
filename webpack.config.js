const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    // Other configurations...
    plugins: [
        new ReactRefreshWebpackPlugin(),
        // Other plugins...
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                },
            },
            // Other rules...
        ],
    },
};
