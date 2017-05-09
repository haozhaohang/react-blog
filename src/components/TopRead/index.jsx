import React from 'react';
import { Link } from 'react-router';

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
                <li><Link to="/explain">博客架构和更新日志</Link></li>
                <li><Link>前端优化及规范文档</Link></li>
                <li><Link>浏览简介</Link></li>
                <li><Link>友情链接</Link></li>
                <li><Link>RSS订阅</Link></li>
                <li><a href="https://github.com/haozhaohang">Github</a></li>
            </ul>
        </section>
    );

export default TopRead;
