import React from 'react';

// css
import './index.styl';

const Search = () =>
    (
        <section className="search-wrapper">
            <from>
                <input className="text" placeholder="请输入搜索关键字" />
                <button className="btn" >搜索</button>
            </from>
        </section>
    );

export default Search;
