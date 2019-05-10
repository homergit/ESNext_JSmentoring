const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        index: './src/index.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    }

};
