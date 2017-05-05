import React, { Component } from 'react';
import * as actions from 'Actions/wordPress';
import { connect } from 'react-redux';

// Component
import Main from './Main';
import Aside from './Aside';

// css
import style from './index.scss';

class Wordpress extends Component {
    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'wordPress' });
    }

    render() {
        const { list, total } = this.props;

        return (
            <div className={style.container}>
                <div className={style.main}>
                    <Main
                        list={list}
                    />
                </div>
                <div className={style.aside}>
                    <Aside />
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

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Wordpress);

