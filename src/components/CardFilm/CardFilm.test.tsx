import {render, fireEvent, waitFor, act} from 'tests/utils';
import CardFilm from './CardFilm';
import {mockFilm} from 'tests/mocks/swapi';
import 'jest-styled-components/native';

describe('CardFilm', () => {
  it('should render correctly', async () => {
    const onPressFn = jest.fn();
    const {getByTestId} = render(
      <CardFilm item={mockFilm} onPress={onPressFn} />,
    );
    expect(
      await waitFor(() => getByTestId('card-film-title')),
    ).toHaveTextContent(mockFilm.title);
  });
  it('should fire onPress', async () => {
    const onPressFn = jest.fn();
    const {getByTestId} = render(
      <CardFilm item={mockFilm} onPress={onPressFn} />,
    );
    act(() => {
      fireEvent(getByTestId(`card-film-touch-${mockFilm.episode_id}`), 'press');
    });
    waitFor(() => {
      expect(onPressFn).toHaveBeenCalled();
    });
  });
});
