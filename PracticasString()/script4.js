window.addEventListener("load", inicio);

/* 4. cadena.Trim(), cadena.TrimStart(), cadena.TrimEnd() */

const cuerpo = document.body;
const contenedor = cuerpo.getElementsByClassName("col-lg-12")[0];
const espacio = document.createElement("span");
espacio.style.border = "3px solid red";
contenedor.appendChild(espacio);

function inicio() {
  const titulo = " Desarrollo de aplicaciones web ";
  const titulo2 = " Desarrollo de aplicaciones multiplataforma ";
  const resultado = titulo.trim().concat(titulo2.trim());
  espacio.textContent = resultado;
}
