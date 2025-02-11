import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  mensajeDeHijo2ParaPadre: string='';
enviarMensaje() {
  this.mensajeSalidaHijo2.emit( { mensaje: this.mensajeDeHijo2ParaPadre  } );
}
  @Input()
mensajeDeEntradaHijo2: string="";
@Output()
mensajeSalidaHijo2= new EventEmitter();

}
