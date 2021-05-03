import { setLocale } from 'react-redux-i18n';
import { Dispatch } from 'redux';

import { SupportedLocales, fallbackLocale } from './config';

export function setLocaleWithFallback(dispatch: Dispatch) {
  return (desiredLocale: string): void => {
    const finalLocale = Object.keys(SupportedLocales).includes(desiredLocale)
      ? desiredLocale
      : fallbackLocale;

    setLocale(finalLocale)(dispatch);
  };
}
