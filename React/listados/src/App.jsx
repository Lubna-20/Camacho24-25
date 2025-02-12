/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Listado1 from './Componentes/Listado1.jsx'
import  {Listado2} from './Componentes/Listado2.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Listado1></Listado1> */}
       <Listado2></Listado2> 
    </>
  )
}

export default App
