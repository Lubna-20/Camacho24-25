import { useState, useEffect } from 'react'

export const Listado2 = () => {
    const [datos, setDatos] = useState([]);
    const [url, setUrl] = useState("")
    const[posicion, setPosicion] = useState([0])
    //funcion que recoge el evento botonx
    const listadoDatos = (url,posicion)=>{
        setUrl(url)
        setPosicion(posicion)
    }
    useEffect(() => {
        fetch(url).then(respuesta => respuesta.json()
        .then((x)=> setDatos(x)))
    },[url])
  return (
    <div>
        <div className="container">
            <div className="d-flex justify-content-center">
                <button className='btn btn-info' onClick={()=>listadoDatos('http://localhost/serviciosChat/listadoUsuarios.php',1)}>Listado 1</button>
                <button className='btn btn-danger' onClick={()=>listadoDatos('http://localhost/serviciosChat/listadoProvincias.php',2)}>Listado 2</button>
                <button className='btn btn-source' onClick={()=>listadoDatos('http://localhost/serviciosChat/listadoAlturas.php',3)}>Listado 3</button>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <h1>LISTADOS</h1>
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
                                (posicion === 1)&& datos.map((dato)=>(
                                    <tr key={dato.id}>
                                        <td>{dato.nombre}</td>
                                        <td>{dato.email}</td>
                                        <td>{dato.pwd}</td>  
                                        <td>{dato.activo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Provincia</th>
                                <th>Votos PA</th>
                                <th>Votos PB</th>
                                <th>Votos PC</th>
                                <th>Votos PD</th>
                                <th>Representantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (posicion === 2)&& datos.map((dato)=>(
                                    <tr key={dato.id}>
                                        <td>{dato.nombreProvincia}</td>
                                        <td>{dato.votosPA}</td>
                                        <td>{dato.votosPB}</td>
                                        <td>{dato.votosPC}</td>
                                        <td>{dato.votosPD}</td>
                                        <td>{dato.Representantes}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Provincia</th>
                                <th>Situacion Alt Max</th>
                                <th>Altura Maxima</th>
                                <th>Situacion Alt Min</th>
                                <th>Altura Minima</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (posicion === 3)&& datos.map((dato)=>(
                                    <tr key={dato.id}>
                                        <td>{dato.Provincia}</td>
                                        <td>{dato.SituacionAltMax}</td>
                                        <td>{dato.AlturaMaxima}</td>
                                        <td>{dato.SituacionAltMin}</td>
                                        <td>{dato.AlturaMinima}</td>
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
