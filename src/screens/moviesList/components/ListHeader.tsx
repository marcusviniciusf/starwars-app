import {TouchableOpacity} from 'react-native';
import Text from 'components/Typography';
import Box from 'components/Box';
import HorizontalBar from 'components/HorizontalBar';
import FavoritesButton from './FavoritesButton';

type SortType = 'episode' | 'title';

type MoviesListHeaderProps = {
  onFavoritesPress: () => void;
  onSetSortType: (sortType: SortType) => void;
  selectedSortType: SortType;
};

const MoviesListHeader = (props: MoviesListHeaderProps) => {
  const {onFavoritesPress, selectedSortType, onSetSortType} = props;
  return (
    <Box
      backgroundColor={'background'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      pt={3}
      pb={2}
      px={3}>
      <Box flexDirection={'row'}>
        <TouchableOpacity onPress={() => onSetSortType('title')}>
          <Box position="relative" mr={5}>
            <Text fontSize={2}>Title</Text>
            <HorizontalBar enabled={selectedSortType === 'title'} />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSetSortType('episode')}>
          <Box position="relative">
            <Text fontSize={2}>Episode</Text>
            <HorizontalBar enabled={selectedSortType === 'episode'} />
          </Box>
        </TouchableOpacity>
      </Box>
      <FavoritesButton onPress={onFavoritesPress} />
    </Box>
  );
};

export type {SortType};
export default MoviesListHeader;
