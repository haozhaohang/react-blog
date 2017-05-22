import * as api from 'Constants/api';
import * as actionType from 'Constants/actionType';

const initState = {
    achive: {
        hottest: [],
        newest: [],
        random: [],
    },
    labels: []
}

export default function aside(state = initState, { type, payload }) {
    switch (type) {
    case actionType.ASIDE_ACHIVE_LIST_SUCCESS: {
        const { data } = payload;

        return {
            ...state,
            achive: data
        };
    }
    case actionType.ASIDE_LABEL_LIST: {
        const { data: { list } } = payload;

        return {
            ...state,
            labels: list
        };
    }
    default:
        return state;
    }
}
