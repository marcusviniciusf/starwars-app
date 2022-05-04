import ThemeProvider from './ThemeColorProvider';
import {useTheme} from 'hooks/useTheme';
import {View, Text, Button} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {ErrorBoundary} from 'react-error-boundary';

const CustomApp = () => {
  const {setThemeColor, themeColor} = useTheme();
  const toggle = () => {
    setThemeColor(themeColor === 'jedi' ? 'sith' : 'jedi');
  };
  return (
    <View>
      <Button testID="button" title="Toggle" onPress={toggle} />
      <Text testID="color-text">
        {themeColor === 'jedi' ? 'Light' : 'Dark'}
      </Text>
    </View>
  );
};

describe('ThemeColorProvider', () => {
  it('should render with initial theme', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <CustomApp />,
      </ThemeProvider>,
    );
    expect(getByTestId('color-text')).toHaveTextContent('Dark');
  });
  it('should change themeColor', async () => {
    const {getByTestId, findByTestId} = render(
      <ThemeProvider>
        <CustomApp />,
      </ThemeProvider>,
    );
    const button = await findByTestId('button');
    act(() => {
      fireEvent(button, 'press');
    });
    expect(getByTestId('color-text')).toHaveTextContent('Light');
  });
  it('should fire no themeprovider defined error', async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    const {getByText} = render(
      <ErrorBoundary
        FallbackComponent={() => <Text>Something went wrong</Text>}>
        <CustomApp />
      </ErrorBoundary>,
    );
    expect(getByText('Something went wrong')).toBeDefined();
  });
});
