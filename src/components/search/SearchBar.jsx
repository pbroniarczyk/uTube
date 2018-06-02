import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchValue: ""
    }
    
    render() {
        return (
            <input
                className="search"
                value={this.state.searchValue}
                onChange={event => this.setState({ searchValue: event.target.value })} />
        );
    }
}
