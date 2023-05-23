import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ItemListContainer.css";
import Item from "./Item/Item";
import LoadingContainer from "../LoadingContainer/LoadingContainer";
import ItemModal from "../ItemModal/ItemModal";
import NavBar from "../NavBar/NavBar";

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const [loading, setloading] = useState(true);
  const [quantityCart, setQuantityCart] = useState([]);

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleClose = () => setOpen(false);

  const updateProduct = useCallback(async (showLoader = true) => {
    if (showLoader) setloading(true);
    try {
      const response = await axios.post(
        "https://backend-kaffo-production-8463.up.railway.app/productos"
      );

      setProductos(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      if (showLoader) setloading(false);
    }
  }, []);

  const updateCantidadCart = useCallback(async (showLoader = true) => {
    if (showLoader) setloading(true);
    const localCart = JSON.parse(localStorage.getItem("products_cart")) || [];
    if (localCart.length !== 0) {
      setQuantityCart(localCart.length);
    }
  }, []);

  useEffect(() => {
    updateCantidadCart();
  }, [updateCantidadCart]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  return (
    <>
      <div className="container-cards">
        <ItemModal
          open={open}
          onClose={handleClose}
          modalData={modalData}
          onFavoriteChange={async () => {
            await updateProduct(false);
          }}
          setItemCart={async () => {
            await updateCantidadCart(false);
          }}
        />

        {loading ? (
          <LoadingContainer />
        ) : (
          productos.map(({ id, name, code, description, price }) => {
            return (
              <Item
                key={id}
                name={name}
                code={code}
                description={description}
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
            );
          })
        )}
      </div>
      <NavBar page="home" quantityCart={quantityCart} />
    </>
  );
};

export default ItemListContainer;
