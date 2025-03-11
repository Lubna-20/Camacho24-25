window.addEventListener("load", inicio);

// variables donde se almecenzas las representanras

let partidoA = 0;
let partidoB = 0;
let partidoC = 0;
let partidoD = 0;
let arrayPartidoA = [];
let arrayPartidoB = [];
let arrayPartidoC = [];
let arrayPartidoD = [];
let votosPartidoA = 0;
let votosPartidoB = 0;
let votosPartidoC = 0;
let votosPartidoD = 0;
let ordenGanadores = [];

function inicio() {
  fetch("getRepresentantes.json")
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((datos) => mostrarDatos(datos))
    .catch((error) => console.error("Error al cargar el fichero JSON:", error));

  function mostrarDatos(datos) {
    datos.forEach((itemDatos, indice) => {
      votosPartidoA += itemDatos.votosPA;
      votosPartidoB += itemDatos.votosPB;
      votosPartidoC += itemDatos.votosPC;
      votosPartidoD += itemDatos.votosPD;

      if (
        itemDatos.votosPA > itemDatos.votosPB &&
        itemDatos.votosPA > itemDatos.votosPC &&
        itemDatos.votosPA > itemDatos.votosPD
      ) {
        partidoA += itemDatos.Representantes;
        arrayPartidoA.push(itemDatos.nombreProvincia);
      } else if (
        itemDatos.votosPB > itemDatos.votosPA &&
        itemDatos.votosPB > itemDatos.votosPC &&
        itemDatos.votosPB > itemDatos.votosPD
      ) {
        partidoB += itemDatos.Representantes;
        arrayPartidoB.push(itemDatos.nombreProvincia);
      } else if (
        itemDatos.votosPC > itemDatos.votosPA &&
        itemDatos.votosPC > itemDatos.votosPB &&
        itemDatos.votosPC > itemDatos.votosPD
      ) {
        partidoC += itemDatos.Representantes;
        arrayPartidoC.push(itemDatos.nombreProvincia);
      } else if (
        itemDatos.votosPD > itemDatos.votosPA &&
        itemDatos.votosPD > itemDatos.votosPB &&
        itemDatos.votosPD > itemDatos.votosPC
      ) {
        partidoD += itemDatos.Representantes;
        arrayPartidoD.push(itemDatos.nombreProvincia);
      }
    });

    // Crear un elemento para mostrar los resultados
    const resultadosDiv = document.createElement("div");
    resultadosDiv.style.margin = "20px";
    resultadosDiv.style.fontFamily = "Arial, sans-serif";

    // Agregar texto de resultados
    resultadosDiv.innerHTML = `
    <h2>Resultados de Representantes</h2>
    <p>Partido A: ${partidoA} representantes</p>
    <p>Partido B: ${partidoB} representantes</p>
    <p>Partido C: ${partidoC} representantes</p>
    <p>Partido D: ${partidoD} representantes</p>
    <h3>Provincias Ganadoras</h3>
    <p>Partido A: ${arrayPartidoA.join(", ")}</p>
    <p>Partido B: ${arrayPartidoB.join(", ")}</p>
    <p>Partido C: ${arrayPartidoC.join(", ")}</p>
    <p>Partido D: ${arrayPartidoD.join(", ")}</p>
    <h3>Provincias Ganadoras</h3>
    <p>Partido A: ${votosPartidoA} votos</p>
    <p>Partido B: ${votosPartidoB} votos</p>
    <p>Partido C: ${votosPartidoC} votos</p>
    <p>Partido D: ${votosPartidoD} votos</p>
  `;

    // Agregar el div a la página
    document.body.appendChild(resultadosDiv);
    ordenGanadoresPartidos();
  }
  function ordenGanadoresPartidos() {
    // Crear un array con los partidos y sus representantes
    const partidosArray = [
      { nombre: "Partido A", representantes: partidoA },
      { nombre: "Partido B", representantes: partidoB },
      { nombre: "Partido C", representantes: partidoC },
      { nombre: "Partido D", representantes: partidoD },
    ];

    // Ordenar el array de mayor a menor según el número de representantes
    partidosArray.sort((a, b) => b.representantes - a.representantes);

    // Agregar los partidos ordenados al array de ganadores
    partidosArray.forEach((partido) => {
      ordenGanadores.push(partido.nombre, partido.representantes);
    });
    const div = document.querySelector("div");
    const span = document.createElement('span')
    div.style.marginTop = "20px";

    span.innerHTML = `<h3>Orden de Ganadores</h3>`;
    
    ordenGanadores.forEach((item, index) => {
      if (index % 2 === 0) {
        span.innerHTML += `<p>${item}: ${
          ordenGanadores[index + 1]
        } representantes </p>`;
      }
    });

    div.appendChild(span); // Agregar el div con el orden de ganadores al contenedor de resultados
  }
}
