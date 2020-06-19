import { createSelector } from 'reselect';
import { SettingsState } from '../reducers/settings.reducer';
import { RootState } from '../reducers';

const getSettings = (state: RootState): SettingsState => state.settingsReducer;

export const getActiveTheme = createSelector(
    getSettings,
    (settings: SettingsState) => settings.themeName,
);
