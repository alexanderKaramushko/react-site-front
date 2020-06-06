import { actionIds, ThemeAction } from '../common';

export const themeReducer = (
    state = 'light',
    action: ThemeAction,
): string => {
    switch (action.type) {
    case actionIds.TOGGLE_THEME:
        return action.payload;
    default:
        return state;
    }
};
