import { actionIds, ThemeAction, BaseAction } from './common';
import { ThemeType } from './common/settings';

export const numberRequestStartAction = (): BaseAction => ({
    payload: null,
    type: actionIds.GET_NUMBER_REQUEST_START,
});

export const numberRequestCompletedAction = (
    numberGenerated: number,
): BaseAction => ({
    payload: numberGenerated,
    type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
});

export const toggleThemeAction = (themeName: ThemeType): ThemeAction => ({
    payload: themeName,
    type: actionIds.TOGGLE_THEME,
});
