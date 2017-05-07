var path = require('path');

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

// html tpl 路径
var HTML_TPL_PATH = path.resolve(ROOT_PATH, 'index.html');

// 入口文件路径
var IndexPath = path.resolve(SRC_PATH, 'index.jsx');

// 图标路径
var faviconPath = path.resolve(ROOT_PATH, 'favicon.ico');

module.exports = {
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
};
