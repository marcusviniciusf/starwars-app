import {ActivityIndicator} from 'react-native';
import Box from '../Box';

const Loading = () => {
  return (
    <Box
      testID="full-loading"
      flex={1}
      alignItems={'center'}
      justifyContent="center">
      <ActivityIndicator color="dark" />
    </Box>
  );
};

export default Loading;
