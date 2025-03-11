import { Component, OnInit } from '@angular/core';
import { Provincia } from '../provincia';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  provincias!: Provincia[];
  constructor(private servicio: ServicioService) { }
  ngOnInit(): void {
    this.servicio.obtenerProvincias().subscribe((resultado:Provincia[])=>{
      this.provincias=resultado
    })
  }

}
