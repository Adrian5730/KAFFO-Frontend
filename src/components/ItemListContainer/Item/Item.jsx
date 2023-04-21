import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./Item.css";
import { useEffect, useState } from "react";
const Item = (props) => {
  const { name, code, description, onClick } = props;
  const [claseActiva, setClaseActiva] = useState(false);

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
    <div className="card" onClick={onClick}>
      <img
        src={`images/capsulas/${code}.jpg`}
        alt={`Imagen de producto ${code}`}
      />
      <button
        type="button"
        className="btn-item"
        data-name="card"
        data-code={code}
        data-img-src={`images/capsulas/${code}.jpg`}
        data-capsule-name={name}
        data-brand="nesspresso"
        data-description={description}
        data-price="Precio"
      ></button>
      <div className="container-icon-favorite">
        <FavoriteRoundedIcon
          onClick={handleFavoriteClick}
          className={claseActiva ? "mi-clase-activa" : "icon-favorite"}
          fontSize="small"
        />
      </div>
    </div>
  );
};

export default Item;
