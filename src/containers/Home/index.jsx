import React, { Component } from 'react';

// css
import style from './index.scss';

// Component
import Banner from 'Containers/Banner';
import Main from 'Containers/Home/Main';
// import HomeAside from 'Containers/aside/HomeAside.jsx';

class Home extends Component {
    render() {
        return(
            <div>
                <Banner />
                <div className={ style.content }>
                    <Main />
                </div>
            </div>
        );
    }
}

export default Home;