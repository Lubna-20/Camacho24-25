window.addEventListener('load', () => { 
    // Se ejecuta el código una vez que la página HTML ha sido completamente cargada

    const url = "http://camacho.atwebpages.com/webcam/getWebcam.php";
    // URL de la cual se obtendrán los datos de las webcams

    const ubicacion = document.querySelector('#fila');
    // Selecciona el contenedor donde se insertarán las tarjetas que contienen la información de las webcams

    // Se realiza una petición para obtener los datos de las webcams desde el servidor
    fetch(url)
        .then(response => response.json()) // Convierte la respuesta en formato JSON
        .then(datos => mostrarDatos(datos)) // Llama a la función mostrarDatos y pasa los datos recibidos
        .finally(() => console.log("biennnnnnnnn")) // Muestra un mensaje de confirmación en la consola cuando finaliza la petición
        .catch(error => console.log(error.data)); // Si ocurre un error, se muestra en la consola

    // Función que recibe los datos y los muestra en la página
    function mostrarDatos(datos) {
        datos.forEach(webc => { 
            // Itera sobre cada webcam (cada objeto dentro del array de datos)

            const columna = document.createElement('div');
            columna.className = "col-lg-4"; 
            // Crea un nuevo div con clase "col-lg-4" para cada webcam (esto usa las clases de Bootstrap para crear columnas)

            ubicacion.appendChild(columna); 
            // Añade la columna al contenedor seleccionado (#fila)

            const tarjeta = document.createElement('div');
            tarjeta.className = "card";
            // Crea una tarjeta (card) para mostrar el contenido de cada webcam

            columna.appendChild(tarjeta); 
            // Inserta la tarjeta dentro de la columna

            const videoW = document.createElement('video');
            videoW.setAttribute('src', webc.url); 
            videoW.setAttribute('autoplay', true); 
            videoW.setAttribute('loop', true); 
            // Crea un elemento de video, le asigna la URL del video de la webcam, y lo configura para que se reproduzca automáticamente y en bucle

            tarjeta.appendChild(videoW);
            // Añade el video dentro de la tarjeta

            const cardBody = document.createElement('div');
            cardBody.className = "card-body"; 
            // Crea un div con la clase "card-body" para contener el texto dentro de la tarjeta

            tarjeta.appendChild(cardBody); 
            // Añade el "card-body" a la tarjeta

            const titulo = document.createElement('h4');
            titulo.className = 'card-title';
            titulo.textContent = webc.lugar;
            // Crea un título con la clase "card-title" y le asigna el nombre del lugar de la webcam

            cardBody.appendChild(titulo); 
            // Añade el título al "card-body"

            const subtitulo = document.createElement('p');
            subtitulo.className = 'card-text';
            subtitulo.textContent = webc.tiempo;
            // Crea un subtítulo (párrafo) con la clase "card-text" que muestra el tiempo de la webcam

            cardBody.appendChild(subtitulo);
            // Añade el subtítulo al "card-body"
        });
    }
});
