import 'whatwg-fetch'; // fetch 的polyfill,是低版本的浏览器也支持fetch

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
        credentials: 'include'
    }, opt);

    let res;

    try {
        res = await fetch(input, init);
    } catch (e) {
        throw e;
    }

    let data;
    console.log('-------');
    console.log(res);
    try {
        console.log('try');
        data = await res.json();
        console.log(data);
    } catch (e) {
        throw e;
    }
    console.log(data);
    return data;
}

export async function get(url, params = {}, opt = {}) {
    const init = Object.assign({
        method: 'GET'
    }, opt);

    const paramsStr = buildQuery(params);

    const urlWithQuery = url + (paramsStr ? `?${paramsStr}` : '');
    return await request(urlWithQuery, init);
}

export async function post(url, params = {}) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const init = Object.assign({
        method: 'POST',
        body: buildQuery(params),
        headers
    }, {});

    return await request(url, init);
}

export default {
    get,
    post
};
