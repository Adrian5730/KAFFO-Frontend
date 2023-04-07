import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./Item.css";
import { useEffect, useState } from "react";
const Item = (props) => {
  const { nombre, codigo, descripcion, onClick } = props;

  const [claseActiva, setClaseActiva] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
    setClaseActiva(favoritos.includes(codigo));
  }, [codigo]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.indexOf(codigo);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setClaseActiva(false);
    } else {
      favorites.push(codigo);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setClaseActiva(true);
    }
  };

  return (
    <div className="card" onClick={onClick}>
      <img
        src={`images/capsulas/${codigo}.jpg`}
        alt={`Imagen de producto ${codigo}`}
      />
      <button
        type="button"
        className="btn-item"
        data-name="card"
        data-code={codigo}
        data-img-src={`images/capsulas/${codigo}.jpg`}
        data-capsule-name={nombre}
        data-brand="nesspresso"
        data-description={descripcion}
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
