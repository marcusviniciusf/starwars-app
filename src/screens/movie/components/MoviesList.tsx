import React from 'react';
import styled, {css} from 'styled-components/native';

import type {MovieTabScreenProps} from 'types/routes';
import {getUrlId} from 'utils';
// Cards
import CardPeople from './CardPeople';
import CardSpecies from './CardSpecies';
import CardStarship from './CardStarship';

const StyledScrollView = styled.ScrollView(
  ({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `,
);

const MoviesLists = (props: MovieTabScreenProps) => {
  const {route} = props;

  const {list} = route.params;

  const renderCardByName = React.useCallback(
    (id: string) => {
      switch (route.name.toLowerCase()) {
        case 'species':
          return <CardSpecies id={id} />;
        case 'starships':
          return <CardStarship id={id} />;
        default:
          return <CardPeople id={id} />;
      }
    },
    [route.name],
  );

  return (
    <StyledScrollView>
      {list?.map(item => {
        const id = getUrlId(item);
        return renderCardByName(id);
      })}
    </StyledScrollView>
  );
};

export default MoviesLists;
