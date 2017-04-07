import { push } from 'react-router-redux';

export function changeUrl(url) {
    return dispatch => dispatch(push(url));
}

export function replaceQuery(query) {
    return (dispatch, getState) => {
        const { pathname, state } = getState().routing.locationBeforeTransitions;
        const location = {
            pathname,
            state,
            query,
        };

        dispatch(push(location));
    };
}

export function updateQuery(newQuery) {
    return (dispatch, getState) => {
        const { pathname, query, state } = getState().routing.locationBeforeTransitions;
        const location = {
            pathname,
            state,
            query: {
                ...query,
                ...newQuery,
            },
        };

        dispatch(push(location));
    };
}
