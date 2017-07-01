import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColorList from '../ColorList';

test('ColorList component should render as expected', () => {
	const component = shallow(<ColorList />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
