import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './index.scss';

class Header extends Component {
    render() {
        return(
            <header className="clearfix">
                <div className={style.logo}>
                    <h1>
                        logo
                    </h1>
                </div>
                <div className={style.list}>
                    <Link to="/">首页</Link>
                    <Link to="mobile">Web前端</Link>
                    <Link to="web">移动前端</Link>
                    <Link to="skill">授人以渔</Link>
                    <Link to="ui">UI设计</Link>
                    <Link to="wordpress">WP视点</Link>
                    <Link to="record">朝花夕拾</Link>
                    <Link to="code">程序人生</Link>
                    <Link id="about-message">关于&留言</Link>
                </div>
            </header>
        );
    }
}

export default Header;