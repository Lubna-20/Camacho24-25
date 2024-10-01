let accion = document.getElementById("validar")
accion.onsubmit = inicio;
function inicio(){
    let avanzar = true;
  //primer cusdro de texto: entre 3 y 5 digitos 
  let exped=document.getElementById("idExpediente")
  let contExpe=exped.value
  let smExp=document.getElementById("smExpediente")
  if (contExp.length<3 || contExpe.length>5) {
    avanzar=false
    smExp.textContent="tiene que tener entre 3 y 5 caracteres numericos"
        
  }
}