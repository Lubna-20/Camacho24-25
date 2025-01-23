import { useState } from 'react'
import './App.css'
import Hijo from './Hijo'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const setearPrimerNumero2 = (e) => {
    setNum1(Number(e.target.value));
  };

  const setearSegundoNumero2 = (e) => {
    setNum2(Number(e.target.value));
  };

  return (
    <>
    <h1>Calculadora</h1>

    <div className='app'>
    <div className='numeros'>
    <legend>Introduce los numeros</legend>
    <input type="number" value={num1} onChange={setearPrimerNumero2} placeholder="Primer número" />
    <input type="number" value={num2} onChange={setearSegundoNumero2} placeholder="Segundo número" />
    </div>
      
      <Hijo num1={num1} mum2={num2} />
    </div>
     
    </>
  )
}

export default App
