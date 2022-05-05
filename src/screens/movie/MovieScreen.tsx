import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import styled, {css} from 'styled-components/native';
import type {MovieScreenProps} from 'types/routes';
import type {Film} from 'types/swapi';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';
import HorizontalBar from 'components/HorizontalBar';
// Component UI
import MoviesList from './components/MoviesList';
import MovieHeaderRight from './components/MovieHeaderRight';

const TabBox = styled(Box)(
  ({theme}) => css`
    align-items: center;
    justify-content: center;
    position: relative;
    margin-horizontal: ${theme.space[2]}px;
  `,
);

const Tab = createMaterialTopTabNavigator();

const TabsList = ['Characters', 'Planets', 'Starships', 'Vehicles', 'Species'];

const MovieScreen = (props: MovieScreenProps) => {
  const {route, navigation} = props;
  const {film} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: film.title,
      headerRight: () => <MovieHeaderRight film={film} />,
    });
  }, [navigation, film]);
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarIndicator: () => false,
        tabBarItemStyle: {
          minHeight: 16,
          width: 'auto',
          paddingHorizontal: 8,
        },
        tabBarScrollEnabled: true,
        tabBarStyle: {
          paddingHorizontal: 8,
          paddingVertical: 8,
          backgroundColor: 'transparent',
        },
      }}>
      {TabsList.map(tab => {
        return (
          <Tab.Screen
            key={tab}
            name={tab}
            initialParams={{
              list: film[tab.toLowerCase() as keyof Film],
            }}
            options={{
              tabBarLabel: ({focused}) => (
                <TabBox>
                  <Text mx={2} fontSize={2}>
                    {tab}
                  </Text>
                  <HorizontalBar enabled={focused} />
                </TabBox>
              ),
            }}
            component={MoviesList}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MovieScreen;
