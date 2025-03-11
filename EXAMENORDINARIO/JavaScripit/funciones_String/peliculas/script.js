window.addEventListener("DOMContentLoaded", inicio);

function inicio() {
  const contenedor = document.querySelector(".col-lg-12");
  const tabla = document.createElement("table");
  tabla.className = "table";
  const tbody = document.createElement("tbody");
  const thead = document.createElement("thead");
  thead.className = "thead-dark";

  contenedor.appendChild(tabla);
  tabla.appendChild(thead);

  tabla.appendChild(tbody);

  const url = "peliculas.csv";
  fetch(url)
    .then((Response) => Response.text())
    .then((data) => {
      mostrarDatos(data);
    });

  function mostrarDatos(data) {
    let cabecera = [];
    let separadorFilas = [];
    let separadorColumnas = [];

    separadorFilas = data.split("\n");

    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    cabecera = separadorFilas[0].split(",");
    cabecera.forEach((element) => {
      const td = document.createElement("td");
      td.textContent = element;
      td.style.color = "red";
      td.style.fontSize = "25px";
      td.style.backgroundColor = "yellow";
      tr.appendChild(td);
    });
    separadorFilas.forEach((element, i) => {
      if (i > 0) {
        separadorColumnas = element.split(",");
        const tr1 = document.createElement("tr");
        tbody.appendChild(tr1);
        separadorColumnas.forEach((element) => {
          const td = document.createElement("td");
          td.textContent = element;
          tr1.appendChild(td);
        });
      }
    });
    const trTodos = tbody.querySelectorAll("tr");
    trTodos.forEach((tr, i) => {
      const celdas = tr.querySelectorAll("td");
      console.log(celdas);
      if (i > 0) {
        if (Number(celdas[4].textContent) >= 2000) {
          tr.style.backgroundColor = "pink";
        } else if (Number(celdas[4].textContent) < 2000) {
          tr.style.backgroundColor = "green";
        }
      }
    });
  }
}
