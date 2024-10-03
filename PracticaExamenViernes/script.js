function validarFormulario() {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    // Expresión regular para validar la contraseña
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\$).{8,}$/;

    // Verificar que la contraseña cumpla con los requisitos
    if (!regex.test(password1)) {
        alert("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo de dólar ($).");
        return false; // Evitar el envío del formulario
    }

    // Verificar que ambas contraseñas coincidan
    if (password1 !== password2) {
        alert("Las contraseñas no coinciden.");
        return false; // Evitar el envío del formulario
    }

    return true; // Permitir el envío del formulario
}