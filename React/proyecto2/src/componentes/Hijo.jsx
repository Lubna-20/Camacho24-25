import React from "react"
function Hijo() {

 
  const hijo = ({ nombre, calificacion }) => { 
  return (
    <>
    <p>Calificacion: {calificacion} </p>
    <p>nombre: {nombre}</p>
    </>
  )
}
}

export default Hijo