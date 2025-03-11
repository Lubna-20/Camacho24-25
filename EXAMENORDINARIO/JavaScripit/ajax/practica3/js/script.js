window.addEventListener('load', () => {

    const url = "getImagenes.json";
    const caja = document.getElementById('cajaX');

    fetch(url)
        .then(response => response.json()) 
        .then(datos => mostrarDatos(datos)) 
        .finally(() => console.log("biennnnnnnnn")) 
        .catch(error => console.log(error));

    function mostrarDatos(datos) {
       
        datos.forEach((item, index) => {
            // Cada tres elementos, crear un nuevo <tr>
            if (index % 3 === 0) {
                const td = document.createElement('tr');
                caja.appendChild(tr);
            }

            const td = document.createElement('td');
            tr.appendChild(td);

            // Imagen
            const img = document.createElement('img');
            img.src = item.imagen;
            td.appendChild(img);

            // Texto
            const texto = document.createElement('p');
            texto.innerHTML = item.texto;
            td.appendChild(texto);

            // Subtexto
            const subTexto = document.createElement('p');
            subTexto.innerHTML = item.subtexto;
            td.appendChild(subTexto);
        });
    }

});
