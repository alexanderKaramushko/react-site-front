import React, { FC, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createMuiTheme, CssBaseline, PaletteType, Theme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { createRoutes, routesArr } from './routes/routes';
import { getActiveTheme, getTextSize } from './store/reducers/settings/selectors';
import { Props, StateProps, DispatchProps, OwnProps } from './App.types';
import { RootState } from './store/reducers/rootReducer';
import NotFound from './components/pages/NotFound';
import Header from './components/organisms/Header/Header.container';

const App: FC<Props> = (props) => {
    const { activeTheme, textSize } = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo<Theme>(
        () => (
            createMuiTheme({
                palette: { type: prefersDarkMode ? 'dark' : activeTheme.toLowerCase() as PaletteType },
                typography: { fontSize: textSize },
            })
        ),
        [activeTheme, textSize, prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Switch>
                {createRoutes(routesArr)}
                <Route component={NotFound} />
            </Switch>
        </ThemeProvider>
    );
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        activeTheme: getActiveTheme(state),
        textSize: getTextSize(state),
    }),
)(App);
