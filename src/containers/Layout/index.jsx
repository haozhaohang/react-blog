import React from 'react';
import Header from 'Containers/Header';

export default function Layout({ children }) {
    return (
        < div >
            < Header / >
            { children }
        < /div>
    );
}
