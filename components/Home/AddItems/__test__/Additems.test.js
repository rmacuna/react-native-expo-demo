import React from 'react';
import renderer from 'react-test-renderer';

import Additems from './../Additems';

describe('<Additems />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<Additems />).toJSON();
        expect(tree.children.length).toBe(3);
    })
})