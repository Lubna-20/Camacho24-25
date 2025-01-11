

import PropTypes from 'prop-types';
import { useState } from 'react';

function Hortaliza({ message, sendResponse }) {
    const [response, setResponse] = useState("");

    return (
      <div style={{ backgroundColor: "#20B2AA", padding: "10px" }}>
        <h2>Hortaliza</h2>
        <p>Mensaje del Huerto: {message}</p>
        <input
          type="text"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
        <button onClick={() => sendResponse("hortaliza", response)}>
          Responder
        </button>
      </div>
    );
}

Hortaliza.propTypes = {
    message: PropTypes.string.isRequired,
    sendResponse: PropTypes.func.isRequired,
};

export default Hortaliza
