window.addEventListener("load", inicio);

const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

//identificamos la galeria de imagenes, nombre, precio
const galeria = document.querySelector('#galeria')
//Identificamos la tabla.carrito
const carrito = document.querySelector('#cesta')
//Identificar el rotulo del precio total
const precio = document.querySelector('#total')
//nuevo th para el precio total


function inicio(){
   
    //Rellamos la galeria
    for (let i = 0; i < imagenes.length; i++) {

        const contenedorProducto = document.createElement('div')
        contenedorProducto.style.backgroundColor = 'grey'
        //Dentro de contenedorProducto creamos las imagenes , nombres y precios
        galeria.appendChild(contenedorProducto)
        let imgfRuta = document.createElement('img')
        imgfRuta.setAttribute("src",imagenes[i]);
        div.appendChild(imgfRuta)
        //Creamos un parrafp para introducir nombre y precio
        const pFruta = document.createElement('p')
        pFruta.textContent=nombres[i]
        contenedorProducto.appendChild(pFruta)
        //precio
        const pPrecioFruta = document.createElement('p')
        pPrecioFruta.textContent="Precio" + precios[i]
        contenedorProducto.appendChild(pPrecioFruta)

        //le ponemos un evento a las imagenes 
        //imgfRuta.addEventListener('click' , comprar)
        imgfRuta.onclick=comprar;
         
    }
}
function comprar(imagenFruta){

    alert(imagenFruta.target) 
}
 