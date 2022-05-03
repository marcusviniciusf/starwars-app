import {View, Text} from 'react-native';
import {RootStackParamList} from 'types/routes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type MovieScreenProps = NativeStackScreenProps<RootStackParamList, 'Movie'>;

const MovieScreen = (props: MovieScreenProps) => {
  const {route} = props;
  const {movieId} = route.params;
  return (
    <View>
      <Text>MovieId: {movieId}</Text>
    </View>
  );
};

export default MovieScreen;
