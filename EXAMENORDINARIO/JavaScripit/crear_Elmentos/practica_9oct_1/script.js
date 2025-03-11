window.onload = inicio;

const listaImagenes = document.getElementById('images').querySelectorAll('img');


const contenedorDestinoImg = document.querySelector("#picture img");

const contenedorDestino = document.getElementById("picture");
const listaFondos = document.getElementById("fondos").querySelectorAll("div");

const listaFondosBorde = document.getElementById("bordes").querySelectorAll("div");

const zoomMas = document.getElementById("zoom").firstElementChild
const zoomMenos = document.getElementById("zoom").lastElementChild

function inicio() {

    let zoomAncho= 200
    let zoomAlto= 200
    

    zoomMas.addEventListener("click",()=>{
        
          
            contenedorDestinoImg.style.width=(zoomAncho+=20)+'px'
            contenedorDestinoImg.style.height=(zoomAlto+=20)+'px'
        
       
    })
    zoomMenos.addEventListener("click",()=>{
        
          
            contenedorDestinoImg.style.width=(zoomAncho-=20)+'px'
            contenedorDestinoImg.style.height=(zoomAlto-=20)+'px'
        
        
       
    })


    listaImagenes.forEach(img => {
        img.addEventListener('click', () => {


            contenedorDestinoImg.setAttribute("src", img.src)

        })

    });

    listaFondos.forEach(colores => {
        colores.addEventListener('click', () => {
            switch (colores.id) {
                case "negro":
                    console.log("siuuu")
                    contenedorDestino.style.backgroundColor = "black"
                    break;
                case "rojo":
                    console.log("siuuu")
                    contenedorDestino.style.backgroundColor = "red"
                    break;
                case "azul":
                    console.log("siuuu")
                    contenedorDestino.style.backgroundColor = "blue"
                    break;
                case "rosa":
                    console.log("siuuu")
                    contenedorDestino.style.backgroundColor = "pink"
                    break;
                case "amarillo":
                    console.log("siuuu")
                    contenedorDestino.style.backgroundColor = "yellow"
                    break;
                case "verde":
                    console.log("siuuu")
                    contenedorDestino.style.backgroundColor = "green"
                    break;
                default:
                    break;
            }

        })
    })
    listaFondosBorde.forEach(colores => {
        colores.addEventListener('click', () => {
            switch (colores.id) {
                case "negroBorde":
                    console.log("siuuu")
                    contenedorDestino.style.borderColor = "black"
                    break;
                case "rojoBorde":
                    console.log("siuuu")
                    contenedorDestino.style.borderColor = "red"
                    break;
                case "azulBorde":
                    console.log("siuuu")
                    contenedorDestino.style.borderColor = "blue"
                    break;
                case "rosaBorde":
                    console.log("siuuu")
                    contenedorDestino.style.borderColor = "pink"
                    break;
                case "amarilloBorde":
                    console.log("siuuu")
                    contenedorDestino.style.borderColor = "yellow"
                    break;
                case "verdeBorde":
                    console.log("siuuu")
                    contenedorDestino.style.borderColor= "green"
                    break;
                default:
                    break;
            }

        })
    })

}




