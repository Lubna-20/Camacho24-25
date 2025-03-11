import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  @Input()
mensajeParaHijo1!: string;
mensajeDeHijo1!:string;
mensajeDeHijo2!: string;
mensajeParaHijo2!: string;
numeroRandomDeHijo1 !: number;


numeroRandom($event: any) {
  this.numeroRandomDeHijo1 = $event.numero;
}
actualizarMensajeDeHijo2($event: any) {
  this.mensajeDeHijo2 = $event.mensaje;
}
  // recibe mensaje de hijo 1
actualizarMensajeDeHijo1(event : any) {
    this.mensajeDeHijo1 = event.mensaje;
}



}
