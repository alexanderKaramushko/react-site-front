import React, { FC, ReactNode, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Props } from './OptionsMenu.types';

const OptionsMenu: FC<Props> = (props) => {
    const { ariaLabel, children, icon, onChoose, options, selectedOption } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isMenuOpen = Boolean(anchorEl);

    function openMenu(event: React.MouseEvent<HTMLElement>): void {
        setAnchorEl(event.currentTarget);
    }

    function closeMenu(): void {
        setAnchorEl(null);
    }

    function chooseOption(option: string): () => void {
        return (): void => {
            closeMenu();
            onChoose(option);
        };
    }

    function renderOptions(): ReactNode[] {
        return options.map((option: string): ReactNode => (
            <MenuItem
                key={option}
                onClick={chooseOption(option)}
                selected={option === selectedOption}
            >
                {option}
            </MenuItem>
        ));
    }

    return (
        <>
            <IconButton
                onClick={openMenu}
                aria-label={ariaLabel}
                color="inherit"
            >
                {icon}
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                onClose={closeMenu}
                open={isMenuOpen}
                keepMounted
            >
                {options && selectedOption ? renderOptions() : children}
            </Menu>
        </>
    );
};

OptionsMenu.displayName = 'OptionsMenu';

export default OptionsMenu;
