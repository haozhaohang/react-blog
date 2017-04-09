import * as api from 'Constants/api';
import * as actionType from 'Constants/actionType';
import { post, get } from 'Assets/js/request';
import { message } from 'antd';
import { push } from 'react-router-redux';

export function fetchSubmit(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts);
        let payload;

        try {
            payload = await post(api.API_USER_ADD, params);
        } catch (e) {
            return;
        }

        dispatch(push('/manage'));
        message.success(payload.message);

    }
}

export function fetchUserEdit(opts ={}) {
    return async (dispatch, getState) => {
        const params = Object.assign({}, opts);

        try {
            await get(api.API_USER_EDIT, params)
        } catch (e) {
            throw e;
        }
    }
}

export function fetchUserUpdate(opts ={}) {
    return async (dispatch, getState) => {
        const params = Object.assign({}, opts);

        try {
            await post(api.API_USER_UPDATE, params)
        } catch (e) {
            throw e;
        }

        dispatch(push('/manage'));
        message.success(payload.message);
    }
}
