import React from 'react';
import { AppBar, Grid, IconButton, MenuItem, Slider, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, LanguageTwoTone as LanguageIcon, Brush as BrushIcon, FormatSize as FormatIcon } from '@material-ui/icons';
import styles from './style.scss';
import { Props } from './Header.types';
import { SupportedLocales } from '../../../localization';
import OptionsMenu from '../../molecules/OptionsMenu/OptionsMenu';
import { FontSizes, Themes, ThemeTypes } from '../../../store/reducers/settings/types';

const Header: React.FunctionComponent<Props> = (props) => {
    const {
        activeTheme,
        changeSize,
        selectedLocale,
        setLocaleWithFallback,
        setTheme,
    } = props;

    function handleChooseLocale(locale: string): void {
        setLocaleWithFallback(locale);
    }

    function handleChooseTheme(theme: ThemeTypes): void {
        setTheme(theme);
    }

    function handleChooseTextSize(event: React.ChangeEvent<{}>, size: number): void {
        changeSize(size);
    }

    function getFontSizeLabel(size: number): string {
        return `${size}px`;
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid xs={10} alignItems="center" item container>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">react-site prototype</Typography>
                    </Grid>
                    <Grid xs={2} justify="flex-end" item container>
                        <OptionsMenu
                            ariaLabel="Locales"
                            icon={<LanguageIcon />}
                            onChoose={handleChooseLocale}
                            options={Object.keys(SupportedLocales)}
                            selectedOption={selectedLocale}
                        />
                        <OptionsMenu
                            ariaLabel="Themes"
                            onChoose={handleChooseTheme}
                            icon={<BrushIcon />}
                            options={Object.keys(Themes)}
                            selectedOption={activeTheme}
                        />
                        <OptionsMenu
                            ariaLabel="Sizes"
                            icon={<FormatIcon />}
                        >
                            <MenuItem classes={{
                                root: styles.sliderItem,
                            }}
                            >
                                <Slider
                                    aria-label="slider"
                                    classes={{
                                        root: styles.slider,
                                        valueLabel: styles.valueLabel,
                                    }}
                                    defaultValue={FontSizes.DEFAULT}
                                    getAriaValueText={getFontSizeLabel}
                                    max={FontSizes.MAX}
                                    min={FontSizes.MIN}
                                    onChange={handleChooseTextSize}
                                    step={FontSizes.STEP}
                                    valueLabelDisplay="on"
                                    marks
                                />
                            </MenuItem>
                        </OptionsMenu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

Header.displayName = 'Header';

export default Header;
