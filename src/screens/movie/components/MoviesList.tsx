import React from 'react';
import styled, {css} from 'styled-components/native';
import Loading from 'components/Loading';
import {useGetFilmDetailByName} from 'hooks/useApi';
import type {MovieTabScreenProps} from 'types/routes';
// Cards
import CardPeople from './CardPeople';
import CardSpecies from './CardSpecies';
import CardStarship from './CardStarship';
import CardVehicles from './CardVehicles';
import CardPlanet from './CardPlanet';

const StyledScrollView = styled.FlatList(
  ({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `,
);

const MoviesLists = (props: MovieTabScreenProps) => {
  const {route} = props;
  const {list} = route.params;

  const routeName = React.useMemo(() => {
    const lowered = route.name.toLowerCase();
    if (lowered === 'characters') {
      return 'people';
    }
    return lowered;
  }, [route.name]);

  const {data, isLoading} = useGetFilmDetailByName(list, routeName);

  const renderCardByName = React.useCallback(
    (item: any) => {
      switch (routeName) {
        case 'species':
          return <CardSpecies item={item} />;
        case 'starships':
          return <CardStarship item={item} />;
        case 'planets':
          return <CardPlanet item={item} />;
        case 'vehicles':
          return <CardVehicles item={item} />;
        default:
          return <CardPeople item={item} />;
      }
    },
    [routeName],
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledScrollView
      data={data}
      renderItem={({item}) => renderCardByName(item)}
    />
  );
};

export default MoviesLists;
