import { api, actionType } from 'Constants';
import { post, get } from 'Assets/js/request';
import { actionCreator } from 'Assets/js/util';
import { message } from 'antd';

const finishEdit = actionCreator(actionType.USER_EDIT_INFO);

// 新增文章
export function fetchSubmit(params = {}) {
    return async (dispatch) => {

        try {
            await post(api.API_USER_ADD, params);
        } catch (e) {
            return;
        }

        message.success('新增成功');

    }
}
