import React from 'react';
// import Breadcrumb from 'Components/Breadcrumb';

// Component
import Main from './Main';
import Aside from './Aside';

// css
import style from './index.scss';

// const BreadcrumbItem = Breadcrumb.Item;

const Web = () =>
    (
        <div className={style.container}>
            <div className={style.main}>
                <Main />
            </div>
            <div className={style.aside}>
                <Aside />
            </div>
        </div>
    );

export default Web;
