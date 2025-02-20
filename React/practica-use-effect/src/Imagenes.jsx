import { useState, useEffect } from 'react'

const Imagenes = () => {
  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
    .then(res => res.json())
    .then(imagenes => setImagenes(imagenes))
  }, [])

  return (
    <div>
      <h1 >Imagenes</h1>
        <table border={1} className='table table-striped table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>id</th>
              <th>imagen</th>
              <th>texto</th>
              <th>subtexto</th>
              <th>activo</th>
            </tr>
          </thead>
          <tbody>
            {imagenes.map(imagen => (
              <tr key={imagen.id}>
                <td>{imagen.id}</td>
                <td><img src={imagen.imagen} alt="imagen" width="100" height="100" /></td>
                <td>{imagen.texto}</td>
                <td>{imagen.subtexto}</td>
                <td>{imagen.activo}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}   

export default Imagenes