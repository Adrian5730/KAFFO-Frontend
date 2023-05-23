import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ItemListFavorites.css";
import ItemFavorite from "./ItemFavorite/ItemFavorite";
import LoadingContainer from "../LoadingContainer/LoadingContainer";
import NavBar from "../NavBar/NavBar";
import ItemModal from "../ItemModal/ItemModal";
const ItemListFavorites = () => {
  const [products, setProducts] = useState(null);
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [favorites, setfavorites] = useState([]);
  const [favoritesProducts, setfavoritesProducts] = useState([]);
  const [quantityCart, setQuantityCart] = useState([]);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .post("https://backend-kaffo-production-8463.up.railway.app/productos")
      .then((res) => {
        setProducts(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    setfavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  const updateCantidadCart = useCallback(async (showLoader = true) => {
    if (showLoader) setloading(true);
    const localCart = JSON.parse(localStorage.getItem("products_cart")) || [];
    if (localCart.length !== 0) {
      setQuantityCart(localCart.length);
    }
  }, []);

  useEffect(() => {
    if (products && favorites.length > 0) {
      setfavoritesProducts(
        products.filter((product) => favorites.includes(product.code))
      );
    }
  }, [products, favorites]);

  useEffect(() => {
    updateCantidadCart();
  }, [updateCantidadCart]);

  return (
    <>
      <div className="container-cards">
        <ItemModal
          open={open}
          onClose={handleClose}
          modalData={modalData}
          onFavoriteChange={async () => {
            // await updateProduct(false);
          }}
          setItemCart={async () => {
            await updateCantidadCart(false);
          }}
        />
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
              onClick={() => {
                setModalData({
                  description,
                  id,
                  name,
                  code,
                  price,
                  url: `images/capsulas/${code}.jpg`,
                });
                setOpen(true);
              }}
            />
          ))
        ) : (
          <div className="none-favorites">
            <img className="none-favorites-image" src="images/coffee.png" />
            <p>No tienes capsulas agregadas a favoritos!</p>
          </div>
        )}
      </div>
      <NavBar page="favorites" quantityCart={quantityCart} />
    </>
  );
};

export default ItemListFavorites;
