import React from 'react';
import Header from 'Containers/Header';

import style from './index.scss';

export default function Layout({ children }) {
    return (
        <div className={style.header}>
            <Header / >
            {children}
        </div>
    );
}
