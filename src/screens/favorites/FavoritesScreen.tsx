import {FlatList} from 'react-native';
import CardFilm from 'components/CardFilm';
import type {FavoritesScreenProps} from 'types/routes';
import type {Film} from 'types/swapi';
import useFavorites from 'hooks/useFavorites';
import React from 'react';

const FavoritesScreen = (props: FavoritesScreenProps) => {
  const {navigation} = props;
  const {favorites} = useFavorites();

  const handleNavigateMovieDetail = React.useCallback(
    (film: Film) => {
      navigation.navigate('Movie', {film});
    },
    [navigation],
  );

  return (
    <FlatList
      testID="favorites-flatlist"
      data={favorites}
      renderItem={({item}) => (
        <CardFilm item={item} onPress={handleNavigateMovieDetail} />
      )}
    />
  );
};

export default FavoritesScreen;
