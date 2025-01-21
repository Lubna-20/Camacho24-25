import React from 'react'

function Datos0({url}) {
    const Datos0 = () => {
        const [datos, setDatos] = useState([]); // Estado para guardar los datos
        const [loading, setCarga] = useState(true); // Estado para manejar el loading

        useEffect(() => {
        fetch('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php')
        .then((response) => {
        if (!response.ok) {
            tkrow new Error("Error al obtener los datos");
        }
        return response.json(); 
        })
        .then((empleados) => {
        setEmpleados(empleados)
        })
        }, [])
    }
  return (
    <div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((item,index)=> (
                    <tr key={index}>
                        <th>{item.nombre}</th>
                        <th>{item.direccion}</th>
                        <th>{item.cargo}</th>
                        <th>{item.telefono}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  )
}

export default Datos0