import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {


    @Input()
    mensajeEntradaHijo1!: string;
    @Output()
    mensajeSalidaPadre = new EventEmitter();
    mensajeNumeroRandom = new EventEmitter();
    mensajeDeHijoApadre!: string;
    numeroRandom!: number;


    enviarMensaje() {
        this.mensajeSalidaPadre.emit( {mensaje: this.mensajeDeHijoApadre});
    }
    enviarNumero() {
        this.numeroRandom = Math.floor(Math.random() * 1000);
        this.mensajeNumeroRandom.emit( {numero: this.numeroRandom});
        console.log(this.mensajeNumeroRandom);

      }
}
