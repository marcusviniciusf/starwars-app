import {ThemeColorType} from 'types/theme';

const fontSizes = [12, 14, 16, 18, 22];
const space = [0, 4, 8, 16, 24, 32, 40];

type Colors = {
  primary: string;
  secondary: string;
  background: string;
  headerBackground: string;
  cardBackground: string;
  yellow: string;
  barColor: string;
};

const defaultColors = {
  yellow: 'rgb(234,236,21)',
};

const sithColors: Colors = {
  ...defaultColors,
  primary: '#fff',
  secondary: '#c4c4c4',
  headerBackground: 'rgb(10,10,11)',
  background: '#090909',
  cardBackground: 'rgba(255,255,255,0.2)',
  barColor: '#C70000',
};
const jediColors: Colors = {
  ...defaultColors,
  primary: '#333333',
  secondary: '#666666',
  headerBackground: 'rgb(17,17,17)',
  background: '#F5F5F5',
  cardBackground: '#fff',
  barColor: '#0123A2',
};

const theme = (type: ThemeColorType) => ({
  fontSizes,
  space,
  colors: type === 'jedi' ? jediColors : sithColors,
});

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    space: typeof space;
    fontSizes: typeof fontSizes;
  }
}

export {theme};
