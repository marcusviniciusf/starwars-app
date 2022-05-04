import ThemeColorProvider from './ThemeColorProvider';
import ThemeProvider from './ThemeProvider';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

describe('ThemeProvider', () => {
  it('should render Correctly', () => {
    const {getByText} = render(
      <ThemeColorProvider>
        <ThemeProvider>
          <Text>MyText</Text>
        </ThemeProvider>
      </ThemeColorProvider>,
    );
    expect(getByText('MyText')).toBeDefined();
  });
});
