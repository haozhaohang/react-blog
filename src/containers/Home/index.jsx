import React, { Component } from 'react';

// css
import style from './index.scss';

// Component
import Banner from 'Containers/Banner';
import Main from './Main';
import Aside from './Aside';

class Home extends Component {
    render() {
        return(
            <div>
                <Banner />
                <div className={ style.content }>
                    <Main />
                    <Aside />
                </div>
            </div>
        );
    }
}

export default Home;