import { Component, OnInit } from '@angular/core';
import { ProductoModule } from '../producto/producto.module';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  listaProductos!:ProductoModule[];
  constructor(private servicio:ServicioService) {
    this.servicio.leerProductos().subscribe((Productos:ProductoModule[])=>{
      this.listaProductos=Productos;
    })
   }

  ngOnInit(): void {
  }


}
