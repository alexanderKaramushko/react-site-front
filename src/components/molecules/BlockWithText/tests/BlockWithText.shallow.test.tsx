import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import BlockWithText from '../BlockWithText.component';

describe('>>>BlockWithText --- Shallow Render REACT COMPONENT', () => {
    let blockWithText: ShallowWrapper;
    const data = {
        label: 'Test LabeledImage',
    };

    beforeEach(() => {
        blockWithText = shallow(
            <BlockWithText
                label={data.label}
            >
                <span>Test BlockWithText</span>
            </BlockWithText>,
        );
    });

    it('+++ render the DUMB component', () => {
        expect(blockWithText.length).toEqual(1);
    });

    it('+++ render the Label', () => {
        expect(blockWithText.childAt(0).length).toEqual(1);
    });

    it('+++ render passed in children', () => {
        expect(blockWithText.contains(<span>Test BlockWithText</span>)).toBe(true);
    });
});
