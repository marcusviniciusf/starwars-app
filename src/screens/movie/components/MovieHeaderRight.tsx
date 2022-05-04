import React from 'react';
import styled from 'styled-components/native';
import useFavorites from 'hooks/useFavorites';
import {Icons} from 'assets';
import type {Film} from 'types/swapi';

const FavoriteTouch = styled.TouchableOpacity`
  margin-left: 8px;
  padding: 4px;
`;

type MovieHeaderRightProps = {
  film: Film;
};

const MovieHeaderRight = (props: MovieHeaderRightProps) => {
  const {film} = props;
  const {favorites, toggleFavorite} = useFavorites();

  const isFavorite = React.useMemo(() => {
    return !!favorites.find(fav => film.episode_id === fav.episode_id);
  }, [film, favorites]);

  return (
    <FavoriteTouch onPress={() => toggleFavorite(film)}>
      {isFavorite ? <Icons.IconFavoriteActive /> : <Icons.IconFavorite />}
    </FavoriteTouch>
  );
};

export default MovieHeaderRight;
