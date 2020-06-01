import React from 'react';
import { shallow } from 'enzyme';
import { Block } from '..';

describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
    let block: any;
    const blockData = {
        title: 'Test',
    };

    beforeEach(() => {
        block = shallow(<Block title={blockData.title} />);
    });

    it('+++ render the DUMB component', () => {
        expect(block.length).toEqual(1);
    });

    it('+++ contains output', () => {
        expect(block.find('h2').text()).toEqual(blockData.title);
    });
});
