import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemListFavorites.css";
import ItemFavorite from "./ItemFavorite/ItemFavorite";
import LoadingContainer from "../LoadingContainer/LoadingContainer";
const ItemListFavorites = () => {
  const [products, setProducts] = useState(null);
  const [loading, setloading] = useState(true);
  const [favorites, setfavorites] = useState([]);
  const [favoritesProducts, setfavoritesProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/productos")
      .then((res) => {
        setProducts(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    setfavorites(JSON.parse(localStorage.getItem("favorites")) || []);

  }, []);

  useEffect(() => {
    if (products && favorites.length > 0) {
      setfavoritesProducts(
        products.filter((product) => favorites.includes(product.code))
      );
    }
  }, [products, favorites]);

  return (
    <div className="container-cards">
      {loading ? (
        <LoadingContainer />
      ) : favoritesProducts.length !== 0 ? (
        favoritesProducts.map(({ id, name, code, description, price }) => (
          <ItemFavorite
            key={id}
            name={name}
            code={code}
            description={description}
            price={price}
          />
        ))
      ) : (
        <div className="none-favorites">
          <img className="none-favorites-image" src="images/coffee.png" />
          <p>No tienes capsulas agregadas a favoritos!</p>
        </div>
      )}
    </div>
  );
};

export default ItemListFavorites;
