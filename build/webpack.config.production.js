var path = require('path');
var webpack = require('webpack');

// 根路径
var ROOT_PATH = path.resolve(__dirname, '../');

// 源码路径
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

// 产出路径
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

// 模块路径
var NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');

// 入口文件路径
var IndexPath = path.resolve(SRC_PATH, 'index.js');

module.exports = {
  entry: IndexPath,

  output: {
    filename: 'static/bundle.js',
    path: DIST_PATH,
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
