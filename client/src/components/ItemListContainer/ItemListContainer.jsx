import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemListContainer.css";
import Item from "./Item/Item";
import LoadingContainer from "../LoadingContainer/LoadingContainer";
import ItemModal from "../ItemModal/ItemModal";

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const [loading, setloading] = useState(true);

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("productos", productos);
  useEffect(() => {
    axios
      .get("/productos")
      .then((res) => {
        setProductos(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="container-cards">
      <ItemModal open={open} onClose={handleClose} modalData={modalData} />

      {loading ? (
        <LoadingContainer />
      ) : (
        productos.map(({ id, nombre, descripcion, precio }) => {
          return (
            <Item
              key={id}
              nombre={nombre}
              codigo={id}
              descripcion={descripcion}
              onClick={() => {
                setModalData({
                  descripcion,
                  id,
                  nombre,
                  precio,
                  url: `images/capsulas/${id}.jpg`,
                  isFavorite: favoritos.includes(id),
                });
                setOpen(true);
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default ItemListContainer;
