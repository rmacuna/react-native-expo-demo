import React from 'react';
import renderer from 'react-test-renderer';

import RegisterScreen from '../RegisterScreen';

describe('<RegisterScreen />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<RegisterScreen />).toJSON();
        console.log(tree);
        expect(tree.children.length).toBe(4);
    })
})