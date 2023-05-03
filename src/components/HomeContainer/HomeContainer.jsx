import "./HomeContainer.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ImageBack from "../ImageBack/ImageBack";
import NavBar from "../NavBar/NavBar";

const HomeContainer = () => {
  
  return (
    <div className="container">
      <ImageBack />
      <HeaderContainer />
      <ItemListContainer />
      <NavBar page='home'/>
    </div>
  );
};

export default HomeContainer;
