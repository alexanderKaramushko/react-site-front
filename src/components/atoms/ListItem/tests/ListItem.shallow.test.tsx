import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ListItem from '../ListItem.component';

describe('>>>ListItem --- Shallow Render REACT COMPONENT', () => {
    let listItem: ShallowWrapper;

    beforeEach(() => {
        listItem = shallow(
            <ListItem>
                <span>Test ListItem</span>
            </ListItem>,
        );
    });

    it('+++ render the DUMB component', () => {
        expect(listItem.length).toEqual(1);
    });

    it('+++ render the Label', () => {
        expect(listItem.childAt(0).type()).toEqual('span');
    });
});
