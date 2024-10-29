window.addEventListener("load", inicio);
/**
 * 3. CharAt(i): recorrer caracteres de un string uno a uno
    Teclea tu nombre completo en minúscula, devuelve todo en una sola cadena pero con las iniciales
    en mayúscula
 */
function inicio() {
  let nombre = prompt("Teclea tu nombre completo en minuscula");
  let nombreFinal = nombre.charAt(0).toUpperCase();
  nombre.charAt(0).toUpperCase();
  for (let i = 1; i < nombre.length; i++) {
    if (nombre.charAt(i) != " ") {
      nombreFinal += nombre.charAt(i);
    } else {
      nombreFinal += nombre.charAt(i + 1).toUpperCase();
      i++;
    }
  }
  alert(nombreFinal);
}
