let accion = document.querySelector("form");
let validar = true;

accion.onsubmit = () => {

    let validacion1 = document.getElementById('v1').value
    let smVald1 = document.getElementById('smv1')
    let validacion2 = document.getElementById('v2').value
    let smVald2 = document.getElementById('smv2')
    let validacion3 = document.getElementById('v3').value
    let smVald3 = document.getElementById('smv3')
    let validacion4 = document.getElementById('v4').value
    let smVald4 = document.getElementById('smv4')



    /*Una longitud exacta de 10 caracteres, el primero y el último obligatoriamente tienen que ser números (1 punto)*/

    validacionPrimerCAmpo(validacion1, smVald1)
    validacionSegundoCAmpo(validacion2, smVald2)
    validacionTercerCampo(validacion3,smVald3)
    validacionCuartoCampo(validacion4,smVald4)

    function validacionCuartoCampo(v,texto){
        let patronMayus = /[A-Z]/;
        let contador=0
        if (v.length != 8) {

            validar = false
            texto.textContent = "El campo debe tener si o si 8 caracteres"
        }else {
            for (let index = 0; index < v.length; index++) {
              
                if(patronMayus.test(v[index])){
                    console.log(contador)
                    contador++
                }
                
            }
            
           
        }
        if(contador!=2){
            validar=false
            texto.textContent="debe teber el menso dos mayus"
        }else{
            texto.textContent=""
        }
        
            
            

    }

    /*Debe tener 20 caracteres, solo puede haber cuartetos de números y el quinto
carácter un guión*/ 

    function validacionTercerCampo(v,texto){

        if (v.length != 20) {

            validar = false
            texto.textContent = "El campo debe tener si o si 20 caracteres"
        }


       
    }


    /*funcion Una longitud de 12 caracteres, 6 primeros caracteres no pueden ser números, 6
    últimos caracteres no pueden ser letras.*/
    function validacionSegundoCAmpo(v, texto) {

        if (v.length != 12) {
            
            validar = false
            texto.textContent = "El campo debe tener si o si 12 caracteres"
        } else
            for (let index = 0; index < v.length; index++) {
                if (v[index] < 6) {

                    if (!isNaN(v[index])) {
                        validar = false
                        texto.textContent = "los primeros 6 caracteres no pueden ser numeros"

                    } else {
                        texto.textContent = ""
                    }

                } else {

                    if (isNaN(v[index])) {
                        validar = false
                        texto.textContent = "los ultimos 6 caracteres no pueden ser letras"

                    } else {
                        texto.textContent = ""
                    }

                }

            }

    

}

function validacionPrimerCAmpo(v1, text) {
    if (v1.length != 10) {
        console.log(v1.length)
        validar = false
        text.textContent = "El campo debe tener si o si 10 caracteres"
    } else if (isNaN(v1[0]) || isNaN(v1[v1.length - 1])) {
        validar = false
        text.textContent = "el primer y ultimo caractere debe ser un numero"
    } else {
        text.textContent = ""
    }
}



return validar



}