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
        <aside className="word-press-aside-wrapper">
            <section className="word-press-aside-topRead">
                <TopRead />
            </section>

            <section className="word-press-aside-search">
                <Search />
            </section>

            <section className="word-press-aside-achive">
                <Achive />
            </section>

            <section className="word-press-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="word-press-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
