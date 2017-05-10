import React from 'react';
import { Pagination } from 'antd';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = ({ path, list, pageIndex, total, pageSize, onPage }) =>
    (
        <div className="main-wrapper">
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>{path}</BreadcrumbItem>
            </Breadcrumb>
            <ul className="main-list">
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </ul>
            <div className="main-Pagination">
                <Pagination current={pageIndex} total={total} pageSize={pageSize} onChange={onPage} />
            </div>
        </div>
    );

export default Main;
