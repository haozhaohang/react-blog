import React, { Component } from 'react';
import Breadcrumb from 'Components/Breadcrumb';
import style from './index.scss';

// Component
import Main from './Main';
import Aside from './Aside';

const BreadcrumbItem = Breadcrumb.Item;

class Web extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.main}>
                    <Main />
                </div>
                <div className={style.aside}>
                    <Aside />
                </div>
            </div>
        );
    }
}

export default Web;