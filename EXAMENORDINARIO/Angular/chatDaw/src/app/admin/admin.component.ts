import { Component, OnInit, ViewChild } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ServicioClienteService } from '../servicio-cliente.service';
import { ServicioAdminService } from '../servicio-admin.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
activar(arg0: Usuario) {
throw new Error('Method not implemented.');
}
bloquear(arg0: Usuario) {
throw new Error('Method not implemented.');
}

ngOnInit(): void {
  this.nUsuario = sessionStorage.getItem('Nombre');
  console.log(this.nUsuario);
  if (this.nUsuario == "admin@gmail.com") {
    this.servicio.leerMensajes().subscribe((resultado:Mensaje[])=>{
      this.dataSource1.data=resultado
      this.dataSource1.paginator = this.paginator
      this.dataSource1.sort=this.sort
    })
    this.servicioAdmin.leerUsuarios().subscribe((resultado:Usuario[])=>{
      this.dataSource2.data=resultado
      this.dataSource2.paginator = this.paginator
      this.dataSource2.sort=this.sort
    })

  } else {
    this.nUsuario = null;
    this.dataSource1= new MatTableDataSource<Mensaje>()
  }
}

constructor(private servicio:ServicioClienteService,private route:Router,private servicioAdmin:ServicioAdminService){}
  dataSource1 = new MatTableDataSource<Mensaje>()
  dataSource2 = new MatTableDataSource<Usuario>()

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
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
  usuario:Usuario={
    nombre:'',
    email:'',
    pwd:'',
    activo:1
  }
  displayedColumns: string[]=['id','fecha','usuario','mensaje'];
  displayedColumnsUsuario: string[]=['nombre','email','password','activo','bloquear','activar'];
enviarMensaje() {
throw new Error('Method not implemented.');
}
cerrarSesion() {
throw new Error('Method not implemented.');
}
nUsuario!: String | null;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


}
