import React, { Component } from 'react';

// css
import style from './index.scss';

class Search extends Component {
    render() {
        return(
            <section className={ style.search }>
                <from>
                    <input className={ style.input } placeholder="请输入搜索关键字" />
                    <button className={ style.btn } >搜索</button>
                </from>
            </section>
        );
    }
}

export default Search;