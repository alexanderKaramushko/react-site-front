import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { numberCollectionReducer } from './number-collection.reducer';
import { settingsReducer } from './settings.reducer';

export const rootReducer = combineReducers({
    i18n: i18nReducer,
    numberCollectionReducer,
    settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
