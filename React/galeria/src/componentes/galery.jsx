
import { useEffect } from 'react';
import { useState } from 'react'

function galery() {
    // Implementar un componente para mostrar una galería de imágenes
    const [imagenes, setImagenes] = useState([]);
    useEffect(() => {
      fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
        .then(response => response.json())
        .then(data => {
          setImagenes(data);
          console.log(data)
        })
    }, []);

  return (
    <div className="container">
      <div className="row">
        {imagenes.map((img, index) => (
          <div key={index} className="col-md-4">
            <img src={img.imagen} alt={img.alt} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
     
    
  )
}

export default galery