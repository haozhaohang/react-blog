import React, { Component } from 'react';
import { Link } from 'react-router';

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
        const { list: { hottest, newest, random } } = this.props;

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
                        {
                            hottest.map( ({ _id, title, views }, index) => <li key={index}><b>{index + 1}</b><Link to={`/article?id=${_id}`}>{title}</Link><span>({views})</span></li> )
                        }
                    </ul>
                    : ''
                }
                {
                    this.state.currentList === 'new'
                    ? <ul>
                        {
                            newest.map( ({ _id, title, views }, index) => <li key={index}><b>{index + 1}</b><Link to={`/article?id=${_id}`}>{title}</Link><span>({views})</span></li> )
                        }
                    </ul>
                    : ''
                }
                {
                    this.state.currentList === 'random'
                    ? <ul>
                        {
                            random.map( ({ _id, title, views }, index) => <li key={index}><b>{index + 1}</b><Link to={`/article?id=${_id}`}>{title}</Link><span>({views})</span></li> )
                        }
                    </ul>
                    : ''
                }
            </section>
        );
    }
}

export default Achive;
