import { ActionType } from 'typesafe-actions';

import * as themeActions from './actions';

export type ThemeActions = typeof themeActions;
export type ThemeActionTypes = ActionType<ThemeActions>;

export type ToggleTheme = ThemeActions['toggleThemeAction'];
export type ToggleTextSize = ThemeActions['toggleTextSizeAction'];

export type ThemeReducerActionTypes = ThemeActionTypes;
