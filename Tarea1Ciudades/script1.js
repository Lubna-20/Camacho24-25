window.addEventListener("load", inicio);

//const url = "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php"
const url = "getCiudades.json";
//Se identifica el contenedor del html donde van los datos
const tabla=document.querySelector(".table")  //faltabaaaaaaaaaaaaaaa
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
  let fila = document.createElement("tr");

  let idCiudad = document.createElement("td");
  idCiudad.textContent = item.ciudad_id;
  fila.appendChild(idCiudad);

  let nombreCiudad = document.createElement("td");
  nombreCiudad.textContent = item.ciudad_nombre;
  fila.appendChild(nombreCiudad);

  let poblacionCiudad = document.createElement("td");
  poblacionCiudad.textContent = item.ciudad_poblacion;
  fila.appendChild(poblacionCiudad);

  let videoCiudad = document.createElement("td");
  videoCiudad.innerHTML = item.video;
  fila.appendChild(videoCiudad);

  let imagenCiudad = document.createElement("td");
  imagenCiudad.innerHTML = item.imagen;
  fila.appendChild(imagenCiudad);

  let mapaCiudades = document.createElement("td");
  mapaCiudades.innerHTML = item.mapa;
  fila.appendChild(mapaCiudades);
  tabla.appendChild(fila) //faltabaaaaaaaaaaaaaaaaaa
  
}