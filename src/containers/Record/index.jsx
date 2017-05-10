import React, { Component } from 'react';
import * as actions from 'Actions/record';
import * as router from 'Actions/router';
import { connect } from 'react-redux';
import { equalByProps, common } from 'Assets/js/util';
import { push } from 'react-router-redux';
import { mixin } from 'core-decorators';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import './index.styl';

@mixin(common)
class Record extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = common.handlePageChange.bind(this);
        this.handleSearch = common.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'record' });
    }

    componentDidUpdate(prevProp) {
        const { pageIndex, pageSize, fetchList } = this.props;

        if (equalByProps(prevProp, this.props, [ 'pageIndex' ])) {
            fetchList({ pageIndex, pageSize, classify: 'record' });
        }
    }

    render() {
        const { list, total, pageIndex, pageSize } = this.props;

        return (
            <div className="record-wrapper">
                <div className="record-main">
                    <Main
                        path="朝花夕拾"
                        list={list}
                        total={total}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        onPage={this.handlePageChange}
                    />
                </div>
                <div className="record-aside">
                    <Aside
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ record }, { location: { query } }) => {
    const { list, total, pageSize } = record;
    const { pageIndex } = query;

    return {
        list,
        total,
        pageSize,
        pageIndex: Number(pageIndex || 1),
    };
};

const mapDispatchToProps = { ...actions, ...router, push };

export default connect(mapStateToProps, mapDispatchToProps)(Record);

