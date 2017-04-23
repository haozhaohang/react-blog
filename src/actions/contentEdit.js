import { api, actionType } from 'Constants';
import { post, get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';
import { message } from 'antd';

const finishEdit = actionCreator(actionType.CONTENT_EDIT_INFO);

// 新增文章
export function fetchSubmit(params = {}) {
    return async (dispatch) => {
        try {
            await post(api.API_CONTENT_ADD, params);
        } catch (e) {
            return;
        }

        message.success('新增成功');

    }
}

// 获取文章信息
export function fetchContentEdit(params = {}) {
    return async (dispatch) => {
        let payload = {
            data: {
                info: {},
            },
        };

        if (params.id) {
            try {
                payload = await get(api.API_CONTENT_EDIT, params);
            } catch (e) {
                return;
            }
        }

        dispatch(finishEdit(payload));
    }
}

// 更新文章信息
export function fetchContentUpdate(params = {}) {
    return async (dispatch) => {
        try {
            await post(api.API_CONTENT_UPDATE, params);
        } catch (e) {
            return;
        }

        message.success('更改成功');
    }
}
