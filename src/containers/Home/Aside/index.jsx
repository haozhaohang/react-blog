import React, { Component } from 'react';

// css
import style from './index.scss';

// component
import TopRead from 'Containers/TopRead';
import Search from 'Containers/Search';
import Achive from 'Containers/Achive';
import TagCloud from 'Containers/TagCloud'
import FriendlyLink from 'Containers/FriendlyLink';

class Aside extends Component {
    render() {
        return(
            <aside className={ style.aside }>
                <TopRead />
                <Search />
                <Achive />
                <TagCloud />
                <FriendlyLink />
            </aside>
        );
    }
}

export default Aside;