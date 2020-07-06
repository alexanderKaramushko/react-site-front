import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MockStoreEnhanced } from 'redux-mock-store';
import { mockStore } from '../../../../mocks';
import ListItem from '../ListItem.container';

const store: MockStoreEnhanced = mockStore({
    settingsReducer: {
        themeName: 'light',
    },
});

describe('>>>ListItem --- Snapshot', () => {
    it('+++capturing Snapshot of ListItem', () => {
        const renderedValue = renderer.create(
            <Provider store={store}>
                <ListItem>
                    <span>Test ListItem</span>
                </ListItem>
            </Provider>,
        ).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
