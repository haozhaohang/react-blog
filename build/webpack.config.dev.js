var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var chalk = require('chalk');

// 根路径
var ROOT_PATH = path.resolve(__dirname, '../');

// 源码路径
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

// 产出路径
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

// 模块路径
var NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');

// 通用组件路径
var COMPONENT_PATH = path.resolve(SRC_PATH, 'components');

// 业务组件路径
var CONTAINERS_PATH = path.resolve(SRC_PATH, 'containers');

// actions路径
var ACTIONS_PATH = path.resolve(SRC_PATH, 'actions');

// reducers路径
var REDUCERS_PATH = path.resolve(SRC_PATH, 'reducers');

// constants路径
var CONSTANTS_PATH = path.resolve(SRC_PATH, 'constants');

// assets路径
var ASSETS_PATH = path.resolve(SRC_PATH, 'assets');


// 入口文件路径
var IndexPath = path.resolve(SRC_PATH, 'index.jsx');

console.log(chalk.green(
  `
  info:
    端口 3000
    开发配置
  `
));

module.exports = {
  context: ROOT_PATH,

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
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        include: SRC_PATH,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      // {
      //   test: /\.jsx?$/,
      //   include: SRC_PATH,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         emitWarning: true,
      //       },
      //     },
      //   ],
      // }
    ],
  },

  resolve: {
    alias: {
      Component: COMPONENT_PATH,
      Containers: CONTAINERS_PATH,
      Actions: ACTIONS_PATH,
      Reducers: REDUCERS_PATH,
      Constants: CONSTANTS_PATH,
      Assets: ASSETS_PATH,
    },
    extensions: [".js", ".json", ".jsx", ".css", ".scss",],
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

    stats: {
        colors: true
    },
    proxy: {
      '/api/*': {
          target: 'https://localhost:8888',
          secure: false,
          headers: {
              Host: 'localhost'
          }
      }

    }
  },
};
