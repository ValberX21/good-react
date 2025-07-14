import { createContext, useContext, useState, useCallback, useMemo } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback((product) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === product.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  }, []);

  const value = useMemo(() => ({
    favorites,
    toggleFavorite,
  }), [favorites, toggleFavorite]);

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
