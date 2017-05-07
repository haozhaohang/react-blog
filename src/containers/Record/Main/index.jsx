import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = ({ list }) =>
    (
        <div className="record-main-wrapper">
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>朝花夕拾</BreadcrumbItem>
            </Breadcrumb>
            <ul className="record-mian-list">
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </ul>
        </div>
    );

export default Main;
