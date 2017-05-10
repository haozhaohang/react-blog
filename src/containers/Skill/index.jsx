import React, { Component } from 'react';
import * as actions from 'Actions/skill';
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
class Skill extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = common.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'skill' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className="skill-wrapper">
                <div className="skill-main">
                    <Main
                        path="授人以渔"
                        list={list}
                    />
                </div>
                <div className="skill-aside">
                    <Aside
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ skill }, { location: { query } }) => {
    const { list, total, pageSize } = skill;

    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions, push };

export default connect(mapStateToProps, mapDispatchToProps)(Skill);

