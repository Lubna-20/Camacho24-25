// Cargar el fichero JSON desde un archivo externo
fetch("getDam1.json")
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((alumnos) => mostrarAlumnos(alumnos))
  .catch((error) => console.error("Error al cargar el fichero JSON:", error));

function mostrarAlumnos(alumnos) {
  // Crear el HTML dinámicamente
  document.body.innerHTML = `
    <h1>Resultados de Alumnos</h1>
    <p><strong>a)</strong> Alumno con la nota media más alta: <span id="mejor-alumno"></span></p>
    <p><strong>b)</strong> Alumnos que aprueban todos los exámenes: <span id="alumnos-aprobados"></span></p>
    <p><strong>c)</strong> Alumnos que sacan la misma nota en los tres primeros exámenes: <span id="alumnos-misma-nota"></span></p>
    <p><strong>d)</strong> Alumnos con media &gt; 5 pero que suspenden algún examen: <span id="alumnos-suspenso"></span></p>
  `;

  // Variables para los resultados
  let mejorAlumno = '';
  let mejorMedia = 0;
  let alumnosAprobados = [];
  let alumnosMismaNota = [];
  let alumnosMediaSobreCincoConSuspenso = [];

  // Recorremos los alumnos
  alumnos.forEach((alumno) => {
    // Convertir las notas a números
    let notas = [
      parseInt(alumno.nota1),
      parseInt(alumno.nota2),
      parseInt(alumno.nota3),
      parseInt(alumno.nota4),
      parseInt(alumno.nota5),
      parseInt(alumno.nota6)
    ];

    // a) Calcular la media de las notas
    let sumaNotas = 0;
    for (let j = 0; j < notas.length; j++) {
      sumaNotas += notas[j];
    }
    let media = sumaNotas / notas.length;

    // Comparar con la mejor media
    if (media > mejorMedia) {
      mejorMedia = media;
      mejorAlumno = alumno.alumno;
    }

    // b) Verificar si aprueba todos los exámenes (todas las notas >= 5)
    let apruebaTodos = true;
    for (let j = 0; j < notas.length; j++) {
      if (notas[j] < 5) {
        apruebaTodos = false;
        break;
      }
    }
    if (apruebaTodos) {
      alumnosAprobados.push(alumno.alumno);
    }

    // c) Verificar si saca la misma nota en los tres primeros exámenes
    if (notas[0] === notas[1] && notas[1] === notas[2]) {
      alumnosMismaNota.push(alumno.alumno);
    }

    // d) Verificar si la media es mayor a 5 pero hay algún suspenso
    let tieneSuspenso = false;
    for (let j = 0; j < notas.length; j++) {
      if (notas[j] < 5) {
        tieneSuspenso = true;
        break;
      }
    }
    if (media > 5 && tieneSuspenso) {
      alumnosMediaSobreCincoConSuspenso.push(alumno.alumno);
    }
  });

  // Mostrar los resultados en los spans
  document.getElementById('mejor-alumno').textContent = mejorAlumno;
  document.getElementById('alumnos-aprobados').textContent = alumnosAprobados.join(', ');
  document.getElementById('alumnos-misma-nota').textContent = alumnosMismaNota.join(', ');
  document.getElementById('alumnos-suspenso').textContent = alumnosMediaSobreCincoConSuspenso.join(', ');
}
