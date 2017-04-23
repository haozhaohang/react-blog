import { api, actionType } from 'Constants';
import { get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';
import { message } from 'antd';

const finishDetail = actionCreator(actionType.ARTICLE_DETAIL_SUCCESS);

// 获取文章详情
export function fetchDetail(params = {}) {
    return async (dispatch) => {
        let payload;

        try {
            payload = await get(api.API_ARTICLE_DETAIL, params);
        } catch (e) {
            throw e;
        }

        dispatch(finishDetail(payload));
    };
}
