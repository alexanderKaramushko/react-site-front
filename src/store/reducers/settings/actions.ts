import { createAction } from 'typesafe-actions';
import { Themes } from '../../../common/settings';

export const toggleThemeAction = createAction('TOGGLE_THEME', (themeName: Themes) => themeName)<Themes>();
