window.addEventListener("load", inicio);
const body = document.querySelector("body");
url = "coches.json";

precioMedia = [];
function inicio() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((coches) => calculos(coches));

  function calculos(coches) {
    coches.forEach((element) => {
      if (
        element.color == "Green" &&
        element.marca == "Volkswagen" &&
        element.consumo < 7 &&
        element.precio > 25.0
      ) {
        //console.log("Resultado: " + element.marca + element.modelo);
      }
      function media(element) {
        let suma = 0;
        const medias = [element.precio];
        medias.forEach((element) => {
          suma += Number(element);
        });
        return suma / medias.length;
      }
      if (element.precio < media) {
        console.log("Resultado: " + element.marca + element.modelo);
      }
    });
  }
}
