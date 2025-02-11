import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  mensajeDeHijo1ParaPadre:string="" ;
  @Input()
  mensajeDeEntradaHijo1: string="";
  @Output()
mensajeDeSalidaPadreHijo1 = new EventEmitter();
  enviarMensajePadre(){
    this.mensajeDeSalidaPadreHijo1.emit( { mensaje: this.mensajeDeHijo1ParaPadre  } );
  }


}
