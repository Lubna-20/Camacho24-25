window.addEventListener("load", inicio);

function inicio(){
    //Identificar contenedor Padre
    const contenedorPadre=document.body;
    //Crear botonn de comando para ejecutar la accion 
    const boton=document.createElement('button');
    boton.textContent="Cargar imagen";
    function cargarImagen(){
    }
    //Programar el evento
    //boton.onclick=()=>cargarImagen();
    boton.addEventListener("click",cargarImagen);
    //Incorporar el boton a un contenedor padre
    contenedorPadre.appendChild(boton);
    //Declarar la funcion 
    function cargarImagen(){
        for(let i=0;i<20;i++){
            const imagen=document.createElement("img");
            let nR=Math.floor(Math.random()*40);
            let genero="women"
            if(i%2==0){
                genero="women";
            }else{
                genero="men";
            }
            imagen.setAttribute("src","https://randomuser.me/api/portraits/" + genero+"/"+ nR+".jpg");
            contenedorPadre.appendChild(imagen);
        }
        
    }
}