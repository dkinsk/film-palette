import React, { Component } from 'react';
import ColorCard from './ColorCard';

export default class ColorsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: []
		};
	}

	componentWillReceiveProps(nextProps) {
		const colorsBaseURL = 'https://apicloud-colortag.p.mashape.com/tag-url.json?palette=w3c&sort=relevance&url=';
		// const mashape = '&mashape-key=x8hDPnhLoGmsh5aNnoN6g15WcAGrp1TtyOJjsnz5IOqO2cacCe';
		const mashape2 = '&mashape-key=74W40eBvfSmshhKHdQqzDjYKsvt6p1k8w8YjsnNzh5H08BQRbq';

		const requestURL = `${colorsBaseURL}${nextProps.movie.Poster}${mashape2}`;

		const component = this;

		fetch(requestURL).then(response => {
			const contentType = response.headers.get('content-type');

			if (contentType && contentType.indexOf('application/json') !== -1) {
				return response
					.json()
					.then(json => {
						let palette = json;
						component.setState({ colors: [...palette.tags] });
					})
					.catch(err => {
						console.log('request failed', err);
					});
			} else {
				console.log('empty response');
			}
		});
	}

	render() {
		const palette = this.state.colors;

		return (
			<div className="grid-container">
				{palette.length
					? palette.map(color => {
							return <ColorCard color={color.color} label={color.label} />;
						})
					: null}
			</div>
		);
	}
}
