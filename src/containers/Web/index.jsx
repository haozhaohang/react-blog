import React, { Component } from 'react';
import * as actions from 'Actions/web';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import './index.styl';

class Web extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'web' });
    }

    handleSearch(value) {
        const { push } = this.props;

        push(`/search-result?searchKey=${encodeURI(value)}`)
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="web-wrapper">
                <div className="web-main">
                    <Main
                        path="Web前端"
                        list={list}
                    />
                </div>
                <div className="web-aside">
                    <Aside
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ web }, { location: { query } }) => {

    const { list, total, pageSize } = web;
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions, push };

export default connect(mapStateToProps, mapDispatchToProps)(Web);
