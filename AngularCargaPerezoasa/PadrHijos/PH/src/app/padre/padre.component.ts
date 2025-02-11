import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  random!: number;
generarRandom: any;
numeroRandom: any;
actualizarRandom(event: any) {
  this.random = Math.floor(Math.random() * 100) + 1;
}

mensajeDeHijo2: string='';
mensajeDeHijo1: string="";
actualizarMensajeDeHijo2(event: any) {
  this.mensajeParaHijo2=event.mensaje;
}
actualizarMensajeDeHijo1(event: any) {
  this.mensajeDeHijo1=event.mensaje;
}
mensajeParaHijo1: string="";
mensajeParaHijo2: string="";


//recibir  el valor de mensaje que sale del hijo1


}
