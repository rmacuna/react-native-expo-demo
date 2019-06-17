import React from 'react';
import renderer from 'react-test-renderer';

import CategorySlider from './../CategorySlider';

describe('<CategorySlider />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<CategorySlider />).toJSON();
        expect(tree.children.length).toBe(2);
    })
})