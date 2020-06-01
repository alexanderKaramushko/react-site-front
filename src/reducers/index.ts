import { combineReducers } from 'redux';
import { numberCollectionReducer } from './number-collection.reducer';

export const rootReducer = combineReducers({
    numberCollectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
