import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { commons } from 'Constants';

// css
import './index.styl';

// img
import titleImg from './img/title.jpg';

const ArticleIntro = ({value}) =>
    (
        <article className="article-intro-wrapper">
            <div className="container">

                <h2 className="title">
                    <a href="">
                        {value.title}
                    </a>
                </h2>

                <a href="">
                    <img width="570" height="200" src={titleImg} alt="文章图片" />
                </a>

                <section className="main">
                    <p className="content" dangerouslySetInnerHTML={{__html: value.content}}></p>
                    <p className="lick-full">
                        <Link to={`/article?id=${value._id}`}>
                            查看全文
                        </Link>
                    </p>
                </section>

                <div className="msg">
                    <span>{moment(value.createTime).format('YYYY/MM/')}</span>
                    <span>{moment(value.createTime).format('DD')}&nbsp;&nbsp;{commons.WEEK_LIST[moment(value.createTime).format('E')]}</span>
                </div>

                <footer className="tag">
                    <span>
                        标签:
                        <a>
                            csss动画
                        </a>
                        、
                        <a>
                            csss动画
                        </a>
                    </span>
                    <span>
                        <a>
                            {value.comments.length} 条评论
                        </a>
                    </span>
                    <span>
                        <a>
                            {value.views}℃热度
                        </a>
                    </span>
                </footer>
            </div>
        </article>
    );

export default ArticleIntro;
