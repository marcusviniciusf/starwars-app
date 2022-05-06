import useFavorites from 'hooks/useFavorites';
import {Text, View, Button} from 'react-native';
import {mockFilm} from 'tests/mocks/swapi';
import {render, fireEvent, act, waitFor} from 'tests/utils';

const CustomApp = () => {
  const {favorites, toggleFavorite} = useFavorites();
  const toggleFilm = (film = mockFilm) => {
    toggleFavorite(film);
  };
  return (
    <View>
      <Button
        testID="button"
        title="Add/Remove Film"
        onPress={() => toggleFilm()}
      />
      <Text testID="favorites-counter">{favorites.length}</Text>
    </View>
  );
};

describe('FavoritesProvider', () => {
  it('should render correctly and return no favorites', () => {
    const {getByTestId} = render(<CustomApp />);
    waitFor(() => {
      const counter = getByTestId('favorites-counter');
      expect(counter).toHaveTextContent('0');
    });
  });
  it('should add a film and remove from favorites', async () => {
    const {getByTestId} = render(<CustomApp />);
    act(() => {
      fireEvent(getByTestId('button'), 'press');
    });
    expect(
      await waitFor(() => getByTestId('favorites-counter')),
    ).toHaveTextContent('1');
  });
  it('should remove a film from favorites', async () => {
    const {getByTestId} = render(<CustomApp />);
    expect(
      await waitFor(() => getByTestId('favorites-counter')),
    ).toHaveTextContent('1');
    await act(async () => fireEvent(getByTestId('button'), 'press'));
    expect(getByTestId('favorites-counter')).toHaveTextContent('0');
  });
});
