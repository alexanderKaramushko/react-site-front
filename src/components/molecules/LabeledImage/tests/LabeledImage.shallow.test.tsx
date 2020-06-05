import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import LabeledImage, { imagePositionsType } from '../LabeledImage.component';

describe('>>>LabeledImage --- Shallow Render REACT COMPONENT', () => {
    let labeledImage: ShallowWrapper;
    const labeledImageData = {
        imagePosition: 'left' as imagePositionsType,
        label: 'Test LabeledImage',
    };

    beforeEach(() => {
        labeledImage = shallow(
            <LabeledImage
                label={labeledImageData.label}
                imagePosition={labeledImageData.imagePosition}
            >
                <span>Test LabeledImage</span>
            </LabeledImage>,
        );
    });

    it('+++ render the DUMB component', () => {
        expect(labeledImage.length).toEqual(1);
    });

    it('+++ render passed in children', () => {
        expect(labeledImage.contains(<span>Test LabeledImage</span>)).toBe(true);
    });

    it('+++ render children to the left', () => {
        expect(labeledImage.children().get(0).type).toEqual('span');
    });
});
