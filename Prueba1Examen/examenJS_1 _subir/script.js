let accion = document.querySelector('form')
let validar = true;

accion.onsubmit = ()=>{
    //Declaramos los controladores, validaciones y small
    let validacion1 = document.getElementById('v1').value
    let validacion2 = document.getElementById('v2').value
    let validacion3 = document.getElementById('v3').value
    let validacion4 = document.getElementById('v4').value
 
    let smvalidacion1 = document.getElementById('smv1')
    let smvalidacion2 = document.getElementById('smv2')
    let smvalidacion3 = document.getElementById('smv3')
    let smvalidacion4 = document.getElementById('smv4')

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
          if (!isNaN(v2.chartAt(i)) && i < v2.length/2) {
            validar=false
            texto.textContent="Cumples la longitud de 12, 6 primeros caracteres "
          }
          else if(!isNaN(v2.chartAt(i)) && i > v2.length/2){
            validar=false
            texto.textContent="Cumples la longitud de 12, 6 primeros caracteres "
          }
           
        }
    }
}
function validacion3campo(v3,texto){
    if (v3.length != 20) {
        validar=false
        texto.textContent="El campo debe tener exactamente 20 caracteres"
    }else{
        for (let i = 0; i < v3.length; i++) {
            if (i==4|| i==9 || i==14 || i==19 && v3.chartAt[i]!="-") {
                    validar=false
                    texto.textContent="El formato debe ser 1254- sucesivamente 4 veces"  
                }

                else if(isNaN(v3.chartAt(i))){
                    validar=false
                    texto.textContent="El contenido debe ser " 
                }
            }
            
        }
}

function validacion4campo(v4,texto){
    if (v4.length != 8) {
        validar=false
        texto.textContent="El campo debe tener exactamente 8 caracteres"
    }else {
        let numMayus=0
        for (let i = 0; i < v4.length; i++) {
            if(v4.chartAt(i)==v4.chartAt(i).toUpperCase()){
                numMayus+=1
            }
            
        }
        if (numMayus!=2) {
            validar=false
            texto.textContent="Debe haner exactamente 2 caracteres en mayuscula"
        }
    }
}
