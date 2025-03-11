window.addEventListener("DOMContentLoaded", inicio); // * Se ejecuta la función inicio cuando el DOM esté completamente cargado

function inicio() {
  const contenedor = document.querySelector(".col-lg-12"); // * Se selecciona el contenedor donde irá la tabla
  const tabla = document.createElement("table"); // * Se crea la tabla
  tabla.className = "table"; // * Se le asigna la clase CSS
  const tbody = document.createElement("tbody"); // * Se crea el cuerpo de la tabla
  const thead = document.createElement("thead"); // * Se crea la cabecera de la tabla
  thead.className = "thead-dark";

  // ? Se añaden los elementos creados al contenedor principal
  contenedor.appendChild(tabla);
  tabla.appendChild(thead);
  tabla.appendChild(tbody);

  const url = "alumnos.csv"; // * Archivo CSV que contiene los datos
  fetch(url)
    .then((response) => response.text()) // * Se obtiene el contenido del archivo en formato texto
    .then((data) => {
      mostrarDatos(data); // * Se llama a la función para procesar los datos
    });

  function mostrarDatos(data) {
    let cabecera = [];
    let separadorFilas = [];
    let separadorColumnas = [];

    separadorFilas = data.split("\n"); // * Se separan las filas del CSV

    const tr = document.createElement("tr"); // * Se crea una fila para la cabecera
    thead.appendChild(tr);
    cabecera = separadorFilas[0].split(","); // * Se extraen los encabezados de la primera línea
    cabecera.forEach((element) => {
      const th = document.createElement("th"); // * Se crean las celdas de la cabecera
      th.textContent = element;
      tr.appendChild(th);
    });
    const th = document.createElement("th");
    th.textContent = "Evaluación"; // * Se añade una columna extra para la evaluación
    tr.appendChild(th);

    // ? Se procesan las filas de datos
    separadorFilas.forEach((element, i) => {
      if (i > 0) { // * Se omite la cabecera
        separadorColumnas = element.split(",");
        const tr1 = document.createElement("tr"); // * Se crea una nueva fila
        tbody.appendChild(tr1);
        separadorColumnas.forEach((element) => {
          const td = document.createElement("td"); // * Se crean las celdas
          td.textContent = element;
          tr1.appendChild(td);
        });
      }
    });

    const tdTodos = document.querySelectorAll("tr"); // * Se seleccionan todas las filas de la tabla
    
    let contador = 0;

    tdTodos.forEach((tr, i) => {
      let mediaNotas = 0;
      const celdas = tr.querySelectorAll("td");

      if (i > 0) { // * Se omite la cabecera
        const tdMedia = document.createElement("td"); // * Se crea una celda para la evaluación
        tr.appendChild(tdMedia);
        celdas.forEach((td, index) => {
          if (index > 1 && index < 7) { // * Se toman en cuenta solo las notas
            mediaNotas += Number(td.textContent);
            if (Number(td.textContent) >= 5) {
              contador++; // * Se cuenta la cantidad de notas aprobadas
            }
          }
        });
        mediaNotas /= celdas.length - 2; // * Se calcula la media de las notas
        tdMedia.textContent = mediaNotas; // * Se muestra la media en la celda
      }

      // ? Se cambia el color de fondo según la cantidad de notas aprobadas
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
      contador = 0; // * Se reinicia el contador para la siguiente fila
    });
    
    // ? Se asigna "APROBADO" o "SUSPENSO" según la nota final
    tdTodos.forEach((tr, i) => {
        const celdas = tr.querySelectorAll("td");
        if(i > 0) { // * Se omite la cabecera
            if (celdas[7].textContent >= 5) { 
               celdas[7].style.backgroundColor = "green";
               celdas[7].textContent = "APROBADO :)";
            } else {
               celdas[7].style.backgroundColor = "red";
               celdas[7].textContent = "SUSPENSO :(";
            }
        }      
    });
  }
}
