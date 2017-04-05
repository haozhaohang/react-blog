import React from 'react';

// Component
import Main from './Main';
import Aside from './Aside';

// css
import style from './index.scss';

const Web = () =>
    (
        <div className={style.container}>
            <div className={style.main}>
                <Main />
            </div>
            <div className={style.aside}>
                <Aside />
            </div>
        </div>
    );

export default Web;
