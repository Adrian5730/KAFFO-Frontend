import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemListContainer.css";
import Item from "./Item/Item";
import LoadingContainer from "../LoadingContainer/LoadingContainer";
import ItemModal from "../ItemModal/ItemModal";

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const [loading, setloading] = useState(true);

  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="container-cards">
      <ItemModal open={open} onClose={handleClose} />

      {loading ? (
        <LoadingContainer />
      ) : (
        productos.map(({ id, nombre, codigo, descripcion }) => (
          <Item
            key={id}
            nombre={nombre}
            codigo={id}
            descripcion={descripcion}
          />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
