import {getThemeColor, setTheme} from './themeColor';

describe('Storage ThemeColor', () => {
  it('should get default theme color value', async () => {
    const themeColor = await getThemeColor();
    expect(themeColor).toBe('jedi');
  });
  it('should change theme color', async () => {
    await setTheme('sith');
    const themeColor = await getThemeColor();
    expect(themeColor).toBe('sith');
  });
});
