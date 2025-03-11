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

  const url = "eleccionesUSA.csv";
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
    cabecera = separadorFilas[0].split(";");
    cabecera.forEach((element) => {
      const th = document.createElement("th");
      th.innerHTML = element;
      thead.appendChild(th);
    });
    separadorFilas.forEach((element, i) => {
      separadorColumnas = element.split(";");
      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      if (i > 0) {
        separadorColumnas.forEach((element) => {
          const td = document.createElement("td");
          td.innerHTML = element;
          tr.appendChild(td);
        });
        console.log(separadorColumnas);
      }
    });
    let representasBiden = 0;
    let representasTrump = 0;

    const tr = tbody.querySelectorAll("tr");
    tr.forEach((tr, i) => {
      const celdas = tr.querySelectorAll("td");
      console.log(celdas);
      if (i > 0) {
        const td = document.createElement("td");
        const td2 = document.createElement("td");

        if (Number(celdas[2].textContent) > Number(celdas[3].textContent)) {
          td.textContent = "Biden";
          td2.textContent = celdas[1].textContent;
          representasBiden += Number(celdas[1].textContent);
          celdas[2].style.backgroundColor = "blue";
        } else if (
          Number(celdas[2].textContent) < Number(celdas[3].textContent)
        ) {
          celdas[3].style.backgroundColor = "red";
          td.textContent = "Trump";
          td2.textContent = celdas[1].textContent;
          representasTrump += Number(celdas[1].textContent);
        }
        tr.appendChild(td);
        tr.appendChild(td2);
      }
    });

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.textContent = "Representantes de Trump-->" + representasTrump;
    p2.textContent = "Representantes de Biden-->" + representasBiden;
    contenedor.append(p1, p2);
  }
}
