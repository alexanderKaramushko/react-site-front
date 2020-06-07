import React from 'react';
import renderer from 'react-test-renderer';
import LabeledImage from '../LabeledImage.component';

describe('>>>LabeledImage --- Snapshot', () => {
    it('+++capturing Snapshot of Block', () => {
        const renderedValue = renderer.create(
            <LabeledImage
                label="Test LabeledImage"
                imagePosition="left"
            >
                <span>Test LabeledImage</span>
            </LabeledImage>,
        ).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
