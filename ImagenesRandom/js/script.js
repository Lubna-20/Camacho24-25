window.addEventListener("load", inicio);

function inicio(){
    const boton=document.createElement('button');
    boton.textContent=item;
            body.appendChild(boton);
            boton.addEventListener("click",()=>{
                console.log("evento de "+item)
                //crear una imagen por cada evento click
                const imagenX=document.createElement("img");
                //Añadir al atributo src de la etiqueta img un valor
                let numeroRandom=Math.round(Math.random()*20)
                if(indice % 2 == 0){
                    imagenX.setAttribute("src","https://randomuser.me/api/portraits/women/" + numeroRandom+".jpg")

                } else {
                    imagenX.setAttribute("src","https://randomuser.me/api/portraits/men/"+ numeroRandom+".jpg")
                }
                divSecundario.appendChild(imagenX)

            })

}