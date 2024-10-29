window.addEventListener("load", inicio);
/*6. Split(“separador”). Covierte en un vector una lista de datos con separadores comunes.
 Construye un fichero de texto. Utilizando fetch, genera un vector. Muéstralo en pantalla. */
const cuerpo = document.body;
const contenedor = cuerpo.getElementByClassName("col-lg-12")[0];
const espacio = document.createElement("span");
espacio.style.border = "1px solid red";
contenedor.appendChild(espacio);

function inicio() {
  const url = "texto.txt";

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      mostrar(data);
    })
    .finally(() => comsole.log("FIN"))
    .catch((error) => console.error());
  function mostrar(data) {
    let nombres = [];
    nombres = data.split("\n");
    console.log(nombres);
    let nombreCad = nombres;
    nombres.forEach((element) => {
      espacio.innerHTML += "</br>";
    });
  }
}
