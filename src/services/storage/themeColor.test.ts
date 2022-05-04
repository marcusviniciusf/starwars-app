import {getThemeColor, setTheme} from './themeColor';

describe('Storage ThemeColor', () => {
  it('should get default theme color value', async () => {
    const themeColor = await getThemeColor();
    expect(themeColor).toBe('sith');
  });
  it('should change theme color', async () => {
    await setTheme('jedi');
    const themeColor = await getThemeColor();
    expect(themeColor).toBe('jedi');
  });
});
