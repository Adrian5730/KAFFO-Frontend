import "./HomeContainer.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ImageBack from "../ImageBack/ImageBack";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { useEffect } from "react";

const HomeContainer = () => {
  return (
    <div className="container">
      <ImageBack />
      <HeaderContainer />
      <ItemListContainer />
    </div>
  );
};

export default HomeContainer;
