export interface SettingsState {
    themeName: ThemeTypes;
    textSize: number;
}

export enum Themes {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export enum FontSizes {
    MAX = 40,
    MIN = 8,
    STEP = 2,
    DEFAULT = 14
}

export type ThemeTypes = keyof typeof Themes;
