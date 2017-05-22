import { api, actionType } from 'Constants';
import { get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';

const finishAchiveList = actionCreator(actionType.ASIDE_ACHIVE_LIST_SUCCESS);
const finishLabelList = actionCreator(actionType.ASIDE_LABEL_LIST);

// 获取热门文章、最新文章、随机文章
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

// 获取标签
export function fetchLabelList(params = {}) {
    return async (dispatch) => {
        let payload;

        try {
            payload = await get(api.API_ASIDE_LABEL_LIST, params);
        } catch (e) {
            throw e;
        }

        dispatch(finishLabelList(payload));
    };
}
