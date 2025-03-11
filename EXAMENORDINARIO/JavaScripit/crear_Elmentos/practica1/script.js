window.addEventListener("load",inicio)
    function inicio(){
        //contenedor existente
        const cuerpo =document.body;
        console.log("cuerpo:"+cuerpo)

        // crear contendor principar
        const divPrincipal = document.createElement('div');
        // agregarge clase de estilo al etiqueta
        divPrincipal.className='contenedorPrincipal';
        divPrincipal.textContent='estoy en el contenedor principal'
        cuerpo.appendChild(divPrincipal);
        // crear contenedor segundario
        const divSegundario = document.createElement('div');
        // agregar clase de estilo al div segundario
        divSegundario.className='contenedorSegundaria'
        divSegundario.textContent='Estoy en el contenedor segundario'
        divPrincipal.appendChild(divSegundario);
        // bucle para reccorer cada elemento del array
        // item es cada elemento del array
        const listaBotones=['Boton 1','Boton 2','boton 3','boton 4','Boton 5','Boton 6','boton 7','boton 8']
        listaBotones.forEach((item,indice)=>{
            // crear un nuevo (total de botones : listaBotones.lenght)
            const nuevoBoton=document.createElement('button');
            nuevoBoton.textContent=item;
            nuevoBoton.className='boton';
            divSegundario.appendChild(nuevoBoton);
            
                nuevoBoton.addEventListener('click',()=>{
                    console.log("evento de "+item);
                    // crear img
                    const img = document.createElement('img')
                    // crearmos un nuemro random para que m elija una img random
                    var num = Math.floor(Math.random() * 100);
                    if(indice % 2 ==0){
                        img.setAttribute("src","https://randomuser.me/api/portraits/men/"+num+".jpg")
                    }else{
                        img.setAttribute("src","https://randomuser.me/api/portraits/women/"+num+".jpg")
                    }
                    // añadir en la etiqueta img un atributo scr
                    
                    divSegundario.appendChild(img)
                })
            
                
            
            
            
           
        })
    }
