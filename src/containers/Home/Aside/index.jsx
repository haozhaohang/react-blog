import React from 'react';

// component
import TopRead from 'Containers/TopRead';
import Search from 'Containers/Search';
import Achive from 'Containers/Achive';
import TagCloud from 'Containers/TagCloud';
import FriendlyLink from 'Containers/FriendlyLink';

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
