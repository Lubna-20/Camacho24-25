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


let divGalery = document.getElementById('galeria')

for (let index = 0; index < nombres.length; index++) {
    let div = document.createElement('div')
    div.style.backgroundColor="gray"
   
    let img = document.createElement('img')
    let pPrecio = document.createElement('p')
    pPrecio.className="precio"
    let pNombre= document.createElement('p')
    pNombre.textContent=nombres[index]
    
    img.src = "imagenes/" + nombres[index] + ".PNG";
    divGalery.appendChild(div)
    div.appendChild(img)
    div.appendChild(pPrecio)
    div.appendChild(pNombre)
    div.appendChild(pPrecio)
    pPrecio.textContent=precios[index]+"€"
   
    img.addEventListener('click',()=>{

        const kilos = parseInt(prompt("introduce el peso del los kilos de "+nombres[index])) 
        const total = document.getElementById('total')
        const tabla = document.getElementById('cesta')
        const trCompra = document.createElement('tr')
        const nombreCompra = document.createElement('td')
        const nombrePeso = document.createElement('td')
        const nombrePrecio = document.createElement('td')
        const nombreButon = document.createElement('td')
        const button = document.createElement('button')
        button.textContent="eliminar"

        tabla.appendChild(trCompra)
        trCompra.appendChild(nombreCompra)
        trCompra.appendChild(nombrePeso)
        trCompra.appendChild(nombrePrecio)
        trCompra.appendChild(nombreButon)
        nombreButon.appendChild(button)

        nombreCompra.textContent=nombres[index]
        nombrePeso.textContent=kilos+" kg"
        nombrePrecio.textContent=precios[index]+"€"
        let subtotal =0
        
        subtotal += (precios[index]*kilos)
         
       
        total.textContent= "TOTAL "+subtotal+" €"

        button.addEventListener('click',()=>{
            let resto = total-(nombrePeso+nombrePrecio)
            total.textContent=subtotal-resto+"€"
            trCompra.replaceChildren()
            
            
           

        })

    })


    
}

}