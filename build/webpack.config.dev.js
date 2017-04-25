var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var chalk = require('chalk');
var {
    ROOT_PATH,
    SRC_PATH,
    DIST_PATH,
    NODE_MODULES_PATH,
    COMPONENT_PATH,
    CONTAINERS_PATH,
    ACTIONS_PATH,
    REDUCERS_PATH,
    CONSTANTS_PATH,
    ASSETS_PATH,
    IndexPath
} = require('./path');

var port = 3000;

console.log(chalk.green(
  `
  info:
    端口 ${port}
    开发配置
  `
));

module.exports = {
  context: ROOT_PATH,

  entry: [
    'react-hot-loader/patch',

    `webpack-dev-server/client?http://localhost:${port}`,

    'webpack/hot/only-dev-server',

    IndexPath,
  ],

  output: {
    filename: 'bundle.js',

    path: DIST_PATH,

    publicPath: '/static/',
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
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // css-modules
              localIdentName: "[path][name]---[local]---[hash:base64:5]", // 默认是哈希算法[hash:base64], 可以进行定制哈希字符串格式
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
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
            },
          },
        ],
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader'
      },
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader'
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader'
      },
    //   {
    //     test: /\.jsx?$/,
    //     include: SRC_PATH,
    //     enforce: 'pre',
    //     use: [
    //       {
    //         loader: 'eslint-loader',
    //         options: {
    //           emitWarning: true,
    //         },
    //       },
    //     ],
    //   }
    ],
  },

  resolve: {
    alias: {
      Components: COMPONENT_PATH,
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
        port: port,
        host: '0.0.0.0',
        historyApiFallback: true,
        stats: {
            colors: true
        },
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:8888',
                secure: false,
                headers: {
                    Host: '127.0.0.1'
                }
            }
        }
    }
};
