import React, { Component } from 'react';
import * as actions from 'Actions/record';
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

        this.handleSearch = common.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'record' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="record-wrapper">
                <div className="record-main">
                    <Main
                        path="朝花夕拾"
                        list={list}
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
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions, push };

export default connect(mapStateToProps, mapDispatchToProps)(Record);

