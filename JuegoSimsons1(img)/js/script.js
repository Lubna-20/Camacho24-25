window.addEventListener("load" , inicio);

function inicio(){
    const imagenes = document.querySelectorAll(" img")
    
    setInterval(() => {
         
        Array.from(imagenes).forEach( item =>{
            let num = Math.floor(Math.random()*19) + 1;
            item.setAttribute("src","./img/" + num + ".JPG");

        })
    }, 1000);
}