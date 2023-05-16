import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingContainer from '../LoadingContainer/LoadingContainer';
import ItemCart from './ItemCart/ItemCart';
import './ItemListCartContainer.css';

const ItemListCartContainer = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [localCart, setLocalCart] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const updateProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.post('https://backend-kaffo-production-8463.up.railway.app/productos');
                setProducts(response.data);
                setLocalCart(JSON.parse(localStorage.getItem('products_cart')) || []);
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


    const handleQuantityChange = async () => {
        setLocalCart(JSON.parse(localStorage.getItem('products_cart')) || []);
    };

    const handleItemDelete = (code) => {
        const updatedCartProducts = cartProducts.filter((product) => product.code !== code);
        setCartProducts(updatedCartProducts);
    };

    return (
        <div className="container-cards">
            {loading ? (
                <LoadingContainer />
            ) : cartProducts.length !== 0 ? (
                cartProducts.map(({ id, name, code, quantity, totalPrice }) => (
                    <ItemCart
                        key={id}
                        name={name}
                        quantity={quantity}
                        code={code}
                        totalPrice={totalPrice}
                        quantityChange={handleQuantityChange}
                        onDelete={handleItemDelete}
                    />
                ))
            ) : (
                <div className="none-favorites">
                    <img className="none-favorites-image" src="images/coffee.png" alt="No hay productos en el carrito" />
                    <p>No tienes cápsulas agregadas al carrito.</p>
                </div>
            )}
        </div>
    );
};

export default ItemListCartContainer;
