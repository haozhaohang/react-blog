import React, { Component } from 'react';

// css
import './index.styl';

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
            <section className="achive-wrapper">
                <div className="achive-title">
                    <h3 className={this.state.currentList === 'hot' ? 'achive-action' : ''} onMouseOver={() => this.handleChangeAchiveList('hot')}>热门文章</h3>
                    <h3 className={this.state.currentList === 'new' ? 'achive-action' : ''} onMouseOver={() => this.handleChangeAchiveList('new')}>最新文章</h3>
                    <h3 className={this.state.currentList === 'random' ? 'achive-action' : ''} onMouseOver={() => this.handleChangeAchiveList('random')}>随机文章</h3>
                </div>
                {
                    this.state.currentList === 'hot'
                    ? <ul>
                    </ul>
                    : ''
                }
                {
                    this.state.currentList === 'new'
                    ? <ul>
                    </ul>
                    : ''
                }
                {
                    this.state.currentList === 'random'
                    ? <ul>
                    </ul>
                    : ''
                }
            </section>
        );
    }
}

export default Achive;
