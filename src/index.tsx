import {SWRConfig} from 'swr';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import config from './config';

const fontSizes = [12, 14, 16, 18, 24];
const space = [0, 4, 8, 16, 24, 32, 40];

const theme = {
  fontSizes,
  space,
};

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (res, init) =>
          fetch(`${config.SWAPI_URI}${res}`, init).then(r => r.json()),
      }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
