import {renderWithNavigation} from 'tests/utils';

beforeEach(() => {
  jest.useFakeTimers();
});

describe('MoviesListScreen', () => {
  it('should render loading', () => {
    const {getByTestId} = renderWithNavigation();
    const loading = getByTestId('full-loading');
    expect(loading).toBeDefined();
  });
  it('should render render list', async () => {
    const {findByTestId} = renderWithNavigation();
    const flatList = await findByTestId('movies-list-flatlist');
    expect(flatList).toBeDefined();
  });
});
