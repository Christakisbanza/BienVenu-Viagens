import { useState } from 'react'
import './App.css'

import NavBar from './componetes/NavBar'
import Inicio from './componetes/Inicio'
import Sobre from './componetes/Sobre'
import Servicos from './componetes/Servicos'

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
      <div>
        <Servicos/>
      </div>
    </>
  )
}

export default App
