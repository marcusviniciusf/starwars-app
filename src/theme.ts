import {ThemeColorType} from 'types/theme';

const fontSizes = [12, 14, 16, 18, 24];
const space = [0, 4, 8, 16, 24, 32, 40];

const sithColors = {};
const jediColors = {};

const theme = (type: ThemeColorType) => ({
  fontSizes,
  space,
  colors: type === 'jedi' ? jediColors : sithColors,
});

declare module 'styled-components' {
  export interface DefaultTheme {
    // colors: typeof colors;
    space: typeof space;
    fontSizes: typeof fontSizes;
  }
}

export {theme};
