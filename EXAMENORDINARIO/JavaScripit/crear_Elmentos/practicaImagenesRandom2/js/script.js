window.addEventListener("load", inicio);

const div = document.querySelector('.gallery');
const divImgPrincipal = document.querySelector('.imgPrincipal');
const imgPrincipal = document.createElement('img');
const tiempo = document.querySelector('.tiempo');
let num1 = numAleatorio();
let puntos = 0;
let temporizador;

imgPrincipal.src = "./img/" + num1 + ".JPG";
divImgPrincipal.appendChild(imgPrincipal);

const puntuacion = document.querySelector('span');

const personajes = [
    "Homer Simpson",
    "Marge Simpson",
    "Bart Simpson",
    "Lisa Simpson",
    "Maggie Simpson",
    "Ned Flanders",
    "Milhouse Van Houten",
    "Apu Nahasapeemapetilon",
    "Krusty el payaso",
    "Montgomery Burns"
];

function inicio() {
    let tiempoRestante=30;
    limpiarCajas();

    // Crear las imágenes
    for (let i = 0; i < personajes.length; i++) {
        const img = document.createElement('img');
        img.className = 'gallery-img';
        div.appendChild(img);
    }

    const imagenes = document.querySelectorAll('.gallery img');

    // Actualizar las imágenes cada segundo
    setInterval(() => {
        imagenes.forEach((img) => {
            const num2 = numAleatorio(); 
            img.numeroAleatorio = num2;   
            img.src = "./img/" + num2 + ".JPG"; 
        });
    }, 1000);

   
    imagenes.forEach((img) => {
        img.addEventListener("click", () => {
            if (num1 === img.numeroAleatorio) { 
                puntos++;
            } else {
                puntos--;
            }
            puntuacion.textContent = "Puntuación: " + puntos;
        });
    });
    temporizador = setInterval(() => {
        tiempoRestante--;
        tiempo.textContent = "Tiempo restante: " + tiempoRestante + "s";
  
        if (tiempoRestante <= 0) {
         
          clearInterval(temporizador);
          limpiarCajas();
          tiempo.textContent = "Se terminó el juego";
        }
      }, 1000);
}

function limpiarCajas() {
    // Borrar todas las imágenes antes de crear nuevas
    while (div.firstElementChild) {
        div.removeChild(div.firstElementChild);
    }
}

function numAleatorio() {
    return Math.floor(Math.random() * 20); 
}
