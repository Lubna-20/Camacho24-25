window.addEventListener("load", inicio);
/*5-.cadena.Replace(“antiguo”,”nuevo”), cadena.ReplaceAll(“antiguo”,”nuevo”)*/
const cuerpo = document.body;
const contenedor = cuerpo.getElementsByClassName("col-lg-12")[0];
const espacio = document.createElement("span");
const espacio2 = document.createElement("span");

espacio.style.border = "3px solid yellow";

contenedor.appendChild(espacio);
function inicio() {
  const cadena = "red green blue yellow blue pink";
  espacio.textContent = cadena;

  cadena.replace("red", "rojo").replace("green", "verde");
}
