import React, { Component } from 'react';

// Components
import SearchBar from "./search/SearchBar.jsx";
import VideoDetails from "./video/VideoDetails.jsx";
import VideoList from "./video/VideoList.jsx";

// Assets
import YTSearch from "youtube-api-search";
import _ from "lodash";
import './App.css';
const API_KEY = "AIzaSyBIiSrI5ugHvLgX4bKBN6Efy6eusTmgj00";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedVideo: "",
			videos: []
		}

		this.videoSearch("javascript");

		this.onVidoeSelect = this.onVidoeSelect.bind(this);
		this.videoSearch = this.videoSearch.bind(this);
	}

	videoSearch = (search) => {
		YTSearch(
			{ key: API_KEY, term: search },
			videos => this.setState({ 
				videos,
				selectedVideo: videos[0] 
			})
		)
	}

	onVidoeSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {
		const searchVideo = _.debounce((search) => {this.videoSearch(search)}, 300);

		return (
			<div className="App">
				<SearchBar videoSearch={searchVideo} />
				<div className="video-wrapper">
					<VideoDetails video={this.state.selectedVideo}/>
					<VideoList
						onVidoeSelect={this.onVidoeSelect}
						videos={this.state.videos}/>
				</div>
			</div>
		);
	}
}

export default App;
