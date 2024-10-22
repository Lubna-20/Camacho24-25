window.addEventListener("load", inicio);
const body = document.querySelector("body");
const url = "getDam1.json";
let vectorNotas = [];
let arrayTodosAprobados = [];
let arrayNotasMedias = [];
let arrayMismaNotas = [];
let arrayMediaA = [];
let NombreNotaAlta = "";
let notaMasAlta = 0;
function inicio() {
  //espacio de desarrollo de funciones de cálculos
  function calcularNotaMedia(alumno) {
    let suma = 0;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    notas.forEach((elemento) => {
      suma += Number(elemento);
    });
    return suma / notas.length;
  }
  function apruebaTodo(alumno) {
    todo = true;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    notas.forEach((element) => {
      if (Number(element) < 5) todo = false;
    });
    return todo;
  }
  function comprobarTresExamanes(alumno) {
    tres = false;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    //  for (let i=0;i<alumno.length;i++){
    let i = 0;

    while (i < notas.length && tres == false) {
      let contIgualdades = 0;
      notas.forEach((element) => {
        if (Number(element) == Number(notas[i])) {
          contIgualdades++;
        }
      });
      if (contIgualdades >= 3) {
        tres = true;
      }
      i++;
    }
    return tres;
  }
  function suspendeAlMenosUnavez(alumno) {
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    let unSuspenso = false;
    notas.forEach((element) => {
      if (Number(element) < 5) {
        unSuspenso = true;
      }
    });
    return unSuspenso;
  }
  fetch("getDam1.json")
    .then((respuesta) => respuesta.json())
    .then((alumno) => calculos(alumno));

  function calculos(alumno) {
    //a) nombre del alumno con la nota media mál alto
    let mejorAlumno = alumno[0];
    let mejorMedia = calcularNotaMedia(mejorAlumno);
    alumno.forEach((item) => {
      //continuación del apartado a) las comparaciones sucesivas
      let media = calcularNotaMedia(item);
      if (media > mejorMedia) {
        mejorMedia = media;
        mejorAlumno = item.alumno;
      }
      //b) alumnos que aprueban tod
      if (apruebaTodo(item)) {
        arrayTodosAprobados.push(item.alumno);
      }
      //c) alumnos con la misma nota en los 3 exámenes
      if (comprobarTresExamanes(item)) {
        arrayMismaNotas.push(item.alumno);
      }
      //d) aprueba media pero suspende al menos una vez
      if (calcularNotaMedia(item) >= 5 && suspendeAlMenosUnavez(item)) {
        arrayMediaA.push(item.alumno);
      }
    });
    alert("Mejor alumno" + mejorAlumno + " Nota: " + mejorMedia);
    alert("Aprueba todo" + arrayTodosAprobados);
    alert("Alumn@s con 3 notas iguales" + arrayMismaNotas);
    alert("Alumn@s que aprueban con al menos un suspenso:" + arrayMediaA);
  }
}
