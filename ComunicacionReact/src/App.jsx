
import { useState } from 'react';
import './App.css'
import Frutal from './componentes/Frutal'
import Hortaliza from './componentes/Hortaliza'
import Huerto from './componentes/Huerto'

function App() {
  
  const [messageToHortaliza, setMessageToHortaliza] = useState("");
  const [messageToFrutal, setMessageToFrutal] = useState("");
  const [responses, setResponses] = useState({
    hortaliza: "",
    frutal: "",
  });

  // Funciones para enviar mensajes a los hijos
  const sendMessageToHortaliza = (msg) => setMessageToHortaliza(msg);
  const sendMessageToFrutal = (msg) => setMessageToFrutal(msg);

  // Función para recibir respuestas de los hijos
  const handleResponse = (component, response) => {
    setResponses((prev) => ({ ...prev, [component]: response }));
  };

  return (
    <div>
      <Huerto
        sendMessageToHortaliza={sendMessageToHortaliza}
        sendMessageToFrutal={sendMessageToFrutal}
        responses={responses}
      />
      <Hortaliza message={messageToHortaliza} sendResponse={handleResponse} />
      <Frutal message={messageToFrutal} sendResponse={handleResponse} />
    </div>
  );
}

export default App
