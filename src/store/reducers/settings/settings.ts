import { createReducer } from 'typesafe-actions';
import { ThemeReducerActionTypes } from './actions.types';
import { toggleThemeAction } from './actions';
import { SettingsState } from './types';
import { Themes } from '../../../common/settings';

const initialState: SettingsState = {
    themeName: Themes.LIGHT,
};

export const settingsReducer = createReducer<SettingsState, ThemeReducerActionTypes>(initialState)
    .handleAction(
        toggleThemeAction,
        (state, action): SettingsState => ({
            ...state, themeName: action.payload,
        }),
    );
