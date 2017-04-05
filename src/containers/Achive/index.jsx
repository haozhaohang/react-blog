import React, { Component } from 'react';

// css
import style from './index.scss';

class Achive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentList: 'hot',
        };

        this.handleChangeAchiveList = this.handleChangeAchiveList.bind(this);
    }
    handleChangeAchiveList(type) {
        this.setState({
            currentList: type,
        });
    }
    render() {
        return (
            <section className={style.achive}>
                <div className={style.title}>
                    <h3 className={this.state.currentList === 'hot' ? style.action : ''} onMouseOver={() => this.handleChangeAchiveList('hot')}>热门文章</h3>
                    <h3 className={this.state.currentList === 'new' ? style.action : ''} onMouseOver={() => this.handleChangeAchiveList('new')}>最新文章</h3>
                    <h3 className={this.state.currentList === 'random' ? style.action : ''} onMouseOver={() => this.handleChangeAchiveList('random')}>随机文章</h3>
                </div>
                {
                    this.state.currentList === 'hot'
                    ? <ul>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li><li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li><li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li><li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li><li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                    </ul>
                    : ''
                }
                {
                    this.state.currentList === 'new'
                    ? <ul>
                        <li>
                            <a>博文二</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                    </ul>
                    : ''
                }
                {
                    this.state.currentList === 'random'
                    ? <ul>
                        <li>
                            <a>博文三</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                        <li>
                            <a>博文一</a>
                            <span>(849)</span>
                        </li>
                    </ul>
                    : ''
                }
            </section>
        );
    }
}

export default Achive;
