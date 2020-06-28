import { getType } from 'typesafe-actions';
import { toggleThemeAction } from '../actions/settings/actions';

describe('>>>A C T I O N --- Test theme actions', () => {
    it('should create an action to toggle theme', () => {
        const newTheme = 'dark';
        const expectedAction = {
            payload: newTheme,
            type: getType(toggleThemeAction),
        };
        expect(toggleThemeAction(newTheme)).toEqual(expectedAction);
    });
});
