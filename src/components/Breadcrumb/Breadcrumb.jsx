import React, { PureComponent, PropTypes } from 'react';

import style from './index.scss';

class Breadcrumb extends PureComponent {

    render() {
        const { children, ...resetProps } = this.props;

        return (
            <span className={style.container}>
                {children}
            </span>
        );
    }
}

export default Breadcrumb;