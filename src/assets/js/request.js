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
    return await request('get', ...arg);
}

export async function post(...arg) {
    return await request('post', ...arg);
}
