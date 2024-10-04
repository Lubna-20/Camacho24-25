let accion = document.getElementById("validar");
let validar = true;

accion.onsubmit = () => {

    

    let texto1 = document.querySelector('#texto1').value;
    let smTexto1 = document.querySelector('#texto1Help');

    let texto2 = document.querySelector('#texto2').value;
    let smTexto2 = document.querySelector('#texto2Help');

    let num1 = document.querySelector('#numero1').value;
    let smNum1 = document.querySelector('#numero1Help');

    let num2 = document.querySelector('#numero2').value;
    let smNum2 = document.querySelector('#numero2Help');

    // Validación para texto1
    validacionTexto1(texto1, smTexto1);
    // Validcion texto 2
    validacionTexto2(texto2,smTexto2);
    // validacion num1
    validacionNum1(num1,smNum1);
    //validacion num2
    validacionNum2(num2,smNum2);

    function validacionNum2(variable,texto){
        if (variable.length == 0) {
            texto.textContent = "*CAMPO OBLIGATORIO";
            validar = false;
        }else if(!(variable % 5 ==0)){
            texto.textContent = "*solo numero multilplos de 5";
            validar = false;

        }else{
            texto.textContent=""
        }


    }

    //funcion validar num1 entero entre 1 y 10
    function validacionNum1(variable,texto){
        if (variable.length == 0) {
            texto.textContent = "*CAMPO OBLIGATORIO";
            validar = false;
        }else if (!Number.isInteger(Number(variable))) {
            texto.textContent = "*Introduce valores enteros"
            validar = false

        }else if(variable<1 || variable>10){
             texto.textContent="el numero debe estar entre 1 y 10"
             validar=false

        }else{
            texto.textContent=""
        }


    }

    //funcion para valir el numero 2  entre 20 y 30 caracteres. Tiene que contener una sola arroba.

    function validacionTexto2(variable,texto){

        let contador=0;
        if (variable.length == 0) {
            texto.textContent = "*CAMPO OBLIGATORIO";
            validar = false;
        }else if (variable.length < 20 || variable.length > 30) {
            texto.textContent = "*El texto debe estar entre 20 y 30 caracteres";
            validar = false;
        }else{
        
        for (let index = 0; index < variable.length; index++) {
           
            if(variable[index]=="@"){
                contador++
            }
            
        }
        if(contador!=1){
            validar=false
            texto.textContent="Tiene que contener una sola arroba."
        }else{
            texto.textContent=""
        }
    }

       
        



    }

    // Función para validar texto1: entre 5 y 15 caracteres, al menos una letra mayúscula y un número.
    function validacionTexto1(variable, texto) {
        let patronMayus = /[A-Z]/;// el patron buscado en internet
        let patronNum = /[0-9]/;
        

        if (variable.length == 0) {
            texto.textContent = "*CAMPO OBLIGATORIO";
            validar = false;
        } else if (variable.length < 5 || variable.length > 15) {
            texto.textContent = "*El texto debe estar entre 5 y 15 caracteres";
            validar = false;
        } else if (!patronNum.test(variable) || !patronMayus.test(variable)) {
            texto.textContent = "*El texto debe tener al menos una letra MAYÚSCULA y un número";
            validar = false;
        } else {
            texto.textContent = ""; 
        }
    }

    return validar;
};