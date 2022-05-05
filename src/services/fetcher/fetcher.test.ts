import {fetcher, multiFetcher} from './fetcher';
import type {SWApiPaginatedResponse, Film, Species} from 'types/swapi';
describe('Fetcher', () => {
  it('should fire fetcher and return a film', async () => {
    const response = await fetcher<SWApiPaginatedResponse<Film>>('/films');
    expect(response.results.length).toBe(1);
  });
  it('should fire multi fetcher and return a species', async () => {
    const response = await multiFetcher<Species>('/species');
    expect(response.length).toBe(1);
  });
});
