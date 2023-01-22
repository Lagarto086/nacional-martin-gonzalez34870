import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'

import './App.css'


function App() {

  return (
    <BrowserRouter> 
    
      <NavBar />

      <Routes>
        <Route path='/' element = { < ItemListContainer saludo = {'En Construcción...'} />} />
        <Route path='/categoria/:categoriaID' element = { < ItemListContainer saludo = {'En Construcción...'} />} />
        <Route path='/detalle/:detalleID' element = { <ItemDetailContainer />} />
        <Route path='/carrito' element = { <CartContainer />} />
        <Route path='*' element = { <Navigate to ='/' />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
