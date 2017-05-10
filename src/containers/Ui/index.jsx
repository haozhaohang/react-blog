import React, { Component } from 'react';
import * as actions from 'Actions/ui';
import { connect } from 'react-redux';
import { equalByProps, common } from 'Assets/js/util';
import { push } from 'react-router-redux';
import { mixin } from 'core-decorators';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import style from './index.styl';

@mixin(common)
class Ui extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = common.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'ui' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="ui-wrapper">
                <div className="ui-main">
                    <Main
                        path="UI设计"
                        list={list}
                    />
                </div>
                <div className="ui-aside">
                    <Aside
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ ui }, { location: { query } }) => {

    const { list, total, pageSize } = ui;
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions, push };

export default connect(mapStateToProps, mapDispatchToProps)(Ui);

