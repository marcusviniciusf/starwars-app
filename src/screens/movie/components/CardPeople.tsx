import useTheme from 'hooks/useTheme';
import type {People} from 'types/swapi';
// UI
import Box from 'components/Box';
import Text from 'components/Typography';

type CardPeopleProps = {
  item: People;
};

const CardPeople = (props: CardPeopleProps) => {
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
            Gender
          </Text>
          <Text fontSize={2}>{item?.gender}</Text>
        </Box>
        <Box flex={0.6}>
          <Text fontSize={2} color="secondary">
            Birth Year
          </Text>
          <Text fontSize={2}>{item?.birth_year}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPeople;
