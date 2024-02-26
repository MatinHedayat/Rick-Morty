import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();
const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
