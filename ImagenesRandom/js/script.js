window.addEventListener("load", inicio);

function inicio(){
    const contenedorPadre=document.body;
    const boton=document.createElement('button');
    boton.textContent="Cargar imagen";
    function cargarImagen(){

    }
    //Programar el evento
    //boton.onclick=()=>cargarImagen();
    boton.addEventListener("click",cargarImagen);
    contenedorPadre.appendChild(boton);
            
}