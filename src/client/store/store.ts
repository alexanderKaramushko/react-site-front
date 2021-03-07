import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocale, loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';
import { translations } from '../localization';
import rootSaga from '../api/sagas/rootSaga';
import { rootReducer } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

syncTranslationWithStore(store);
loadTranslations(translations)(store.dispatch);
setLocale('en')(store.dispatch);

sagaMiddleware.run(rootSaga);

export default store;
