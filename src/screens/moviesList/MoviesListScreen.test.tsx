// import MoviesListScreen from './MoviesListScreen';
import {render} from '@testing-library/react-native';
import Routes from 'routes';

describe('MoviesListScreen', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Routes />);
    expect(getByText('HomePage')).toBeDefined();
  });
});
