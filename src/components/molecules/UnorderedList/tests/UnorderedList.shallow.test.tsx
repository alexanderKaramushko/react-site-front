import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import UnorderedList from '../UnorderedList.component';

describe('>>>UnorderedList --- Shallow Render REACT COMPONENTS', () => {
    let unorderedList: ShallowWrapper;
    const unorderedListData = [
        { link: '#', title: 'item1' },
        { link: '#', title: 'item2' },
    ];

    beforeEach(() => {
        unorderedList = shallow(<UnorderedList listItems={unorderedListData} />);
    });

    it('+++ render the DUMB component', () => {
        expect(unorderedList.length).toEqual(1);
    });

    it('+++ length of list is equal to the passed list items data', () => {
        expect(unorderedList.children().length).toEqual(unorderedListData.length);
    });
});
