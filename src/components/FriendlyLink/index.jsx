import React from 'react';

// css
import './index.styl';

const FriendlyLink = () =>
    (
        <section className="friendly-link-wrapper">
            <div>
                <div className="title">
                    <h3>
                        <a title="查看所有标签">友情链接</a>
                    </h3>
                    <span>Friendly Link</span>
                </div>
                <ul className="list">
                    <li>
                        <a href="https://www.awesomes.cn/">Web前端开发资源库</a>
                    </li>
                    <li>
                        <a href="http://www.qdfuns.com/">前端网（QDFuns） - WEB前端开发工程师专业网站，一站式服务平台！</a>
                    </li>
                </ul>
            </div>
        </section>
    );

export default FriendlyLink;
