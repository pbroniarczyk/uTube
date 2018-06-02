import React, { Component } from 'react';

// Components
import SearchBar from "./search/SearchBar.jsx";
import VideoDetails from "./video/VideoDetails.jsx";
import VideoList from "./video/VideoList.jsx";

// Assets
import YTSearch from "youtube-api-search";
import './App.css';
const API_KEY = "AIzaSyBIiSrI5ugHvLgX4bKBN6Efy6eusTmgj00";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		}
		
		YTSearch(
			{ key: API_KEY, term: "dragon ball z" },
			videos => this.setState({ videos })
		)
	}

	render() {
		return (
			<div className="App">
				<SearchBar />
				<div className="video-wrapper">
					<VideoDetails video={this.state.videos[0]}/>
					<VideoList videos={this.state.videos}/>
				</div>
			</div>
		);
	}
}

export default App;
