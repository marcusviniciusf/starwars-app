import {useGetSpecies} from 'hooks/useApi';
import useTheme from 'hooks/useTheme';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardSpeciesProps = {
  id: string;
};

const CardSpecies = (props: CardSpeciesProps) => {
  const {id} = props;
  const {themeColor} = useTheme();
  const {data} = useGetSpecies(id);
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
            Classification
          </Text>
          <Text fontSize={2}>{data?.classification}</Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Designation
          </Text>
          <Text fontSize={2}>{data?.designation}</Text>
        </Box>
      </Box>
      <Box flexDirection="row">
        <Box flex={0.4}>
          <Text fontSize={2} color="secondary">
            Language
          </Text>
          <Text fontSize={2}>{data?.language}</Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Average Height
          </Text>
          <Text fontSize={2}>{data?.average_height}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardSpecies;
