import React from 'react'

const Hijo = ({ num1,mum2 }) => {
    const suma = num1 + mum2;
    const resta = num1 - mum2;
    const multiplicacion = num1 * mum2;
    const division = num1 / mum2;
  return (
    <div className='hijo'>
    <h2>Operaciones</h2>
    <p>La suma de {num1} y {mum2} es {suma}</p>
    <p>La resta de {num1} y {mum2} es {resta}</p>
    <p>La multiplicacion de {num1} y {mum2} es {multiplicacion}</p>
    <p>La división de {num1} y {mum2} es {division}</p>
    </div>
  )
}

export default Hijo