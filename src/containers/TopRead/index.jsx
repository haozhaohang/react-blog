import React, { Component } from 'react';

// css
import style from './index.scss';

class TopRead extends Component {
    render() {
        return(
            <section className={ style.topRead }>
                <div className={ style.title }>
                    <h3>推荐阅读</h3>
                    <span>Top Read</span>
                </div>
                <ul className={ style.list }>
                    <li><a href="javascript:;">博客架构和更新日志</a></li>
                    <li><a href="javascript:;">前端优化及规范文档</a></li>
                    <li><a href="javascript:;">浏览简介</a></li>
                    <li><a href="javascript:;">友情链接</a></li>
                    <li><a href="javascript:;">RSS订阅</a></li>
                    <li><a href="javascript:;">Github</a></li>
                </ul>
            </section>
        );
    }
}

export default TopRead;