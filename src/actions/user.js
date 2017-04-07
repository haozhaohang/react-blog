import * as api from 'Constants/api';
import * as actionType from 'Constants/actionType';
import { get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';

const addRequest = actionCreator(actionType.USER_LIST_REQUEST);
const rejectRequest = actionCreator(actionType.USER_LIST_FAIL);
const finishUserList = actionCreator(actionType.USER_LIST_SUCCESS);

const pageSize = 2;

export function fetchList(opts = {}) {
    return async (dispatch) => {
        dispatch(addRequest());

        const params = Object.assign({
            pageSize,
        }, opts);
        let payload;

        try {
            payload = await get(api.API_USER_LIST, params);
        } catch (e) {
            dispatch(rejectRequest);
            throw e;
        }

        dispatch(finishUserList(payload));
    };
}

export function fetchUserDel(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts);
        let payload;

        try {
            payload = await post(api.API_USER_DEL, params);
        } catch (e) {
            throw e;
        }

        console.log(payload);
    }
}
