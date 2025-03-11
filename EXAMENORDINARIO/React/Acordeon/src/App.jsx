import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [preguntas, setPreguntas] = useState([]);

  // Cargar preguntas y respuestas una vez al montar el componente
  useEffect(() => {
    fetch('../public/PreguntasRespuestas.json')
      .then((respuesta) => respuesta.json())
      .then((json) => {
        setPreguntas(json.preguntas);
      })
      .catch((error) => {
        console.error("Error al cargar preguntas:", error);
      });
  }, []); // Dependencias vacías para ejecutarse solo una vez

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col text-center'>
            <h1 className='display-4'>
              <span className='text-primary'>Desarrollo de ReactJS</span>
            </h1>
          </div>
        </div>

        <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
          {preguntas.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`flush-heading${index}`}>
                <button className="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}>
                  {item.pregunta}
                </button>
              </h2>
              <div id={`flush-collapse${index}`} className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  {item.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
