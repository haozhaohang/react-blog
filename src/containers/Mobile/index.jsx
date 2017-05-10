import React, { Component } from 'react';
import * as actions from 'Actions/mobile';
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
class Mobile extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = common.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'mobile' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="mobile-wrapper">
                <div className="mobile-main">
                    <Main
                        path="移动前端"
                        list={list}
                    />
                </div>
                <div className="mobile-aside">
                    <Aside
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ mobile }, { location: { query } }) => {

    const { list, total, pageSize } = mobile;
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions, push };

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
