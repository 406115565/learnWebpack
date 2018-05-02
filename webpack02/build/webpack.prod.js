process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(webpackConfig, {
    entry: {
        vendor: ["jquery"]
    },
    output: {
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
        ]
    },
    plugins: [
        // 每次打包前先删除上一次生成的dist文件夹
        // new CleanWebpackPlugin(['dist']),

        // 分离css
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        // 使用UglifyJS代码压缩
        new UglifyJSPlugin(),
        // 为所有依赖添加环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        // 打包时仅修改chunk发生改变的hash值，减少浏览器请求
        new webpack.HashedModuleIdsPlugin(),

        // 分离代码，提取公共部分
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // 提取模板,命名缓存，减少浏览器请求
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        })
    ]
})