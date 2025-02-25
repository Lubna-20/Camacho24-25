
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioClienteService } from '../servicio-cliente.service';
import { ServicioLocalService } from '../servicio-local.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  constructor(private servicio:ServicioLocalService,private route:Router){}
  nUsuario!:string|null
  ngOnInit(): void {
    this.nUsuario = sessionStorage.getItem('Nombre')
    if (this.nUsuario==null) {
      this.dataSource= new MatTableDataSource<Mensaje>()
    }else{

      this.servicio.listadoDeMensajes().subscribe((resultado:Mensaje[])=>{
        this.dataSource.data=resultado
        this.dataSource.paginator = this.paginator
        this.dataSource.sort=this.sort
      })
    }
  }
enviarMensaje() {
  this.mensaje.usuario=this.nUsuario || ''
  this.mensaje.fecha= new Date().toLocaleString('es-AR')
  console.log(this.mensaje)
  this.servicio.escribirMensaje(this.mensaje).subscribe(()=>{

    this.servicio.listadoDeMensajes().subscribe((resultado:Mensaje[])=>{
      this.dataSource.data=resultado
      this.dataSource.paginator = this.paginator
      this.dataSource.sort=this.sort

    })
  })
  window.location.reload()
}
recargar(){
  this.servicio.listadoDeMensajes().subscribe((resultado:Mensaje[])=>{
    this.dataSource.data=resultado
    this.dataSource.paginator = this.paginator
    this.dataSource.sort=this.sort
  })
}

  dataSource = new MatTableDataSource<Mensaje>()

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  mensaje:Mensaje={
    id:0,
    fecha:'',
    usuario:'',
    mensaje:'',
    destinatario:'todos',
    activo:1
  }
  displayedColumns: string[]=['id','fecha','usuario','mensaje'];


  cerrarSesion() {
    sessionStorage.removeItem('Nombre')
    this.nUsuario = 'Sesión cerrada'
    this.dataSource = new MatTableDataSource<Mensaje>()
    this.route.navigate(['login'])
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tabla!:MatTable<Mensaje>


}
