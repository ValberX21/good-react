import { useEffect } from "react";
import { useFavorites } from "../context/FavoriteContext";

const FavoriteList = () => {

  const { favorites } = useFavorites();

  useEffect(() => {    
  }, [favorites]);

  if (!Array.isArray(favorites)) {
    return (
      <div style={{
        backgroundColor: "#1e1e1e",
        color: "white",
        padding: "10px",
        borderRadius: "8px",
        width: "300px",
        maxHeight: "300px",
        overflowY: "auto"
      }}>
        <h4>Favorites ❤️</h4>
        <p>Loading favorites...</p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: "#1e1e1e",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
      width: "300px",
      maxHeight: "300px",
      overflowY: "auto"
    }}>
      <h4>Favorites ❤️</h4>
      {favorites.length === 0 ? (
        <p>No favorites</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {favorites.map((favItem) => (
            <li key={favItem.id} style={{ marginBottom: "10px" }}>
              <strong>{favItem.name}</strong><br />
              ${favItem.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
