window.addEventListener("load", inicio); // !! Se ejecuta la función inicio cuando la página se carga

// !! Arrays con la información de los productos
const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

function inicio(){
    let divGalery = document.getElementById('galeria'); // ! Se obtiene el div donde irá la galería

    // ! Se recorre la lista de nombres para generar los elementos dinámicamente
    for (let index = 0; index < nombres.length; index++) {
        let div = document.createElement('div'); // * Se crea un div contenedor
        div.style.backgroundColor="gray"; // * Se le da color de fondo al div
    
        let img = document.createElement('img'); // * Se crea la imagen del producto
        let pPrecio = document.createElement('p'); // * Se crea el párrafo para el precio
        pPrecio.className="precio"; // * Se le asigna una clase CSS
        let pNombre= document.createElement('p'); // * Se crea el párrafo para el nombre
        pNombre.textContent=nombres[index]; // * Se asigna el nombre correspondiente
        
        img.src = "imagenes/" + nombres[index] + ".PNG"; // * Se asigna la imagen del producto
        
        // ! Se añaden los elementos al div y luego al contenedor principal
        divGalery.appendChild(div);
        div.appendChild(img);
        div.appendChild(pPrecio);
        div.appendChild(pNombre);
        div.appendChild(pPrecio);
        
        pPrecio.textContent=precios[index]+"€"; // * Se asigna el precio correspondiente
    
        // ! Evento para cuando se hace clic en la imagen
        img.addEventListener('click',()=>{
            const kilos = parseInt(prompt("Introduce el peso en kilos de " + nombres[index])); // * Se pide el peso
            const total = document.getElementById('total'); // * Se obtiene el elemento donde se muestra el total
            const tabla = document.getElementById('cesta'); // * Se obtiene la tabla de la cesta
            
            // ? Se crean los elementos de la fila
            const trCompra = document.createElement('tr');
            const nombreCompra = document.createElement('td');
            const nombrePeso = document.createElement('td');
            const nombrePrecio = document.createElement('td');
            const nombreButon = document.createElement('td');
            const button = document.createElement('button');
            button.textContent="Eliminar"; // * Texto del botón de eliminar
    
            // ? Se agregan los elementos a la tabla
            tabla.appendChild(trCompra);
            trCompra.appendChild(nombreCompra);
            trCompra.appendChild(nombrePeso);
            trCompra.appendChild(nombrePrecio);
            trCompra.appendChild(nombreButon);
            nombreButon.appendChild(button);
    
            // * Se asignan los valores a la fila
            nombreCompra.textContent=nombres[index];
            nombrePeso.textContent=kilos+" kg";
            nombrePrecio.textContent=precios[index]+"€";
            let subtotal = 0;
            subtotal += (precios[index] * kilos); // * Se calcula el subtotal
            
            total.textContent= "TOTAL " + subtotal + " €"; // * Se actualiza el total
    
            // ! Evento para eliminar el producto de la cesta
            button.addEventListener('click',()=>{
                let resto = total - (nombrePeso + nombrePrecio); // * Se recalcula el total
                total.textContent=subtotal-resto+"€";
                trCompra.replaceChildren(); // * Se eliminan los elementos de la fila
            });
        });
    }
}
