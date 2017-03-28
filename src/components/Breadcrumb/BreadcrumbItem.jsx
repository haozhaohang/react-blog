import React, { PureComponent, PropTypes } from 'react';

class BreadcrumbItem extends PureComponent {

    static defaultProps = {
        separator: '/'
    };

    render() {
        const { separator, children, ...resetProps } = this.props;
        let item;

        if ( 'href' in this.props ) {
            item = <a {...resetProps}>{children}</a>
        } else {
            item = <span {...resetProps}>{children}</span>
        }

        return (
            <span>
                {item}
                <span>
                    {separator}
                </span>
            </span>
        );
    }
}

export default BreadcrumbItem;