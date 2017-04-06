import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import Layout from 'Containers/Layout';
import Home from 'Containers/Home';
import Web from 'Containers/Web';
import Mobile from 'Containers/Mobile';
import Skill from 'Containers/Skill';
import Ui from 'Containers/Ui';
import Wordpress from 'Containers/Wordpress';
import Record from 'Containers/Record';
import Code from 'Containers/Code';
import Manage from 'Containers/Manage';

import rootReducer from 'Reducers';

import './index.scss';

const middlewares = [thunk, routerMiddleware(browserHistory)];

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer,
    }),
    {},
    applyMiddleware(...middlewares),
);

const App = () =>
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path="web" component={Web} />
                    <Route path="mobile" component={Mobile} />
                    <Route path="skill" component={Skill} />
                    <Route path="ui" component={Ui} />
                    <Route path="wordpress" component={Wordpress} />
                    <Route path="record" component={Record} />
                    <Route path="code" component={Code} />
                </Route>
                <Route path="manage" component={Manage} />
            </Router>
        </Provider>
    );

export default App;
