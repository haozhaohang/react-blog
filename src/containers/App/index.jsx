import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { thunk } from 'react-redux';

import Layout from 'Containers/Layout';
import Home from 'Containers/Home';

import rootReducer from 'Reducers';

import './index.scss';

const middlewares = [thunk, routerMiddleware(browserHistory)];

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer,
    }),
);


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Home} />
                        <Route />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
