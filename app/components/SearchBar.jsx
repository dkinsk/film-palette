import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ title: event.target.value });
	}
	//kick off the OMDB api request
	onFormSubmit(event) {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.title);
		this.setState({ title: '' });
	}

	render() {
		return (
			<div className="search-container">
				<form onSubmit={this.onFormSubmit} className="search">
					<input
						placeholder="Enter a movie"
						className="search-term"
						value={this.state.title}
						onChange={this.onInputChange}
					/>
					<button type="submit" className="search-button"><i className="fa fa-search" /></button>
				</form>
			</div>
		);
	}
}
