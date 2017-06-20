import React, { Component } from 'react';

const ColorCard = props => {
	//inline styling to allow for dynamic setting of colors on the cards
	const cardColor = {
		backgroundColor: `${props.color}`
	};

	return (
		<div className="single-card" style={cardColor}>
			<div className="label">
				<p><b>HEX: </b>{props.color}</p>
				<p><b>Color: </b>{props.label}</p>
			</div>
		</div>
	);
};

export default ColorCard;
