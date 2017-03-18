import React, { Component } from 'react';

// css
import style from './index.scss';

// Component
import Banner from 'Containers/Banner';
// import HomeMain from 'Containers/main/HomeMain.jsx';
// import HomeAside from 'Containers/aside/HomeAside.jsx';

class Home extends Component {
    render() {
        return(
            <div>
                <Banner />
                <div className={ style.content }>
                </div>
            </div>
        );
    }
}

export default Home;