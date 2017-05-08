import React, { Component } from 'react';
import * as actions from 'Actions/home';
import { connect } from 'react-redux';

// Component
import Banner from 'Components/Banner';
import Main from './Main';
import Aside from './Aside';

// css
import './index.styl';

class Home extends Component {
    componentDidMount() {
        const { fetchNewList } = this.props;

        fetchNewList();
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="home-wrapper">
                <Banner />
                <div className="home-container">
                    <div className="home-main">
                        <Main
                            list={list}
                        />
                    </div>
                    <div className="home-aside">
                        <Aside />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ home }, { location: { query } }) => {

    const { newList, total } = home;
    return {
        total,
        list: newList,
    };
};

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
