import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar';
import App from '../App';

test('SearchBar component should render as expected', () => {
	const component = shallow(<SearchBar />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('onInputChange updates the title when typed into the input', () => {
	const component = shallow(<SearchBar />);
	component.find('input').simulate('change', { target: { value: 'superman' } });
	expect(component.state().title).toEqual('superman');
});

test('component should receive props', () => {
	const formSubmit = jest.fn();
	const component = mount(<SearchBar formSubmit={formSubmit} />);
	expect(component.props().formSubmit).toBeDefined();
});


