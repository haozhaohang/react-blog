import React from 'react';

// component
import TopRead from 'Components/TopRead';
import Search from 'Components/Search';
import Achive from 'Components/Achive';
import TagCloud from 'Components/TagCloud';
import FriendlyLink from 'Components/FriendlyLink';

// css
import './index.styl';

const Aside = ({ onSearch }) =>
    (
        <aside className="mobile-aside-wrapper">
            <section>
                <TopRead />
            </section>

            <section>
                <Search
                    onSearch={onSearch}
                />
            </section>

            <section>
                <Achive />
            </section>

            <section>
                <TagCloud />
            </section>

            <section>
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
