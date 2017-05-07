import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = ({ list }) =>
    (
        <div className="word-press-main-wrapper">
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>WP视点</BreadcrumbItem>
            </Breadcrumb>
            <ul className="wor-press-main-list">
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </ul>
        </div>
    );

export default Main;
