import React from 'react';
import { configure, shallow } from 'enzyme';
import TestComponent from './TestGistItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TestGistItem />', () => {
	const wrapper = shallow(<TestComponent />);
	const likeButton = wrapper.find('#like-button');
	const likeText = wrapper.find('#like-text').text();

	// Clicks the like button of a gist item. Switched liked state to true
	test('Favorite gist item', () => {
		expect(likeText).toContain('Not Favorited');
		likeButton.simulate('click');
		expect(likeText).toContain('Favorited');
	});

	// Clicks the like button of a gist item. Switched liked state to false
	test('Unfavorite gist item', () => {
		expect(likeText).toContain('Favorited');
		likeButton.simulate('click');
		expect(likeText).toContain('Not Favorited');
	});
});
