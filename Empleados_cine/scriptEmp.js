window.addEventListener("DOMContentLoaded", inicio);
const tabla = document.querySelector("table");
const cabecera = document.querySelector("tr thead");
const contenidos = document.querySelector("tbody");

function inicio() {
  fetch("empleados.csv")
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
  tr.forEach((element,indice) => {
    let td=element.querySelectorAll('td')

    if (indice>0) {
        if (Number(td[1].textContent)<=30) {
            element.style.backgroundColor="green"
        }else if(Number(td[1].textContent)>30){
            element.style.backgroundColor="yellow"
        }
        if (Number(td[3].textContent)>100000) {
            td[3].style.color="red"
            td[3].style.fontSize="25px"
        }
    }
  });
}
