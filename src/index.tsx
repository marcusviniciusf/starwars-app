import {SWRConfig} from 'swr';
import Routes from './routes';
import {fetcher} from 'services/fetcher';
import {ThemeColorProvider, ThemeProvider, FavoritesProvider} from 'providers';

const App = () => {
  return (
    <ThemeColorProvider>
      <SWRConfig
        value={{
          fetcher,
        }}>
        <ThemeProvider>
          <FavoritesProvider>
            <Routes />
          </FavoritesProvider>
        </ThemeProvider>
      </SWRConfig>
    </ThemeColorProvider>
  );
};

export default App;
