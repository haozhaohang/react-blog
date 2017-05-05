import React, { PureComponent, PropTypes } from 'react';

import './index.styl';

class BreadcrumbItem extends PureComponent {

    static defaultProps = {
        separator: '/',
    };

    render() {
        const { separator, children, ...restProps } = this.props;
        let item;

        if ('href' in this.props) {
            item = <a {...restProps} target="_self">{children}</a>;
        } else {
            item = <span {...restProps}>{children}</span>;
        }

        return (
            <span className="item">
                {item}
                <span className="separator">
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
