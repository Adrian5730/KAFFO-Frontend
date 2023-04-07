import React from "react";
import "./ItemModal.css";
import { Button, IconButton, Modal } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ItemModal = ({ open, onClose, modalData }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="item-modal">
        <div className="image-container">
          <img src={modalData.url} alt="capsula-cafe" />

          <IconButton
            id="heart-button"
            className={modalData.isFavorite ? "active" : ""}
          >
            <FavoriteIcon className="icon" />
          </IconButton>
        </div>

        <h2 className="title">{modalData.nombre || ""}</h2>

        <p className="description">{modalData.descripcion || ""}</p>

        <div className="button-container price-container">
          <span>
            Precio: <b>${modalData.precio || 0}</b>
          </span>

          <Button id="more-details-button" variant="contained" size="small">
            Mas Detalles
          </Button>
        </div>

        <div className="button-container">
          <Button id="cart-button" variant="contained" size="medium">
            Agregar al carrito
          </Button>

          <Button id="buy-button" variant="contained" size="medium">
            Comprar Ahora
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
