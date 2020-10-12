import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from '../Button';

describe('>>>B U T T O N --- Shallow Render REACT COMPONENT', () => {
    let button: ShallowWrapper;
    const content = <span>Test label</span>;

    beforeEach(() => {
        button = shallow(<Button>{content}</Button>);
    });

    it('+++ render the DUMB component', () => {
        expect(button.length).toEqual(1);
    });

    it('+++ render passed in children', () => {
        expect(button.contains(content)).toBe(true);
    });
});
