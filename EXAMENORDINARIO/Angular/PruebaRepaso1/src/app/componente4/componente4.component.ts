import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
lista: String[]=[];
aniadirLista() {
  this.lista.push(this.nombre);
}
nombre!: String;

}
