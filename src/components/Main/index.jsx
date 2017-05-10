import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = ({ path, list }) =>
    (
        <div className="main-wrapper">
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>{path}</BreadcrumbItem>
            </Breadcrumb>
            <ul className="main-list">
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </ul>
        </div>
    );

export default Main;
