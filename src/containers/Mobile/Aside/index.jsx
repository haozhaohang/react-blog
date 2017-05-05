import React from 'react';

// component
import TopRead from 'Components/TopRead';
import Search from 'Components/Search';
import Achive from 'Components/Achive';
import TagCloud from 'Components/TagCloud';
import FriendlyLink from 'Components/FriendlyLink';

// css
import style from './index.scss';

const Aside = () =>
    (
        <aside className={style.aside}>
            <section className={style.topRead}>
                <TopRead />
            </section>

            <section className={style.search}>
                <Search />
            </section>

            <section className={style.achive}>
                <Achive />
            </section>

            <section className={style.tagCloud}>
                <TagCloud />
            </section>

            <section className={style.friendlyLink}>
                <FriendlyLink />
            </section>
        </aside>
    );

export default Aside;
