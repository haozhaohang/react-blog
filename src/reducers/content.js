import * as actionType from 'Constants/actionType';

const initState = {
    list: [],
    total: 0,
    loading: false,
};

export default function contentList(state = initState, { type, payload }) {
    switch (type) {
    case actionType.CONTENT_LIST_REQUEST:
        return {
            ...state,
            loading: true,
        };
    case actionType.CONTENT_LIST_FAIL:
        return {
            ...state,
            loading: false,
        };
    case actionType.CONTENT_LIST_SUCCESS: {
        const { data: { list, total } } = payload;
        return {
            ...state,
            list,
            total,
            loading: false,
        };
    }
    default:
        return state;
    }
}
