type ThemeColorType = 'jedi' | 'sith';

type ThemeColorContext = {
  themeColor: ThemeColorType;
  setThemeColor: (color: ThemeColorType) => void;
};

export type {ThemeColorType, ThemeColorContext};
