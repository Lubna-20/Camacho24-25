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

  btn1.onclick = anadirNum;
  btn2.onclick = anadirtexto;
  btn3.onclick = anadirPeli;
  btn4.onclick = eliminarnum;
  btn5.onclick = anadirAlPrincipio;
  btn6.onclick = eliminarAlPrincpip;
  btn7.onclick = copirArray;
  btn8.onclick = separadorJoin;
  btn9.onclick = include;
  btn10.onclick = ordenarArray;
  btn11.onclick = invertirorden;
  btn12.onclick = ejemploMap;
  btn13.onclick = ejemploReduce;
  btn14.onclick = ejemplofilter;
  btn15.onclick = ejemplosome;
  btn16.onclick = ejemploevery;
  btn17.onclick = ejemplofind;
  btn18.onclick = ejemplokeys;
  btn19.onclick = ejemplovalues;
  btn20.onclick = ejemploentry;
  //método push() añade uno o más elementos al final del array push: vector.push(elemento)
  function anadirNum() {
    let vectoranadirNum = vector1.slice();
    vectoranadirNum.push(1, 5, 6, 7);
    console.log(vectoranadirNum);
  }
  //añadir texto
  function anadirtexto() {
    let vectoranadirTexto = vector2.slice();
    vectoranadirTexto.push("ana", "xavi", "camin");
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
    const titulos = vector3.map((pelicula) => pelicula.titulo);

    const tituloBuscado = prompt(
      "Introduce el nombre de la película que buscas:"
    );

    if (titulos.includes(tituloBuscado)) {
      console.log("La película está en el array.");
    } else {
      console.log("La película no está en el array.");
    }
  }
  //El método sort ordena un array
  function ordenarArray() {
    let vector = vector2.slice();
    vector.push("ana", "xavi", "camin");
    let ordenar = vector.sort();
    console.log(ordenar);
  }
  //Invierte el orden de un vector
  function invertirorden() {
    let vector = vector2.slice();
    vector.push("ana", "xavi", "camin");
    let invertir = vector.sort().reverse();
    console.log(invertir);
  }
  //Ejemplo de mapeo
  function ejemploMap() {
    let nombres = vector2.slice();
    nombres.push("ana", "xavi", "camin");
    const nombresMayuscula = nombres.map((nombre) => nombre.toUpperCase());
    console.log(nombres);
    console.log(nombresMayuscula);
  }
  //Ejemplo de Reduce
  function ejemploReduce() {
    const minutoos = vector3.map((pelicula) => pelicula.minutos);
    const sumamin = minutoos.reduce((acumulador, min) => acumulador + min, 0);
    console.log(minutoos);

    console.log(sumamin);
  }
  //Ejemplo de filter
  function ejemplofilter() {
    const numeros = vector1.slice();
    const pares = numeros.filter((num) => num % 2 === 0);
    console.log(numeros);
    console.log("PARES: " + pares);
  }
  //Ejemplo de some
  function ejemplosome() {
    const minutosBuscados = parseInt(
      prompt("Introduce la duración en minutos de la película que buscas:")
    );
    const existeDuracion = vector3.some(
      (pelicula) => pelicula.minutos === minutosBuscados
    );

    if (existeDuracion) {
      console.log("Existe una película con esa duración en el array.");
    } else {
      console.log("No existe ninguna película con esa duración en el array.");
    }
  }
  //Ejemplo de every
  function ejemploevery() {
    let copiavector1 = vector1.slice();
    const todos = copiavector1.every((numm) => (numm = 0));
    console.log(copiavector1);
    console.log(todos);
  }
  //Ejemplo de find
  function ejemplofind() {
    let nombres2 = vector2.slice();
    nombres2.push("ana", "xavi", "camin");
    console.log(nombres2);

    console.log(nombres2.find((nom) => nom === "xavi"));
  }
  //Ejemplo de keysç
  function ejemplokeys() {
    let pelis = vector3.slice();
    const claves = Object.keys(pelis);
    console.log(pelis);
    console.log(claves);
  }
  //Ejemplo de values
  function ejemplovalues() {
    let pelis = vector3.slice();
    const claves = Object.values(pelis);
    console.log(pelis);
    console.log(claves);
  }
  //Ejemplo de entry
  function ejemploentry() {
    let number = vector1.slice();
    let suma = 0;
    number.forEach((nota) => (suma += nota));
    let media = suma / number.length;
    console.log(number);
    console.log(media);
  }
}
