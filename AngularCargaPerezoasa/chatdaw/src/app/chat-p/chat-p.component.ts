import { Component, ViewChild } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent {



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

 constructor(private router:Router,private servicioCliente:ServicioClienteService){

  }
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
    cerrarSesion() {
      sessionStorage.removeItem('Nombre')
      this.uSuario = 'Sesión Cerrada'
      this.dataSource = new MatTableDataSource<Mensaje>()
      this.router.navigate(['login'])
    }
    displayedColumns: string []= ['id' ,'fecha', 'usuario','mensaje', 'destinatario']
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
