import React from 'react';
import { commons } from 'Constants';
import moment from 'moment';

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
                <BreadcrumbItem href={`/${value.classify}`}>{commons.CLASSIFY_LIST[value.classify]}</BreadcrumbItem>
                <BreadcrumbItem>{value.title}</BreadcrumbItem>
            </Breadcrumb>
            <article className="article">
                <div className="containers">
                    <header>
                        <h1>
                            {value.title}
                        </h1>
                    </header>
                    <div className="meta-list">
                        <time className="meta-item"><i></i>{moment(value.createTime).format('YYYY-MM-DD')} {commons.WEEK_LIST[moment(value.createTime).format('E')]}</time>
                        <span className="meta-item"><i></i>阅读：{value.views}</span>
                        <span className="meta-item"><i></i>评论：0</span>
                        <span className="meta-item"><i></i>作者：{value.author}</span>
                        <span className="meta-item"><i></i>分类：<a rel="category tag">{value.classify}</a></span>
                    </div>
                    <section className="main-content" dangerouslySetInnerHTML={{__html: value.content}}></section>
                    <footer>

                    </footer>
                </div>
            </article>
        </div>
    );

export default Main;
