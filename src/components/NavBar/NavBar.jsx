import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const { page, quantityCart } = props;

  
  return (
    <div className="container-list-nav">
      <ul className="list-nav">
        <li>
          <Link to={"/"}>
            {page == "home" ? (
              <HomeIcon className="icon-nav" fontSize="large" />
            ) : (
              <HomeOutlinedIcon className="icon-nav" fontSize="large" />
            )}
          </Link>
        </li>
        <li>
          <Link to={"/favorites"}>
            {page == "favorites" ? (
              <FavoriteIcon className="icon-nav" fontSize="large" />
            ) : (
              <FavoriteBorderIcon className="icon-nav" fontSize="large" />
            )}
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            {page == "cart" ? (
              <ShoppingCartIcon className="icon-nav" fontSize="large" />
            ) : (
              <ShoppingCartOutlinedIcon className="icon-nav" fontSize="large" />
            )}
            <button className="index-quantity">{quantityCart !== 0 && quantityCart}</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
