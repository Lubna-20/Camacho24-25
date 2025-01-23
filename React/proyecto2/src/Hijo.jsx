import React from 'react'

const Hijo = ({ nombre,calificacion }) => {
  return (
    <div>
     <p>Alumno:{nombre}</p>
     <p>calificacion:{calificacion}</p>
    </div>
  )
}

export default Hijo