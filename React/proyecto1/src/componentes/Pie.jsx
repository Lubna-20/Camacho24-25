import { useState } from "react"


function Pie() {
  const [numero, setNumero] = useState(Math.round(Math.random()*100));

  
  return (
    <div>Pie</div>
  )
}

export default Pie