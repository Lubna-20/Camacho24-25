window.addEventListener("load", inicio);

function inicio(){
   
    let cuerpo = document.body
    let contenedor = document.createElement('div')
    contenedor.className='container'

    cuerpo.appendChild(contenedor)

    let fieldset=document.createElement('fieldset')
    fieldset.className='gallery'
    contenedor.appendChild(fieldset)
    
    let boton = document.createElement('button')
    contenedor.appendChild(boton)
    boton.textContent='Cargar'
    let legenda=document.createElement('legend')
    legenda.innerText="Practica Imagenes"
    fieldset.appendChild(legenda)
   
    boton.addEventListener("click",cargarImagen);

function cargarImagen(){

    for (let i = 0; i < 40; i++) {
        const imagen=document.createElement("img");
        let numR=Math.floor(Math.random()*40);
        imagen.src="https://randomuser.me/portraits/men/"+numR+".jpg"
        fieldset.appendChild(imagen)

        imagen.addEventListener('click', function(){
            imagen.className='ponerBorde'
        })
        
    }  
}
    


}