import { Component, OnInit } from '@angular/core';
import { Altura } from '../altura';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-alturas',
  templateUrl: './alturas.component.html',
  styleUrls: ['./alturas.component.css']
})
export class AlturasComponent implements OnInit {
  constructor(private servicio: ServicioService) { }
  alturas!: Altura[];
  ngOnInit(): void {
    this.servicio.obtenerAlturas().subscribe((resultado:Altura[])=>{
      console.log(resultado)
      this.alturas=resultado
    })
  }
}
