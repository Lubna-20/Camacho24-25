import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTable, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Mensaje } from '../mensaje';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
recargar() {
  this.servicioCliente.leerMensajes().subscribe((resultado:Mensaje[])=>{
    this.dataSource.data=resultado
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort

  })
}
enviarMensaje() {
  this.mensaje.usuario = this.uSuario|| ''
  this.mensaje.fecha= new Date().toLocaleDateString()
this.servicioCliente.escribirMensajes(this.mensaje).subscribe(()=>{
  this.servicioCliente.leerMensajes().subscribe((resultado:Mensaje[])=>{
    this.dataSource.data=resultado
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort
    this.tabla.renderRows();
    this.dataSource._renderChangesSubscription;

  })
})
}

  constructor(private router:Router,private servicioCliente:ServicioClienteService){

  }

  uSuario!:string|null
  mensaje:Mensaje={
    id:0,
    fecha:'',
    usuario:'',
    mensaje:'',
    destinatario:'rodos',
    activo:1

  }
  dataSource = new MatTableDataSource<Mensaje>()

  ngOnInit(): void {
    this.uSuario = sessionStorage.getItem('Nombre')
    if (this.uSuario==null) {
      this.dataSource = new MatTableDataSource<Mensaje>()
    }else{
      this.servicioCliente.leerMensajes().subscribe((resultado:Mensaje[])=>{
        this.dataSource.data=resultado
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      })
    }
  }
cerrarSesion() {
  sessionStorage.removeItem('Nombre')
  this.uSuario = 'Sesión Cerrada'
  this.dataSource = new MatTableDataSource<Mensaje>()
  this.router.navigate(['login'])
}
displayedColumns: string []= ['id' ,'fecha', 'usuario','mensaje']
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
@ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
tabla!:MatTable<Mensaje>

}
