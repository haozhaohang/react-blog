import React, { Component } from 'react';
import * as actions from 'Actions/web';
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
class Web extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = common.handlePageChange.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'web' });
    }

    componentDidUpdate(prevProp) {
        const { pageIndex, pageSize, fetchList } = this.props;

        if (equalByProps(prevProp, this.props, [ 'pageIndex' ])) {
            fetchList({ pageIndex, pageSize, classify: 'web' });
        }
    }

    render() {
        const { list, total, pageIndex, pageSize } = this.props;

        return (
            <div className="web-wrapper">
                <div className="web-main">
                    <Main
                        path="Web前端"
                        list={list}
                        total={total}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        onPage={this.handlePageChange}
                    />
                </div>
                <div className="web-aside">
                    <Aside />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ web }, { location: { query } }) => {
    const { list, total, pageSize } = web;
    const { pageIndex } = query;

    return {
        list,
        total,
        pageSize,
        pageIndex: Number(pageIndex || 1),
    };
};

const mapDispatchToProps = { ...actions, ...router, push };

export default connect(mapStateToProps, mapDispatchToProps)(Web);
