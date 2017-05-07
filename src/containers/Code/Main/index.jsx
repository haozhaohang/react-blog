import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = ({ list }) =>
    (
        <div className="code-main-wrapper">
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>程序人生</BreadcrumbItem>
            </Breadcrumb>
            <ul className="code-main-list">
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </ul>
        </div>
    );

export default Main;
