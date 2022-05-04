import React from 'react';
import type {ThemeColorType, ThemeColorContext} from 'types/theme';
import {ThemeColor as StorageThemeColor} from 'services/storage';

const ThemeContext = React.createContext<ThemeColorContext | undefined>(
  undefined,
);

type ThemeColorProviderProps = React.PropsWithChildren<{}>;

const ThemeColorProvider = (props: ThemeColorProviderProps) => {
  const {children} = props;
  const [themeColor, setThemeColor] = React.useState<ThemeColorType>('sith');

  React.useEffect(() => {
    const getStoredColor = async () => {
      const storedColor = await StorageThemeColor.getThemeColor();
      setThemeColor(storedColor);
    };
    getStoredColor();
  }, []);

  const handleSetColor = React.useCallback(
    async (color: ThemeColorType) => {
      setThemeColor(color);
      await StorageThemeColor.setTheme(color);
    },
    [setThemeColor],
  );

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        setThemeColor: handleSetColor,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext};
export default ThemeColorProvider;
