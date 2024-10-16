window.addEventListener("load", inicio);

//const url = "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php"
const url = "getCiudades.php.json";
//Se identifica el contenedor del html donde van los datos

function inicio() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => cargar(datos))
    .finally(() => alert("FIN."))
    .catch((error) => alert(error));
}

function cargar(datos) {
  datos.forEach(recorrer);
}
function recorrer(item, index) {
  alert(item.ciudad_nombre);
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

  let imagenCiudad = documen.createElement("td");
  imagenCiudad.innerHTML = item.imagen;
  fila.appendChild(imagenCiudad);

  let mapaCiudades = document.createElement("td");
  mapaCiudades.innerHTML = item.mapa;
  fila.appendChild(mapaCiudades);
}
