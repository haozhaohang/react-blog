import React from 'react';

// component
import TopRead from 'Components/TopRead';
import Search from 'Components/Search';
import Achive from 'Components/Achive';
import TagCloud from 'Components/TagCloud';
import FriendlyLink from 'Components/FriendlyLink';

// css
import './index.styl';

const Aside = () =>
    (
        <aside className="ui-aside-wrapper">
            <section className="ui-aside-topRead">
                <TopRead />
            </section>

            <section className="ui-aside-search">
                <Search />
            </section>

            <section className="ui-aside-achive">
                <Achive />
            </section>

            <section className="ui-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="ui-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
