import React, { FC, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { CssBaseline, PaletteType, Theme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import getTheme from '../getTheme';
import { getActiveTheme, getTextSize } from '../../store/reducers/settings/selectors';
import { RootState } from '../../store/reducers/rootReducer';
import { DispatchProps, OwnProps, Props, StateProps } from './ThemeHOC.types';

const ThemeHOC: FC<Props> = (props) => {
  const { children } = props;
  const { activeTheme, textSize } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = useMemo<Theme>(
    () => (
      getTheme({
        palette: { type: prefersDarkMode ? 'dark' : activeTheme.toLowerCase() as PaletteType },
        typography: { fontSize: textSize },
      })
    ),
    [activeTheme, textSize, prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (state) => ({
    activeTheme: getActiveTheme(state),
    textSize: getTextSize(state),
  }),
)(ThemeHOC);
