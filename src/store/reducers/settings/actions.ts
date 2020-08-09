import { createAction } from 'typesafe-actions';
import { Themes } from '../../../common/settings';

export const toggleThemeAction = createAction('TOGGLE_THEME', (themeName: Themes) => themeName)<Themes>();
export const toggleTextSizeAction = createAction('TOGGLE_TEXT_SIZE', (size: number) => size)<number>();
