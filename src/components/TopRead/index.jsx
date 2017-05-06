import React from 'react';

// css
import './index.styl';

const TopRead = () =>
    (
        <section className="to-read-wrapper">
            <div className="to-read-title">
                <h3>推荐阅读</h3>
                <span>Top Read</span>
            </div>
            <ul className="to-read-list">
                <li><a>博客架构和更新日志</a></li>
                <li><a>前端优化及规范文档</a></li>
                <li><a>浏览简介</a></li>
                <li><a>友情链接</a></li>
                <li><a>RSS订阅</a></li>
                <li><a href="https://github.com/haozhaohang">Github</a></li>
            </ul>
        </section>
    );

export default TopRead;