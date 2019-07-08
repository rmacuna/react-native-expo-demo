import React from 'react';
import renderer from 'react-test-renderer';

import CategoryScreen from '../CateScreen';

describe('<CategoryScreen />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<CategoryScreen />).toJSON();
        expect(tree.children.length).toBe(1);
    })
})