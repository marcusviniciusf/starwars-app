import {SWRConfig} from 'swr';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';

const fontSizes = [12, 14, 16, 18, 24];
const space = [0, 4, 8, 16, 24, 32, 40];

const theme = {
  fontSizes,
  space,
};

const App = () => {
  return (
    <SWRConfig>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
