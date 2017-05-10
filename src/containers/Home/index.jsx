import React, { Component } from 'react';
import * as actions from 'Actions/home';
import * as router from 'Actions/router';
import { equalByProps } from 'Assets/js/util';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Component
import Banner from 'Components/Banner';
import Main from './Main';
import Aside from './Aside';

// css
import './index.styl';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const { pageIndex, pageSize, fetchNewList } = this.props;

        fetchNewList({ pageIndex, pageSize });
    }

    componentDidUpdate(prevProp) {
        const { pageIndex, pageSize, fetchNewList } = this.props;

        if (equalByProps(prevProp, this.props, [ 'pageIndex' ])) {
            fetchNewList({ pageIndex, pageSize });
        }

    }

    handlePageChange(pageNum) {
        const { list, total, pageIndex, updateQuery } = this.props;

        updateQuery({ pageIndex: pageNum })
    }

    handleSearch(value) {
        const { push } = this.props;

        push(`/search-result?searchKey=${encodeURI(value)}`)
    }

    render() {
        const { list, total, pageIndex, pageSize } = this.props;

        return (
            <div className="home-wrapper">
                <Banner />
                <div className="home-container">
                    <div className="home-main">
                        <Main
                            list={list}
                            total={total}
                            pageIndex={pageIndex}
                            pageSize={pageSize}
                            onPage={this.handlePageChange}
                        />
                    </div>
                    <div className="home-aside">
                        <Aside
                            onSearch={this.handleSearch}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ home }, { location: { query } }) => {
    const { newList, total, pageSize } = home;
    const { pageIndex } = query;

    return {
        total,
        pageSize,
        pageIndex: Number(pageIndex || 1),
        list: newList,
    };
};

const mapDispatchToProps = { ...actions, ...router, push };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
