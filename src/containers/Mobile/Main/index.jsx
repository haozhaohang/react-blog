import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import Article from 'Containers/Article';

// css
import style from './index.scss';

const BreadcrumbItem = Breadcrumb.Item;

const Main = () =>
    (
        <div className={style.main}>
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>移动前端</BreadcrumbItem>
            </Breadcrumb>
            <ul className={style.list}>
                <li>
                    <Article />
                </li>
                <li>
                    <Article />
                </li>
                <li>
                    <Article />
                </li>
                <li>
                    <Article />
                </li>
                <li>
                    <Article />
                </li>
                <li>
                    <Article />
                </li>
            </ul>
        </div>
    );

export default Main;
