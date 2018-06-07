import React, { Component } from 'react'

// Redux
import { connect } from "react-redux";
import { searchVideo, searchValue } from "../../actions/search_video";

// Assets
import "./search.css";


class SearchBar extends Component {

    onKeyEnter = event => {
        if(event.keyCode === 13) 
            this.props.searchVideo(this.props.searchPhrase);
    }

    onInputChange = searchPhrase => {
        this.props.searchValue(searchPhrase);
    }
    
    render() {
        return (
            <input
                placeholder="search videos..."
                className="search"
                value={this.props.searchPhrase}
                onKeyUp={(event) => this.onKeyEnter(event)}
                onChange={event => this.onInputChange(event.target.value)} />
        );
    }
}

const mapStateToProps = state => ({
    searchPhrase: state.videos.searchPhrase,
    videos: state.videos
});

export default connect(
    mapStateToProps,
    { searchVideo, searchValue }
)(SearchBar)
