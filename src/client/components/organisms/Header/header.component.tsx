import React, { ReactNode, useState } from 'react';
import {
    AppBar, Grid, IconButton, Menu, MenuItem, Toolbar, Typography,
} from '@material-ui/core';
import { Menu as MenuIcon, LanguageTwoTone as LanguageIcon, Brush as BrushIcon } from '@material-ui/icons';
import { Props } from './Header.types';
import { SupportedLocales } from '../../../localization';

const Header: React.FunctionComponent<Props> = (props) => {
    const { selectedLocale, setLocaleWithFallback } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isLanguageMenuOpen = Boolean(anchorEl);

    function openLanguageMenu(event: React.MouseEvent<HTMLElement>): void {
        setAnchorEl(event.currentTarget);
    }

    function closeLanguageMenu(): void {
        setAnchorEl(null);
    }

    function chooseLocale(locale: string): () => void {
        return (): void => {
            closeLanguageMenu();
            setLocaleWithFallback(locale);
        };
    }

    function renderLocales(locales: typeof SupportedLocales): ReactNode[] {
        return Object.keys(locales).map((locale: string): ReactNode => (
            <MenuItem
                key={locale}
                onClick={chooseLocale(locales[locale as keyof typeof locales] as string)}
                selected={locale === selectedLocale}
            >
                {locale}
            </MenuItem>
        ));
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid xs={10} alignItems="center" item container>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">react-site prototype</Typography>
                    </Grid>
                    <Grid xs={2} justify="flex-end" item container>
                        <IconButton
                            onClick={openLanguageMenu}
                            aria-label="language"
                            color="inherit"
                        >
                            <LanguageIcon />
                        </IconButton>
                        <IconButton
                            aria-label="theme"
                            color="inherit"
                        >
                            <BrushIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            onClose={closeLanguageMenu}
                            open={isLanguageMenuOpen}
                            keepMounted
                        >
                            {renderLocales(SupportedLocales)}
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

Header.displayName = 'Header';

export default Header;
