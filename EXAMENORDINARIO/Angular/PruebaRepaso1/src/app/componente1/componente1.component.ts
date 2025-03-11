import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
cambiarColor(color: string) {
  for (let i = 0; i < this.botones.length; i++) {
    this.botonColores[i] = color;
  }

}
  botones = ["boton1","boton2","boton3","boton4","boton5"]
  botonColores =["red","green","blue","yellow","white"]

}
