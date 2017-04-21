import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import style from './index.scss';

const BreadcrumbItem = Breadcrumb.Item;

const Main = () =>
    (
        <div className={style.main}>
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>朝花夕拾</BreadcrumbItem>
            </Breadcrumb>
            <ul className={style.list}>
                <li>
                    <ArticleIntro />
                </li>
                <li>
                    <ArticleIntro />
                </li>
                <li>
                    <ArticleIntro />
                </li>
                <li>
                    <ArticleIntro />
                </li>
                <li>
                    <ArticleIntro />
                </li>
                <li>
                    <ArticleIntro />
                </li>
            </ul>
        </div>
    );

export default Main;
