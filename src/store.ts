import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    setLocale,
    loadTranslations,
    syncTranslationWithStore,
} from 'react-redux-i18n';
import { translations } from './localization';
import { rootReducer } from './reducers';
import rootSaga from './api/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

syncTranslationWithStore(store);
loadTranslations(translations)(store.dispatch);
setLocale('en')(store.dispatch);

sagaMiddleware.run(rootSaga);
