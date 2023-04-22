import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './components/HomeContainer/HomeContainer'
import CartContainer from './components/CartContainer/CartContainer'

import UserContainer from './components/UserContainer/UserContainer'
import FavoritesContainer from './components/FavoritesContainer/FavoritesContainer'
import ResponseContainer from './components/ResponseContainer/ResponseContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />}></Route>
        <Route path='/cart' element={<CartContainer />}></Route>
        <Route path='/favorites' element={<FavoritesContainer />}></Route>
        <Route path='/user/:login_register' element={<UserContainer />}></Route>
        <Route path='/response/:status_MP' element={<ResponseContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
