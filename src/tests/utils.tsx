import {render} from '@testing-library/react-native';
import config from 'config';
// Providers
import {ThemeColorProvider, ThemeProvider} from 'providers';
import React from 'react';
import Routes from 'routes';
import {SWRConfig} from 'swr';
// Types
import type {RootStackParamList} from 'types/routes';

const DefaultProviders = (props: React.PropsWithChildren<{}>) => {
  return (
    <ThemeColorProvider>
      <ThemeProvider>
        <SWRConfig
          value={{
            fetcher: (res, init) =>
              fetch(`${config.SWAPI_URI}${res}`, init).then(r => r.json()),
          }}>
          {props.children}
        </SWRConfig>
      </ThemeProvider>
    </ThemeColorProvider>
  );
};

const customRender = (ui: React.ReactElement) => {
  return {
    ...render(<DefaultProviders>{ui}</DefaultProviders>),
  };
};

const renderWithNavigation = (
  initialRouteName: keyof RootStackParamList = 'MoviesList',
) => {
  return {
    ...render(
      <DefaultProviders>
        <Routes initialRouteName={initialRouteName} />
      </DefaultProviders>,
    ),
  };
};

export * from '@testing-library/react-native';
export {customRender as render, renderWithNavigation};
