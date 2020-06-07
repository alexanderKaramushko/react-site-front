import React from 'react';
import renderer from 'react-test-renderer';
import Label from '..';

describe('>>>L A B E L --- Snapshot', () => {
    it('+++capturing Snapshot of Label', () => {
        const renderedValue = renderer.create(<Label><span>Test label</span></Label>).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
