import React, { Component } from 'react';
import * as actions from 'Actions/mobile';
import { connect } from 'react-redux';

// Component
import Main from './Main';
import Aside from './Aside';

// css
import './index.styl';

class Mobile extends Component {
    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'mobile' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="mobile-container">
                <div className="mobile-main">
                    <Main
                        list={list}
                    />
                </div>
                <div className="mobile-aside">
                    <Aside />
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

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
