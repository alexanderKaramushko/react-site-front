import { combineReducers } from 'redux';
import { numberCollectionReducer } from './number-collection.reducer';
import { settingsReducer } from './settings.reducer';

export const rootReducer = combineReducers({
    numberCollectionReducer,
    settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
