import {Film} from './swapi';

type ThemeColorType = 'jedi' | 'sith';

type ThemeColorContext = {
  themeColor: ThemeColorType;
  setThemeColor: (color: ThemeColorType) => void;
};

type FavoritesContext = {
  favorites: Film[];
  toggleFavorite: (film: Film) => void;
};

export type {ThemeColorType, ThemeColorContext, FavoritesContext};
