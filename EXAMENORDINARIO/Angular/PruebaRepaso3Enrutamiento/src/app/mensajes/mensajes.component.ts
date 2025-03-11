import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensajes';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mensajes !: Mensaje[];
  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.servicio.leerMensajes().subscribe((resultado:Mensaje[])=>{
      console.log(resultado)
      this.mensajes=resultado
    })
  }
}
