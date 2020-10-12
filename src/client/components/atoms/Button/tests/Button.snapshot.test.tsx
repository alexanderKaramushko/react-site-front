import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('>>>B U T T O N --- Snapshot', () => {
    it('+++capturing Snapshot of Button', () => {
        const renderedValue = renderer.create(
            <Button>
                <span>Test Button</span>
            </Button>,
        ).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
