import {TouchableOpacity} from 'react-native';
import Box from 'components/Box';
import Text from 'components/Typography';

type FavoritesButtonProps = {
  onPress: () => void;
};

const FavoritesButton = (props: FavoritesButtonProps) => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        px={3}
        py={1}
        borderRadius={30}
        borderWidth={1}
        borderColor={'barColor'}>
        <Text fontSize={2}>Favorites</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default FavoritesButton;
