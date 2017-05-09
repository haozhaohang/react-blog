import { actionType } from 'Constants';

const initState = {
    newList: [],
    total: 0,
    pageSize: 8,
};

export default function home(state = initState, { type, payload }) {
    switch (type) {
    case actionType.HOME_NEW_LIST_SUCCESS: {
        const { list, total } = payload.data;

        return {
            ...state,
            total,
            newList: list,
        };
    }
    default:
        return state;
    }
}
