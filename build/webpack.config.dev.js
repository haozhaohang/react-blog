var webpack = require('webpack');
var path = require('path');

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
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    IndexPath,
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: DIST_PATH,

    publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
