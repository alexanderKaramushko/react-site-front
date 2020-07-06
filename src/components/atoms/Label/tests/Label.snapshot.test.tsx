import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MockStoreEnhanced } from 'redux-mock-store';
import { mockStore } from '../../../../mocks';
import Label from '../Label.container';
import { RootState } from '../../../../reducers';

const store: MockStoreEnhanced = mockStore({
    settingsReducer: {
        themeName: 'light',
    },
} as RootState);

describe('>>>L A B E L --- Snapshot', () => {
    it('+++capturing Snapshot of Label', () => {
        const renderedValue = renderer.create(
            <Provider store={store}>
                <Label><span>Test label</span></Label>
            </Provider>,
        ).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
