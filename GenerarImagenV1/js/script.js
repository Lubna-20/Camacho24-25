// Escuchamos el evento 'load' para asegurarnos de que el DOM está completamente cargado antes de ejecutar el script
window.addEventListener('load', inicio)

function inicio() {
    // Identificamos el body y le asignamos una clase para aplicarle estilos si es necesario
    const body = document.body
    body.className = 'container'

    // Creamos los elementos necesarios:
    // Un botón para que el usuario pueda cargar las imágenes
    const boton = document.createElement('button')
    // Un div que contendrá las imágenes cargadas
    const div = document.createElement('div')

    // Le ponemos texto al botón para indicar su función
    boton.textContent = 'Cargar Imágenes'

    // Añadimos el botón y el contenedor de imágenes (div) al body
    body.appendChild(boton)
    body.appendChild(div)

    // Agregamos un evento 'click' al botón para ejecutar el proceso de carga de imágenes cuando sea presionado
    boton.addEventListener('click', () => {
        // Solicitamos al usuario que ingrese el número de imágenes a cargar
        let numImagenes = parseInt(prompt('Introduce el número de imágenes'))

        // Validamos que el número de imágenes sea mayor o igual a 5 y menor o igual a 50
        if (numImagenes < 5 || numImagenes > 50) {
            alert('El número de imágenes no puede ser menor que 5 ni superior a 50')
        } else {
            // Limpiamos el contenido previo antes de agregar nuevas imágenes
            limpiarContenido()

            // Eliminamos cualquier imagen previamente cargada dentro del div
            while (div.firstChild) {
                div.removeChild(div.firstChild)
            }

            // Creamos y añadimos las imágenes según el número que indicó el usuario
            for (let i = 0; i < numImagenes; i++) {
                // Creamos un nuevo elemento de imagen (img) para cada iteración
                const imagen = document.createElement('img')
                // Le asignamos una clase a cada imagen para poder aplicarles estilos si es necesario
                imagen.className = 'gallery img'

                // Generamos un número aleatorio entre 0 y 50 para usar en la URL de la imagen
                let numAleatorio = Math.floor(Math.random() * 51)
                
                // Definimos el género de la persona en la imagen. Alternamos entre 'men' y 'women' dependiendo de si el índice es par o impar.
                let genero = ''
                if (i % 2 == 0) {
                    genero = 'women' // Imágenes de mujeres para índices pares
                } else {
                    genero = 'men' // Imágenes de hombres para índices impares
                }

                // Seteamos el atributo 'src' de la imagen, indicando la URL desde donde se cargarán las imágenes de randomuser.me
                imagen.setAttribute("src", "https://randomuser.me/api/portraits/" + genero + "/" + numAleatorio + ".jpg")

                // Añadimos la imagen generada al div
                div.appendChild(imagen)
            }
        }

        // Función para limpiar el contenido previo del div
        function limpiarContenido() {
            while (div.firstChild) {
                div.removeChild(div.firstChild)
            }
        }
    })
}
