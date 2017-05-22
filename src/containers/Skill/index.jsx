import React, { Component } from 'react';
import * as actions from 'Actions/skill';
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
class Skill extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = common.handlePageChange.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'skill' });
    }

    componentDidUpdate(prevProp) {
        const { pageIndex, pageSize, fetchList } = this.props;

        if (equalByProps(prevProp, this.props, [ 'pageIndex' ])) {
            fetchList({ pageIndex, pageSize, classify: 'skill' });
        }
    }

    render() {
        const { list, total, pageIndex, pageSize } = this.props;

        return (
            <div className="skill-wrapper">
                <div className="skill-main">
                    <Main
                        path="授人以渔"
                        list={list}
                        total={total}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        onPage={this.handlePageChange}
                    />
                </div>
                <div className="skill-aside">
                    <Aside />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ skill }, { location: { query } }) => {
    const { list, total, pageSize } = skill;
    const { pageIndex } = query;

    return {
        list,
        total,
        pageSize,
        pageIndex: Number(pageIndex || 1),
    };
};

const mapDispatchToProps = { ...actions, ...router, push };

export default connect(mapStateToProps, mapDispatchToProps)(Skill);

