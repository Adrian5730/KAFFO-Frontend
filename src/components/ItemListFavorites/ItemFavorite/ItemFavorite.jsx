import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./ItemFavorite.css";
import { useEffect, useRef, useState } from "react";

const ItemFavorite = (props) => {
  const { name, code, description, price, onClick } = props;

  const [claseActiva, setClaseActiva] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
    setClaseActiva(favoritos.includes(code));
  }, [code]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.indexOf(code);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setClaseActiva(false);
    } else {
      favorites.push(code);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setClaseActiva(true);
    }
  };

  return (
    <div className="card-favorite" onClick={onClick}>
      <img
        src={`images/capsulas/${code}.jpg`}
        alt={`Imagen de producto ${code}`}
      />
      <button
        type="button"
        className="btn-item-favorite"
        data-name="card"
        data-code={code}
        data-img-src={`images/capsulas/${code}.jpg`}
        data-capsule-name={name}
        data-brand="nesspresso"
        data-description={description}
        data-price="Precio"
      ></button>
      <div ref={containerRef} id="mi-test" className="info-item-favorite">
        <span className="price-item-favorite">
          Precio: <strong>${price}</strong>
        </span>
        <span className="name-capsule-favorite">{name}</span>
        <p className="description-item-favorite">
          {description.slice(0, 100) + (description.length > 100 ? "..." : "")}
        </p>
      </div>

      <div className="container-icon-favorite favorite-btn">
        <FavoriteRoundedIcon
          onClick={handleFavoriteClick}
          className={claseActiva ? "mi-clase-activa" : "icon-favorite"}
          fontSize="small"
        />
      </div>
    </div>
  );
};

export default ItemFavorite;
