

import PropTypes from 'prop-types';
import  { useState } from 'react';

function Frutal({ message, sendResponse }) {
    const [response, setResponse] = useState("");
  
    return (
      <div style={{ backgroundColor: "red", padding: "10px" }}>
        <h2>Frutal</h2>
        <p>Mensaje del Huerto: {message}</p>
        <input
          type="text"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
        <button onClick={() => sendResponse("frutal", response)}>
          Responder
        </button>
      </div>
    );
}

Frutal.propTypes = {
    message: PropTypes.string.isRequired,
    sendResponse: PropTypes.func.isRequired,
};

export default Frutal;
