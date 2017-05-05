import React, { Component } from 'react';
import * as actions from 'Actions/web';
import { connect } from 'react-redux';

// Component
import Main from './Main';
import Aside from './Aside';

// css
import style from './index.scss';

class Web extends Component {
    componentDidMount() {
        const { fetchList, pageSize } = this.props;

        fetchList({ pageSize, classify: 'web' });
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

const mapStateToProps = ({ web }, { location: { query } }) => {

    const { list, total, pageSize } = web;
    return {
        list,
        total,
        pageSize,
    };
};

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Web);
