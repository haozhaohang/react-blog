import React, { Component } from 'react';
import * as actions from 'Actions/aside';
import * as router from 'Actions/router';
import { connect } from 'react-redux';

// component
import TopRead from 'Components/TopRead';
import Search from 'Components/Search';
import Achive from 'Components/Achive';
import TagCloud from 'Components/TagCloud';
import FriendlyLink from 'Components/FriendlyLink';

// css
import './index.styl';

class Aside extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const { fetchAchiveList, fetchLabelList } = this.props;

        fetchAchiveList();

        fetchLabelList()
    }

    handleSearch(value) {
        const { push } = this.props;

        push(`/search-result?searchKey=${encodeURI(value)}`)
    },

    render() {
        const { achive, labels } = this.props;

        return (
            <aside className="aside-wrapper">
                <section>
                    <TopRead />
                </section>

                <section>
                    <Search
                        onSearch={this.handleSearch}
                    />
                </section>

                <section>
                    <Achive
                        list={achive}
                    />
                </section>

                <section>
                    <TagCloud
                        list={labels}
                    />
                </section>

                <section>
                    <FriendlyLink />
                </section>
            </aside>
        );
    }
}

const mapStateToProps = ({ aside }) => {
    const { achive, labels } = aside;

    return {
        achive,
        labels,
    };
};

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
