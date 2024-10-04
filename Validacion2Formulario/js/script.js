let accion = document.getElementById("validar")
let avanzar = true
accion.onsubmit = function(){
    avanzar = true
//Identificamos n1
    let n1 = document.getElementById("idN1").value
    let sm1 = document.getElementById("smN1")
//Identificamos n2
    let n2 = document.getElementById("idN2").value
    let sm2 = document.getElementById("smN2")
//Identificamos n3
    let n3 = document.getElementById("idN3").value
    let sm3 = document.getElementById("smN3")
//Identificamos n2
    let n4 = document.getElementById("idN4").value
    let sm4 = document.getElementById("smN4")
//Identificamos n2
    let n5 = document.getElementById("idN5").value
    let sm5 = document.getElementById("smN5")
//Identificamos n2
    let n6 = document.getElementById("idN2").value
    let sm6 = document.getElementById("smN2")
    //Repeticiones
    let arrayNumeros=[n1,n2,n3,n4,n5,n6]
    let arrayAux=[]
    for (let i = 0; i< arrayNumeros.length; i++) {
      if (arrayAux.includes(arrayNumeros[i])) {
        avanzar=false
      } else{
        arrayNumeros.push(arrayNumeros[i])
      }
       
    }
    let smD = document.getElementById("smDuplicado");
    if (estaR === true) {
    smD.textContent = "* Hay números duplicados";
    avanzar = false;
    } else {
    smD.textContent = ""; // Limpiar mensaje si no hay duplicados
    }
    //llamar a la funcion
    validar(n1,sm1)
    validar(n2,sm2)
    validar(n3,sm3)
    validar(n4,sm4)
    validar(n5,sm5)
    validar(n6,sm6)

    function validar(nX,smX){
        if (nX.length==0){
            smX.textContent = "*Campo obligatorio"
            avanzar=false
        } else if(inNan(nX)){
            smX.textContent="* no es un numero "
            avanzar=false
        } else if(!Number.isInteger(Number(nX))){
            smX.textContent = "* no es un nuemro entero"
            avanzar=false
        } else if(Number(nX)<1 || Number(nX)>50){
            smX.textContent="* numero fuera de rango (0-50)"
            avanzar=false
        }else{
            smX.textContent=""
        }
    }
    return avanzar
}