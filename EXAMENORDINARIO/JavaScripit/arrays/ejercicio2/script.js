document.addEventListener("DOMContentLoaded", inicio);
const cajaPrincipal = document.querySelector(".container");
const btnKms = document.querySelector("#ord_kms");
const btnMarca = document.querySelector("#ord_marca");
const btnConsumo = document.querySelector("#ord_consumo");
const btnkms2 = document.querySelector("#ord_kms2");
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
  btnKms.onclick = ordenarPorKms;
  btnMarca.onclick = ordenarPorMarca;
  btnConsumo.onclick = ordenarPorConsumo;
  btnkms2.onclick = ordenarPorKms2;
  //btnMarca2.onclick=ordernarPorMarca2;
  // btnConsumo2.onclick=ordenarPorConsumo2;
}
let validarKms;
function ordenarPorKms() {
  const listadoOrdenadoKms = coches.slice().sort((a, b) => a.kms - b.kms);
  const listadoOrdenadoKmsReverse = listadoOrdenadoKms.slice().reverse();

  if (validarKms) {
    btnKms.style.color = "red";
    btnKms.textContent = "Kms + -";

    mostrarListadoOrdenado(listadoOrdenadoKms);
    validarKms = false;
  } else {
    mostrarListadoOrdenado(listadoOrdenadoKmsReverse);
    btnKms.style.color = "green";
    btnKms.textContent = "Kms - +";

    validarKms = true;
  }
}
let validarfConsumo;

function ordenarPorConsumo() {
  const listadoOrdenadoConsumo = coches
    .slice()
    .sort((a, b) => a.consumo - b.consumo);
  const listadoOrdenadoConsumoReverse = listadoOrdenadoConsumo
    .slice()
    .reverse();
  if (validarfConsumo) {
    btnConsumo.style.color = "red";
    btnConsumo.textContent = "consumo + -";

    mostrarListadoOrdenado(listadoOrdenadoConsumo);
    validarfConsumo = false;
  } else {
    mostrarListadoOrdenado(listadoOrdenadoConsumoReverse);
    btnConsumo.style.color = "green";
    btnConsumo.textContent = "consumo + -";

    validarfConsumo = true;
  }
}
let validarMarca;

function ordenarPorMarca() {
  const listadoOrdenaPorMarca = coches
    .slice()
    .sort((a, b) => a.marca.localeCompare(b.marca));
  const listadoOrdenadoMarcaReverse = listadoOrdenaPorMarca.slice().reverse();
  if (validarMarca) {
    btnMarca.style.color = "black";
    btnMarca.textContent = "Marca - +";
    mostrarListadoOrdenado(listadoOrdenaPorMarca);
    validarMarca = false;
  } else {
    mostrarListadoOrdenado(listadoOrdenadoMarcaReverse);
    btnMarca.style.color = "green";
    btnMarca.textContent = "Marca + -";
    validarMarca = true;
  }
}

//mostrar la lista lista ordenada
function mostrarListadoOrdenado(coches) {
  limpiarCaja();
  if (coches.length > 0) {
    coches.forEach((element) => {
      const spColor = document.createElement("small");
      spColor.textContent = "kms:" + element.kms;
      const spMarca = document.createElement("small");
      spMarca.textContent = "  MARCA: " + element.marca;
      const spConsumo = document.createElement("small");
      spConsumo.textContent = "  CONSUMO: " + element.consumo;
      const spPrecio = document.createElement("small");
      spPrecio.textContent = "  PRECIO:" + element.precio;
      const salto = document.createElement("br");
      cajaPrincipal.appendChild(spColor);
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
