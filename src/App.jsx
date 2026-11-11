import { useState } from 'react'
import './App.css'

import NavBar from './componetes/NavBar'
import Inicio from './componetes/Inicio'
import Sobre from './componetes/Sobre'
function App() {
  

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <Inicio/>
      </div>
      <div>
        <Sobre/>
      </div>
    </>
  )
}

export default App
