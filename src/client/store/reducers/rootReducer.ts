import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

import authenticationReducer from './authentication';
import { settingsReducer } from './settings/settings';
import { usersReducer } from './users/users';
import userReducer from './user';

export const rootReducer = combineReducers({
  authenticationReducer,
  i18n: i18nReducer,
  settingsReducer,
  userReducer,
  usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
