import React from 'react';

// css
import style from './index.scss';

const ArticleItem = ({value}) =>
    (
        <div className={style.wrap}>
            <div className={style.img}>
                <span />
            </div>
            <div className={style.main}>
                <h3 className={style.title}><a>{value.title}</a></h3>
                <p className={style.content} dangerouslySetInnerHTML={{__html: value.content}}>
                </p>
                <ul className={style.mes}>
                    <li><a>移动</a>，<a>javascript</a></li>
                    <li>{value.createTime}</li>
                    <li><a>评论(<span> {value.views} </span>)</a></li>
                    <li><a>浏览(<span> {value.views} </span>)</a></li>
                </ul>
            </div>
        </div>
    );

export default ArticleItem;
