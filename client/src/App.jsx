import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './components/HomeContainer/HomeContainer'
import CartContainer from './components/CartContainer/CartContainer'

import UserContainer from './components/UserContainer/UserContainer'
import FavoritesContainer from './components/FavoritesContainer/FavoritesContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />}></Route>
        <Route path='/cart' element={<CartContainer />}></Route>
        <Route path='/favorites' element={<FavoritesContainer />}></Route>
        <Route path='/user/:login_register' element={<UserContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
