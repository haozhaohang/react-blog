import React, { Component } from 'react';

// css
import style from './index.scss';

//component
import Breadcrumb from 'Components/Breadcrumb';

const BreadcrumbItem = Breadcrumb.Item;

class Main extends Component {
    render() {
        return(
            <div className={ style.main }>
                <Breadcrumb>
                    <BreadcrumbItem href="/">首页</BreadcrumbItem>
                    <BreadcrumbItem href="">Web前端</BreadcrumbItem>
                    <BreadcrumbItem>ES6</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}

export default Main;