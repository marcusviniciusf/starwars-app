import {Switch} from 'react-native';
import {useTheme} from 'hooks/useTheme';
import {theme} from 'theme';
import React from 'react';

const HeaderSwitch = () => {
  const {themeColor, setThemeColor} = useTheme();
  const {colors} = theme(themeColor);
  const toggle = React.useCallback(() => {
    setThemeColor(themeColor === 'jedi' ? 'sith' : 'jedi');
  }, [setThemeColor, themeColor]);
  return (
    <Switch
      thumbColor={'rgb(10,10,11)'}
      style={{marginRight: -8, transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
      ios_backgroundColor={colors.barColor}
      onValueChange={toggle}
      value={themeColor === 'sith'}
    />
  );
};

export default HeaderSwitch;
