import { createAction } from 'typesafe-actions';
import { ThemeType } from '../../common/settings';

export const toggleThemeAction = createAction('TOGGLE_THEME', (themeName: ThemeType) => themeName)<ThemeType>();
