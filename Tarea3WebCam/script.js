window.addEventListener('load' , inicio)

const url = "getWebcam.php.json";

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
  function recorrer(item, index) {
    alert(item.lugar);
 
    let cuerpo = document.body
    let contenedor = document.querySelector('container')
    cuerpo.appendChild(contenedor)
   

    let boton = document.getElementById("mostrar")
    cuerpo.appendChild(boton)
    function cargarImagen(){
    }
    boton.addEventListener("click",cargarImagen);


    function cargarImagen(){
      let   
    }
  }
  