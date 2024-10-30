window.addEventListener("load", inicio);

const url = "eleccionesUSA.csv";

const tabla = document.querySelector("table");
const cabeceraPadre = document.querySelector("tr thead");
const contenido = document.querySelector("tbody");

function inicio() {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      mostrar(data);
    })
    .finally(() => comsole.log("FIN"))
    .catch((error) => console.error());
  function mostrar(data) {
    const filas = data.split("\n");
    const encabezados = filas[0].split(";");
    const cabecera = document.createElement("tr");
    encabezados.forEach((cabez, index) => {
      const thPrimero = document.createElement("th");
      thPrimero.setAttribute("scope", "col");
      const span = document.createElement("span");
      span.textContent = cabez;
      console.log(cabez);
      thPrimero.appendChild(span);
      cabeceraPadre.appendChild(thPrimero);
    });
  }
}
