import React from 'react';

// component
import ArticleIntro from 'Containers/ArticleIntro';


// css
import './index.styl';

const Main = ({ list }) =>
    (
        <div className="home-main-wrapper">
            <h2 className="home-main-title">最新文章</h2>
            <div>
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </div>
        </div>
    );

export default Main;
