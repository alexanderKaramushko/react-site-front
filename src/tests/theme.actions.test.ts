import { toggleThemeAction } from '../actions';
import { actionIds } from '../common';

describe('>>>A C T I O N --- Test theme actions', () => {
    it('should create an action to toggle theme', () => {
        const newTheme = 'dark';
        const expectedAction = {
            payload: newTheme,
            type: actionIds.TOGGLE_THEME,
        };
        expect(toggleThemeAction(newTheme)).toEqual(expectedAction);
    });
});
