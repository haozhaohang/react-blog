import React, { Component } from 'react';
import * as actions from 'Actions/mobile';
import { connect } from 'react-redux';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import './index.styl';

class SearchResult extends Component {
    componentDidMount() {
        const { fetchList, pageSize, searchKey } = this.props;

        fetchList({ pageSize, title: searchKey });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="search-result-wrapper">
                <div className="search-result-main">
                    <Main
                        list={list}
                    />
                </div>
                <div className="search-result-aside">
                    <Aside />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ mobile }, { location: { query } }) => {
    const { list, total, pageSize } = mobile;
    const { searchKey } = query;

    return {
        list,
        total,
        pageSize,
        searchKey,
    };
};

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
