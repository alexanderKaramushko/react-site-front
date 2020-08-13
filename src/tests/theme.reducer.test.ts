import { getType } from 'typesafe-actions';
import { settingsReducer } from '../store/reducers/settings/settings';
import { Themes } from '../common/settings';
import { toggleThemeAction } from '../store/reducers/settings/actions';

describe('With snapshots ', () => {
    it('+++ reducer with shapshot', () => {
        const action = {
            payload: Themes.DARK,
            type: getType(toggleThemeAction),
        };

        expect(settingsReducer(undefined, action)).toMatchSnapshot();
    });

    it('+++ reducer for TOGGLE_THEME', () => {
        const state = { textSize: 100, themeName: Themes.DARK };
        const themeReducer = settingsReducer(state, {
            payload: Themes.DARK,
            type: getType(toggleThemeAction),
        });

        expect(themeReducer).toEqual(state);
    });
});
