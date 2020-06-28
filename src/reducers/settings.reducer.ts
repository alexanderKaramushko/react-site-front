import { createReducer } from 'typesafe-actions';
import { ThemeReducerActionTypes } from '../actions/settings/actions.types';
import { toggleThemeAction } from '../actions/settings/actions';
import { SettingsState } from '../actions/settings/types';

const initialState: SettingsState = {
    themeName: 'light',
};

export const settingsReducer = createReducer<SettingsState, ThemeReducerActionTypes>(initialState)
    .handleAction(
        toggleThemeAction,
        (state, action): SettingsState => ({
            ...state, themeName: action.payload,
        }),
    );
