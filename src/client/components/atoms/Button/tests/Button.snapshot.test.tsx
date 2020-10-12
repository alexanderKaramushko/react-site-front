import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MockStoreEnhanced } from 'redux-mock-store';
import { mockStore } from '../../../../mocks';
import { SettingsState } from '../../../../store/reducers/settings/types';
import { Themes } from '../../../../common/settings';
import Button from '../Button.container';

interface MockStore {
    settingsReducer: {
        themeName: SettingsState['themeName'];
    };
}

const store: MockStoreEnhanced = mockStore<MockStore>({
    settingsReducer: {
        themeName: Themes.LIGHT,
    },
});

describe('>>>B U T T O N --- Snapshot', () => {
    it('+++capturing Snapshot of Button', () => {
        const renderedValue = renderer.create(
            <Provider store={store}>
                <Button>
                    <span>Test Button</span>
                </Button>
            </Provider>,
        ).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
