import 'babel-polyfill'; // babel 只能对es高级语法进行编译,如果支持新的特性需要引入babel-polyfill
import 'normalize.css';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Containers/App';

const rootEl = document.getElementById('root');
const render = Component =>
    ReactDOM.render(<AppContainer >
        <Component />
    </AppContainer>,
        rootEl,
    );

render(App);

if (module.hot) {
    module.hot.accept('Containers/App', () => render(App));
}
