import * as actionType from 'Constants/actionType';

const initState = {
    list: [],
    total: 0,
    loading: false,
};

export default function userList(state = initState, { type, payload }) {
    switch (type) {
    case actionType.USER_LIST_REQUEST:
        return {
            ...state,
            loading: true,
        };
    case actionType.USER_LIST_FAIL:
        return {
            ...state,
            loading: false,
        };
    case actionType.USER_LIST_SUCCESS: {
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
