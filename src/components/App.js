import React, { Component } from 'react';

// Components
import SearchBar from "./search/SearchBar.jsx";
import VideoDetails from "./video/VideoDetails.jsx";
import VideoList from "./video/VideoList.jsx";

// Redux
import { connect } from "react-redux";
import { searchVideo } from "../actions/search_video";

// Assets
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);

		this.props.searchVideo("redux");
	}

	render() {
		return (
			<div className="App">
				<SearchBar />
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
