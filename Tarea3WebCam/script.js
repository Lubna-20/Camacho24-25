window.addEventListener('load' , inicio)

const botonMostrar = document.getElementById("mostrar");
const parrafo = document.getElementById("parrafo");


const url = "getWebcam.json";

function inicio() {
    fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => cargar(datos))
    .catch((error) => alert(error))
    .finally(() => alert("FIN."));
  }
  function cargar(datos) {
    datos.forEach(recorrer);
  }
 
    function reproducirVideo() {
      if (videos.length === 0) {
          parrafo.textContent = 'No se han cargado los vídeos.';
          return;
      }

      // Selecciona un vídeo aleatorio
      const videoAleatorio = videos[Math.floor(Math.random() * videos.length)];

      // Crea el elemento de vídeo
      const videoElement = document.createElement('video');
      videoElement.src = videoAleatorio.url;
      videoElement.width = 640;
      videoElement.height = 360;
      videoElement.controls = false;
      videoElement.autoplay = true;

      // Limpiar el contenido anterior y añadir el nuevo vídeo
      parrafo.innerHTML = '';
      parrafo.appendChild(videoElement);

      // Reproducir el vídeo durante 10 segundos
      setTimeout(() => {
          videoElement.pause(); // Pausa el vídeo después de 10 segundos
          parrafo.innerHTML = 'El vídeo ha terminado.';
      }, 10000); // 10 segundos = 10000 milisegundos
  }

  // Asignar la funcionalidad al botón
  botonMostrar.addEventListener('click', reproducirVideo);

