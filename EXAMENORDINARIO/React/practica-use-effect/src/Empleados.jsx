
import { useState, useEffect } from 'react'


const Empleados = () => {
  const [empleados, setEmpleados] = useState([])    

  useEffect(() => {
    fetch('http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php')
    .then(res => res.json())
    .then(empleados => setEmpleados(empleados))
  }, [])

  return (
    <div>
      <h1 >Empleados</h1>
        <table border={1} className='table table-striped table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map(empleado => (
              <tr key={empleado.dni}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Empleados
