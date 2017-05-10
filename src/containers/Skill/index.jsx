import React, { Component } from 'react';
import * as actions from 'Actions/skill';
import { connect } from 'react-redux';

// Component
import Main from 'Components/Main';
import Aside from 'Components/Aside';

// css
import './index.styl';

class Skill extends Component {
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
                    <Aside />
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

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Skill);

