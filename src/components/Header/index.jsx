import React from 'react';
import { Link } from 'react-router';

import './index.styl';

const Header = () =>
    (
        <section className="header-wrapper">
            <header className="header-containers clearfix">
                <div className="header-logo">
                    <Link to="/">
                        <h1>问崖</h1>
                        <h2>前端博客 - 专注技术分享</h2>
                    </Link>
                </div>
                <nav className="header-list">
                    <Link to="/">首页</Link>
                    <Link to="web">Web前端</Link>
                    <Link to="mobile">移动前端</Link>
                    <Link to="skill">授人以渔</Link>
                    <Link to="ui">UI设计</Link>
                    <Link to="wordpress">WP视点</Link>
                    <Link to="record">朝花夕拾</Link>
                    <Link to="code">程序人生</Link>
                    <Link id="about-message">关于&留言</Link>
                </nav>
            </header>
        </section>
    );

export default Header;
