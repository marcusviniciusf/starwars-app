import {useGetStarship} from 'hooks/useApi';
import useTheme from 'hooks/useTheme';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardStarShipProps = {
  id: string;
};

const CardStarShip = (props: CardStarShipProps) => {
  const {id} = props;
  const {themeColor} = useTheme();
  const {data} = useGetStarship(id);
  if (!data) {
    return null;
  }
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
        {data?.name}
      </Text>

      <Box flexDirection="row">
        <Box flex={0.4}>
          <Text fontSize={2} color="secondary">
            Model
          </Text>
          <Text fontSize={2} numberOfLines={2}>
            {data?.model}
          </Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Class
          </Text>
          <Text fontSize={2} numberOfLines={2}>
            {data?.starship_class}
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row">
        <Box flex={0.4}>
          <Text fontSize={2} color="secondary">
            Max Speed
          </Text>
          <Text fontSize={2} numberOfLines={1}>
            {data?.max_atmosphering_speed}
          </Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Cost
          </Text>
          <Text fontSize={2} numberOfLines={1}>
            {data?.cost_in_credits}
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize={2} color="secondary">
          Manufacturer
        </Text>
        <Text fontSize={2} numberOfLines={2}>
          {data?.manufacturer}
        </Text>
      </Box>
    </Box>
  );
};

export default CardStarShip;
