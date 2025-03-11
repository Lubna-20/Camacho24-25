
import React from 'react'
const BotonDecrementar = () => {
    const [contador, setContador] = React.useState(0);
  return (
    <div>
        <h3>Boton Decrementar</h3>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador+1)}>incrementar</button>
        <button onClick={() => setContador(contador - 1)}>descrementar</button>
        <br />
        
        <input type="number" value={numero} onChange={(e) => setContador(e.target.value)} />
    </div>
    
  )
}

export default BotonDecrementar