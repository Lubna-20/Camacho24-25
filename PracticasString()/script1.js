window.addEventListener("load", inicio);

function inicio() {
  /**
     * 1. toUpperCase() y toLowerCase(). Teclea tu nombre en un prompt y conviértelo en
        mayúscula.Muéstralo en un alert. Teclea tu nombre en mayúscula en un prompt, a continuación
        muestra en un alert si es verdad que está en mayúscula . Repítelo dentro de un bucle hasta que no
        sea totalmente mayúscula el nombre. A continuación conviértelo a minúscula.
     */
  let miNombre = prompt("Escribe tu  Nombre :");
  let nombreMayuscula = miNombre.toUpperCase();
  alert("Mi nombre en maruscula es :" + nombreMayuscula);

  //let nombreEnMayus = prompt("Tu nombre en Mayuscula: ");
  /*  let validar = true;
  while (validar) {
    if (nombreEnMayus == nombreEnMayus.toUpperCase()) {
      alert("Tu nombre esta en Mayuscula");
      validar = false;
    } else {
      alert("Tu nombre no esta en Mayuscula");
      nombreEnMayus = prompt("Tu nombre en Mayuscula: ");
    }
  }*/
  /*let nombreEnMayus = prompt("Tu nombre en Mayuscula: ");
  while (nombreEnMayus !== nombreEnMayus.toUpperCase()) {
    nombreEnMayus = prompt("Vuelve a introducir tu nombre en mayuscula");
  }
  alert("Tu nombre esta en mayuscula");*/
  let nombreEnMayus
  do {
     nombreEnMayus = prompt("Tu nombre en Mayuscula: ");
  } while (nombreEnMayus !== nombreEnMayus.toUpperCase());
}
