import { api, actionType } from 'Constants';
import { get, post } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';
import { message } from 'antd';

const addRequest = actionCreator(actionType.USER_LIST_REQUEST);
const rejectRequest = actionCreator(actionType.USER_LIST_FAIL);
const finishUserList = actionCreator(actionType.USER_LIST_SUCCESS);

const pageSize = 10;


// 获取用户列表
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

// 删除用户
export function fetchUserDel(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({}, opts);

        try {
            await post(api.API_USER_DEL, params);
        } catch (e) {
            throw e;
        }

        message.success('删除成功');
    };
}
