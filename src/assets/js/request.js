import * as http from './http';

async function request(method, url, params) {
    let res;

    try {
        res = await http[method](url, params);
    } catch (e) {
        throw e;
    }

    return res;
}

export async function get(...arg) {
    const res = await request('get', ...arg);

    return res;
}

export async function post(...arg) {
    const res = await request('post', ...arg);

    return res;
}
