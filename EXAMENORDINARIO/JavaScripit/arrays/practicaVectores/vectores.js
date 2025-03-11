window.addEventListener("DOMContentLoaded", inicio);

const btn1 = document.querySelector("#btnaniadirN");
const btn2 = document.querySelector("#btnaniadirB");
const btn3 = document.querySelector("#btnaniadirP");
const btn4 = document.querySelector("#btnEliminarN");
const btn5 = document.querySelector("#btnAniadirU");
const btn6 = document.querySelector("#btnEliminarS");
const btn7 = document.querySelector("#btnSlice");
const btn8 = document.querySelector("#btnJoin");
const btn9 = document.querySelector("#btnIncludes");
const btn10 = document.querySelector("#btnSort");
const btn11 = document.querySelector("#btnReverse");
const btn12 = document.querySelector("#btnMap");
const btn13 = document.querySelector("#btnReduce");
const btn14 = document.querySelector("#btnFilter");
const btn15 = document.querySelector("#btnSome");
const btn16 = document.querySelector("#btnEvery");
const btn17 = document.querySelector("#btnFind");
const btn18 = document.querySelector("#btnKeys");
const btn19 = document.querySelector("#btnValues");
const btn20 = document.querySelector("#btnEntry");

function inicio() {
  const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
  const vector2 = ["paco", "lola", "pedro"];
  const vector3 = [
    {
      titulo: "Los lunes al sol",
      minutos: 120,
    },
    {
      titulo: "La delgada línea roja",
      minutos: 120,
    },
    {
      titulo: "Bienvenido MrMarsall",
      minutos: 93,
    },
  ];

  btn1.addEventListener("click", () => {
    let numRandom = Math.floor(Math.random() * 100);
    vector1.push(numRandom);
    console.log(vector1);
  });
  btn2.addEventListener("click", () => {
    let nombre = prompt("Escribe un nombre:");
    vector2.push(nombre);
    console.log(vector2);
  });
  btn3.addEventListener("click", () => {
    let pelicula = prompt("Escribe un nombre:");
    let minutos = prompt("cuantos minutos tiene:");

    vector3.push({ titulo: pelicula, minutos: minutos });

    console.log(vector3);
  });
  btn4.addEventListener("click", () => {
    const vector = vector1.pop();
    console.log(vector1);
    console.log(vector);
  });
  btn5.addEventListener("click", () => {
    let numRandom = Math.floor(Math.random() * 100);
    vector1.unshift(numRandom);
    console.log(vector1);
  });
  btn6.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.shift();
    console.log(vector);
  });
  btn7.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.slice(2, 5);
    console.log(vector);
  });
  btn8.addEventListener("click", () => {
    console.log(vector2);
    const vector = vector2.join(";");
    console.log(vector);
  });
  btn9.addEventListener("click", () => {
    console.log(vector2);
    const elemento = prompt("introduce el valor:");
    const validar = vector2.includes(elemento);
    if (validar) {
      console.log("esta en el array");
    } else {
      console.log("no esta en el array");
    }
  });
  btn10.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.sort();
    console.log(vector);
  });
  btn11.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.sort().reverse();
    console.log(vector);
  });
  btn12.addEventListener("click", () => {
    console.log(vector3);
    const vectorMap = vector3.map((num) => num.minutos / 2);
    console.log(vectorMap);
  });
  btn13.addEventListener("click", () => {
    console.log(vector3);
    const vectorReduce = vector3.reduce((num2, num) => num.minutos * num2, 1);
    console.log(vectorReduce);
  });
  btn14.addEventListener("click", () => {
    console.log(vector3);
    const vectorFilter = vector3.filter((num) => num.minutos > 100);
    console.log(vectorFilter);
  });
  btn15.addEventListener("click", () => {
    const titulo = prompt("introduce el tiutlo");
    console.log(vector3);
    const validar = vector3.some((num) => num.titulo == titulo);
    if (validar) {
      console.log(titulo + " esta disponible ");
    } else {
      console.log(titulo + " no esta disponible ");
    }
    console.log(vector3);
  });
  btn16.addEventListener("click", () => {
    const minutos = prompt(
      "introduce lo minutos minimos que te gustaria que tenrgas las peliculas"
    );
    console.log(vector3);
    const validar = vector3.every((num) => num.minutos >= Number(minutos));
    if (validar) {
      console.log(
        "todas nuestras peliculas superan los " + minutos + " minutos"
      );
    } else {
      console.log(
        "hay algunas peliculas que no superan los " + minutos + " minutos"
      );
    }
    console.log(vector3);
  });
  btn17.addEventListener("click", () => {
    const minutos = prompt(
      "introduce lo minutos minimos que te gustaria que tenrgas las peliculas"
    );
    console.log(vector3);
    const primeraPelicula = vector3.find(
      (num) => num.minutos == Number(minutos)
    );
    console.log(primeraPelicula);
  });
  btn18.addEventListener("click", () => {
    console.log(vector3);

    vector3.forEach((element) => {
      primeraPelicula = Object.keys(element);
      console.log(primeraPelicula);
    });
  });
  btn19.addEventListener("click", () => {
    const peliculas = vector3.filter((num) => num.minutos > 100);
    console.log(peliculas);
    peliculas.forEach((element) => {
      const Pelicula = Object.values(element);
      console.log(Pelicula);
    });
  });
  btn20.addEventListener("click", () => {
    const peliculas = vector3.filter((num) => num.minutos === 120);
    console.log(peliculas);
    peliculas.forEach((element) => {
      const Pelicula = Object.entries(element);
      console.log(Pelicula);
    });
  });
}
