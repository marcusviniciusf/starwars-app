import React from 'react';
import {Favorites} from 'services/storage';
import type {Film} from 'types/swapi';
import type {FavoritesContext as FavoritesContextProps} from 'types/theme';

const FavoritesContext = React.createContext<FavoritesContextProps | undefined>(
  undefined,
);

type FavoritesProviderProps = React.PropsWithChildren<{}>;

const FavoritesProvider = (props: FavoritesProviderProps) => {
  const {children} = props;
  const [favorites, setFavorites] = React.useState<Film[]>([]);

  React.useEffect(() => {
    const getStoredFavorites = async () => {
      const storedFavorites = await Favorites.getFavorites();
      setFavorites(storedFavorites);
    };
    getStoredFavorites();
  }, []);

  const handleToggleFavorite = React.useCallback(
    async (film: Film) => {
      const newFavorites = await Favorites.addRemoveFavorites(film);
      setFavorites(newFavorites);
    },
    [setFavorites],
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite: handleToggleFavorite,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export {FavoritesContext};
export default FavoritesProvider;
