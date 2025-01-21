import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Pie from './componentes/Pie'
import BotonDecrementar from './componentes/BotonDecrementar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     <Cabecera></Cabecera>
      <h3>Principal</h3>
      <BotonDecrementar></BotonDecrementar>
      <Pie></Pie>
    </>
  )
}

export default App
