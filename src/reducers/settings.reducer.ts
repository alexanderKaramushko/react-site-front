import { actionIds, ThemeAction } from '../common';
import { ThemeType } from '../common/settings';

export interface SettingsState {
    themeName: ThemeType;
}

const initialState: SettingsState = {
    themeName: 'light',
};

export const settingsReducer = (
    state = initialState,
    action: ThemeAction,
): SettingsState => {
    switch (action.type) {
    case actionIds.TOGGLE_THEME:
        return {
            ...state,
            themeName: action.payload,
        };
    default:
        return state;
    }
};
