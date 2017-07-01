import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieCard from '../MovieCard';

const props = {
	movie: {
		Actors: 'Marlon Brando, Gene Hackman, Christopher Reeve, Ned Beatty',
		Director: 'Richard Donner',
		Plot: "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
		Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOWU0ZGE4YjMtNmY5Yy00M2RhLWE0ZGQtZjViMTBhZTE5MWM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
		Title: 'Superman',
		Year: '1978'
	}
};

test('MovieCard component should render as expected', () => {
	const component = shallow(<MovieCard {...props} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('MovieCard renders props as expected', () => {
	const component = shallow(<MovieCard {...props} />);
	const tree = toJson(component);
	expect(component.contains('Superman')).toBe(true);
});
