import react, { PureComponent, PropTypes } from 'react';
// import BreadcrumbItem from './BreadcrumbItem';

class Breadcrumb extends PureComponent {

    render() {
        const { children, ...resetProps } = this.props;

        return (
            <span>
                {children}
            </span>
        );
    }
}

export default Breadcrumb;