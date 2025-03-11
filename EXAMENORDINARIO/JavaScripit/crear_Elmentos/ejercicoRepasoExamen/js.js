let accion = document.getElementById("cargar");
accion.onsubmit = () => {
  let validar = true;
  let numero1 = document.querySelector("#numero1").value;
  let smNumero1 = document.querySelector("#numero1Help");
  let texto1 = document.querySelector("#texto1").value;
  let smTexto = document.querySelector("#texto1Help");
  let numero2 = document.querySelector("#numero2").value;
  let smNumero2 = document.querySelector("#numero2Help");
  let texto2 = document.querySelector("input[name=texto2]").value;
  let smTexto2 = document.querySelector("#texto2Help");

  // Validaciones de campos

 
  validarNumero1(numero1,smNumero1);
  validarTexto1(texto1,smTexto);
  validarNumero2(numero2,smNumero2)
  validarTexto2(texto2,smTexto2)


  //funcion para validar el texto 2 obligatoriamente las letras a , e , o en cualquier posición.
  function validarTexto2(variable,texto){
    let contador = 0;
    let validarE=false
    let validarA=false
    let validarO=false

    for (let index = 0; index < variable.length; index++) {
        if(variable[index] =="a" || variable[index] == "A" ){
               validarA=true
        }
        if(variable[index] == "e" || variable[index] =="E"  ){
            validarE=true
        }
        if(variable[index] == "o" || variable[index] =="O" ){
        validarO=true
        }
        
    }
    if(variable.length == 0){
        validar=false
        texto.textContent="*CAMPO OBLIGATORIO"

    }else if(!validarA && !validarE && !validarO){
        validar=false;
        texto.textContent="el texto debe contner al menos a , e y o"
    }else{
        texto.textContent=""
    }



  }

  //funcion validar numero 2 comprendido entrre -10 y 10
    function validarNumero2(numero,texto){
        if(numero.length==0){
            texto.textContent="*CAMPO OBLIGATORIO"
            validar=false
        }
        else if(isNaN(numero)){
            texto.textContent="no es un valor entero"
            validar=false   
        }else if(numero < -10 || numero > 10){
            texto.textContent="Tiene que estar comprendido entre -10 y 10"
        }else{
            texto.textContent=""
        }

    }

//funcion validar texto1  entre 5 y 15 caracteres. Al menos una letra mayúscula y un número
function validarTexto1(texto1,smTexto1){
    if(texto1.length==0){
        smTexto1.textContent="*CAMPO OBLIGATORIO"
        validar=false
    }
    else if(texto1.length <5 || texto1.length>15){
        smTexto1.textContent="el texte debe estar comprendido entre 5 y 15 caractres"
        validar=false
    }else {
        smTexto1.textContent=""

    }


}


  // funcion validar numero1 un número entero mayor que 0 y menor que 100.

  function validarNumero1(numero1,smNumero1){
    if(numero1.length==0){
        smNumero1.textContent="*CAMPO OBLIGATORIO"
    }
    else if(isNaN(numero1)){
        smNumero1.textContent="no es un valor entero"
        validar=false
      }else if(numero1<=0 || numero1 >=100){
        validar=false
        smNumero1.textContent="el numero no esta comprendido ser mayor que y menor que 100"
    
      }else{
        smNumero1.textContent=""
      }

  }
  

 

  return validar;
};
