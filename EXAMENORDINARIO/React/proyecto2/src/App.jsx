import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from './Hijo'

function App() {
  const [count, setCount] = useState(0)

 const alumno1 = "Salah";
 const calificacion1 = Math.floor(Math.random() * 10+1);
 const alumno2 = "Mohamed";
 const calificacion2 = Math.floor(Math.random() * 10+1);
  return (
    <>
    <h1>Alumnos</h1>
    <Hijo nombre={alumno1} calificacion={calificacion1}/>
    <Hijo nombre={alumno2} calificacion={calificacion2}/>
    </>
  )
}

export default App
