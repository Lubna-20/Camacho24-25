window.addEventListener("load" , inicio);

function inicio(){

// Recuperamos el div padre en el que queramos crear las etiquetas img
    const primerdiv = document.querySelector(".gallery")
    const numImagenes = 20;
    console.log(primerdiv)
// Lanzamos un interval en el que cada 2 segundos se crean img dinámicas
    setInterval (() =>{
        
         primerdiv.innerHTML = ""
        for( let i = 0; i < numImagenes;i++){
            let numAle = Math.floor(Math.random()*20)
            let imagen = document.createElement("img");
            imagen.setAttribute("src","./img/"+numAle + ".JPG")
            divPadre.appendChild(imagen)
        }
       
    },2000)

}