window.addEventListener('load', inicio)

function inicio(){
    const cuerpo = document.body
    //Creacion del boton 
    const boton = document.createElement('button')
    boton.textContent = 'Crear imagen'
    //Introduccion de boton en el body
    cuerpo.appendChild(boton)
    let imagenes = []
    boton .addEventListener('click', ()=>{
        let nImagenes = parseInt(prompt('Indique el numero de imagenes '))
        if (nImagenes<5 || nImagenes>50) {
            limpieza()
            let imagenes = declararArray
            
        }
    })

}