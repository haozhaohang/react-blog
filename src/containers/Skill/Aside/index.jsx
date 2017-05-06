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
        <aside className="skill-aside-wrapper">
            <section className="skill-aside-topRead">
                <TopRead />
            </section>

            <section className="skill-aside-search">
                <Search />
            </section>

            <section className="skill-aside-achive">
                <Achive />
            </section>

            <section className="skill-aside-tagCloud">
                <TagCloud />
            </section>

            <section className="skill-aside-friendlyLink">
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
