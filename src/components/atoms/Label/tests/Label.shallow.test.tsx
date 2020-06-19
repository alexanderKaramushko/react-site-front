import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Label from '../Label.component';

describe('>>>L A B E L --- Shallow Render REACT COMPONENT', () => {
    let label: ShallowWrapper;

    beforeEach(() => {
        label = shallow(<Label><span>Test label</span></Label>);
    });

    it('+++ render the DUMB component', () => {
        expect(label.length).toEqual(1);
    });

    it('+++ render passed in children', () => {
        expect(label.contains(<span>Test label</span>)).toBe(true);
    });
});
