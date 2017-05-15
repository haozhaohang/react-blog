import { api, actionType } from 'Constants';
import { get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';

const finishAchiveList = actionCreator(actionType.ASIDE_ACHIVE_LIST_SUCCESS);

// 获取最新文章、
export function fetchAchiveList(params = {}) {
    return async (dispatch) => {
        let payload;

        try {
            payload = await get(api.API_ASIDE_ACHIVE_LIST, params);
        } catch (e) {
            throw e;
        }

        dispatch(finishAchiveList(payload));
    };
}
