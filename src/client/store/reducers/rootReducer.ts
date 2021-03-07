import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { settingsReducer } from './settings/settings';
import { usersReducer } from './users/users';

export const rootReducer = combineReducers({
  i18n: i18nReducer,
  settingsReducer,
  usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
