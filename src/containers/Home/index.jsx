import React, { Component } from 'react';
// import { get } from 'Assets/js/request';

// Component
import Banner from 'Containers/Banner';
import Main from './Main';
import Aside from './Aside';

// css
import style from './index.scss';

class Home extends Component {
    componentDidMount() {
        async function fetchQuery() {
            // let payload;

            // try {
                // payload = await post('/api/user/login',
                    // { "username": "hao1", "password": "123" });
            //     payload = await get('/api');
            // } catch (e) {
            //     return;
            // }
            // console.log(payload);
        }

        fetchQuery();
    }

    render() {
        return (
            <div>
                <Banner />
                <div className={style.content}>
                    <Main />
                    <Aside />
                </div>
            </div>
        );
    }
}

export default Home;
