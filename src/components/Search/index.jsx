import React, { Component } from 'react';

// css
import './index.styl';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.value;

        this.state = {
            value
        };
    }

    handleSubmit() {
        const { value } = this.state;
        const { onSearch } = this.props;

        onSearch(value);
    }

    render() {
        return (
            <section className="search-wrapper">
                <from>
                    <input className="text" placeholder="请输入搜索关键字" onChange={val => this.handleInputChange(val)} />
                    <button className="btn" onClick={this.handleSubmit}>搜索</button>
                </from>
            </section>
        );
    }
}

export default Search;
