import React, { Component } from 'react';
import * as actions from 'Actions/record';
import { connect } from 'react-redux';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import './index.styl';

class Record extends Component {
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
                    <Aside />
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

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Record);

