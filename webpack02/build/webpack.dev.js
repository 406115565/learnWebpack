const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base.js');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

Object.keys(webpackConfig.entry).forEach(function (name) {
    webpackConfig.entry[name] = ['webpack-hot-middleware/client/?noInfo=true&reload=true'].concat(webpackConfig.entry[name])
})
module.exports = merge(webpackConfig, {
    // devtool: 'inline-source-map',
    plugins: [
        // 使用webpack内置热更新插件
        new webpack.HotModuleReplacementPlugin(),

        // 使用webpack友情错误提示插件
        new FriendlyErrorsWebpackPlugin()
    ]
})