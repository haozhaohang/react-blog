import React, { Component } from 'react';
import style from './index.scss';

class Article extends Component {
    render() {
        return (
            <article className={style.wrapper}>
                <div className={style.container}>

                    <h2 className={style.title}>
                        <a href="">
                            文章标题
                        </a>
                    </h2>

                    <a href="">
                        <img width="570" height="200" src="img/title.jpg" />
                    </a>

                    <section className={style.main}>
                        <h2>一级标题</h2>
                        <ul>
                            <li>
                                CSS动画属性会触发整个页面的重排relayout、重绘repaint、重组recomposite
                            </li>
                            <li>
                                Paint通常是其中最花费性能的，尽可能避免使用触发paint的CSS动画属性，这也是为什么我们推荐在CSS动画中使用&nbsp;
                                <code>webkit-transform: translateX(3em)&nbsp;</code>的方案代替使用&nbsp;
                                <code>left: 3em&nbsp;</code>，因为
                                <code>left</code>会额外触发layout与paint，而<code>webkit-transform</code>只触发整个页面composite
                            </li>
                        </ul>
                        <p>
                            <a>
                                查看全文
                            </a>
                        </p>
                    </section>

                    <div className={style.msg}>
                        <span>2016/11</span>
                        <span>15&nbsp;&nbsp;周二</span>
                    </div>

                    <footer className={style.tag}>
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
                                0 条评论
                            </a>
                        </span>
                        <span>
                            <a>
                                1338℃热度
                            </a>
                        </span>
                    </footer>
                </div>
            </article>
        );
    }
}

export default Article;
