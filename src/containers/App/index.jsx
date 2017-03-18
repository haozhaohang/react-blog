import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from 'Containers/Layout';
import Home from 'Containers/Home';

import './index.scss';

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route />
                </Route>
            </Router>
        );
    }
}
