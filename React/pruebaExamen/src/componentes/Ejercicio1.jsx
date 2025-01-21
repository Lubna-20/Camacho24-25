import React from "react"
function Ejercicio1({vectorNumRandom}) {

 const valorMax = Math.max(...vectorNumRandom)
let maximo = vectorRandom(0)
 vectorNumRandom.map((valor,index)=>{
  if (valor > maximo) {
    maximo = vectorNumRandom(index)
  }
 })

 const valorMin = Math.min(...vectorNumRandom)
 
  
  return (
    <>
      <p>{vectorNumRandom}</p>
      <h2>Estadisticas</h2>
      <p>{valorMax}</p>
    </>
  )
}


export default Ejercicio1