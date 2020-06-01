import React from 'react';
import renderer from 'react-test-renderer';
import { Block } from '..';

describe('>>>B L O C K --- Snapshot', () => {
    it('+++capturing Snapshot of Block', () => {
        const renderedValue = renderer.create(<Block title="Test" />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
