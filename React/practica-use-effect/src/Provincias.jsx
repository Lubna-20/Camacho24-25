import { useState, useEffect } from 'react'
const Provincias = () => {
    const [provincias, setProvincias] = useState([])
  
    useEffect(() => {
      fetch('http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php')
      .then(res => res.json())
      .then(provincias => setProvincias(provincias))
    }, [])
  
    return (
      <div>
        <h1 >Provincias</h1>
          <table border={1} className='table table-striped table-dark'>
            <thead className='thead-dark'>
              <tr>
                <th>nombre Provincia</th>
                <th>votosPA</th>
                <th>votosPB</th>
                <th>votosPC</th>
                <th>votosPD</th>
                <th>Representantes</th>
              </tr>
            </thead>
            <tbody>
              {provincias.map((pro, i) => (
                <tr key={i}>
                  <td>{pro.nombreProvincia}</td>
                  <td>{pro.votosPA}</td>
                  <td>{pro.votosPB}</td>
                  <td>{pro.votosPC}</td>
                  <td>{pro.votosPD}</td>
                  <td>{pro.Representantes}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  }
  
  export default Provincias
  