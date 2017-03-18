import React, { Component } from 'react';

// css
import style from './index.scss';

class ArticleItem extends Component {
    render() {
        return(
            <div className={ style.wrap }>
                <div className={ style.img }>
                    <a href="javascript:;"></a>
                </div>
                <div className={ style.main }>
                    <h3 className={ style.title }><a href="javascript:;"> ES6知识点集锦</a></h3>
                    <p className={ style.content }>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容容内容内容内容内容内容</p>
                    <ul className={ style.mes }>
                        <li><a href="javascript:;">移动</a>，<a href="javascript:;">javascript</a></li>
                        <li>2016-12-30 星期一</li>
                        <li><a href="javascript:;">评论(<span> 11 </span>)</a></li>
                        <li><a href="javascript:;">浏览(<span> 11 </span>)</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ArticleItem;