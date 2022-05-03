import {getItem, setItem} from './storage';
import type {Film} from 'types/swapi';

const getFavorites = async (): Promise<Film[]> => {
  const favorites = await getItem('FAVORITES');
  return favorites || [];
};
const addRemoveFavorites = async (film: Film): Promise<Film[]> => {
  const favorites = await getFavorites();
  const newFavoritesList = [...favorites];
  const favoriteIndex = favorites.findIndex(fav => fav.url === film.url);
  if (favoriteIndex === -1) {
    newFavoritesList.push(film);
  } else {
    newFavoritesList.splice(favoriteIndex, 1);
  }
  await setItem(newFavoritesList, 'FAVORITES');
  return newFavoritesList;
};

export {getFavorites, addRemoveFavorites};
