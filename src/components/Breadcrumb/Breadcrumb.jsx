import React, { PropTypes } from 'react';

// css
import style from './index.scss';

const Breadcrumb = ({ children }, ...resetProps) => (
    <span className={style.container} {...resetProps} >
        {children}
    </span>
    );

Breadcrumb.propTypes = {
    children: PropTypes.node,
    resetProps: PropTypes.object,
};

Breadcrumb.defaultProps = {
    children: [],
    resetProps: {},
};

export default Breadcrumb;
