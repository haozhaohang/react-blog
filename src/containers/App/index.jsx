import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
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
import Article from 'Containers/Article';

import Manage from 'Containers/Manage';
import User from 'Containers/Manage/User';
import UserEdit from 'Containers/Manage/User/Edit';
import Content from 'Containers/Manage/Content';
import ContentEdit from 'Containers/Manage/Content/Edit';

import rootReducer from 'Reducers';

import './index.styl';

const middlewares = [thunk, routerMiddleware(browserHistory)];

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer,
    }),
    {},
    applyMiddleware(...middlewares),
);

const history = syncHistoryWithStore(browserHistory, store);

const App = () =>
    (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path="web" component={Web} />
                    <Route path="mobile" component={Mobile} />
                    <Route path="skill" component={Skill} />
                    <Route path="ui" component={Ui} />
                    <Route path="wordpress" component={Wordpress} />
                    <Route path="record" component={Record} />
                    <Route path="code" component={Code} />
                    <Route path="article" component={Article} />
                </Route>
                <Route path="manage" component={Manage}>
                    <IndexRoute component={User} />
                    <Route path="/manage/user/edit" component={UserEdit} />
                    <Route path="/manage/content" component={Content} />
                    <Route path="/manage/content/edit" component={ContentEdit} />
                </Route>
            </Router>
        </Provider>
    );

export default App;
