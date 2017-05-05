import React, { PropTypes } from 'react';

// css
import './index.styl';

const Breadcrumb = ({ children }) => (
    <span className="breadcrumb-wrapper" >
        {children}
    </span>
    );

Breadcrumb.propTypes = {
    children: PropTypes.node,
};

Breadcrumb.defaultProps = {
    children: [],
};

export default Breadcrumb;
