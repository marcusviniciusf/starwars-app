import {FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// Types
import {MoviesListScreenProps} from 'types/routes';
import {Film} from 'types/swapi';
// Hooks
import {useGetFilms} from 'hooks/useApi';
// UI
import CardFilm from 'components/CardFilm';
import Loading from 'components/Loading';
// Screen UI
import MoviesListScreenHeader from './components/Header';
import MoviesListHeader from './components/ListHeader';

type SortType = 'episode' | 'title';

const MoviesListScreen = () => {
  const navigation = useNavigation<MoviesListScreenProps>();
  const {data, isLoading} = useGetFilms();
  const [sortType, setSortType] = React.useState<SortType>('title');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <MoviesListScreenHeader />,
    });
  }, [navigation]);

  const moviesList = React.useMemo(() => {
    const results = data?.results || [];
    if (sortType === 'episode') {
      return results.sort((a, b) => a.episode_id - b.episode_id);
    }
    return results.sort((a, b) => a.title.localeCompare(b.title));
  }, [data, sortType]);

  const handleNavigateMovieDetail = React.useCallback(
    (film: Film) => {
      navigation.navigate('Movie', {film});
    },
    [navigation],
  );

  const handleNavigateFavorites = React.useCallback(() => {
    navigation.navigate('Favorites');
  }, [navigation]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      testID="movies-list-flatlist"
      data={moviesList}
      contentContainerStyle={{
        paddingBottom: 8,
      }}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={() => (
        <MoviesListHeader
          onSetSortType={setSortType}
          selectedSortType={sortType}
          onFavoritesPress={handleNavigateFavorites}
        />
      )}
      renderItem={({item}) => (
        <CardFilm item={item} onPress={handleNavigateMovieDetail} />
      )}
    />
  );
};

export default MoviesListScreen;
