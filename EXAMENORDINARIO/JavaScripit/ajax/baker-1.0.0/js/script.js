window.addEventListener("load", inicio);

const listaPanaderias = [
  "Jesus",
  "Almagro",
  "Julia",
  "Andalusi",
  "JoseAntonio",
  "el trigal",
];
const listaEnlaces = [
  "panaderiajesus.com",
  "panalmagro.es",
  "panaderiasjulia.es",
  "panaderialaandalusi.com",
  "panaderiajoseantonio.com",
  "eltrigal.com",
];

const enlacesPrincipales = document.querySelectorAll(
  ".navbar-nav > a, .navbar-nav .dropdown-toggle"
);

enlacesPrincipales.forEach((item, indice) => {
  item.textContent = listaPanaderias[indice];

  item.setAttribute("href", "https://" + listaEnlaces[indice]);
});
const numerosAleatorios = document.querySelectorAll(".display-5");
introducirNumAleatorios(numerosAleatorios);

function inicio() {
  const url = "/ajax/baker-1.0.0/js/getPanaderos.json";
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))
    .finally(() => console.log("vamosssss,funciona"))
    .catch((error) => console.log(error));

  function mostrarDatos(datos) {
    datos.forEach((item, index) => {
      const imgPanaderos = document.querySelectorAll(".team-item img")[index];
      imgPanaderos.setAttribute("src", item.imagen);

      const nombrePanaderos =
        document.querySelectorAll(".team-title h5")[index];
      nombrePanaderos.textContent = item.nombre;
      const oficioPanaderos =
        document.querySelectorAll(".team-title span")[index];
      if (item.funcion) {
        oficioPanaderos.textContent = item.funcion;
      } else if (item.ingredientes) {
        oficioPanaderos.textContent = item.ingredientes;
      }
    });
  }
}
function introducirNumAleatorios(array) {
  let num1 = Math.floor(Math.random() * 20);
  let num2 = Math.floor(Math.random() * 200);
  let num3 = Math.floor(Math.random() * 2000);
  let num4 = Math.floor(Math.random() * 2000);
  array.forEach((item, indice) => {
    switch (indice) {
      case 0:
        item.textContent = num1;
        break;
      case 1:
        item.textContent = num2;
        break;
      case 2:
        item.textContent = num3;
        break;
      case 3:
        item.textContent = num4;
        break;
    }
  });
}
