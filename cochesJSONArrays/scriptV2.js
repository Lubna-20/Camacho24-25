document.addEventListener("DOMContentLoaded", inicio);
const cajaPrincipal = document.querySelector(".container");
const btnKms = document.querySelector("#ord_kms");
const btnMarca = document.querySelector("#ord_marca");
const btnConsumo = document.querySelector("#ord_consumo");
const btnKms2 = document.querySelector(".btn btn-info");
const btnMarca2= document.querySelector(".btn btn-danger");
const btnConsumo2 = document.querySelector("btn btn-success");

//construyo el array que va a contener el fichero json
const coches = [];
function inicio() {
  //volcado del json a data
  fetch("coches.json")
    .then((response) => response.json())
    .then((data) => cargar(data));
}
function cargar(data) {
  //pasar de data a un array
  const cochesContainer = document.querySelector(".container");

  //cargar desde el json hasta un array
  data.forEach((coche) => {
    coches.push(coche);
  });
  //filtrar
  btnKms.onclick = ordenarPorKmsOp1;
  btnMarca.onclick = ordenarPorMarcaOp1;
  btnConsumo.onclick = ordenarPorConsumoOp1;
}
function ordenarPorKmsOp1() {
  const listadoOrdenadoKms = coches.slice().sort((a, b) => a.kms - b.kms);
  mostrarListadoOrdenado(listadoOrdenadoKms);
}

function ordenarPorConsumoOp1() {
  const listadoOrdenadoConsumo = coches.slice().sort((a, b) => a.consumo - b.consumo);
  mostrarListadoOrdenado(listadoOrdenadoConsumo);
}
function ordenarPorMarcaOp1() {
  const listadoOrdenaPorMarca = coches.slice().sort((a, b) => a.marca.localeCompare(b.marca));
  mostrarListadoOrdenado(listadoOrdenaPorMarca);
}

//mostrar la lista lista ordenada
function mostrarListadoOrdenado(coches) {
  limpiarCaja();
  if (coches.length > 0) {
    coches.forEach((element) => {
      const spkms = document.createElement("small");
      spkms.textContent = "KILOMETROS:" + element.kms;
      const spMarca = document.createElement("small");
      spMarca.textContent = "  MARCA: " + element.marca;
      const spConsumo = document.createElement("small");
      spConsumo.textContent = "  CONSUMO: " + element.consumo;
      const spPrecio = document.createElement("small");
      spPrecio.textContent = "  PRECIO:" + element.precio;
      const salto = document.createElement("br");
      cajaPrincipal.appendChild(spkms);
      cajaPrincipal.appendChild(spMarca);
      cajaPrincipal.appendChild(spConsumo);
      cajaPrincipal.appendChild(spPrecio);
      cajaPrincipal.appendChild(salto);
    });
  }
}
function limpiarCaja() {
  while (cajaPrincipal.firstElementChild) {
    cajaPrincipal.removeChild(cajaPrincipal.firstElementChild);
  }
}
