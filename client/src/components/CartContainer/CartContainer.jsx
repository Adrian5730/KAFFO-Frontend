import React from 'react';
import ImageBack from "../ImageBack/ImageBack";
import NavBar from "../NavBar/NavBar";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ItemListCartContainer from '../ItemListCartContainer/ItemListCartContainer';

const CartContainer = () => {
    return (
        <div className="container">
            <ImageBack />
            <HeaderContainer />
            <ItemListCartContainer />
            <NavBar page={'cart'} />
        </div>
    )
}

export default CartContainer