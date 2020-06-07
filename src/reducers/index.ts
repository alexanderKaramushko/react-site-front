import { combineReducers } from 'redux';
import { numberCollectionReducer } from './number-collection.reducer';
import { themeReducer } from './theme.reducer';

export const rootReducer = combineReducers({
    numberCollectionReducer,
    themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
