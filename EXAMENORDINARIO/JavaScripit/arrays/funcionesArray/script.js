// Array de alumnos con nombre y nota
const alumnos = [
  { nombre: "Lola", nota: 9 },
  { nombre: "Lolo", nota: 5 },
];

// length: devuelve el número total de elementos en el array
console.log("Número de alumnos:", alumnos.length);
// Imprime: "Número de alumnos: 2" (el número total de alumnos en el array)

// push: añade uno o más elementos al final del array y devuelve la nueva longitud
alumnos.push({ nombre: "Petra", nota: 10 }, { nombre: "Paco", nota: 5 });
console.log("Array de alumnos después de añadir nuevos elementos:", alumnos);
// Imprime el array actualizado: "Array de alumnos después de añadir nuevos elementos: [...]"
// donde [...] muestra los 4 objetos alumnos ahora presentes

console.log("Nueva longitud de alumnos:", alumnos.length);
// Imprime: "Nueva longitud de alumnos: 4" (la longitud del array tras la adición)

// Declaración de vector
let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array vector inicial:", vector);
// Imprime: "Array vector inicial: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"

// pop: elimina el último elemento del array y lo devuelve
let ultimo = vector.pop();
console.log("Array vector después de eliminar el último elemento:", vector);
// Imprime: "Array vector después de eliminar el último elemento: [1, 2, 3, 4, 5, 6, 7, 8, 9]"
// (el último elemento, 10, ha sido eliminado)

console.log("Elemento eliminado del final de vector:", ultimo);
// Imprime: "Elemento eliminado del final de vector: 10"

// Array de árboles con nombre y altura
const arboles = [
  { nombre: "encina", altura: 10 },
  { nombre: "chopo", altura: 30 },
];
console.log("Array de árboles inicial:", arboles);
// Imprime: "Array de árboles inicial: [...]"
// donde [...] representa los objetos de árboles en el array

// unshift: añade uno o más elementos al inicio del array y devuelve la nueva longitud
arboles.unshift({ nombre: "pino", altura: 25 });
console.log(
  "Array de árboles después de añadir un nuevo elemento al inicio:",
  arboles
);
// Imprime: "Array de árboles después de añadir un nuevo elemento al inicio: [...]"
// donde [...] incluye el nuevo árbol 'pino' al inicio del array

// Declaración de otro array vector2
let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array vector2 inicial:", vector2);
// Imprime: "Array vector2 inicial: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"

// shift: elimina el primer elemento del array y lo devuelve
const primero = vector2.shift();
console.log("Array vector2 después de eliminar el primer elemento:", vector2);
// Imprime: "Array vector2 después de eliminar el primer elemento: [2, 3, 4, 5, 6, 7, 8, 9, 10]"
// (el primer elemento, 1, ha sido eliminado)

console.log("Elemento eliminado del inicio de vector2:", primero);
// Imprime: "Elemento eliminado del inicio de vector2: 1"

// Declaración de arrays para concatenar
const vector1 = [1, 2, 3];
const vector12 = [4, 5, 6];
const vector3 = [7, 8, 9];

// concat: combina dos o más arrays y devuelve un nuevo array sin modificar los originales
const vectorTotal = vector1.concat(vector12, vector3);
console.log(
  "Array concatenado a partir de vector1, vector12 y vector3:",
  vectorTotal
);
// Imprime: "Array concatenado a partir de vector1, vector12 y vector3: [1, 2, 3, 4, 5, 6, 7, 8, 9]"
// que es el resultado de combinar todos los arrays

// math.max saca el maximo de un array
const numeros = [3, 5, 7, 2, 8, 10];
const maximo = Math.max(...numeros);
console.log("Valor máximo en el array numeros:", maximo);
// Imprime: "Valor máximo en el array numeros: 10" (el número más alto en el array)

// math.min saca el minimo de un array
const minimo = Math.min(...numeros);
console.log("Valor mínimo en el array numeros:", minimo);
// Imprime: "Valor mínimo en el array numeros: 2" (el número más bajo en el array)

// Declaración de un array llamado vector4
const vector4 = [1, 2, 3, 4, 5];

// Usando slice para extraer una parte del array
const vector5 = vector4.slice(3, 5); // Extrae el elemento en la posición 3 (que es 4)
console.log(vector5);
// Imprime: [4] (el array resultante solo contiene el número en el índice 3)

// Declaración del array vector23 con valores del 1 al 10
const vector23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uso del método splice para eliminar elementos del array
// splice(inicio, cantidad)
// - inicio: el índice desde el cual comenzar a eliminar elementos (3 en este caso)
// - cantidad: la cantidad de elementos a eliminar (4 en este caso)

const vectorTmp = vector23.splice(3, 4);
// Imprimir el array resultante en la consola
console.log(vectorTmp);
// Imprime: [4, 5, 6, 7] (los elementos eliminados desde el índice 3)

const vector20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Reemplaza los primeros dos elementos con tres 5
vector20.splice(0, 2, 5, 5, 5);
console.log(vector20);
// Imprime: [5, 5, 5, 3, 4, 5, 6, 7, 8, 9, 10]

// Ordena el array y lo invierte
const array = [1, 2, 3, 15, 4, 5];
array.sort((a, b) => a - b);
console.log(array);
// Imprime: [1, 2, 3, 4, 5, 15] (array ordenado)

array.reverse();
console.log(array);
// Imprime: [15, 5, 4, 3, 2, 1] (array en orden inverso)

// Ordena las letras y las invierte
const arrayLetras = ["v", "a", "d", "c", "b"];
arrayLetras.sort();
console.log(arrayLetras);
// Imprime: ["a", "b", "c", "d", "v"] (array de letras ordenado)

arrayLetras.reverse();
console.log(arrayLetras);
// Imprime: ["v", "d", "c", "b", "a"] (array de letras en orden inverso)

// Array de frutas con nombre, precio y stock
const fruta = [
  { nombre: "naranja", precio: 4, stock: 1300 },
  { nombre: "manzanas", precio: 2, stock: 1800 },
  { nombre: "kiwi", precio: 3, stock: 900 },
];

// Ordena las frutas por precio
const listadorPrecio = fruta.slice().sort((a, b) => a.precio - b.precio);
console.log(listadorPrecio);
// Imprime el array de frutas ordenado por precio

// Ordena las frutas por stock
const listadoStock = fruta.slice().sort((a, b) => a.stock - b.stock);
console.log(listadoStock);
// Imprime el array de frutas ordenado por stock

const alumnos2 = [
  { nombre: "Paco", edad: 18 },
  { nombre: "Mou", edad: 20 },
  { nombre: "Andrés", edad: 19 },
];
let alMasEdad = alumnos2[0];
alumnos2.forEach((item) => {
  if (item.edad > alMasEdad.edad) {
    alMasEdad = item;
  }
});
console.log(alMasEdad);
