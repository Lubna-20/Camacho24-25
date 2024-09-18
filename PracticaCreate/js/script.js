window.addEventListener("load" , inicio);

    function inicio(){

        //Contenedor existente
        const cuerpo=document.body;
        console.log("cuerpo: " + cuerpo)
        //Crear contenedor primcipal
        const divPrincipal=document.createElement('div');
        divPrincipal.className='contenedorPrincipal';
        divPrincipal.textContent="Contenedor Principal"
        cuerpo.appendChild(divPrincipal);

        //Contrnrdor secundario
        //crear una nueva caja(div)
        const divSecundario=document.createElement('div')
        //agregar estilo a la nueva caja.El estilo procede del fichero
        divSecundario.className='contenedorSecundario'
        //agregar texto al contenedor
        divSecundario.textContent="Contenedor Secundario"
        //agregar el nuevo contenedor al padre(elemento superior)
        divPrincipal.appendChild(divSecundario)

        const listaBotones=['Botón1','Botón2','Botón3','Botón4','Botón5','Botón6','Botón7','Botón8']
        //bucle para recorrer cada elemento del arrayç
        //item es cada elemento del array
        listaBotones.forEach((item,indice)=>{
            //crear un nuevo boton (total botones:listaBotones,length)
            const nuevoBoton=document.createElement('button');
            nuevoBoton.textContent=item;
            //agregar la clase botonX
            nuevoBoton.className='botonX'
            divSecundario.appendChild(nuevoBoton);
            nuevoBoton.addEventListener("click",()=>{
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
        })

    }