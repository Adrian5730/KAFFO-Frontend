import React from "react";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ImageBack from "../ImageBack/ImageBack";
import NavBar from "../NavBar/NavBar";
import ItemListFavorites from "../ItemListFavorites/ItemListFavorites";

const FavoritesContainer = () => {
  return (
    <div className="container">
      <ImageBack />
      <HeaderContainer />
      <ItemListFavorites />
    </div>
  );
};

export default FavoritesContainer;
