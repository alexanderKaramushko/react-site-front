import { createSelector } from 'reselect';
import { RootState } from '../reducers';
import { SettingsState } from '../actions/settings/types';

const getSettings = (state: RootState): SettingsState => state.settingsReducer;
const getLocale = (state: RootState): string => state.i18n.locale;

export const getActiveTheme = createSelector(
    getSettings,
    (settings: SettingsState) => settings.themeName,
);

export const getSelectedLocale = createSelector(
    getLocale,
    (locale: string) => locale,
);
