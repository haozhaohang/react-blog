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
    }

    componentDidMount() {
        const { fetchAchiveList } = this.props;

        fetchAchiveList();
    }

    render() {
        const { achive, onSearch } = this.props;

        return (
            <aside className="aside-wrapper">
                <section>
                    <TopRead />
                </section>

                <section>
                    <Search
                        onSearch={onSearch}
                    />
                </section>

                <section>
                    <Achive
                        list={achive}
                    />
                </section>

                <section>
                    <TagCloud />
                </section>

                <section>
                    <FriendlyLink />
                </section>
            </aside>
        );
    }
}

const mapStateToProps = ({ aside }) => {
    const { achive } = aside;

    return {
        achive,
    };
};

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
