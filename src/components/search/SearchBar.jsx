import React, { Component } from 'react'

// Assets
import "./search.css";


export default class SearchBar extends Component {
    state = {
        searchValue: ""
    }
    
    render() {
        return (
            <input
                placeholder="search videos..."
                className="search"
                value={this.state.searchValue}
                onChange={event => this.setState({ searchValue: event.target.value })} />
        );
    }
}
