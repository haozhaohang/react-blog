import React, { PropTypes } from 'react';
import Header from 'Containers/Header';

import './index.styl';

const Layout = ({ children }) =>
    (
        <div className="layout-wrapper">
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
