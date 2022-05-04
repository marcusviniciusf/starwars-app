import {useGetPeople} from 'hooks/useApi';
import useTheme from 'hooks/useTheme';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardPeopleProps = {
  id: string;
};

const CardPeople = (props: CardPeopleProps) => {
  const {id} = props;
  const {themeColor} = useTheme();
  const {data} = useGetPeople(id);
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
            Gender
          </Text>
          <Text fontSize={2}>{data?.gender}</Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Birth Year
          </Text>
          <Text fontSize={2}>{data?.birth_year}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPeople;
