import { createReducer } from 'typesafe-actions';

import { ThemeReducerActionTypes } from './actions.types';
import { Themes, SettingsState, FontSizes } from './types';

import { toggleThemeAction, toggleTextSizeAction } from './actions';

const initialState: SettingsState = {
  textSize: FontSizes.DEFAULT,
  themeName: Themes.LIGHT,
};

export const settingsReducer = createReducer<SettingsState, ThemeReducerActionTypes>(initialState)
  .handleAction(
    toggleThemeAction,
    (state, action): SettingsState => ({ ...state, themeName: action.payload }),
  )
  .handleAction(
    toggleTextSizeAction,
    (state, action): SettingsState => ({ ...state, textSize: action.payload }),
  );
