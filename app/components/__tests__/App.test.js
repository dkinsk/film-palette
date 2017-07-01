import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';
import Header from '../Header';

test('App component should render as expected', () => {
	const component = shallow(<App />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('App component should render child components', () => {
	const component = shallow(<App />);
	const tree = toJson(component);
	expect(component.contains(<Header />)).toBe(true);
	expect(tree).toMatchSnapshot();
});

// test('fetchMovie with a correct title should return the movie', () => {});
