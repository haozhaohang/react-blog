import React, { Component } from 'react';

// css
import style from './index.scss';

class FriendlyLink extends Component {
    render() {
        return(
            <section className={ style.friendlyLink }>
                <div className={ style.title }>
                    <h3>
                        <a href="javascript:;" title="查看所有标签">热门标签</a>
                    </h3>
                    <span>Friendly Link</span>
                    <ul className={ style.list }>
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
    }
}

export default FriendlyLink;