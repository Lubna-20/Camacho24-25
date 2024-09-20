window.addEventListener('load', inicio)

function inicio(){
    //Identificamos el body
    const body = document.body

    //Creamos los elementos necesarios
    //El boton que realizara la accion y el div donde se guardaran las imagenes
    const boton = document.createElement('button')
    const div = document.createElement('div')

    //Poner texto al boton 
    boton.textContent= 'Cargar Imagenes'

    //Anadir el boton y el div al body
    body.appendChild(boton)
    body.appendChild(div)

    boton.addEventListener('click',() =>{
        let numImagenes = parseInt(prompt('Introduce el numero de imagenes'))

        if(numImagenes < 5 || numImagenes > 50){
            alert('El numero de imagenes no puede ser menor que 5 ni superior de 50')
        } else{
            //Limpiar el contenido cada vez que se hace click
            //En esta condicion siempre habra un primer hijo
            while(div.firstChild){
                div.removeChild(div.firstChild)
            }

            for (let i = 0; i < numImagenes; i++) {
                //Nos creamos el elemento img para cada iteracion
                const imagen = document.createElement('img')
                //Queda pendiente el classname de imagen.ClassName = 'gallery img'
                let numAleatorio = Math.floor(Math.random()*51)
                let genero = ''
                //Averiguando si i es par o impar
                if (i % 2 == 0) {
                    genero = 'women'
                } else{
                    genero = 'men'
                }

                //Seteamos el atributo src 
                imagen.setAttribute("src","https://randomuser.me/api/portraits/" + genero+"/"+ numAleatorio +".jpg");
                div.appendChild(imagen)
                
            }
        }
    })
}