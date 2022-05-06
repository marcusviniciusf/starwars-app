import {FlatList} from 'react-native';
import React from 'react';
import CardFilm from 'components/CardFilm';
import Box from 'components/Box';
import Text from 'components/Typography';
import type {FavoritesScreenProps} from 'types/routes';
import type {Film} from 'types/swapi';
import useFavorites from 'hooks/useFavorites';

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
      ListEmptyComponent={
        <Box py={5} justifyContent="center" alignItems={'center'}>
          <Text fontSize={3}>No Favorites</Text>
        </Box>
      }
      testID="favorites-flatlist"
      data={favorites}
      renderItem={({item}) => (
        <CardFilm item={item} onPress={handleNavigateMovieDetail} />
      )}
    />
  );
};

export default FavoritesScreen;
