window.addEventListener("load", inicio);

const url = "eleccionesUSA.csv";

const tabla = document.querySelector("table");
const cabeceraPadre = document.querySelector("thead");
const contenido = document.querySelector("tbody");

function inicio() {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      mostrar(data);
    })
    .finally(() => console.log("FIN"))
    .catch((error) => console.error(error));

  function mostrar(data) {
    
    const filas = data.split("\n");
    const encabezados = filas[0].split(";");

    // Crear la fila de cabecera y agregar cada encabezado
    const cabecera = document.createElement("tr");
    encabezados.forEach((cabez) => {
      const thPrimero = document.createElement("th");
      thPrimero.setAttribute("scope", "col");
      const span = document.createElement("span");
      const p=document.createElement('p')
      span.appendChild(p)
      p.style.backgroundColor = "cyan"; 
      p.textContent = cabez;
      thPrimero.appendChild(span);
      cabecera.appendChild(thPrimero);
    });
    cabeceraPadre.appendChild(cabecera);

    // Procesar cada fila de datos a partir de la segunda línea
    for (let i = 1; i < filas.length; i++) {
      // Separar los datos por columnas
      const columnas = filas[i].split(";");
      const fila = document.createElement("tr");

     
      const totalBiden = 0;
      const totalTrump = 0;

      // Crear y agregar cada celda a la fila
      columnas.forEach((columna, index) => {
        const td = document.createElement("td");
        td.textContent = columna;

        
console.log(columna[2])
        fila.appendChild(td);
      });

      // Agregar la fila completa al cuerpo de la tabla
      contenido.appendChild(fila);
    }
  }
}
