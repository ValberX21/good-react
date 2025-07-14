import { useFavorites } from "../context/FavoriteContext";

const ProductDetails = ({ item }) => {

  const { favorites, toggleFavorite } = useFavorites();

const isFavorite = favorites.some(fav => fav.id === item.id);

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button type="button" onClick={() => toggleFavorite(item)}>
        {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
};

export default ProductDetails;
