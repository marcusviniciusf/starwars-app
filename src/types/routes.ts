import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import type {Film} from './swapi';

type RootStackParamList = {
  MoviesList: undefined;
  Movie: {film: Film};
  Favorites: undefined;
};

type MovieTabParam = Record<
  string,
  {
    list: string[];
  }
>;

// Screens Props
type MoviesListScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MoviesList'
>;
type MovieScreenProps = NativeStackScreenProps<RootStackParamList, 'Movie'>;
type FavoritesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Favorites'
>;
type MovieTabScreenProps = NativeStackScreenProps<MovieTabParam>;

export type {
  RootStackParamList,
  MoviesListScreenProps,
  MovieScreenProps,
  FavoritesScreenProps,
  MovieTabScreenProps,
};
