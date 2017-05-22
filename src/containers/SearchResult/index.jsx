import React, { Component } from 'react';
import * as actions from 'Actions/mobile';
import * as router from 'Actions/router';
import { connect } from 'react-redux';
import { equalByProps, common } from 'Assets/js/util';
import { push } from 'react-router-redux';
import { mixin } from 'core-decorators';

// Component
import Main from 'Components/Main';
import Aside from 'Containers/Aside';

// css
import './index.styl';

@mixin(common)
class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = common.handlePageChange.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize, searchKey } = this.props;

        fetchList({ pageSize, title: searchKey });
    }

    componentDidUpdate(prevProp) {
        const { pageIndex, pageSize, searchKey, fetchList } = this.props;

        if (equalByProps(prevProp, this.props, [ 'pageIndex', 'searchKey' ])) {
            fetchList({ pageIndex, pageSize, title: searchKey });
        }
    }

    render() {
        const { searchKey, list, total, pageIndex, pageSize } = this.props;

        return (
            <div className="search-result-wrapper">
                <div className="search-result-main">
                    <Main
                        path={`搜索结果 ( ${searchKey} )`}
                        list={list}
                        total={total}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        onPage={this.handlePageChange}
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
    const { searchKey, pageIndex } = query;

    return {
        list,
        total,
        pageSize,
        searchKey,
        pageIndex: Number(pageIndex || 1),
    };
};

const mapDispatchToProps = { ...actions, ...router, push };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
