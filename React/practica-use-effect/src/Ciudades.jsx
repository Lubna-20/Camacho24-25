import { useState, useEffect } from 'react'
const Ciudades = () => {
  const [ciudades, setCiudades] = useState([])

  useEffect(() => {
    fetch('http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php')
    .then(res => res.json())
    .then(ciudades => setCiudades(ciudades))
  }, [])

  return (
    <div>
      <h1 >Ciudades</h1>
        <table border={1} className='table table-striped table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>poblacion</th>
              <th>densidad</th>
              <th>extension</th>
            </tr>
          </thead>
          <tbody>
            {ciudades.map(ciudad => (
              <tr key={ciudad.id}>
                <td>{ciudad.id}</td>
                <td>{ciudad.nombre}</td>
                <td>{ciudad.poblacion}</td>
                <td>{ciudad.densidad}</td>
                <td>{ciudad.extension}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Ciudades