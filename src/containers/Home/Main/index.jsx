import React, { Component } from 'react';

// css
import style from './index.scss';

// component
import ArticleItem from 'Containers/ArticleItem';

class Main extends Component {
    render() {
        return (
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
    }
}

export default Main;
