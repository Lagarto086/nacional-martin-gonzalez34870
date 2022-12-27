import { useState } from 'react'

import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar/NavBar'

import './App.css'

function App() {

  return (
    <> 
      <NavBar />
      <br/>
      <ItemListContainer greating = {'Sitio en construcción.. el desarrollador fue por un café'}/>
    </>
  )
}

export default App
