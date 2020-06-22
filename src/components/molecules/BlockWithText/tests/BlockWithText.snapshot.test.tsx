import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MockStoreEnhanced } from 'redux-mock-store';
import { mockStore } from '../../../../mocks';
import BlockWithText from '../BlockWithText.component';
import { RootState } from '../../../../reducers';

const store: MockStoreEnhanced = mockStore({
    settingsReducer: {
        themeName: 'light',
    },
} as RootState);

describe('>>>BlockWithText --- Snapshot', () => {
    it('+++capturing Snapshot of Block', () => {
        const renderedValue = renderer.create(
            <Provider store={store}>
                <BlockWithText
                    label="Test LabeledImage"
                >
                    <span>Test LabeledImage</span>
                </BlockWithText>
            </Provider>,
        ).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
