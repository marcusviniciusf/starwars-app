import {render, fireEvent} from 'tests/utils';
import CardFilm from './CardFilm';
import {mockFilm} from 'tests/mocks/swapi';

describe('CardFilm', () => {
  it('should render correctly', () => {
    const onPressFn = jest.fn();
    const {getByTestId} = render(
      <CardFilm item={mockFilm} onPress={onPressFn} />,
    );
    const title = getByTestId('card-film-title');
    expect(title).toHaveTextContent(mockFilm.title);
  });
  it('should fire onPress', () => {
    const onPressFn = jest.fn();
    const {getByTestId} = render(
      <CardFilm item={mockFilm} onPress={onPressFn} />,
    );
    const touch = getByTestId('card-film-touch');
    fireEvent(touch, 'press');
    expect(onPressFn).toHaveBeenCalled();
  });
});
