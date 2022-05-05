import {Switch, StyleSheet, Platform} from 'react-native';
import {useTheme} from 'hooks/useTheme';
import {theme} from 'theme';
import React from 'react';

const styles = StyleSheet.create({
  switchiOS: {
    marginRight: -8,
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
});

const HeaderSwitch = () => {
  const {themeColor, setThemeColor} = useTheme();
  const {colors} = theme(themeColor);

  const toggle = React.useCallback(() => {
    setThemeColor(themeColor === 'jedi' ? 'sith' : 'jedi');
  }, [setThemeColor, themeColor]);

  return (
    <Switch
      trackColor={{
        true: '#222222',
        false: '#c4c4c4',
      }}
      thumbColor={colors.barColor}
      style={Platform.OS === 'ios' ? styles.switchiOS : {}}
      onValueChange={toggle}
      value={themeColor === 'sith'}
    />
  );
};

export default HeaderSwitch;
