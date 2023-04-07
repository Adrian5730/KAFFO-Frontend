import React, { useEffect, useState } from 'react'
import LoadingContainer from '../LoadingContainer/LoadingContainer';
import './ItemListCartContainer.css'

const ItemListCartContainer = () => {
    // const [loading, setloading] = useState(true);
    // useEffect(() => {
    //     setloading(false)
    // }, []);

    return (
        <div className='container-cart'>
            <div className='none-cart'>
                <img className='none-cart-image' src='images/cart-empty.png' />
                <p>No tienes capsulas agregadas al carrito!</p>
            </div>
        </div>
    )
}

export default ItemListCartContainer