// Agregar un evento de clic al botón
document.getElementById('mostrarResultados').addEventListener('click', function() {
    // Obtener el curso seleccionado
    const cursoSeleccionado = document.querySelector('input[name="curso"]:checked').value;
    // Obtener los módulos seleccionados
    const modulosSeleccionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    // Obtener el curso del select
    const curso = document.getElementById('cursos').value;
    // Obtener el nombre del input de texto
    const nombre = document.getElementById('nombre').value;
    // Obtener las horas seleccionadas
    const horasSeleccionadas = Array.from(document.getElementById('horas').selectedOptions)
        .map(option => option.value);
    // Obtener el comentario
    const comentario = document.getElementById('comentario').value;

    // Crear el mensaje con los resultados
    let mensaje = `Curso seleccionado: ${cursoSeleccionado}\n`;
    mensaje += `Módulos seleccionados: ${modulosSeleccionados.join(', ')}\n`;
    mensaje += `Curso: ${curso}\n`;
    mensaje += `Nombre: ${nombre}\n`;
    mensaje += `Horas asistidas: ${horasSeleccionadas.join(', ')}\n`;
    mensaje += `Comentario: ${comentario}`;

    // Mostrar los resultados en un alert
    alert(mensaje);
});