import React from 'react';
import renderer from 'react-test-renderer';
import UnorderedList from '../UnorderedList.component';

describe('>>>UnorderedList --- Snapshot', () => {
    const unorderedListData = [
        { title: 'item1' },
        { title: 'item2' },
    ];

    it('+++capturing Snapshot of UnorderedList', () => {
        const renderedValue = renderer.create(<UnorderedList listItems={unorderedListData} />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });

    it('+++capturing Snapshot of horizontal UnorderedList', () => {
        const renderedValue = renderer.create(<UnorderedList listItems={unorderedListData} horizontal />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });

    it('+++capturing Snapshot of dotted UnorderedList', () => {
        const renderedValue = renderer.create(<UnorderedList listItems={unorderedListData} dotted />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
