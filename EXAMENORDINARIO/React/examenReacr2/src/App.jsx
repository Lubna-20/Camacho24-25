import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import { useEffect } from 'react'

function App() {
  const [notas, setNotas] = useState([])
  useEffect(() => {
    fetch('../public/notas.json')
      .then((respuesta) => respuesta.json())
      .then((json) => {
        setNotas(json)
      })
      .catch((error) => {
        console.error("Error al cargar notas:", error);
      });
  }, [])



  return (



    <>
      <p>Mayor nota media: {
        Math.max(...notas.map(alumno => {
          const valoresNotas = Object.values(alumno.notas); // Extrae todas las notas del alumno
          const promedio = valoresNotas.reduce((acum, nota) => acum + nota, 0) / valoresNotas.length;
          return promedio;
        }))
      } </p>
      {notas.map((nota, index) => (
        <div key={index}>
          <h1>{nota.nombre} {nota.apellido}</h1>
          <div className="notas">
            <div className="nota">
              <h2>Nota 1</h2>
              <p>{nota.notas.nota1}</p>
            </div>
            <div className="nota">
              <h2>Nota 2</h2>
              <p>{nota.notas.nota2}</p>
            </div>
            <div className="nota">
              <h2>Nota 3</h2>
              <p>{nota.notas.nota3}</p>
            </div>
            <div className="nota">
              <h2>Nota 4</h2>
              <p>{nota.notas.nota4}</p>
            </div>
            <div className="nota">
              <h2>Nota 5</h2>
              <p>{nota.notas.nota5}</p>
            </div>
            <div className="nota">
              <h2>Nota 6</h2>
              <p>{nota.notas.nota6}</p>
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default App
