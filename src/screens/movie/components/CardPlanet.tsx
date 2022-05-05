import useTheme from 'hooks/useTheme';
import type {Planet} from 'types/swapi';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardPlanetProps = {
  item: Planet;
};

const CardPlanet = (props: CardPlanetProps) => {
  const {item} = props;
  const {themeColor} = useTheme();
  return (
    <Box
      p={3}
      mx={3}
      my={2}
      borderRadius={6}
      borderWidth={1}
      borderColor={themeColor === 'jedi' ? 'barColor' : 'transparent'}
      backgroundColor="cardBackground">
      <Text fontSize={4} mb={3}>
        {item?.name}
      </Text>

      <Box flexDirection="row">
        <Box flex={0.4}>
          <Text fontSize={2} color="secondary">
            Climate
          </Text>
          <Text fontSize={2} numberOfLines={2}>
            {item?.climate}
          </Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Populatio
          </Text>
          <Text fontSize={2} numberOfLines={2}>
            {item?.population}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPlanet;
