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
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                </ul>
            </div>
        </section>
    );

export default FriendlyLink;
