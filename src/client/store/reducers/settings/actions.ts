import { createAction } from 'typesafe-actions';

import { ThemeTypes } from './types';

export const toggleThemeAction = createAction('TOGGLE_THEME', (themeName: ThemeTypes) => themeName)<ThemeTypes>();
export const toggleTextSizeAction = createAction('TOGGLE_TEXT_SIZE', (size: number) => size)<number>();
