import * as api from 'Constants/api';
import * as actionType from 'Constants/actionType';

const initState = {
    info: {},
}

export default function article(state = initState, { type, payload }) {
    switch (type) {
    case actionType.ARTICLE_DETAIL_SUCCESS: {
        const { data: { info } } = payload;
        return {
            ...state,
            info
        };
    }
    default:
        return state;
    }
}
