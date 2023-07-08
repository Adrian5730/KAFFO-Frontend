import "./HomeContainer.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ImageBack from "../ImageBack/ImageBack";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { useEffect } from "react";

const HomeContainer = () => {

  useEffect(() => {
    const user = axios.get("https://backend-kaffo-production-8463.up.railway.app/login/user")
    console.log(user)
  })
  return (
    <div className="container">
      <ImageBack />
      <HeaderContainer />
      <ItemListContainer />
    </div>
  );
};

export default HomeContainer;
