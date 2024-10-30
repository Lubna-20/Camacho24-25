window.addEventListener("load", inicio);
const contenedor = document.getElementsByClassName("col-lg-12")[0];
function inicio() {
  while (true) {
    let num1 = Math.floor(Math.random() * 200);
    let num2 = Math.floor(Math.random() * 200);
    const cadena = `La suma de ${num1} y ${num2}, es -->` + (num1 + num2);
    let parrafo = document.createElement("p");
    parrafo.textContent = cadena;
    contenedor.appendChild(parrafo);
    if (num1 == num2) {
      break;
    }
  }
}
