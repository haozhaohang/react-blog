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
};

Breadcrumb.defaultProps = {
    children: [],
};

export default Breadcrumb;
