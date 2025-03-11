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

  const url = "alumnos.csv";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      mostrarDatos(data);
    });

  function mostrarDatos(data) {
    let cabecera = [];
    let separadorFilas = [];
    let separadorColumnas = [];

    separadorFilas = data.split("\n");

    const tr = document.createElement("tr");
    thead.appendChild(tr);
    cabecera = separadorFilas[0].split(",");
    cabecera.forEach((element) => {
      const th = document.createElement("th");
      th.textContent = element;
      tr.appendChild(th);
    });
    const th = document.createElement("th");
    th.textContent = "Evaulacion";
    tr.appendChild(th);

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

    const tdTodos = document.querySelectorAll("tr");
    
    let contador = 0;

    tdTodos.forEach((tr, i) => {
    

      let mediaNotas = 0;
      const celdas = tr.querySelectorAll("td");

      if (i > 0) {
        const tdMedia = document.createElement("td");
        tr.appendChild(tdMedia);
        celdas.forEach((td, index) => {
          if (index > 1 && index < 7) {
            mediaNotas += Number(td.textContent);
            if (Number(td.textContent) >= 5) {
              contador++;
            }
          }
        });
        mediaNotas /= celdas.length - 2;
       tdMedia.textContent=mediaNotas
      }

      switch (contador) {
        case 5:
          tr.style.backgroundColor = "green";
          break;
        case 4:
          tr.style.backgroundColor = "blue";
          break;
        case 3:
          tr.style.backgroundColor = "yellow";
          break;
        case 2:
          tr.style.backgroundColor = "pink";
          break;
        case 1:
          tr.style.backgroundColor = "orange";
          break;
        default:
          tr.style.backgroundColor = "red";
          break;
      }
      contador = 0;
    });
    
   

    tdTodos.forEach((tr, i) => {
        const celdas = tr.querySelectorAll("td");
        if(i>0){
            if (celdas[7].textContent >=5) { 
               celdas[7].style.backgroundColor="green"
              celdas[7].textContent = "APROBADO :)"
            } else {
               celdas[7].style.backgroundColor="red"
               celdas[7].textContent = "SUSPENSO :("
                
            }
        }      
    });
    
  }
}
