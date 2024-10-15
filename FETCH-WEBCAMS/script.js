//url del fichero json
const url = "getWebcam.php"
//contenedor donde se muestran los datos
const  ubicacion = document.querySelector("#fila")

//realizar solicitud
fetch(url)
  .then(response => response.text())
  .then(datos => console.log(datos))
  .finally(() => alert("FIN."))
  .catch(error => alert(error.datos));


  function mostrar(datos){
    datos.forEach(webC=>{
        const columna = document.createElement('div')
        columna.className="col-lg-4";

       // <div class="card">
       const tarjeta = document.createElement('div')
       tarjeta.className="card";
       columna.appendChild(tarjeta)
       const videoW = document.createElement('video')
       videoW.setAttribute("src",webC.url,"autoplay")
       videoW.setAttribute("autoplay loop")
       tarjeta.appendChild(videoW);
       const CardBody = document.createElement('div')
       CardBody.className="card-body"
       tarjeta.appendChild(CardBody)
       const titulo = document.createElement('h4')
       titulo.className="card-title"
       titulo.textContent=webC.lugar
       const subtitulo = document.createElement('p')
       subtitulo.className="card-text"
       subtitulo.textContent=webC.tiempo
       CardBody.appendChild(titulo)
       CardBody.appendChild(subtitulo)

     
    });
  }