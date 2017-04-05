import React from 'react';

// component
import ArticleItem from 'Containers/ArticleItem';

// css
import style from './index.scss';

const Main = () =>
    (
        <div className={style.main}>
            <h2 className={style.title}>最新文章</h2>
            <ul>
                <li>
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                </li>
            </ul>
        </div>
    );

export default Main;
