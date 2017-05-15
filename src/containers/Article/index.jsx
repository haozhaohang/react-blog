import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'Actions/article';

// Component
import Main from './Main';
import Aside from 'Containers/Aside';


// css
import './index.styl';

class Article extends Component {
    componentDidMount() {
        const { id, fetchDetail } = this.props;
        const params = { id };

        fetchDetail(params);
    }

    render(){
        const { info } = this.props;
        return (
            <section className="article-wrapper">
                <div className="main">
                    <Main
                        value={info}
                    />
                </div>
                <div className="aside">
                    <Aside />
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ article }, { location: { query } }) => {
    const { id } = query;
    const { info } = article;

    return {
        id,
        info,
    };
};

const mapDispathToProps = { ...actions };

export default connect(mapStateToProps, mapDispathToProps)(Article);
