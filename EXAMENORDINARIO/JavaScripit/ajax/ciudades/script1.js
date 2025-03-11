window.addEventListener('load',inicio);




function inicio(){
// URL de la cual se obtendrán los datos de las webcams
const url = "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php";

const tablaPrincipal = document.querySelector('tbody');
    

    fetch(url)
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(datos => mostrarDatos(datos)) 
    .finally(() => console.log("biennnnnnnnn"))

    function mostrarDatos(datos){
        datos.forEach(ciudades => {

            const tr = document.createElement('tr');
            tablaPrincipal.appendChild(tr);
            const tdCiudad = document.createElement('td');
            tr.appendChild(tdCiudad);
            const spanCiudad = document.createElement('span')
            spanCiudad.textContent=ciudades.ciudad_nombre;
            tdCiudad.appendChild(spanCiudad)
            const tdHabitantes = document.createElement('td');
            tr.appendChild(tdHabitantes);
            const spanhabitantes = document.createElement('span')
            tdHabitantes.appendChild(spanhabitantes)
            spanhabitantes.innerHTML=ciudades.ciudad_poblacion;
            const tdVideo =  document.createElement('td');
            tr.appendChild(tdVideo);
           
            tdVideo.style.width="50px"
            tdVideo.innerHTML=ciudades.video

            const img = document.createElement('img');
            img.src=ciudades.imagen
            img.width=200
            tr.appendChild(img)
            const mapa = document.createElement('td')
            mapa.innerHTML=ciudades.mapa
           
            tr.appendChild(mapa)

            const id = document.createElement('td')
            const spanId = document.createElement('span')
            id.appendChild(spanId)
            spanId.textContent=ciudades.ciudad_ID
            tr.appendChild(id)
            

            
        });
    }

    
    



}