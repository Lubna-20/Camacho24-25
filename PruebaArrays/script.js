/**
 * 1. length: El atributo length almacena el número de elementos del vector
 * 2. push(): El método push() añade uno o más elementos al final del vector
 */

const alumnos = [
  { nombre: "Lola", nota: 9 },
  { nombre: "Lolo", nota: 5 },
];
alumnos.push({ nombre: "Petra", nota: 10 }, { nombre: "Paco", nota: 5 });
console.log("vector completo: ", alumnos);
console.log("longitud: ", alumnos.length);

//3. pop() : elimina el último elemento del array y lo puede devolver
let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("vector completo: ", vector1);
console.log("longitud vector completo: ", vector1.length);
let ultimo = vector1.pop();
let ultimoElemento = vector1.pop();
console.log("elemento borrado: ", ultimoElemento);
console.log("vector actualizado: ", vector1);
console.log("longitud del vector actualizado: ", vector1.length);

//4. unshift(item1,item2...): añade uno o más elementos al comienzo del array
const arboles = [
  { nombre: "encina", altura: 10 },
  { nombre: "chopo", altura: 30 },
];
arboles.unshift({ nombre: "pino", altura: 25 });
arboles.forEach(element => {
    console.log(element.nombre)
});
arboles.unshift({ nombre: "alcornoque", altura: 20 });
let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
vector2.shift()
console.log("vector2 : ", vector2);

//6 concat(item1,item2...) retorna un nuevo array que es la
//concatenación de los arrays que se pasan como parámetros.
/*const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];
const vector3 = [7, 8, 9];
//vectorfinal = vector1 + vector2 + vector3;
const vectorTotal = vector1.concat(vector2, vector3);
console.log(vectorTotal);
console.log("Maximo: " ,Math.max(...vectorTotal));
console.log("Minimo: ",Math.min(...vectorTotal));
*/
/**
 * 7. slice ( inicio, fin) : devuelve una
 * subcadena desde la posición de inicio hasta fin (no se incluye y éste es opcional),
 *  Si solo aparece inicio se entiende que es hasta el final.
 */
/*const vector1 = [1, 2, 3, 4, 5] 
const vector2 = vector1.slice(0, 3)
console.log("vector2: ",vector2)
console.log("vector1: ",vector1)*/

//8.splice(inicio, cantidadBorrar...): elimina y añade elementos a un vector.
/*const vector3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
vector3.splice(3, 4)
console.log("vector2: ",vector3)*/
//const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//0 en la segunda posicion añade lo que esta a la derecha a partir de la posicion izquierda
//vector.splice(5, 0, 99,99,99)
//console.log(vector)
/**
 * 9.fill(valor,comienzo,fin) El método fill rellena el array con el valor que
 * se pasa como parámetro, sustituyendo los valores actuales del vector.
 */

/*const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
vector.fill(20,5,6)
console.log(vector)*/

/**
 * 10. join (separador) método join retorna un string con todos
 * los elementos del vector separados por el separador que se pasa como parámetro.
 */

/*const vector = ['petra','pili','manuel']
const cadena = vector.join(';')
console.log(cadena)*/

//11. Reverse() :invierte el orden de un vector. Modifica el original
/*const vector = [10,8, 4, 9, 2, 1, 5];
console.log(vector.sort());
console.log(vector.sort().reverse());
//ordenar los numeros
vector.sort((a, b) => a - b)
console.log(vector);


const vector2 = ["w", "c", "f", "a", "x"];
console.log(vector2.sort());
console.log(vector2.sort().reverse());*/

/*const fruta = [
  { nombre: "naranja", precio: 4, stock: 6300 },
  { nombre: "manzanas", precio: 2, stock: 2000 },
  { nombre: "kiwi", precio: 3, stock: 4500 },
];
const listadoPorPrecios = fruta.sort((a, b) => a.precio - b.precio);
console.log(listadoPorPrecios)
const listadoPorPreciosReves=listadoPorPrecios.slice()
console.log(listadoPorPreciosReves.reverse())
const listadoPorStock= fruta.sort((a, b) => a.stock - b.stock);
console.log(listadoPorStock)*/

const vector = [6, 3, 1, 4, 9]
const vectorCopia= vector.slice().sort((a, b) => a - b)

console.log(vector);
console.log(vectorCopia);

const vectorCopiaReverse=vectorCopia.slice()