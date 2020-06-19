import { settingsReducer } from '../reducers/settings.reducer';
import { actionIds } from '../common';
import { ThemeType } from '../common/settings';

describe('With snapshots ', () => {
    it('+++ reducer with shapshot', () => {
        const action = {
            payload: 'dark' as ThemeType,
            type: actionIds.TOGGLE_THEME,
        };

        expect(settingsReducer(undefined, action)).toMatchSnapshot();
    });

    it('+++ reducer for TOGGLE_THEME', () => {
        let state = { themeName: 'dark' as ThemeType };
        state = settingsReducer(state, {
            payload: 'dark' as ThemeType,
            type: actionIds.TOGGLE_THEME,
        });
        expect(state).toEqual('dark');
    });
});
