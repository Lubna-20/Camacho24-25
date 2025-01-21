import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from "./componentes/Hijo.jsx"

function App() {
  const alumno1 = "Lola";
  const calificacion1 = Math.round(Math.random()*10);
  return (
    <>
    <h1>ALUMNOS</h1>
    <Hijo nombre={alumno1} calificacion={calificacion1} />

    </>
  )
}

export default App
