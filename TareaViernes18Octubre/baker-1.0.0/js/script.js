window.addEventListene("load", inicio);

url = "getPanaderos.json";

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
const eliminarMenu = document.querySelectorAll("navbar-nav")

remplazarMenu()

function remplazarMenu() {
    eliminarMenu.forEach((element) => {
      element.remove();
    });
  }