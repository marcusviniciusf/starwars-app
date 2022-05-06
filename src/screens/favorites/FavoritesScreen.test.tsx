import {renderWithNavigation, fireEvent, waitFor} from 'tests/utils';
import {mockFilm} from 'tests/mocks/swapi';
import useFavorites from 'hooks/useFavorites';
import {act} from 'react-test-renderer';

const mockedUseFavorites = useFavorites as jest.Mock<any>;
jest.mock('hooks/useFavorites');

describe('Favorites Screen', () => {
  it('should render empty list', async () => {
    mockedUseFavorites.mockImplementation(() => ({
      favorites: [],
    }));
    const {getByText} = renderWithNavigation('Favorites');
    waitFor(() => expect(getByText('No Favorites')).toBeDefined());
  });
  it('should render list', async () => {
    mockedUseFavorites.mockImplementation(() => ({
      favorites: [mockFilm],
    }));
    const {findAllByText} = renderWithNavigation('Favorites');
    const items = await findAllByText('Episode');
    expect(items.length).toBe(1);
  });
  it('should navigate to moviePage', async () => {
    mockedUseFavorites.mockImplementation(() => ({
      favorites: [mockFilm],
    }));
    const {getByTestId, getByText} = renderWithNavigation('Favorites');
    act(() => {
      fireEvent(getByTestId(`card-film-touch-${mockFilm.episode_id}`), 'press');
    });
    expect(await waitFor(() => getByText('Luke Skywalker'))).toBeDefined();
  });
});
