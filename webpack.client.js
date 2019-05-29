const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = env => {
    const DEVELOPMENT = env.NODE_ENV === 'development';

    if (DEVELOPMENT) {
        config.devtool = 'source-map';
    }

    return merge(baseConfig, config);
};
