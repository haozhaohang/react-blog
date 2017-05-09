import React from 'react';
import { Pagination } from 'antd';

// component
import ArticleIntro from 'Containers/ArticleIntro';


// css
import './index.styl';

const Main = ({ list, total, pageIndex, pageSize, onPage }) =>
    (
        <div className="home-main-wrapper">
            <h2 className="home-main-title">最新文章</h2>
            <div>
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </div>
            <div className="home-main-Pagination">
                <Pagination current={pageIndex} total={total} pageSize={pageSize} onChange={onPage} />
            </div>
        </div>
    );

export default Main;
