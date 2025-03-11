// mostrar mensaje mediante consola
//console.log('Accedo al script js')
// mostrar mensaje mediante una alerta 
alert("bienvenido a javaScript")

window.addEventListener("load", activar);
function activar(){
    const botonActivar = document.querySelector("#btn1")
    botonActivar.addEventListener("click",empezar)

    //otra forma
   // botonActivar.ondblclick=empezar
}

function empezar(){
    const encab1=document.querySelector("h1");
    console.log("encabezado1"+encab1.tagName)
    encab1.style.backgroundColor='pink'
    encab1.style.color='red'
    const encab2=document.querySelector("h2")
    encab2.style.backgroundColor='blue'

    with (document.body.style){
        backgroundColor='yellow'
        border='2px solid green'
        fontFamily='sans'
        padding='30px'
        margin='2em'

    }
}


