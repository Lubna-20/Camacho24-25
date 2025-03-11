window.addEventListener("load", inicio);

const listaCocineros = [
  "Carlos",
  "Marta",
  "Luis",
  "Sofía",
  "Roberto",
  "Elena",
  "Andrés",
  "Gabriela",
];
const listaEnlacesCocineros = [
  "https://www.jamieoliver.com/",
  "https://www.gordonramsay.com/",
  "https://www.rachaelray.com/",
  "https://www.marthastewart.com/",
  "https://www.emmycooks.com/",
  "https://www.bobbyflay.com/",
  "https://www.joshlikes.com/",
  "https://www.juliachilds.com/",
];

console.log(listaEnlacesCocineros);

const enlacesPrincipales = document.querySelectorAll(".navbar > ul > li > a");

enlacesPrincipales.forEach((item, indice) => {
  item.innerHTML = listaCocineros[indice];
  item.href = listaEnlacesCocineros[indice];
});

const numeroAletorios = document.querySelectorAll(".purecounter");
numeroAletorios.forEach((item, indice) => {
  let num1 = Math.floor(Math.random() * 50);
  let num2 = Math.floor(Math.random() * 500);
  let num3 = Math.floor(Math.random() * 5000);
  let num4 = Math.floor(Math.random() * 50000);

  switch (indice) {
    case 0:
      item.setAttribute("data-purecounter-end", num1);
      break;
    case 1:
      item.setAttribute("data-purecounter-end", num2);

      break;
    case 2:
      item.setAttribute("data-purecounter-end", num3);
      break;
    case 3:
      item.setAttribute("data-purecounter-end", num4);
      break;

    default:
      break;
  }
});

function inicio() {
  const urlPlatos = "/ajax/Yummy/assets/js/getPlatos.json";

  fetch(urlPlatos)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))
    .finally(() => console.log("vamosssss,funciona"))
    .catch((error) => console.log(error));

  function mostrarDatos(datos) {
    datos.forEach((element, index) => {
      const img = document.querySelectorAll(".menu-img.img-fluid")[index];
      img.src = element.imagen;
      const nombre = document.querySelectorAll(".col-lg-4.menu-item h4")[index];
      nombre.textContent = element.nombre;
      const ingredientes = document.querySelectorAll(".ingredients")[index];
      ingredientes.textContent = element.ingredientes;

      const precios = document.querySelectorAll(".price")[index];
      precios.textContent = element.precio + "€";
    });
  }

  const urlCocinero = "/ajax/Yummy/assets/js/getCocinero.json";

  fetch(urlCocinero)
    .then((response) => response.json())
    .then((datos) => mostrarDatosCocineros(datos))
    .finally(() => console.log("vamosssss,funciona"))
    .catch((error) => console.log(error));

  function mostrarDatosCocineros(datos) {
    datos.forEach((element, index) => {
      const img = document.querySelectorAll(".col-lg-2.text-center img")[index];
      img.src = element.imagen;

      const nombre = document.querySelectorAll(".testimonial-item h3")[index];
      if (nombre) {
        nombre.innerHTML = element.nombre;
      }

      const descripcion = document.querySelectorAll(
        ".bi.bi-quote.quote-icon-left"
      )[index];

      descripcion.textContent = element.descripcion;
    });
  }
}
