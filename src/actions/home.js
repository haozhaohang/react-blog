import { api, actionType } from 'Constants';
import { get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';

const finishNewList = actionCreator(actionType.HOME_NEW_LIST_SUCCESS);

// 获取最新文章列表
export function fetchNewList(params = {}) {
    return async (dispath) => {
        let payload;

        try {
            payload = await get(api.API_HOME_LIST, params);
        } catch (e) {
            return;
        }

        dispath(finishNewList(payload));
    }
}
