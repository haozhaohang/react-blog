import React from 'react';

// Component
import Main from './Main';
import Aside from './Aside';


// css
import './index.styl';

const Article = () =>
    (
        <section className="article-wrapper">
            <div className="main">
                <Main />
            </div>
            <div className="aside">
                <Aside />
            </div>
        </section>
    );

export default Article;
