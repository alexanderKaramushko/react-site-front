import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core';

function getTheme(options?: ThemeOptions): Theme {
    return createMuiTheme({
        ...options,
    });
}

export default getTheme;
