import React, { PropTypes } from 'react';
import Header from 'Containers/Header';

import style from './index.scss';

const Layout = ({ children }) =>
    (
        <div className={style.header}>
            <Header />
            {children}
        </div>
    );

Layout.propTypes = {
    children: PropTypes.node,
};

Layout.defaultProps = {
    children: [],
};

export default Layout;
