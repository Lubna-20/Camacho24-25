window.addEventListener("load",()=>{

    const agregarBoton = document.getElementById("boton-agregar");
    const cajaPadre = document.querySelector(".container")
    const cajaHija1 = document.querySelector(".gallery")
    const cajaHija2 = document.createElement("div")
    cajaHija2.className="gallery"
    cajaPadre.appendChild(cajaHija2)
    

    let contadorBotones =0
    agregarBoton.addEventListener("click",()=>{
        contadorBotones++
        console.log("agregar boton")

        const botones = document.createElement('button');
        botones.textContent="Boton "+contadorBotones
        cajaHija1.appendChild(botones)
        
        botones.addEventListener("click",()=>{
           limpiarCaja()
            let numRandom = Math.floor(Math.random()*10)
            botones.textContent=numRandom
            for (let index = 0; index < numRandom; index++) {
              const img  = document.createElement('img')
              img.src ="img/"+numRandom+".JPG"
              cajaHija2.appendChild(img)

                
            }
        })


    })

     function limpiarCaja(){
        while(cajaHija2.firstElementChild){
            cajaHija2.removeChild(cajaHija2.firstElementChild)
        }
     }



})