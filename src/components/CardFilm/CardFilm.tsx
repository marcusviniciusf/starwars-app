import {Film} from 'types/swapi';
import {TouchableOpacity} from 'react-native';
import Text from '../Typography';
import Box from '../Box';
import {removeLineBreaks, formatDate} from 'utils';

type CardFilmProps = {
  onPress: (film: Film) => void;
  item: Film;
};

const CardFilm = (props: CardFilmProps) => {
  const {onPress, item} = props;
  const {episode_id, title, director, producer, opening_crawl, release_date} =
    item;
  return (
    <TouchableOpacity
      testID="card-film-touch"
      activeOpacity={0.9}
      onPress={() => onPress(item)}>
      <Box
        p={2}
        m={2}
        borderRadius={6}
        borderWidth="0.5px"
        borderColor={'barColor'}
        backgroundColor="cardBackground">
        <Text testID="card-film-title" fontSize={3} mb={1}>
          {title}
        </Text>
        <Box flexDirection={'row'} justifyContent="space-between">
          <Text>Episode: {episode_id}</Text>
          <Text>Release: {formatDate(release_date)}</Text>
        </Box>
        <Text>Director: {director}</Text>
        <Text>Producer: {producer}</Text>
        <Text numberOfLines={2}>{removeLineBreaks(opening_crawl)}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default CardFilm;
