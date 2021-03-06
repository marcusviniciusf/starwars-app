import useTheme from 'hooks/useTheme';
import type {Species} from 'types/swapi';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardSpeciesProps = {
  item: Species;
};

const CardSpecies = (props: CardSpeciesProps) => {
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
            Classification
          </Text>
          <Text fontSize={2}>{item?.classification}</Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Designation
          </Text>
          <Text fontSize={2}>{item?.designation}</Text>
        </Box>
      </Box>
      <Box flexDirection="row">
        <Box flex={0.4}>
          <Text fontSize={2} color="secondary">
            Language
          </Text>
          <Text fontSize={2}>{item?.language}</Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Average Height
          </Text>
          <Text fontSize={2}>{item?.average_height}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardSpecies;
