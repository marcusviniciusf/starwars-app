import {Images} from 'assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Box from 'components/Box';
import styled from 'styled-components/native';
import HeaderSwitch from './HeaderSwitch';
import useTheme from 'hooks/useTheme';

const HeaderLogo = styled.Image`
  width: 130px;
  height: 70px;
  margin-vertical: 16px;
`;

const MoviesListHeader = () => {
  const {themeColor} = useTheme();
  const {top} = useSafeAreaInsets();
  return (
    <Box
      backgroundColor={'background'}
      pt={top}
      flexDirection="row"
      px={4}
      justifyContent="space-between"
      alignItems={'center'}>
      <HeaderLogo
        resizeMode="contain"
        source={
          themeColor === 'sith' ? Images.StarWarsLogo : Images.StarWarsLogoBlack
        }
      />
      <HeaderSwitch />
    </Box>
  );
};

export default MoviesListHeader;
