import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Types
import type {RootStackParamList} from 'types/routes';
// Screens
import MoviesListScreen from 'screens/moviesList';
import MovieScreen from 'screens/movie';
import FavoritesScreen from 'screens/favorites';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="MoviesList">
        <Stack.Screen name="MoviesList" component={MoviesListScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
