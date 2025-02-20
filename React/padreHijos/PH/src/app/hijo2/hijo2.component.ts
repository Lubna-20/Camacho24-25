import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
mensajeDeHijoApadre!: string;

  @Input()
  mensajeEntradaHijo2!: string;
  @Output()
  mensajeSalidaPadre = new EventEmitter();
  enviarMensaje() {
        this.mensajeSalidaPadre.emit( {mensaje: this.mensajeDeHijoApadre});
    }
}
