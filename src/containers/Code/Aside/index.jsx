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
        <aside className="code-aside-wrapper">
            <section className="code-aside-topRead">
                <TopRead />
            </section>

            <section className="code-aside-search">
                <Search />
            </section>

            <section className="code-aside-achive">
                <Achive />
            </section>

            <section className="code-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="code-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
