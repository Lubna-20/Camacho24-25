import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServlocalclienteService } from '../servlocalcliente.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  constructor( private servicio:ServicioClienteService,private route:Router, private serviciolocal:ServlocalclienteService){}

  usuario!: Usuario;
  nuevoPassword:Usuario={
    nombre: '',
    email: '',
    pwd: '',
    activo: 0
  }
cambiarPwd() {
if (this.nUsuario !== null) {
  this.nuevoPassword.email = this.nUsuario;
} else {
  this.nuevoPassword.email = "@gmail.com";
}
 this.serviciolocal.cambiarPwd(this.nuevoPassword).subscribe
 (x=>this.usuario=x)
}
actualizar() {
  this.serviciolocal.leerMensajes().subscribe((resultado:Mensaje[])=>{
    this.dataSource.data=resultado
    this.dataSource.paginator = this.paginator
    this.dataSource.sort=this.sort
  })

}
enviarMensaje() {
  this.mensaje.usuario=this.nUsuario || ''
 this.mensaje.fecha= new Date().toLocaleString()
  this.serviciolocal.nuevoMensaje(this.mensaje).subscribe(()=>{
    this.serviciolocal.leerMensajes().subscribe((resultado:Mensaje[])=>{
      this.dataSource.data=resultado
      this.dataSource.paginator = this.paginator
      this.dataSource.sort=this.sort
    })
  })
  this.mensaje.mensaje="";
}
  dataSource = new MatTableDataSource<Mensaje>()

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  nUsuario!:string|null
  mensaje:Mensaje={
    id:0,
    fecha:'',
    usuario:'',
    mensaje:'',
    destinatario:'todos',
    activo:1
  }
  displayedColumns: string[]=['id','fecha','usuario','mensaje'];

  ngOnInit(): void {
    this.serviciolocal.leerMensajes().subscribe((resultado:Mensaje[])=>{
      this.dataSource.data=resultado
      this.dataSource.paginator = this.paginator
      this.dataSource.sort=this.sort
    })
    this.nUsuario = sessionStorage.getItem('Nombre')
    if (this.nUsuario==null) {
      this.dataSource= new MatTableDataSource<Mensaje>()
    }else{

      this.serviciolocal.leerMensajes().subscribe((resultado:Mensaje[])=>{
        this.dataSource.data=resultado
        this.dataSource.paginator = this.paginator
        this.dataSource.sort=this.sort
      })
    }
  }

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
