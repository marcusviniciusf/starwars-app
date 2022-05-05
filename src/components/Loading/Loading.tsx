import useTheme from 'hooks/useTheme';
import {ActivityIndicator} from 'react-native';
import {theme} from 'theme';
import Box from '../Box';

const Loading = () => {
  const {themeColor} = useTheme();
  const {colors} = theme(themeColor);
  return (
    <Box
      testID="full-loading"
      flex={1}
      alignItems={'center'}
      justifyContent="center">
      <ActivityIndicator color={colors.primary} size={'large'} />
    </Box>
  );
};

export default Loading;
