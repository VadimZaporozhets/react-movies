const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: './server/server.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            node: true
                                        }
                                    }
                                ],
                                '@babel/preset-react'
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-transform-runtime'
                            ]
                        }
                    },
                    'eslint-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: [webpackNodeExternals()]
};

module.exports = env => {
    const DEVELOPMENT = env.NODE_ENV === 'development';

    if (DEVELOPMENT) {
        config.devtool = 'source-map';
    }

    return config;
};
