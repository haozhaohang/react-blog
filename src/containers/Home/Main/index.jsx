import React from 'react';

// component
import ArticleItem from 'Containers/ArticleItem';
import ArticleIntro from 'Containers/ArticleIntro';


// css
import style from './index.scss';

const Main = ({ list }) =>
    (
        <div className={style.main}>
            <h2 className={style.title}>最新文章</h2>
            <div>
                {list.map((val, index) => <ArticleIntro key={index} value={val} />)}
            </div>
        </div>
    );

export default Main;
