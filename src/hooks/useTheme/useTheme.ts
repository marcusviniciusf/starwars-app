import {ThemeContext} from 'providers';
import React from 'react';

const useThemeColorContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      'useThemeColorContext must be used within a ThemeColorProvider',
    );
  }
  return context;
};

export default useThemeColorContext;
