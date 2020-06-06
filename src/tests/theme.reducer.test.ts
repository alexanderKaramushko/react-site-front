import { themeReducer } from '../reducers/theme.reducer';
import { actionIds } from '../common';
import { ThemeType } from '../components/organisms/Header/header.component';

describe('With snapshots ', () => {
    it('+++ reducer with shapshot', () => {
        const action = {
            payload: 'dark' as ThemeType,
            type: actionIds.TOGGLE_THEME,
        };

        expect(themeReducer(undefined, action)).toMatchSnapshot();
    });

    it('+++ reducer for TOGGLE_THEME', () => {
        let state = 'light';
        state = themeReducer(state, {
            payload: 'dark' as ThemeType,
            type: actionIds.TOGGLE_THEME,
        });
        expect(state).toEqual('dark');
    });
});
