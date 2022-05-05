import React from 'react';
import {render} from '@testing-library/react-native';
import {SWRConfig} from 'swr';
import Routes from 'routes';
// Services
import {fetcher} from 'services/fetcher';
// Providers
import {ThemeColorProvider, ThemeProvider} from 'providers';
// Types
import type {RootStackParamList} from 'types/routes';

const DefaultProviders = (props: React.PropsWithChildren<{}>) => {
  return (
    <ThemeColorProvider>
      <ThemeProvider>
        <SWRConfig
          value={{
            fetcher,
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
