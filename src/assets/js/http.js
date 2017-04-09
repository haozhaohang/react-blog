import 'whatwg-fetch'; // fetch 的polyfill,是低版本的浏览器也支持fetch

class CustomFetchError {
    constructor(data) {
        this.msg = data.message;
        this.data = data;
    }
}

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

export async function request(input, opt) {
    const init = Object.assign({
        credentials: 'include',
    }, opt);

    let res;

    try {
        res = await fetch(input, init);
    } catch (e) {
        throw new CustomFetchError(e);
    }

    if (!res.ok) {
        throw new CustomFetchError(res);
    }

    let data;

    try {
        data = await res.json();
    } catch (e) {
        throw new CustomFetchError(e);
    }

    if (!data || data.error !== 0) {
        throw new CustomFetchError(data);
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
