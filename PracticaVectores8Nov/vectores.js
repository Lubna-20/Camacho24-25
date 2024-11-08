window.addEventListener("DOMContentLoaded", inicio);
const cajaPrincipal = document.querySelector(".container");
const btn1 = document.querySelector("#btnaniadirN");
const btn2 = document.querySelector("#btnaniadirB");
const btn3 = document.querySelector("#btnaniadirP");
const btn4 = document.querySelector("#btnEliminarN");
const btn5 = document.querySelector("#btnAniadirU");
const btn6 = document.querySelector("#btnEliminarS");
const btn7 = document.querySelector("#btnSlice");
const btn8 = document.querySelector("#btnJoin");
const btn9 = document.querySelector("#btnIncludes");

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

  btn1.onclick = anadirNum;
  btn2.onclick = anadirtexto;
  btn3.onclick = anadirPeli;
  btn4.onclick = eliminarnum;
  btn5.onclick = anadirAlPrincipio;
  btn6.onclick = eliminarAlPrincpip;
  btn7.onclick = copirArray;
  btn8.onclick = separadorJoin;
  btn9.onclick = include;

  //método push() añade uno o más elementos al final del array push: vector.push(elemento)
  function anadirNum() {
    let vectoranadirNum = vector1.slice();
    vectoranadirNum.push(1, 5, 6, 7);
    console.log(vectoranadirNum);
  }
  //añadir texto
  function anadirtexto() {
    let vectoranadirTexto = vector2.slice();
    vectoranadirTexto.push("pepe", "pepa");
    console.log(vectoranadirTexto);
  }
  //Añadir [{ },{ }] objeto
  function anadirPeli() {
    let nuevaPeli = prompt("Nombre de la pelicula:");
    let min = parseInt(prompt("Cuantos minutos dura:"));
    vector3.push({ titulo: nuevaPeli, minutos: min });
    console.log(vector3);
  }
  //let elemento=vector.pop()elimina el último elemento de un vector y
  //se puede retornar para ver cuál era su valor
  function eliminarnum() {
    let vectorEliminarnum = vector1.slice();
    let element = vectorEliminarnum.pop();
    console.log(vectorEliminarnum);
    console.log(element);
  }
  //añade uno o más elementos al inicio del array y retorna el número
  //de elementos del array.
  function anadirAlPrincipio() {
    let vectoranadiralPrincipio = vector3.slice();
    let elemento = vectoranadiralPrincipio.unshift(
      { titulo: "Mareas", minutos: 220 },
      { titulo: "Pepinos", minutos: 160 }
    );
    console.log(vectoranadiralPrincipio);
    console.log(elemento);
  }
  //contenido=vector.shift(). Elimina el primer elemento del array y lo retorna.
  function eliminarAlPrincpip() {
    let vectorEliminartexto = vector2.slice();
    let eliminado = vectorEliminartexto.shift();
    console.log(vector2);
    console.log(eliminado);
    console.log(vectorEliminartexto);
  }
  //vector.slice(inicio,fin)Devuelve una copia del array desde el
  // índice inicio hasta el índice fin
  function copirArray() {
    let copia = vector2.slice(0, 2);
    console.log(vector2);
    console.log(copia);
  }
  //Devuelve un string con todos los elementos del vector separados por el separador(parámetro).
  function separadorJoin() {
    let separador = vector2.slice();
    let cadena = separador.join("-");
    console.log(separador);
    console.log(cadena);
  }
  //El método includes retorna true si el elemento se encuentra en el array, false en caso
  //contrario (podemos utilizarlo en un if para saber si un elemento se encuentra en el array). vector.includes(elemento)
  function include() {
    let vectorInclude=vector3.slice()
    if (vectorInclude.includes(prompt("Nombre de la pelicula:"))) {
      console.log("Está en la lista");
    }
  }
}
