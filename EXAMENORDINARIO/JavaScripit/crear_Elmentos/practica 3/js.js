window.addEventListener('load', inicio)


function inicio() {
    // identificamos el body
    const body = document.body;
    // creamos el boton y el div donde se metaran las imagenes
    const boton = document.createElement('button');
    const div = document.createElement('div');

    //añador tenxto al boton
    boton.textContent = 'cargar imagenes'


    //añadir los elmentos creados al body
    body.appendChild(boton)
    body.appendChild(div)
    body.className='container'
    div.className='gallery'
    boton.addEventListener('click', () => {
       
        let cantidadImg = prompt("cuantos imagenes quieres insertar")
        if (cantidadImg < 5 || cantidadImg > 50) {
            alert("los numeros no deben ser menor que 5 ni mayor que 50")
        } else {
          
            //limpiar el contenido cada vez que se hace click
            // se puede hacer con dos formas
            div.replaceChildren()
            // tambien se puede utilizando el while
           /*while (div.firstChild) {
                div.removeChild(div.firstChild)
            }*/
           
            //crear la imagenes
            for (let i = 0; i < cantidadImg; i++) {
                console.log(i)
                // creamos las imagenes
                const img = document.createElement('img')
                let num = Math.floor(Math.random() * 51)

                if (i % 2 == 0) {
                    img.setAttribute("src", "https://randomuser.me/api/portraits/men/" + num + ".jpg")
                } else {
                    img.setAttribute("src", "https://randomuser.me/api/portraits/women/" + num + ".jpg")
                }
                img.className ='gallery img'
                div.appendChild(img)

            }

        }



    })


}