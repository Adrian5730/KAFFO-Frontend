import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import LoadingContainer from "../LoadingContainer/LoadingContainer";
import ItemCart from "./ItemCart/ItemCart";
import "./ItemListCartContainer.css";

const ItemListCartContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updateProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://backend-kaffo-production-8463.up.railway.app/productos"
        );
        setProducts(response.data);
        setLocalCart(JSON.parse(localStorage.getItem("products_cart")) || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    updateProduct();
  }, []);

  useEffect(() => {
    if (products && localCart.length > 0) {
      const cartProducts = products.filter((product) =>
        localCart.some((cartItem) => {
          if (cartItem[0] === product.code) {
            product.quantity = cartItem[1];
            product.totalPrice = product.quantity * product.price;
            return cartItem;
          }
        })
      );
      setCartProducts(cartProducts);
    }
  }, [localCart]);

  useEffect(() => {
    if (cartProducts) {
      const initialTotal =
        cartProducts.length > 0
          ? cartProducts.reduce((accumulator, product) => {
              return accumulator + product.totalPrice;
            }, 0)
          : 0;
      setTotal(initialTotal);
    }
  }, [cartProducts]);

  const handleQuantityChange = async () => {
    setLocalCart(JSON.parse(localStorage.getItem("products_cart")) || []);
  };

  const handleItemDelete = (code) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.code !== code
    );
    setCartProducts(updatedCartProducts);
  };

  const buy = async () => {
    if (cartProducts.length > 0) {
      let orden = [];
      cartProducts.map((product) => {
        orden.push({
          title: product.code,
          quantity: product.quantity,
          currency_id: "ARS",
          unit_price: parseInt(product.price),
        });
      });
      const getUrl_MP = await axios.post(
        "https://backend-kaffo-production-8463.up.railway.app/service/payment",
        orden
      );
      const paymentUrl = getUrl_MP.data.linkPaymentMP;
      window.open(paymentUrl);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingContainer />
      ) : cartProducts.length !== 0 ? (
        <>
          <div className="container-cards container-cards-cart">
            {cartProducts.map(({ id, name, code, quantity, totalPrice }) => (
              <ItemCart
                key={id}
                name={name}
                quantity={quantity}
                code={code}
                totalPrice={totalPrice}
                quantityChange={handleQuantityChange}
                onDelete={handleItemDelete}
              />
            ))}
          </div>
          <div className="container-BannerBuy">
            <Button
              variant="contained"
              size="small"
              id="btn-buy-cart"
              onClick={buy}
            >
              Continuar con la compra
            </Button>
            <p className="total-price">Total: ${total}</p>
          </div>
        </>
      ) : (
        <div className="none-favorites">
          <img
            className="none-favorites-image"
            src="images/coffee.png"
            alt="No hay productos en el carrito"
          />
          <p>No tienes cápsulas agregadas al carrito.</p>
        </div>
      )}
    </>
  );
};

export default ItemListCartContainer;
