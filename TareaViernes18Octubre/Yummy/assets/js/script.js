window.addEventListener('loas' , inicio)

url= "getPlatos.php.json"

const padreNav = document.querySelectorAll(".container")
const contenedorMenu = document.querySelectorAll(".navbar")

eliminarMenu()

function inicio(){



}





function eliminarMenu() {
    contenedorMenu.forEach((element) => {
      element.remove();
    });
  }