let accion = document.querySelector("#validar"); 
accion.onsubmit = (event) => {
   
    let validar = true;
        // validar nombre
    let nombre = document.querySelector('#nombre').value
    let smNombre= document.querySelector('#smNombre');
    
    // patron nombre(patron consultado a chatGpt)
    const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:[\s-][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;

    if(nombre.length == 0){
        smNombre.textContent = "*Campo Obligatorio";
        validar = false;
    }else if(!patronNombre.test(nombre)){
        smNombre.textContent = "*no se permite valor numericos o caracteres";
    }else{
        smNombre.textContent=""
    }

    let contraseña = document.querySelector('#contraseña').value;
    let smContra = document.querySelector('#smContraseña');
   
     // patron de la contraseña (patron consultado a chatGpt)
    let patronContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\$).{8,}$/;

         // Validar que el campo no esté vacío
         if (contraseña.length === 0) { 
            smContra.textContent = "*Campo Obligatorio";
            validar = false;
        } else if (!patronContraseña.test(contraseña)) {
            smContra.textContent = "patron incorrecto";
            validar = false;
        }else{
            smContra.textContent=""
        }

        let contraseña2 = document.querySelector('#contraseña2').value;
        let smContra2 = document.querySelector('#smContraseña2');

        if(contraseña !=contraseña2){
            smContra2.textContent="Las contraseñas no conciden"
            validar=false
        }else{
            smContra2.textContent=""
        }
     
    let email = document.querySelector('#email').value
    let smEmail = document.querySelector('#smEmail')
    // patron email (patron consultado a chatGpt)
    let patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     // Validar que el campo no esté vacío
     if (email.length === 0) { 
        smEmail.textContent = "*Campo Obligatorio";
        validar = false;
    } else if (!patronEmail.test(email)) {
        smEmail.textContent = "*ejemplo@gmail.com";
        validar = false;
    }else{
        smEmail.textContent=""
    }



    // validar checkbox

    let checkbox = document.querySelector('#check')
    let smCheck = document.querySelector('#smCheck')
    //.cheked para chekear si si ha pulsado en la opcion checkbox
  if(!checkbox.checked){
    smCheck.textContent="*pulse para pasar";
    validar = false
  }else{
    smCheck.textContent=""
  }





  

    

  
   
   

    return validar;
};
