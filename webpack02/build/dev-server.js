const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware");

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);
const port = 1155;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.
// 告诉express使用webpack-dev-middleware并使用webpack.config.js配置文件作为基础。
app.use(webpackDevMiddleware(compiler, {
  quiet: true,
  publicPath: config.output.publicPath
}));
// 加载webpack-hot-middleware中间件，添加热重载功能
app.use(webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
}))

// 开启服务器监听
app.listen(port, function () {
  console.log(`app listening on port ${port}!\n`);
});