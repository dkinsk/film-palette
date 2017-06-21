import React, { Component } from 'react';
import Img from 'react-image';
//react-image allows us to have default src for img tags

const MovieCard = props => {
	//default greeting for the initial render/load
	if (props.movie.Title === undefined && !props.error) {
		return (
			<div className="initial-greeting">
				<h2>Welcome to Film Palette!</h2>
				<p>Enter a film title to get its details and a color palette for its poster!</p>
			</div>
		);
	}
	//error message
	if (props.error) {
		return (
			<div className="initial-greeting">
				<h2>{props.error}</h2>
			</div>
		);
	}

	return (
		<div className="movie-container">
			<div className="poster-container">
				<Img
					className="poster"
					alt={`${props.movie.Title} Poster`}
					src={[
						`${props.movie.Poster}`,
						'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/53555d2ae4b04b5c0a1c8d6a/1398103339812/'
					]}
				/>
			</div>
			<div className="movie-content">
				<h2><b>Title: </b>{props.movie.Title}</h2>
				<p><b>Release Year: </b>{props.movie.Year}</p>
				<p><b>Plot: </b>{props.movie.Plot}</p>
				<p><b>Actors: </b>{props.movie.Actors}</p>
				<p><b>Director: </b>{props.movie.Director}</p>
				<p><b>Genre: </b>{props.movie.Genre}</p>
			</div>
		</div>
	);
};

export default MovieCard;
