let accion = document.getElementById("validar");
accion.onsubmit = () => {
    let validar = true;
    let n1 = document.querySelector('#idN1').value
    let smN1 = document.querySelector('#smN1')
    let n2 = document.querySelector('#idN2').value
    let smN2 = document.querySelector('#smN2')
    let n3 = document.querySelector('#idN3').value
    let smN3 = document.querySelector('#smN3')
    let n4 = document.querySelector('#idN4').value
    let smN4 = document.querySelector('#smN4')
    let n5 = document.querySelector('#idN5').value
    let smN5 = document.querySelector('#smN5')
    let n6 = document.querySelector('#idN6').value
    let smN6 = document.querySelector('#smN6')
    //funcion validar campo vacios

    validarVacios(n1, smN1);
    validarVacios(n2, smN2);
    validarVacios(n3, smN3);
    validarVacios(n4, smN4);
    validarVacios(n5, smN5);
    validarVacios(n6, smN6);

    let array=[n1,n2,n3,n4,n5,n6];

    let arryAux=[]
    let estar = true;

    for (let index = 0; index < array.length; index++) {
        if(arryAux.includes(array[index])){
            console.log("entro")
            estar = false
        }else{
            arryAux.push(array[index])
        }
        
    }
    let smDumplicados = document.getElementById('smDuplicado')
    if(estar == true){
        smDumplicados.textContent="hay numero duplicados"
        validar =false
    }else{
        smDumplicados.textContent=""
    }


    return validar


    function validarVacios(numero, sm) {

        if (numero === "") {
            sm.textContent = "*CAMPOS OBLIGATORIOS"
            validar = false

        } else if (isNaN(numero)) {
            sm.textContent = "*Introduce valores numericos"
            validar = false

        } else if (!Number.isInteger(Number(numero))) {
            sm.textContent = "*Introduce valores enteros"
            validar = false

        }
        else if (n1 < 1 || n1 > 50) {
            sm.textContent = "*los valores deben estar comprendido entre 1 y 50"
            validar = false
        } else {
            sm.textContent = ""
        }



    }




























}