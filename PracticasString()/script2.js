window.addEventListener("load", inicio);

function inicio() {
  /**
     * 2.Slice(inicio,opcional fin) devuelve un bloque de caracteres comenzando desde el principio (o
        negativo si comenzamos desde el final).
        Teclea en un prompt tu nombre completo, devuelve en mayúscula los 5 primeros caracteres y los ulrimos 5 caracteres
     */

  let nombre = prompt("Escribe tu nombre completo");
  let primeros5;
  primeros5 = nombre.slice(0, 5);
  alert(primeros5);

  let ultimos5;
  ultimos5 = nombre.slice(-5);
  alert(ultimos5);
}
