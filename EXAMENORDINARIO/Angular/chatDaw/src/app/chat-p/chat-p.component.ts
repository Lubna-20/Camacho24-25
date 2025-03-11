import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { ServicioClienteService } from '../servicio-cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuario } from '../usuario';
import { ServicioLocalService } from '../servicio-local.service';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent implements OnInit {
  constructor(private servicio:ServicioLocalService,private route:Router){}

  msjCargado:Mensaje ={
    id:0,
    fecha:'',
    usuario:'',
    mensaje:'',
    destinatario:'',
    activo:1
  }
  nUsuario!:string|null

  ngOnInit(): void {
    this.nUsuario = sessionStorage.getItem('Nombre')
    if (this.nUsuario==null||this.nUsuario=='Sesión cerrada') {
      this.dataSource= new MatTableDataSource<Mensaje>([])
    }

    if (this.nUsuario==null) {
      this.dataSource= new MatTableDataSource<Mensaje>()
    }else{
      this.servicio.leerMensajesP(this.nUsuario).subscribe((resultado:Mensaje[])=>{
        this.dataSource.data=resultado
        this.dataSource.paginator = this.paginator
        this.dataSource.sort=this.sort
      })
      this.msjCargado.destinatario=this.nUsuario
    }

  }




enviarMensaje() {


  this.msjCargado.usuario= this.nUsuario || ''
  this.msjCargado.fecha= new Date().toLocaleString()
  this.servicio.escribirMensaje(this.msjCargado).subscribe(()=>{
    this.servicio.leerMensajesP(this.msjCargado.usuario).subscribe((resultado:Mensaje[])=>{
      this.dataSource.data=resultado
      this.dataSource.paginator = this.paginator
      this.dataSource.sort=this.sort

    })
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

  displayedColumns: string[]=['id','fecha','usuario','mensaje','Destinario'];



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
