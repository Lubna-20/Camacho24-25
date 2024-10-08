window.addEventListener('load', inicio)
let btn = document.getElementById('validar')
let validar = true

function inicio(){
    let formulario = document.querySelector('form')

    btn.click = ()=>{
        let valid1 = document.querySelector('#v1').value
        let smv1 = document.querySelector('#smv1');
    
        let valid2 = document.querySelector('#v2').value
        let smv2 = document.querySelector('#smv2');
    
        let valid3 = document.querySelector('#v3').value
        let smv3 = document.querySelector('#smv4');
    
        let valid4 = document.querySelector('#v4').value
        let smv4 = document.querySelector('#smv4');
    
        // Validación 
        validacion1(valid1, smv1);
     
        validacion2(valid2, smv2);
    
        validacion3(valid3, smv3);
      
        validacion4(valid4, smv4);
    
         //funcion para valir
    
       
        function validacion1(valid1, smv1){
            if (valid1.length == 0) {
                smv1.textContent="*CAMPO OBLIGATORIO"
            }else if(valid1.length == 10){
                smv1.textContent = "*El texto debe tener 10 caracteres";
                validar = false;
                console.log(variable)
            }

        }


        function validacion4(variable, texto) {
            let patronMayus = /[A-Z]/;// el patron buscado en internet
            
    
            if (variable.length == 0) {
                texto.textContent = "*CAMPO OBLIGATORIO";
                validar = false;
            } else if (variable.length !== 8) {
                texto.textContent = "*El texto debe tener 8 caracteres";
                validar = false;
            } else if (!patronMayus.test(variable) || !patronMayus.test(variable)) {
                texto.textContent = "*El texto debe tener al menos una letra MAYÚSCULA y un número";
                validar = false;
            } else {
                texto.textContent = ""; 
            }
            console.log(variable)
        }
    
        return validar;
        
    }
}


