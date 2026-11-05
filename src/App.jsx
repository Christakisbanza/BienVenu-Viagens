import { useState } from 'react'
import './App.css'

import NavBar from './componetes/NavBar'
import Inicio from './componetes/Inicio'
function App() {
  

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <Inicio/>
      </div>
    </>
  )
}

export default App
