window.addEventListener("load", inicio);

const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

function inicio(){
    const conenedorPadre = document.body
    const div1 = document.querySelector('.gallery')
    div1.className='container'
    var nr
    nr =cargarImagenMuestra()
    function cargarImagenMuestra(){
        //crear contenido de imagen de  referencia
        const imagen=document.createElement("img");
        imagen.className="gallery"
        for (let i = 0; i < imagenes.length; i++) {
            let imagen = document.createElement("img");
            imagen.setAttribute("src",imagenes)
            div1.appendChild(imagen) 
        }
    

        //ubicar la imagen a la caja
        div1.appendChild(imagen);
 
    }
}
 