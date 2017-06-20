import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import ColorList from './ColorList';
import Header from './Header';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {}
		};
		this.fetchMovie = this.fetchMovie.bind(this);
	}

	fetchMovie(title) {
		const formattedTitle = encodeURIComponent(title.trim());
		const movieBaseURL = 'http://www.omdbapi.com/?apikey=25d47177&t=';
		const requestURL = `${movieBaseURL}${formattedTitle}`;

		fetch(requestURL)
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({ movie: json });
			});
	}

	render() {
		return (
			<div className="app-container">
				<Header />
				<SearchBar onSearchSubmit={title => this.fetchMovie(title)} />
				<MovieCard movie={this.state.movie} />
				<ColorList movie={this.state.movie} />
			</div>
		);
	}
}
