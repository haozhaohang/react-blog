import React, { Component } from 'react';
import * as actions from 'Actions/wordPress';
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
class Wordpress extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = common.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'wordPress' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="word-press-wrapper">
                <div className="word-press-main">
                    <Main
                        path="WP视点"
                        list={list}
                    />
                </div>
                <div className="word-press-aside">
                    <Aside
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ wordPress }, { location: { query } }) => {

    const { list, total, pageSize } = wordPress;
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions, push };

export default connect(mapStateToProps, mapDispatchToProps)(Wordpress);

