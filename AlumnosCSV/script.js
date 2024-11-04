window.addEventListener("DOMContentLoaded", inicio);
const tabla = document.querySelector("table");
const cabecera = document.querySelector("tr thead");
const contenidos = document.querySelector("tbody");

function inicio() {
  fetch("alumnos.csv")
    .then((respuesta) => respuesta.text())
    .then((data) => mostrar(data));
}
function mostrar(data) {
  const filas = data.split("\n"); // Dividir en filas
  const encabezados = filas[0].split(","); // Obtener encabezados
  const cabecera = document.createElement("tr");
  //cabecera: datos de filas[0] que se manda a th
  encabezados.forEach((cab, indice) => {
    const th = document.createElement("th");
    th.setAttribute("scope", "col");
    const sp = document.createElement("sp");
    sp.style.color = "blue";
    sp.textContent = cab;
    th.appendChild(sp);
    cabecera.appendChild(th);
  });
  //contenidos
  tabla.appendChild(cabecera);
  console.log(filas);
  filas.forEach((estado, indice) => {
    if (indice > 0) {
      const columnas = estado.split(",");
      const fila = document.createElement("tr");

      columnas.forEach((celda, posicion) => {
        const td = document.createElement("td");
        td.textContent = celda;
        fila.appendChild(td);
      });

      contenidos.appendChild(fila);
    }

    tabla.appendChild(contenidos);
  });

  let tr = document.querySelectorAll("tr");
  tr.forEach((element, indice) => {
    if (indice > 0) {
      let td = element.querySelectorAll("td");
      let modulosAprobados = 0;
      for (let i = 2;  i <= 6; i++) {
        if (Number(td[i].textContent) >= 5) {
          modulosAprobados++;
        }
      }
      if (modulosAprobados === 5) {
        element.style.backgroundColor = "green";
      } else if (modulosAprobados === 4) {
        element.style.backgroundColor = "blue";
      } else if (modulosAprobados === 3) {
        element.style.backgroundColor = "yellow";
      } else if (modulosAprobados === 2) {
        element.style.backgroundColor = "pink";
      } else if (modulosAprobados === 1) {
        element.style.backgroundColor = "orange";
      } else if (modulosAprobados === 0) {
        element.style.backgroundColor = "red";
      }
    }
  });
}
