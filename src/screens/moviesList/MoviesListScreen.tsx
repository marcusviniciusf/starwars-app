import {View, Text, Button} from 'react-native';

import {RootStackParamList} from 'types/routes';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type MoviesListScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MoviesList'
>;

const MoviesListScreen = () => {
  const navigation = useNavigation<MoviesListScreenProps>();

  return (
    <View>
      <Text>HomePage</Text>
      <Button
        title="Navigate To Movie"
        onPress={() =>
          navigation.navigate('Movie', {
            movieId: 999,
          })
        }
      />
      <Button
        title="Navigate To Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
    </View>
  );
};

export default MoviesListScreen;
