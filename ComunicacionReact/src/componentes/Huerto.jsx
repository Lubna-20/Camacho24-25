

import  { useState } from 'react';
import PropTypes from 'prop-types';

function Huerto({ sendMessageToHortaliza, sendMessageToFrutal, responses }) {
    const [messageToHortaliza, setMessageToHortaliza] = useState("");
    const [messageToFrutal, setMessageToFrutal] = useState("");
  
  return (
    <div style={{ backgroundColor: "#FFA07A", padding: "10px" }}>
    <h2>Huerto</h2>
    <div>
      <label>Mensaje para Hortaliza:</label>
      <input
        type="text"
        value={messageToHortaliza}
        onChange={(e) => setMessageToHortaliza(e.target.value)}
      />
      <button onClick={() => sendMessageToHortaliza(messageToHortaliza)}>
        Enviar
      </button>
    </div>
    <p>Hortaliza dice: {responses.hortaliza}</p>

    <div>
      <label>Mensaje para Frutal:</label>
      <input
        type="text"
        value={messageToFrutal}
        onChange={(e) => setMessageToFrutal(e.target.value)}
      />
      <button onClick={() => sendMessageToFrutal(messageToFrutal)}>
        Enviar
      </button>
    </div>
    <p>Frutal dice: {responses.frutal}</p>
  </div>
  )
}

Huerto.propTypes = {
  sendMessageToHortaliza: PropTypes.func.isRequired,
  sendMessageToFrutal: PropTypes.func.isRequired,
  responses: PropTypes.shape({
    hortaliza: PropTypes.string,
    frutal: PropTypes.string,
  }).isRequired,
};

export default Huerto;


