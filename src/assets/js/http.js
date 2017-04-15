import 'whatwg-fetch'; // fetch 的polyfill,是低版本的浏览器也支持fetch

const netErrorStatu = 1;    // 网络错误
const serverErrorStatu = 2;    // 服务器错误
const formatErrorStatu = 3;    // 数据格式错误
const logicErrorStatu = 4;    // 业务逻辑错误

const errorMsg = {
    [netErrorStatu]: '网络错误',
    [serverErrorStatu]: '服务器错误',
    [formatErrorStatu]: '数据格式错误',
    [logicErrorStatu]: '业务逻辑错误'
};

class CustomFetchError {
    constructor(error, data) {
        this.errno = error;
        this.msg = errorMsg[error];
        this.data = data;
    }
}

// 处理请求数据
export function buildQuery(data) {
    const toString = Object.prototype.toString;
    const res = Object.entries(data).reduce((pre, [key, value]) => {
        let newValue;

        if (Array.isArray(value) || toString.call(value) === '[object Object]') {
            newValue = JSON.stringify(value);
        } else {
            newValue = (value === null || value === undefined) ? '' : value;
        }

        pre.push(`${key}=${encodeURIComponent(newValue)}`);

        return pre;
    }, []);

    return res.join('&');
}

// 处理请求状态
export async function request(input, opt) {
    // 设置cookies是否能跨域得到
    const init = Object.assign({
        credentials: 'include',
    }, opt);

    let res;

    try {
        res = await fetch(input, init);
    } catch (e) {
        throw new CustomFetchError(netErrorStatu, e);
    }

    if (!res.ok) {
        throw new CustomFetchError(serverErrorStatu, res);
    }

    let data;

    try {
        data = await res.json();
    } catch (e) {
        throw new CustomFetchError(formatErrorStatu, e);
    }

    if (!data || data.error !== 0) {
        throw new CustomFetchError(logicErrorStatu, data);
    }

    return data;
}

export async function get(url, params = {}, opt = {}) {
    const init = Object.assign({
        method: 'GET',
    }, opt);

    const paramsStr = buildQuery(params);

    const urlWithQuery = url + (paramsStr ? `?${paramsStr}` : '');
    const res = await request(urlWithQuery, init);

    return res;
}

export async function post(url, params = {}) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const init = Object.assign({
        method: 'POST',
        body: buildQuery(params),
        headers,
    }, {});

    const res = await request(url, init);

    return res;
}

export default {
    get,
    post,
};
