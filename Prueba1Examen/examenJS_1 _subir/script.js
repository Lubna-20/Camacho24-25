let accion = document.querySelector('form')
let validar = true;

accion.onsubmit = ()=>{
    //Declaramos los controladores, validaciones y small
    let validacion1 = document.getElementById('v1').value
    let validacion2 = document.getElementById('v2').value
    let validacion3 = document.getElementById('v3').value
    let validacion4 = document.getElementById('v4').value
 
    let smvalidacion1 = document.getElementById('sm1')
    let smvalidacion2 = document.getElementById('sm2')
    let smvalidacion3 = document.getElementById('sm3')
    let smvalidacion4 = document.getElementById('sm4')

    //Creamos las funciones de cada validacion
    validacion1campo(validacion1,smvalidacion1)
    validacion2campo(validacion2,smvalidacion2)
    validacion3campo(validacion3,smvalidacion3)
    validacion4campo(validacion4,smvalidacion4)

    return validar
}

function validacion1campo(v1,texto){
    //Creamos la condicion
    if (v1.length != 10) {
        validar=false
        texto.textContent="El campo debe tener exactamente 10 caracteres"
    }else if(isNaN(v1[0]) || isNaN(v1[v1.length-1])){
        texto.textContent="Cumples la longitud de 10,peor el primero y el ulimo deben ser un numero"
    }
}
function validacion2campo(v2,texto){
    if (v2.length != 12) {
        validar=false
        texto.textContent="El campo debe tener exactamente 12 caracteres"
    }else {
        for (let i = 0; i< v2.length; i++) {
          if (!isNaN(v2.chartAt(i)) && v2.length/2) {
            validar=false
            texto.textContent="Cumples la longitud de 12, en los primeros 6 hay al menos un numero"
          }
           
        }
    }
}
function validacion3campo(v3,texto){
    if (v3.length != 20) {
        validar=false
        texto.textContent="El campo debe tener exactamente 20 caracteres"
    }
}
function validacion4campo(v4,texto){
    if (v4.length != 8) {
        validar=false
        texto.textContent="El campo debe tener exactamente 8 caracteres"
    }
}
