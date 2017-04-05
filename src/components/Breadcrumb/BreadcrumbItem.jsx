import React, { PureComponent, PropTypes } from 'react';

import style from './index.scss';

class BreadcrumbItem extends PureComponent {

    static defaultProps = {
        separator: '/',
    };

    render() {
        const { separator, children, ...resetProps } = this.props;
        let item;

        if ('href' in this.props) {
            item = <a {...resetProps}>{children}</a>;
        } else {
            item = <span {...resetProps}>{children}</span>;
        }

        return (
            <span>
                {item}
                <span className={style.separator}>
                    {separator}
                </span>
            </span>
        );
    }
}

BreadcrumbItem.propTypes = {
    children: PropTypes.node,
    separator: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
    children: [],
    separator: '/',
};

export default BreadcrumbItem;
