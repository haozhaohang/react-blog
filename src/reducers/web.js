import { actionType } from 'Constants';

const initState = {
    list: [],
    total: 0,
    pageSize: 10,
};

export default function web(state = initState, { type, payload }) {
    switch (type) {
    case actionType.WEB_LIST_SUCCESS: {
        const { list, total } = payload.data;

        return {
            ...state,
            total,
            list,
        };
    }
    default:
        return state;
    }
}
