import {Film} from 'types/swapi';
import {TouchableOpacity} from 'react-native';
import Text from '../Typography';
import Box from '../Box';
import {removeLineBreaks, formatDate} from 'utils';
import useTheme from 'hooks/useTheme';

type CardFilmProps = {
  onPress: (film: Film) => void;
  item: Film;
};

const CardFilm = (props: CardFilmProps) => {
  const {onPress, item} = props;
  const {themeColor} = useTheme();
  const {episode_id, title, director, producer, opening_crawl, release_date} =
    item;
  return (
    <TouchableOpacity
      testID="card-film-touch"
      activeOpacity={0.9}
      onPress={() => onPress(item)}>
      <Box
        p={3}
        mx={3}
        my={2}
        borderRadius={6}
        borderWidth={1}
        borderColor={themeColor === 'jedi' ? 'barColor' : 'transparent'}
        backgroundColor="cardBackground">
        <Text testID="card-film-title" fontSize={4} mb={3}>
          {title}
        </Text>
        <Box flexDirection={'row'} mb={1}>
          <Box flex={0.4}>
            <Text fontSize={2} color="secondary">
              Episode
            </Text>
            <Text fontSize={2}>{episode_id}</Text>
          </Box>
          <Box flex={0.6}>
            <Text fontSize={2} color="secondary">
              Release
            </Text>
            <Text fontSize={2}>{formatDate(release_date)}</Text>
          </Box>
        </Box>
        <Box flexDirection={'row'} mb={2}>
          <Box flex={0.4}>
            <Text fontSize={2} color="secondary">
              Director
            </Text>
            <Text numberOfLines={1} fontSize={2}>
              {director}
            </Text>
          </Box>
          <Box flex={0.6}>
            <Text fontSize={2} color="secondary">
              Producer
            </Text>
            <Text numberOfLines={1} fontSize={2}>
              {producer}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text fontSize={2} color="secondary">
            Synopsis
          </Text>
          <Text fontSize={2} numberOfLines={2} lineHeight={'26px'}>
            {removeLineBreaks(opening_crawl)}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default CardFilm;
