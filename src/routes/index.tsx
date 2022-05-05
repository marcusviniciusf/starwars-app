import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from 'theme';
// Hooks
import {useTheme} from 'hooks/useTheme';
// Types
import type {RootStackParamList} from 'types/routes';
// Screens
import MoviesListScreen from 'screens/moviesList';
import MovieScreen from 'screens/movie';
import FavoritesScreen from 'screens/favorites';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackNavigatorProps = {
  initialRouteName?: keyof RootStackParamList;
};

const RootStackNavigator = (props: RootStackNavigatorProps) => {
  const {initialRouteName = 'MoviesList'} = props;
  const {themeColor} = useTheme();
  const {colors} = theme(themeColor);
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={themeColor === 'sith' ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          contentStyle: {
            backgroundColor: colors.background,
          },
          animation: 'slide_from_right',
          headerBackTitleVisible: false,
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 18,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="MoviesList"
          component={MoviesListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
