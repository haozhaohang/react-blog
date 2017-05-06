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
        <aside className="mobile-aside-wrapper">
            <section className="mobile-aside-topRead">
                <TopRead />
            </section>

            <section className="mobile-aside-search">
                <Search />
            </section>

            <section className="mobile-aside-achive">
                <Achive />
            </section>

            <section className="mobile-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="mobile-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
