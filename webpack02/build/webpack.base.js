const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config/index.js');
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'js/[name].js',
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: 'img/[hash:8].[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [

        // 把index.html文件作为模板打包到dist，并自动引入js、css
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: 'index.html',
            // 设置icon
            // favicon: path.resolve(__dirname, '../src/assets/img/wx.png'),
            // injact: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ],
    // 配置开本地发服务器
    // devServer: {
    //     // 启动服务的目录
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000,
    //     headers: {
    //         "X-Custom-Foo": "bar"
    //     }
    // }
}