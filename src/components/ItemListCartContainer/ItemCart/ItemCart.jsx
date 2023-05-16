import { useEffect, useRef, useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import './ItemCart.css'
const ItemCart = (props) => {
    const { name, code, quantity, totalPrice, quantityChange } = props;

    const removeQuantity = () => {
        let products_cart = JSON.parse(localStorage.getItem("products_cart")) || [];
        const indexCode = products_cart.findIndex(product_cart => product_cart[0] == code)
        if (indexCode !== -1) {
            if (products_cart[indexCode][1] <= 1) {
                deleteItemCart()
            } else {
                products_cart[indexCode][1] = products_cart[indexCode][1] - 1
                localStorage.setItem("products_cart", JSON.stringify(products_cart));
            }
        } else {
            window.location.reload();
        }
        quantityChange()
    }

    const addQuantity = () => {
        let products_cart = JSON.parse(localStorage.getItem("products_cart")) || [];
        const indexCode = products_cart.findIndex(product_cart => product_cart[0] == code)
        if (indexCode !== -1) {
            if (products_cart[indexCode][1] > 0) {
                products_cart[indexCode][1] = products_cart[indexCode][1] + 1
                localStorage.setItem("products_cart", JSON.stringify(products_cart));
            }
        } else {
            window.location.reload();
        }
        quantityChange()
    }

    const deleteItemCart = () => {
        let products_cart = JSON.parse(localStorage.getItem("products_cart")) || [];
        const indexCode = products_cart.findIndex(product_cart => product_cart[0] == code)
        products_cart.splice(indexCode, 1);
        localStorage.setItem("products_cart", JSON.stringify(products_cart));
        props.onDelete(code);
    }

    return (
        <div className="card-cart">
            <img
                src={`images/capsulas/${code}.jpg`}
                alt={`Imagen de producto ${code}`}
            />
            <div className="info-item-cart">
                <div className="close-container">
                    <CloseIcon
                        className="icon-close"
                        onClick={deleteItemCart}
                    />
                </div>
                <p className="name-capsule">{name}</p>
                <div className="quantity-card">
                    <RemoveIcon
                        className="minus-quantity"
                        onClick={removeQuantity}
                    />
                    <span>{quantity}</span>
                    <AddIcon
                        className="plus-quantity"
                        onClick={addQuantity}
                    />
                    <p className="price-card"> $ {totalPrice}</p>
                </div>
            </div>
        </div >
    )
}

export default ItemCart;