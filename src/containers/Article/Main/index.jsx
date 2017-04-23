import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = ({value}) =>
    (
        <div className="main-wrapper">
            <Breadcrumb>
                <BreadcrumbItem href="/">首页</BreadcrumbItem>
                <BreadcrumbItem>移动前端</BreadcrumbItem>
            </Breadcrumb>
            <article className="article">
                <div className="containers">
                    <header>
                        <h1>
                            {value.title}
                        </h1>
                    </header>
                    <div className="meta-list">
                        <time className="meta-item"><i></i>{value.createTime}</time>
                        <span className="meta-item"><i></i>阅读：{value.views}</span>
                        <span className="meta-item"><i></i>评论：0</span>
                        <span className="meta-item"><i></i>作者：{value.author}</span>
                        <span className="meta-item"><i></i>分类：<a rel="category tag">Web前端</a></span>
                    </div>
                    <section className="main-content" dangerouslySetInnerHTML={{__html: value.content}}></section>
                    <footer>

                    </footer>
                </div>
            </article>
        </div>
    );

export default Main;
