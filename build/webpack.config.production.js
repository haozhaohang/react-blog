var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

module.exports = {
    context: ROOT_PATH,

        entry: {
                main: IndexPath,
                vendor: [
                    'babel-polyfill',
                    'whatwg-fetch',
                    'moment',
                    'react',
                    'react-dom',
                    'classnames',
                    'react-redux',
                    'react-router',
                    'react-router-redux',
                    'redux',
                    'redux-thunk',
                ],
                abc: [
                    'antd',
                    'normalize'
                ]
        },

    output: {
        filename: '[name].js',

        path: DIST_PATH,

        publicPath: '/public/',
    },

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
                            modules: true,
                            localIdentName: "[path][name]---[local]---[hash:base64:5]",
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

        new webpack.NamedModulesPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'abc'],// 指定公共 bundle 的名字。
                minChunks: Infinity,
        }),

    ],
};
