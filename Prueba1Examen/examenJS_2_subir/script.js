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
//identificar el primer tr  (se cooresponde con la cabecera)
let encabezado = document.querySelector("tr")
//Identificar el rotulo del precio total
const precio = document.querySelector('#total')
//nuevo th para el precio total
let precioParcialTh = document.createElement('th')
precioParcialTh.textContent="Precio Total";
//Añadir el nuevo th al encabezado de la tabla 
encabezado.appendChild(precioParcialTh)
//añadir el encabezado del boton de eliminar una fruta
let botonEliminar = document.createElement('th')
botonEliminar.textContent="Eliminar"
encabezado.appendChild(botonEliminar)
//Precio final
let precioTotal=0

function inicio(){
   
    //Rellamos la galeria
    for (let i = 0; i < imagenes.length; i++) {
        //contenedor de fondo gris : imagenes, precio y nombres 
        const contenedorProducto = document.createElement('div')
        contenedorProducto.style.backgroundColor = 'grey'
        //Dentro de contenedorProducto creamos las imagenes , nombres y precios
        galeria.appendChild(contenedorProducto)
        let imgfRuta = document.createElement('img')
        imgfRuta.setAttribute("src",imagenes[i]);
        imgfRuta.setAttribute("alt",nombres[i])
        imgfRuta.value=precios[i]
        contenedorProducto.appendChild(imgfRuta)
        //Creamos un parrafp para introducir nombre y precio
        const pFruta = document.createElement('p')
        pFruta.textContent=nombres[i]
        contenedorProducto.appendChild(pFruta)
        //precio
        const pPrecioFruta = document.createElement('p')
        pPrecioFruta.textContent=precios[i]
        contenedorProducto.appendChild(pPrecioFruta)
        //Precio parcial
        const precioParcial = document.createElement("p")


        //le ponemos un evento a las imagenes 
        //imgfRuta.addEventListener('click' , comprar)
        imgfRuta.onclick=comprar;
         
    }
}
function comprar(objetoimg){
    //Mensaje emergrnte par aañadir peso 
    let peso = prompt("Teclea el peso de " +objetoimg+target+alt)
    //Crear una nueva fila fila (tr) de la tabla con el nuevo producto (añadir a carrito)
    const fila= document.createElement("tr")
    carrito.appendChild(fila)
    //hay que crear tantos td como columnas tengo la tabla
    //nombre, peso , precio unitario , precio parcial , boton eleminar 
    const celdaNombre=document.createElement("td")
    celdaNombre.textContent=objetoimg.target.alt
    fila.appendChild(celdaNombre)

    //añadir peso
    const celdaPeso = document.createElement("td")
    celdaPeso.textContent=peso
    fila.appendChild(celdaPeso)

    //precio unitario
    const celdaPrecio = document.createElement("td")
    celdaPrecio.textContent=objetoimg.target.value+ "€"
    fila.appendChild(celdaPrecio)

    //precio Parcial
    const celdaPrecioParcial = document.createElement("td")
    celdaPrecioParcial.textContent=parseInt(peso)*parseInt(objetoimg.target.value)+ "€"
    fila.appendChild(celdaPrecioParcial)

    //boton eliminar
    const celdaEliminar = document.createElement("td")
    const btnEliminar = document.createElement("button")
    btnEliminar.textContent="Quitar cesta" + celdaNombre.textContent
    //crear el evento de eliminar 
    btnEliminar.onclick=eliminarProductoCesta
    celdaEliminar.appendChild(btnEliminar)
    fila.appendChild(celdaEliminar)
//acumular el precio parcial al totall
precioTotal+=parseInt(peso)*parseInt(objetoimg.target.value)
precio.textContent=""
precio.textContent="Totales= " +precioTotal+ "€" 
}


function eliminarProductoCesta(objetoEliminar){
    alert(objetoEliminar.target)
}
 