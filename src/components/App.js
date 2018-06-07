import React, { Component } from 'react';

// Components
import SearchBar from "./search/SearchBar.jsx";
import VideoDetails from "./video/VideoDetails.jsx";
import VideoList from "./video/VideoList.jsx";

// Redux
import { connect } from "react-redux";
import { searchVideo } from "../actions/search_video";

// Assets
import _ from "lodash";
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);

		this.props.searchVideo("redux");
	}

	render() {
		const searchVideo = _.debounce((search) => {this.videoSearch(search)}, 300);

		return (
			
				<div className="App">
					<SearchBar videoSearch={searchVideo} />
					<div className="video-wrapper">
						<VideoDetails />
						<VideoList />
					</div>
				</div>
			
		);
	}
}


const mapStateToProps = state => ({
	videos: state.videos.videos
})

export default connect(
	mapStateToProps,
	{ searchVideo }
)(App);
