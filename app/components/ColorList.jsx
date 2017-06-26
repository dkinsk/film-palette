import React, { Component } from 'react';
import ColorCard from './ColorCard';

export default class ColorsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [],
			errors: null
		};
	}

	//handle initial render
	componentDidMount() {
		this.fetchColors(this.props.movie.Poster);
	}

	//handle subsequent renders and error handling, resetting the colors array and error to prevent previous state from being rendered
	componentWillReceiveProps(nextProps) {
		this.setState({ colors: [], errors: null });
		this.fetchColors(nextProps.movie.Poster);
	}

	fetchColors(imgUrl) {
		const colorsBaseURL = 'https://apicloud-colortag.p.mashape.com/tag-url.json?palette=w3c&sort=relevance&url=';

		const mashape2 = '&mashape-key=74W40eBvfSmshhKHdQqzDjYKsvt6p1k8w8YjsnNzh5H08BQRbq';
		const requestURL = `${colorsBaseURL}${imgUrl}${mashape2}`;

		if (imgUrl) {
			return fetch(requestURL)
				.then(response => response.json())
				.then(json => {
					this.setState({ colors: [...json.tags] });
				})
				.catch(err => {
					console.log('request failed', err);
					this.setState({ errors: 'Sorry cannot process this image' });
				});
		}
	}

	render() {
		const palette = this.state.colors;
		return (
			<div className="colorlist-container">
				<div className="error-message"><h3>{this.state.errors}</h3></div>
				<div className="palette-container">
					{palette.length
						? palette.map(color => {
								return <ColorCard color={color.color} label={color.label} />;
							})
						: null}
				</div>
			</div>
		);
	}
}
