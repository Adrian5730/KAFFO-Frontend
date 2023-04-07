import React, { useEffect, useState } from 'react'
import './ImageBack.css'
const ImageBack = () => {
    const [favorites, setfavorites] = useState([]);

    useEffect(() => {
        setfavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    },[])
    return (
        (favorites.length !== 0) &&
        <div className='container-imagen-fondo'>
            <img className='imagen-fondo' src="./images/Logo.png" alt="Logo" />
        </div>
    )
}

export default ImageBack