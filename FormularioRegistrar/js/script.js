// Obtener referencias a los elementos del DOM
const formulario = document.getElementById('formulario'); // El formulario en sí
const mensajeDiv = document.getElementById('mensaje'); // Div donde mostramos mensajes

// Escuchar el evento de envío (submit) del formulario
formulario.addEventListener('submit', function(event) {
  // Evitar que el formulario se envíe de manera tradicional (recargar la página)
  event.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Reiniciar el mensaje de error o éxito
  mensajeDiv.textContent = '';

  // Validaciones básicas
  if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
    // Si alguno de los campos está vacío, mostramos un mensaje de error
    mensajeDiv.textContent = 'Todos los campos son obligatorios.';
    return; // Salimos de la función
  }

  // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    // Si las contraseñas no coinciden, mostramos un mensaje de error
    mensajeDiv.textContent = 'Las contraseñas no coinciden.';
    return; // Salimos de la función
  }

  // Validar que el email tenga un formato correcto (JavaScript lo hace de forma automática al ser tipo "email")
  // Se podría agregar una validación adicional con expresiones regulares si se desea

  // Si todo está bien, mostramos un mensaje de éxito
  mensajeDiv.textContent = 'Formulario enviado exitosamente.';
  mensajeDiv.style.color = 'green'; // Cambiamos el color del texto a verde para el mensaje de éxito

  // Limpiar los campos después de enviar el formulario
  formulario.reset();
});