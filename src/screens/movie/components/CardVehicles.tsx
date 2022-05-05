import useTheme from 'hooks/useTheme';
import type {Vehicle} from 'types/swapi';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardVehicleProps = {
  item: Vehicle;
};

const CardVehicle = (props: CardVehicleProps) => {
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
            Model
          </Text>
          <Text fontSize={2} numberOfLines={2}>
            {item?.model}
          </Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Manufacturer
          </Text>
          <Text fontSize={2} numberOfLines={2}>
            {item?.manufacturer}
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row">
        <Box flex={0.4}>
          <Text fontSize={2} color="secondary">
            Max Speed
          </Text>
          <Text fontSize={2} numberOfLines={1}>
            {item?.max_atmosphering_speed}
          </Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Vehicle Class
          </Text>
          <Text fontSize={2} numberOfLines={1}>
            {item?.vehicle_class}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardVehicle;
