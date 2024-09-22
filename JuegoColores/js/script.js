window.addEventListener('load', inicio)

function inicio(){
    const cuerpo = document.body
    vectoresColores = ['red','green','blue','pink']
    vectoresNombre = ['#ff0000','#00bb2d','#0000ff','#ff0080']
    let intervalo;
    let tiempoRestante = 30;
    
    const cajaP=document.getElementById('contenedorP')
    const boton= cajaP.firstElementChild;
    const spuntos=cajaP.lastElementChild;

    console.log(boton)
    console.log(spuntos)

}
function obtenerColorAleatorio() {
    return colores[Math.floor(Math.random() * vectoresColores)];
}