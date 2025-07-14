import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { listInventory } from "../services/api";
import ProductCar from './CarProduct';
import ProductDetails from "./ProductDetails";

const List = () => {

  const didFetch = useRef(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [sortMode, setSortMode] = useState("default");
  const [favorite, setFavorites] = useState([]);
 
  useEffect(() => {
    if (!didFetch.current) {
      listProducts();
      didFetch.current = true;
    }
  }, []);

  const listProducts = async () => {
    try {
      var listInve = await listInventory();
      setItems(listInve.productList);
    } catch (error) {
      console.log(`Erro: ${error}`)
    }
  }

  const prodSelectedHandler = (produ) => {

    const produSelected = {
      id: produ.id,
      name: produ.name,
      price: produ.price
    }

    setItem(produSelected);
   
  }

  const sortedItems = useMemo(() => {
    if (sortMode === "low") {
      return [...items].sort((a, b) => a.price - b.price);
    }
    if (sortMode === "high") {
      return [...items].sort((a, b) => b.price - a.price);
    }
    return items;
  }, [sortMode, items]);

  const toogleFavorite = useCallback((productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
          ? prev.includes((id) => id !== productId)
        : [...prev, productId]
      );
  }, []);

  return (
    <div>
      <h2 style={{ color: "white" }}>List</h2>
      <div style={{ display: "flex", gap: "20px" }}>

        <div style={{
          maxHeight: "300px",
          width: "300px",
          overflowY: "auto",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#1e1e1e"
        }}>
          <ul style={{ color: "white", margin: 0, padding: 0 }}>
            {sortedItems.map((item, index) => (
              <ProductCar key={index} prod={item} productSelected={prodSelectedHandler} />
            ))}
          </ul>
        </div>

        <div style={{ color: "white", backgroundColor: "#1e1e1e", padding: "10px", borderRadius: "8px", width: "300px", minHeight: "120px" }}>
          {!item ? (
            <h4>No product selected</h4>
          ) : (
            <>
              <ProductDetails item={item} favorites={favorite} toggleFavorite={toogleFavorite}/>             
            </>
          )}
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "flex-start",
          backgroundColor: "#1e1e1e",
          padding: "10px",
          borderRadius: "8px",
          width: "150px"
        }}>
          <button  type="button" onClick={() => setSortMode("high")} style={{ padding: "8px", borderRadius: "4px" }}>High Price</button>
          <button  type="button" onClick={() => setSortMode("low")} style={{ padding: "8px", borderRadius: "4px" }}>Low Price</button>
          <button  type="button" onClick={() => setSortMode("default")} style={{ padding: "8px", borderRadius: "4px" }}>Reset</button>
        </div>
      </div>    
    </div>
  );

};

export default List;
