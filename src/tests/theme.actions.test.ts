import { getType } from 'typesafe-actions';
import { toggleThemeAction } from '../store/reducers/settings/actions';
import { Themes } from '../common/settings';

describe('>>>A C T I O N --- Test theme actions', () => {
    it('should create an action to toggle theme', () => {
        const newTheme = Themes.DARK;
        const expectedAction = {
            payload: newTheme,
            type: getType(toggleThemeAction),
        };
        expect(toggleThemeAction(newTheme)).toEqual(expectedAction);
    });
});
