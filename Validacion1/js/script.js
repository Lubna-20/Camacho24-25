let accion = document.getElementById('validar')
accion.onsubmit = ()=>{
  let avanzar = true;
  //primer cusdro de texto: entre 3 y 5 digitos 
  let exped=document.querySelector("#idExpediente")
  let contExpe=exped.value
  let smExp=document.getElementById("smExpediente")
  alert(contExpe.textContent=contExpe.length)
  if (contExp.length<3 || contExpe.length>5) {
    avanzar=false
    smExp.textContent="tiene que tener entre 3 y 5 caracteres numericos"

  }else if(isNaN(contExpe)){
    avanzar=false;
    smExp.textContent="el expediente tiene que ser un valor numerico entre 3 y 5 "
  }else{
    smExp.textContent=""
  }

  //Segunda validacion Nombre : al menos 3 lrtras y solo letras
  let nombre = document.getElementById("idNombre").value
  let smNombre = document.getElementById("smNombre")
  if (nombre.length<3) {
    avanzar=false
    smNombre.textContent="los nombres de persona, siempre mayor de 3 caracteres"
  }else if((nombre.indexOf("0123456789"))){
    avanzar=false
    smNombre.textContent="los nombres de persona deben ser letras"
  }else{
    smNombre.textContent=""
  }


  return avanzar;
}
    