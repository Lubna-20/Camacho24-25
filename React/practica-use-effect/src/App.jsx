import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Empleados from './Empleados';
import Provincias from './Provincias';
import Ciudades from './Ciudades';
import Imagenes from './Imagenes';
import Futbolistas from './Futbolistas';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mi Aplicación
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/empleados">
                  Empleados
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/provincias">
                  Provincias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ciudades">
                  Ciudades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/imagenes">
                  Imágenes
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/futbolistas">
                  Futbolistas
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h1>Bienvenido</h1>} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/provincias" element={<Provincias />} />
          <Route path="/ciudades" element={<Ciudades />} />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/futbolistas" element={<Futbolistas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
