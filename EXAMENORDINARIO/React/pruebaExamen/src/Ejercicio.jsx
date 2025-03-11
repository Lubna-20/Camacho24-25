import { useState } from 'react'


function Ejercicio({vectorRandom}) {
    const valorMaximo = Math.max(...vectorRandom)
    const valorMinimo = Math.min(...vectorRandom)
    const media = vectorRandom.reduce((acumulador, numero) => acumulador + numero, 0) / vectorRandom.length
    const repeticiones = vectorRandom.reduce((acumulador, numero) => acumulador + (numero === vectorRandom[0]), 0)
   
  

  return (
    <>
    
    <h2>Estadisticas</h2>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3>Media</h3>
            <p>{media}</p>
            <h3>Valor maximo</h3>
          <p>{valorMaximo}</p>
          <h3>Valor minimo</h3>
          <p>{valorMinimo}</p>
          <h3>Repeticiones</h3>
          <p>{repeticiones}</p>
          </div>
      </div>
    </div>
     </>
      
  )
}

export default Ejercicio