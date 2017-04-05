import React from 'react';

// css
import style from './index.scss';

const ArticleItem = () =>
    (
        <div className={style.wrap}>
            <div className={style.img}>
                <a />
            </div>
            <div className={style.main}>
                <h3 className={style.title}><a> ES6知识点集锦</a></h3>
                <p className={style.content}>
                    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                    容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内
                    容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容
                    内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容
                    内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内
                    容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容
                    内容内容容内容内容内容内容内容容内容内容内容内容内容
                </p>
                <ul className={style.mes}>
                    <li><a>移动</a>，<a>javascript</a></li>
                    <li>2016-12-30 星期一</li>
                    <li><a>评论(<span> 11 </span>)</a></li>
                    <li><a>浏览(<span> 11 </span>)</a></li>
                </ul>
            </div>
        </div>
    );

export default ArticleItem;
