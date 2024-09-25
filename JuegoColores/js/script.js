window.addEventListener('load', inicio)

const cuerpo = document.body
const vectoresColores = ['red','green','blue','pink','orange','purple','yellow']

function inicio(){
   
    let intervalo;
    let tiempoRestante = 30;
    let aciertos=0;
    let intervaloTiempo
    
    
    const cajaP=document.getElementById('contenedorP')
    const boton= cajaP.firstElementChild;
    const spuntos=cajaP.lastElementChild;
    const tiempo=document.createElement('div')
    const cajonJuego=document.createElement('div')
    cajaP.appendChild(cajonJuego)
    cajaP.appendChild(tiempo)

    tiempo.textContent='30'

     boton.addEventListener("click", function(){
        boton.hidden=true
       
    intervaloTiempo=setInterval(()=>{
        tiempoRestante--

        tiempo.textContent=tiempoRestante
        if (tiempoRestante==0) {
            clearInterval(intervaloTiempo)
            clearInterval(intervalo)
            cajonJuego.replaceChildren()
            boton.hidden=false
        }
    },1000)
        intervalo=setInterval(()=>{

        cajonJuego.replaceChildren()
        let contenedor=document.createElement('div')
        

        let color = obtenerColorAleatorio()
        let nombre = obtenerColorAleatorio()

        contenedor.style.backgroundColor=color
        contenedor.id=color
        contenedor.style.width='150px'
        contenedor.style.height='150px'
        contenedor.style.marginTop='8px'
        contenedor.style.textAlign='center'

        
        contenedor.textContent=nombre
        cajonJuego.appendChild(contenedor)
        contenedor.addEventListener('click' , ()=>{
            
        if (contenedor.id==contenedor.textContent) {
            console.log(contenedor.id)
            console.log(contenedor.textContent)
            aciertos++
            spuntos.textContent=aciertos
        } else{
            aciertos--   
            spuntos.textContent=aciertos
            if (aciertos<0) {
                clearInterval(intervaloTiempo)
                clearInterval(intervalo)
                cajonJuego.replaceChildren()
            }
        }
        })

        },2000)

     })

}
function obtenerColorAleatorio() {
    return vectoresColores[Math.floor(Math.random() *(vectoresColores.length-1))];

}
