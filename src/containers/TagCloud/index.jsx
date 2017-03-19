import React, { Component } from 'react';

// css
import style from './index.scss';

class TagCloud extends Component {
    render() {
        return(
            <section className={ style.tag }>
                <div className={ style.title }>
                    <h3>
                        <a href="javascript:;" title="查看所有标签">热门标签</a>
                    </h3>
                    <span>Tag Cloud</span>
                </div>
                <div className={ style.list }>
                    <a href="javascript:;" title="">H5</a>
                    <a href="javascript:;" title="">插件</a>
                    <a href="javascript:;" title="">规范</a>
                    <a href="javascript:;" title="">前端</a>
                    <a href="javascript:;" title="">react</a>
                    <a href="javascript:;" title="">H5</a>
                    <a href="javascript:;" title="">插件</a>
                    <a href="javascript:;" title="">规范</a>
                    <a href="javascript:;" title="">前端</a>
                    <a href="javascript:;" title="">react</a>
                    <a href="javascript:;" title="">H5</a>
                    <a href="javascript:;" title="">插件</a>
                    <a href="javascript:;" title="">规范</a>
                    <a href="javascript:;" title="">前端</a>
                    <a href="javascript:;" title="">react</a>
                    <a href="javascript:;" title="">H5</a>
                    <a href="javascript:;" title="">插件</a>
                    <a href="javascript:;" title="">规范</a>
                    <a href="javascript:;" title="">前端</a>
                    <a href="javascript:;" title="">react</a>
                    <a href="javascript:;" title="">H5</a>
                    <a href="javascript:;" title="">插件</a>
                    <a href="javascript:;" title="">规范</a>
                    <a href="javascript:;" title="">前端</a>
                    <a href="javascript:;" title="">react</a>
                    <a href="javascript:;" title="">H5</a>
                    <a href="javascript:;" title="">插件</a>
                    <a href="javascript:;" title="">规范</a>
                    <a href="javascript:;" title="">前端</a>
                    <a href="javascript:;" title="">react</a>
                </div>
            </section>
        );
    }
}

export default TagCloud;