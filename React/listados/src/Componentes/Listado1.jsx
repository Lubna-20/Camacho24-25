import { useState, useEffect } from 'react'

const Listado1 = () => {
    const [mensajes, setMensajes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch('http://localhost/serviciosChat/listadoMensajes.php')
        .then((respuesta)=> respuesta.json()).then((x)=> setMensajes(x))
        fetch('http://localhost/serviciosChat/listadoUsuarios.php')
        .then((respuesta)=> respuesta.json()).then((x)=> setUsuarios(x))
    },[])
  return (
    <div>
        <p>Listado 1</p>
        <button className='btn btn-info'>Listar-1</button>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Mensaje</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mensajes.map((msj)=>(
                                    <tr key={msj.id}>
                                        <td>{msj.usuario}</td>
                                        <td>{msj.mensaje}</td>
                                        <td>{msj.fecha}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-6">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>PWD</th>
                                <th>Activo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usu)=>(
                                    <tr key={usu.id}>
                                        <td>{usu.nombre}</td>
                                        <td>{usu.email}</td>
                                        <td>{usu.pwd}</td>  
                                        <td>{usu.activo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Listado1