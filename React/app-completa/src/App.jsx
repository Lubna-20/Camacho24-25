import { useState } from 'react'
import './App.css'
import Galeria from './componentes/Galeria';
import Detalle from './componentes/Detalle';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="app">
      <h1>Galería de Fotos y Videos</h1>
      <div className="contenedor">
        <Galeria onSelectItem={setSelectedItem} />
        <Detalle item={selectedItem} />
      </div>
    </div>
  );
}

export default App
