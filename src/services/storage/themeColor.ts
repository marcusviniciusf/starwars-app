import {getItem, setItem} from './storage';
import type {ThemeColorType} from 'types/theme';

const getThemeColor = async (): Promise<ThemeColorType> => {
  const themeColor = await getItem('THEME');
  return themeColor || 'jedi';
};
const setTheme = async (color: ThemeColorType): Promise<ThemeColorType> => {
  await setItem(color, 'THEME');
  return color;
};

export {getThemeColor, setTheme};
export default {getThemeColor, setTheme};
