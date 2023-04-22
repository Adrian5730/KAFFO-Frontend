import React from "react";
import "./ItemModal.css";
import { Button, IconButton, Modal } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

const ItemModal = ({ open, onClose, modalData, onFavoriteChange }) => {
  const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFavorite = favoritos.includes(modalData.id);

  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.indexOf(modalData.id);

    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      favorites.push(modalData.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    onFavoriteChange();
  };

  const buy_now = async () => {
    const orden = [{
      title: modalData.name,
      quantity: 1,
      currency_id: 'ARS',
      unit_price: Number(modalData.price)
    }]
    const getUrl_MP = await axios.post("/payment", orden)
    const paymentUrl = getUrl_MP.data.linkPaymentMP;
    window.open(paymentUrl);

  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="item-modal">
        <div className="image-container">
          <img src={modalData.url} alt="capsula-cafe" />

          <IconButton
            id="heart-button"
            className={isFavorite ? "active" : ""}
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon className="icon" />
          </IconButton>
        </div>

        <h2 className="title">{modalData.name || ""}</h2>

        <p className="description">{modalData.description || ""}</p>

        <div className="button-container price-container">
          <span>
            Precio: <b>${modalData.price || 0}</b>
          </span>

          <Button id="more-details-button" variant="contained" size="small">
            Mas Detalles
          </Button>
        </div>

        <div className="button-container">
          <Button id="cart-button" variant="contained" size="medium">
            Agregar al carrito
          </Button>

          <Button id="buy-button" onClick={buy_now} variant="contained" size="medium">
            Comprar Ahora
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
