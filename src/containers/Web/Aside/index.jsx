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
        <aside className="web-aside-wrapper">
            <section className="web-aside-topRead">
                <TopRead />
            </section>

            <section className="web-aside-search">
                <Search />
            </section>

            <section className="web-aside-achive">
                <Achive />
            </section>

            <section className="web-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="web-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
