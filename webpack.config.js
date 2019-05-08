const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const DEVELOPMENT = env.NODE_ENV === 'development';

    const config = {
        entry: './src/index.js',
        output: {
            filename: 'main.bundle.js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        },
                        'eslint-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html'
            })
        ]
    };

    if (DEVELOPMENT) {
        config.devtool = 'source-map';
    }

    return config;
};
