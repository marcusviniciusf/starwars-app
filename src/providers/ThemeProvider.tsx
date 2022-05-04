import {ThemeProvider} from 'styled-components';
import {useTheme} from 'hooks/useTheme';
import {theme} from 'theme';

const Theme = (props: React.PropsWithChildren<{}>) => {
  const {children} = props;
  const {themeColor} = useTheme();
  return <ThemeProvider theme={theme(themeColor)}>{children}</ThemeProvider>;
};

export default Theme;
