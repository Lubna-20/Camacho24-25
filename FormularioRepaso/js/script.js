// Obtenemos el botón que activará la validación
const boton = document.getElementById("validar");

// Añadimos el evento click al botón
boton.addEventListener("click", function() {
    // Validamos los campos cuando se hace clic en el botón
    let validar = true;
    
    // Obtenemos el valor del campo nombre
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellidos").value;
    // Aquí añadimos la lógica de validación (puedes adaptarla a tus necesidades)
    if (nombre === "") {
        console.log("El campo de nombre no puede estar vacío");
        validar = false;
    }

    // Si pasa la validación, se puede enviar o hacer cualquier acción
    if (validar) {
        alert("Nombre válido: " + nombre);
        // Aquí puedes proceder con el envío del formulario manualmente si deseas
        // document.getElementById("formulario").submit();
    }
    if (apellido === "") {
        console.log("El campo de nombre no puede estar vacío");
        validar = false;
    }

    // Si pasa la validación, se puede enviar o hacer cualquier acción
    if (validar) {
        alert("Nombre válido: " + apellido);
        // Aquí puedes proceder con el envío del formulario manualmente si deseas
        // document.getElementById("formulario").submit();
    }
});