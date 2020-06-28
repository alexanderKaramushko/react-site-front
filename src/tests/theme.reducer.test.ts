import { getType } from 'typesafe-actions';
import { settingsReducer } from '../reducers/settings.reducer';
import { ThemeType } from '../common/settings';
import { toggleThemeAction } from '../actions/settings/actions';

describe('With snapshots ', () => {
    it('+++ reducer with shapshot', () => {
        const action = {
            payload: 'dark' as ThemeType,
            type: getType(toggleThemeAction),
        };

        expect(settingsReducer(undefined, action)).toMatchSnapshot();
    });

    it('+++ reducer for TOGGLE_THEME', () => {
        const state = { themeName: 'dark' as ThemeType };
        const themeReducer = settingsReducer(state, {
            payload: 'dark' as ThemeType,
            type: getType(toggleThemeAction),
        });

        expect(themeReducer).toEqual(state);
    });
});
