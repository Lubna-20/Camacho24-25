import { Component, OnInit, ViewChild } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent  implements OnInit {
  uSuario!:string
  miParametro!:string;


constructor( private httpClient:ServicioClienteService, private router: Router) {

}
  ngOnInit(): void {
    if (sessionStorage.getItem('Nombre')==null) {
      this.dataSource=new MatTableDataSource<Mensaje>()
    } else{
      this.uSuario=sessionStorage.getItem('Nombre')||'';
      this.httpClient.leerMensajeP(this.uSuario).subscribe(
        (resultado:Mensaje[])=>{
        this.dataSource.data=resultado
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
       })
    }

  }
  displayedColumns: string []= ['id' ,'fecha', 'usuario','mensaje','destinatario']
//Construir la lista de datos que va a recoger los contenidos del servicio obtenerMensajes()
dataSource= new MatTableDataSource<Mensaje>();
applyFilter($event: KeyboardEvent) {

}
msjchat: Mensaje={
  id: 0,
  usuario: '',
  fecha: '',
  mensaje: '',
  destinatario: '',
  activo: 1,
}
recargar() {
  this.httpClient.leerMensajeP(this.uSuario).subscribe((datos: Mensaje[])=>{
    this.dataSource.data=datos;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  })

}
enviarMensaje() {
  this.msjchat.usuario=sessionStorage.getItem('Nombre')||'';
  this.msjchat.fecha=new Date().toLocaleDateString()
this.httpClient.insertarMensajeP(this.msjchat).subscribe(()=>{
  this.httpClient.leerMensajeP(this.uSuario).subscribe((datos: Mensaje[])=>{
    this.dataSource.data=datos;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  })

})

}
cerrarSesion() {
  sessionStorage.removeItem('Nombre')
  this.uSuario = 'Sesión Cerrada'
  this.dataSource = new MatTableDataSource<Mensaje>()
  this.router.navigate(['login'])
}
@ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


}
