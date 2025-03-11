let accion = document.getElementById("validar");
accion.onsubmit = () => {
  let validar = true;

  //primer  cuadro de texto: Expediente:-> "entre 3 y 5 digitos"
  let expediente = document.querySelector("#idExpediente").value;

  let smExpediente = document.getElementById("smExpediente");

  if (isNaN(expediente)) {
    validar = false;
    smExpediente.textContent = "*El valor introducido no es numerico";
  } else if (expediente.length < 3 || expediente.length > 5) {
    validar = false;

    smExpediente.textContent = "*el numero deber estar entre 3 y 5";
  }

  //segunda validacion nombre: --> al menos 3 letras y valor no numericos

  let nombre = document.querySelector("#idNombre").value;
  let smNombre = document.getElementById("smNombre");
  for (let i = 0; i < nombre.length; i++) {
    if (!isNaN(nombre[i])) {
      validar = false;
      smNombre.textContent = "El valor introducido no debe ser numérico";
      break;
    }
  }

  if (nombre.length < 3) {
    validar = false;
    smNombre.textContent = "El nombre debe tener al menos 3 caracteres";
  }

  //segunda validacion apellido: --> al menos 3 letras y valor no numericos
  let apellido = document.querySelector("#idApellido").value;
  let smapellido = document.getElementById("smApellido");
  for (let i = 0; i < apellido.length; i++) {
    if (!isNaN(apellido[i]) && apellido[i] !== " ") {
      validar = false;
      smapellido.textContent = "El valor introducido no debe ser numérico";
      break;
    }
  }

  if (apellido.length < 3) {
    validar = false;
    smapellido.textContent = "El Apellido debe tener al menos 3 caracteres";
  }
 
  //cuarta validacion nota SGE -> Debe ser numerico y comprendio del al 1 al 10
  let asignaturaSge = document.getElementById("idSge").value;
  let smSge = document.querySelector("#smSGE");

  if (isNaN(asignaturaSge)) {
    validar = false;
    smSge.textContent = "La nota de la asignatura debe ser numérica";
  } else if (asignaturaSge < 1 || asignaturaSge > 10) {
    validar = false;
    smSge.textContent = "La nota debe ser estar comprendida entre 1 y 10";
  }

  //quinta validacion nota DI -> Debe ser numerico y comprendio del al 1 al 10
  let asignaturaDi = document.getElementById("idDi").value;
  let smDi = document.querySelector("#smDi");

  if (isNaN(asignaturaDi)) {
    validar = false;
    smDi.textContent = "La nota de la asignatura debe ser numérica";
  } else if (asignaturaDi < 1 || asignaturaDi > 10) {
    validar = false;
    smDi.textContent = "La nota debe ser estar comprendida entre 1 y 10";
  }

  //Sexte validacion nota AD -> Debe ser numerico y comprendio del al 1 al 10
  let asignaturaAd = document.getElementById("idAd").value;
  let smAd = document.querySelector("#smAd");

  if (isNaN(asignaturaAd)) {
    validar = false;
    smAd.textContent = "La nota de la asignatura debe ser numérica";
  } else if (asignaturaAd < 1 || asignaturaAd > 10) {
    validar = false;
    smAd.textContent = "La nota debe ser estar comprendida entre 1 y 10";
  }
  //Septima validacion nota PSP -> Debe ser numerico y comprendio del al 1 al 10
  let asignaturaPsp = document.getElementById("idPsp").value;
  let smPsp = document.querySelector("#smPsp");

  if (isNaN(asignaturaPsp)) {
    validar = false;
    smPsp.textContent = "La nota de la asignatura debe ser numérica";
  } else if (asignaturaPsp < 1 || asignaturaPsp > 10) {
    validar = false;
    smPsp.textContent = "La nota debe ser estar comprendida entre 1 y 10";
  }
   //octava validacion nota PMM -> Debe ser numerico y comprendio del al 1 al 10
   let asignaturaPmm = document.getElementById("idPmm").value;
   let smPmm = document.querySelector("#smPmm");
 
   if (isNaN(asignaturaPmm)) {
     validar = false;
     smPmm.textContent = "La nota de la asignatura debe ser numérica";
   } else if (asignaturaPmm < 1 || asignaturaPmm > 10) {
     validar = false;
     smPmm.textContent = "La nota debe ser estar comprendida entre 1 y 10";
   }

  return validar;
};
