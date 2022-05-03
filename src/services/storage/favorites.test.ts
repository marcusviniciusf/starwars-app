import {getFavorites, addRemoveFavorites} from './favorites';
import {mockFilm} from 'tests/mocks/swapi';

describe('Storage Favorites', () => {
  it('should fire get favorites and come empty array', async () => {
    const favorites = await getFavorites();
    expect(favorites.length).toBe(0);
  });
  it('should add a favorite', async () => {
    const favorites = await addRemoveFavorites(mockFilm);
    expect(favorites.length).toBe(1);
    expect(favorites[0].url).toBe(mockFilm.url);
  });
  it('should remove a favorite', async () => {
    let favorites = await addRemoveFavorites(mockFilm);
    expect(favorites.length).toBe(0);
  });
});
