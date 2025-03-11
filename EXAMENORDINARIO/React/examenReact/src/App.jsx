import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [puntos, setPuntos] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [imagenes, setImagenes] = useState([]); // Guardará las imágenes aleatorias
  const [random, setRandom] = useState(Math.floor(Math.random() * 6)); // Provincia aleatoria

  const url = "http://localhost/imagenesExamen/";
  const vectorProvincias = ["barcelona", "madrid", "caceres", "sevilla", "murcia", "toledo"];

  useEffect(() => {
    // Actualiza el tiempo cada segundo
    const intervaloTiempo = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    }, 1000);

    return () => clearInterval(intervaloTiempo);
  }, []);

  useEffect(() => {
    // Función para obtener 6 imágenes aleatorias
    const actualizarImagenes = () => {
      const provinciasAleatorias = [...vectorProvincias].sort(() => Math.random() - 0.5).slice(0, 6);
      setImagenes(provinciasAleatorias);
    };

    actualizarImagenes(); // Cargar al inicio

    // Intervalo para cambiar imágenes y provincia cada 5 segundos
    const intervaloImagenes = setInterval(actualizarImagenes, 5000);

    return () => clearInterval(intervaloImagenes);
  }, []);

  const comprobar = (item) => {

    if (item === vectorProvincias[random]) {
      setPuntos((prevPuntos) => prevPuntos + 1);
    } else {
      setPuntos((prevPuntos) => prevPuntos - 1);
    }
    const provinciasAleatorias = [...vectorProvincias].sort(() => Math.random() - 0.5).slice(0, 6);
    setImagenes(provinciasAleatorias);
  };

  return (
    <>
      <h1>Seleccione la provincia: {vectorProvincias[random]}</h1>
      <h2>Puntos: {puntos}</h2>
      <h3>Tiempo: {tiempo}</h3>
      <div className="img">
        {imagenes.map((item, index) => (
          <div key={index}>
            <img src={`${url}${item}.JPEG`} alt={item} onClick={() => comprobar(item)} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
