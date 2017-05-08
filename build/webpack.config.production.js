const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
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
        HTML_TPL_PATH,
        IndexPath,
        faviconPath,
} = require('./path');
const extractCSS = new ExtractTextPlugin('css/[name]-one.css');
const extractSTYL = new ExtractTextPlugin('css/[name]-two.css');
const extractSASS = new ExtractTextPlugin('css/[name]-tree.css');

const port = 3000;

module.exports = {
    context: ROOT_PATH,

        entry: {
            main: IndexPath,
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
                use: extractCSS .extract([
                    "css-loader",
                ]),
            },
            {
                test: /\.styl$/,
                use: extractSTYL .extract([
                    "css-loader",
                    "stylus-loader",
                ]),
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
        extractCSS,

        extractSTYL,

        extractSASS,

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',// 指定公共 bundle 的名字。
                minChunks: function (module) {
                   // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                   return module.context && module.context.indexOf('node_modules') !== -1;
                }
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: HTML_TPL_PATH,
            inject: 'body',
            favicon: faviconPath,
            chunks: ['manifest', 'vendor', 'main']
        }),
    ],
};
