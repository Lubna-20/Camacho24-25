import { useState } from 'react'
import './App.css'

function App() {
  // * Generar un numero aleatorio
  const generarNumeroRandom = () => {
    return Math.floor(Math.random() * 100);
  }
  const [Vector, setVector] = useState(Array.from({ length: 100 }, generarNumeroRandom));

  // * Eliminar un numero del vector
  const eliminarNumero = (index) => () => {
    setVector(Vector.filter((numero, i) => i !== index))
  }
  // * Modificar un numero del vector
  const modificarNumero = (index) => () => {
    setVector(Vector.map((numero, i) => i === index ? prompt('Nuevo numero') : numero))
  }
  //* Agregar un nuevo numero al vector
  const agregarNumero = () => {
    setVector([...Vector, generarNumeroRandom()])
  }
  const ordenarAscendente = () => {
    setVector([...Vector].sort((a, b) => a - b))
  }
  const ordenarDescendente = () => {
    setVector([...Vector].sort((a, b) => a - b).reverse())
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='display-4'>
              <span className='text-primary'>
                Desarollo de ReactJS
              </span>
            </h1>
          </div>
          <h1 className='display-4'>
            <button onClick={agregarNumero} className='btn btn-primary'>
              Nuevo numero
            </button>
            <button onClick={ordenarAscendente} className='btn btn-danger'>

              Orden ascendente
            </button>
            <button onClick={ordenarDescendente} className='btn btn-primary'>
              Orden descendente
            </button>
          </h1>
          <div className='col'>
            <table className='table table-striped'>
              <thead className='thead-dark'>
                <tr className='text-center'>
                  <th>ID</th>
                  <th>numero</th>
                  <th>Eliminar</th>
                  <th>Modificar</th>
                </tr>
              </thead>
              <tbody>
                {Vector.map((numero, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{numero}</td>
                    <td>
                      <button className='btn btn-danger' onClick={eliminarNumero(index)}>
                        <i className='bi bi-trash'>Eliminar</i>
                      </button>
                    </td>
                    <td>
                      <button className='btn btn-primary' onClick={modificarNumero(index)}>
                        <i className='bi bi-pencil'>Modificar</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
