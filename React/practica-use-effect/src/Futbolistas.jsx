import { useState, useEffect } from 'react'

const Futbolistas = () => {
  const [futbolistas, setFutbolistas] = useState([])

  useEffect(() => {
    fetch('src/futbolistas.json')
    .then(res => res.json())
    .then(futbolistas => setFutbolistas(futbolistas))
  }, [])

  return (
    <div>
      <h1 >Futbolistas</h1>
        <table border={1} className='table table-striped table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>equipo</th>
              <th>posicion</th>
              <th>imagen</th>
        
            </tr>
          </thead>
          <tbody>
            {futbolistas.map(futbolista => (
              <tr key={futbolista.id}>
                <td>{futbolista.id}</td>
                <td>{futbolista.name}</td>
                <td>{futbolista.team}</td>
                <td>{futbolista.position}</td>
                <td><img src={futbolista.image} alt="imagen" width="100" height="100" /></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Futbolistas