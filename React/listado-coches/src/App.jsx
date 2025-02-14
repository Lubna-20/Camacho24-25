import { useEffect, useState } from 'react'
import {Link, Route, Router, Routes} from "react-router-dom";
import './App.css'
import Listado1 from './componentes/Listado1';
import Listado2 from './componentes/Listado2';
import Listado3 from './componentes/Listado3';
import Listado4 from './componentes/Listado4';
import Listado5 from './componentes/Listado5';
function App() {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    fetch ("coches.json")
     .then(response => response.json())
     .then(data => setDatos(data))
  })

  console.log(datos)
  return (
    <>
    <Router>
      <div className="cintainer">
        <nav className="navbar navbar-expand-lg fixed-top justify-content-center">
          <ul className='navbar-nav'>
            <li className='nav-item'>
             <Link className='nav-link' to="/listado1">Listado-1</Link>
            </li>
            <li className='nav-item'>
             <Link className='nav-link' to="/listado2">Listado-2</Link>
            </li>
            <li className='nav-item'>
             <Link className='nav-link' to="/listado3">Listado-3</Link>
            </li>
            <li className='nav-item'>
             <Link className='nav-link' to="/listado4">Listado-4</Link>
            </li>
            <li className='nav-item'>
             <Link className='nav-link' to="/listado5">Listado-5</Link>
            </li>
          </ul>
        <Routes>
          <Route path="/listado1" element={<Listado1 coches={datos} />} />
          <Route path="/listado2" element={<Listado2 coches={datos} />} />
          <Route path="/listado3" element={<Listado3 coches={datos} />} />
          <Route path="/listado4" element={<Listado4 coches={datos} />} />
          <Route path="/listado5" element={<Listado5 coches={datos} />} />
        </Routes>
      </nav>
      </div>
    </Router>
      
    </>
  )
}

export default App
