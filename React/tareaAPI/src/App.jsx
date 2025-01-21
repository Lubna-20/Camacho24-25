import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datos0 from './componentes/Datos0'

function App() {
 
  return (
   
  <div>
<h1>DATOS DE LA API:</h1>
<Datos0 url={'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php'}></Datos0>
  </div>
  );
}

export default App
