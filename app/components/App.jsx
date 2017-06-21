import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import ColorList from './ColorList';
import Header from './Header';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {},
			error: ''
		};
		this.fetchMovie = this.fetchMovie.bind(this);
	}

	fetchMovie(title) {
		const formattedTitle = encodeURIComponent(title.trim());
		const movieBaseURL = 'http://www.omdbapi.com/?apikey=25d47177&t=';
		const requestURL = `${movieBaseURL}${formattedTitle}`;

		//added a check for incorrect searches
		fetch(requestURL).then(response => response.json()).then(json => {
			json.Error ? this.setState({ movie: {}, error: json.Error }) : this.setState({ movie: json, error: '' });
		});
	}

	render() {
		const { movie, error } = this.state;
		return (
			<div className="app-container">
				<Header />
				<SearchBar onSearchSubmit={title => this.fetchMovie(title)} />
				<MovieCard error={this.state.error} movie={this.state.movie} />
				<ColorList error={this.state.error} movie={this.state.movie} />
			</div>
		);
	}
}
