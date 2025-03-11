import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ejercicio from './Ejercicio'

function App() {
  const [vectorRandom, setVectorRandom] = useState([])
  const generarNUmerosRandom = () => {
    setVectorRandom(Array.from({length: 50}, () => Math.floor(Math.random() * 1000)))
  }

  return (
    <>
     <h1>Generador de numeros aleatorios</h1>
     <button className='btn btn-primary' onClick={generarNUmerosRandom}>Generar</button>
     <div className='container'>
       <div className='row'>
         <div className='col'>
           <h2>Vector aleatorio</h2>
          <span>{vectorRandom.join('-')}</span>
          <Ejercicio vectorRandom={vectorRandom} ></Ejercicio>
          </div>
       </div>
     </div>
    </>
  )
}

export default App
