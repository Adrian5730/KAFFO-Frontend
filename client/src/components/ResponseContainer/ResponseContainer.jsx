import ItemListContainer from "../ItemListContainer/ItemListContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ImageBack from "../ImageBack/ImageBack";
import NavBar from "../NavBar/NavBar";

const ResponseContainer = () => {
    return (
        <>
            <ImageBack />
            <HeaderContainer />
            <div>Pagaste Con exito</div>
            <NavBar page='home' />
        </>
    )
}

export default ResponseContainer