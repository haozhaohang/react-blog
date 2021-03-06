import { api, actionType } from 'Constants';
import { get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';

const finishList = actionCreator(actionType.UI_LIST_SUCCESS);

// 获取ui列表
export function fetchList(params = {}) {
    return async (dispath) => {
        let payload;

        try {
            payload = await get(api.API_ARTICLE_LIST, params);
        } catch (e) {
            return;
        }

        dispath(finishList(payload));
    }
}