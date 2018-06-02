import React, { Component } from 'react'

// Assets
import "./search.css";


export default class SearchBar extends Component {
    state = {
        searchValue: ""
    }

    onKeyEnter = event => {
        if(event.keyCode === 13) 
            this.props.videoSearch(this.state.searchValue);
    }
    
    render() {
        return (
            <input
                placeholder="search videos..."
                className="search"
                value={this.state.searchValue}
                onKeyUp={(event) => this.onKeyEnter(event)}
                onChange={event => this.setState({ searchValue: event.target.value })} />
        );
    }
}
