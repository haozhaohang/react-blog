import React, { Component } from 'react';
import * as actions from 'Actions/ui';
import { connect } from 'react-redux';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import style from './index.styl';

class Ui extends Component {
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
                    <Aside />
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

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Ui);

