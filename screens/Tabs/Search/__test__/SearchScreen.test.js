import React from 'react';
import renderer from 'react-test-renderer';

import SearchScreen from './../Searchscreen';

describe('<SearchScreen />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<SearchScreen />).toJSON();
        expect(tree.children.length).toBe(3);
    })
})