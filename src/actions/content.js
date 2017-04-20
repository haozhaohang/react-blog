import { api, actionType } from 'Constants';
import { get, post } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';
import { message } from 'antd';

const addRequest = actionCreator(actionType.CONTENT_LIST_REQUEST);
const rejectRequest = actionCreator(actionType.CONTENT_LIST_FAIL);
const finishList = actionCreator(actionType.CONTENT_LIST_SUCCESS);

const pageSize = 10;


// 获取文章列表
export function fetchList(opts = {}) {
    return async (dispatch) => {
        dispatch(addRequest());

        const params = Object.assign({
            pageSize,
        }, opts);
        let payload;

        try {
            payload = await get(api.API_CONTENT, params);
        } catch (e) {
            dispatch(rejectRequest);
            throw e;
        }

        dispatch(finishList(payload));
    };
}

// 删除文章
export function fetchContentDel(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({}, opts);

        try {
            await post(api.API_CONTENT_DEL, params);
        } catch (e) {
            throw e;
        }

        message.success('删除成功');
    };
}
