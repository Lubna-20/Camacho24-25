window.addEventListener("DOMContentLoaded", inicio);

const contenedor = document.querySelector(".col-lg-12");
const span = document.createElement("span");
contenedor.appendChild(span);

function inicio() {
  const url = "texto.txt";

  fetch(url)
    .then((Response) => Response.text())
    .then((data) => {
      mostrarDatos(data);
    });
  function mostrarDatos(data) {
    let nombres = [];
    nombres = data.split("\n");
    span.textContent = nombres;
  }
}
