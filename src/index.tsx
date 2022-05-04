import {SWRConfig} from 'swr';
import Routes from './routes';
import config from './config';
import {ThemeColorProvider, ThemeProvider} from 'providers';

const App = () => {
  return (
    <ThemeColorProvider>
      <SWRConfig
        value={{
          fetcher: (res, init) =>
            fetch(`${config.SWAPI_URI}${res}`, init).then(r => r.json()),
        }}>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </SWRConfig>
    </ThemeColorProvider>
  );
};

export default App;
