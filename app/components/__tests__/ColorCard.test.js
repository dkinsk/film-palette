import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColorCard from '../ColorCard';

const props = { color: '#2C3B40', label: 'DarkSlateGray' };

test('ColorCard component should render as expected', () => {
	const component = shallow(<ColorCard {...props} />);
	const tree = toJson(component);
	expect(component.contains('#2C3B40')).toBe(true);
	expect(tree).toMatchSnapshot();
});
