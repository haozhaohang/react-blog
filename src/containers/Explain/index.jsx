import React, { Component } from 'react';

// css
import style from './index.styl';

class Explain extends Component {

    render() {
        const { list, total } = this.props;

        return (
            <section className="explain-wrapper">
                <h1>Project - 更新日志</h1>
                <p>制作网站的目的是为了记录码农的学习前端之路</p>

                <section className="portion">
                    <h2>2017-06-01</h2>
                    <ol>
                        <li>网站首次上线,后期不断更新维护</li>
                    </ol>
                </section>

                <section className="portion">
                    <h1 className="te-portion">Project - 技术栈</h1>
                    <p>nodejs + express + mongodb + mongoose + react全家桶 + es6/7 + stylus + antd</p>
                </section>

                <p className="copyright">
                    <a target="_blank" href="http://www.wenyajs.com/">问崖</a> © 2016
                </p>
            </section>
        );
    }
}


export default Explain;

