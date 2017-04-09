import * as http from './http';
import { message } from 'antd';

async function request(method, url, params) {
    let res;

    try {
        res = await http[method](url, params);
    } catch (e) {
        message.error(e.errno === 4 ? e.data.msg : e.msg);
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
