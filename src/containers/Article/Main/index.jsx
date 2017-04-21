import React from 'react';

// component
import Breadcrumb from 'Components/Breadcrumb';
import ArticleIntro from 'Containers/ArticleIntro';

// css
import './index.styl';

const BreadcrumbItem = Breadcrumb.Item;

const Main = () =>
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
                            HTML页面后退不缓存
                        </h1>
                    </header>
                    <div className="">
                        <time class="mod-article__meta" pubdate="" datetime=""><i class="icon-time"></i>星期四 2017/04/20 18:18</time>
                        <span class="mod-article__meta"><i class="icon-view"></i>阅读：33</span>
                        <span class="mod-article__meta"><i class="icon-comment"></i>评论：0</span>
                        <span class="mod-article__meta"><i class="icon-author"></i>作者：ivan</span>
                        <span class="mod-article__meta"><i class="icon-category"></i>分类：<a href="http://www.xuanfengge.com/category/web" rel="category tag">Web前端</a></span>
                    </div>
                    <section></section>
                    <footer>

                    </footer>
                </div>
            </article>
        </div>
    );

export default Main;
