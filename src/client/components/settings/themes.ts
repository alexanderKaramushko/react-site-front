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

export type ThemeType = keyof typeof Themes;
