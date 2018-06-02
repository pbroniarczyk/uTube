import React, { Component } from 'react';

// Components
import SearchBar from "./search/SearchBar.jsx";

// Assets
import './App.css';

const API_KEY = "AIzaSyBIiSrI5ugHvLgX4bKBN6Efy6eusTmgj00";

class App extends Component {
	render() {
		return (
			<div className="App">
				<SearchBar />
			</div>
		);
	}
}

export default App;
