import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioAdminService } from '../servicio-admin.service';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nUsuario!:string|null
cerrarSesion() {
  sessionStorage.removeItem('Nombre')
  this.nUsuario = 'Sesión cerrada'
  this.datasource = new MatTableDataSource<Mensaje>()


  this.route.navigate(['login'])
}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Mensaje>;
  actualizar() {
    this.httpCliente.leerMensajes().subscribe((resultado:Mensaje[])=>{
      this.datasource.data=resultado
      this.datasource.paginator = this.paginator
      this.datasource.sort=this.sort
    })

  }
activar(msj: Mensaje) {
  this.httpCliente.activarMensaje(msj).subscribe(
    ()=>{
  this.httpCliente.leerMensajes().subscribe(
    (result:Mensaje[])=>{
      this.datos=result;
      this.datasource.data=result;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  this.tabla1.renderRows();});
});
this.actualizar();


}
bloquear(msj: Mensaje) {
  this.httpCliente.bloquearMensaje2(msj).subscribe(
    ()=>{
      this.httpCliente.leerMensajes2().subscribe(
        (result:Mensaje[])=>{
        this.datos=result;
        this.datasource.data=result;
        this.datasource.paginator=this.paginator;
        this.datasource.sort=this.sort;
        this.tabla1.renderRows();});
    }
  );
  this.actualizar();
}

  msjchat: Mensaje={
    id: 0,
    usuario: '',
    fecha: '',
    mensaje: '',
    activo: 0,
    destinatario: ''
  }

     datasource=new MatTableDataSource<Mensaje>();
     mensaje!: Mensaje;
   datos: Mensaje[] =[];
   columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje','activo','bloquear','activar'];

  miParametro!: string;
   applyFilter(event: KeyboardEvent) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.datasource.filter = filterValue.trim().toLowerCase();

     if (this.datasource.paginator) {
       this.datasource.paginator.firstPage();
   }
   }
   constructor( private httpCliente: ServicioAdminService,private route:Router){

    }

     ngOnInit(): void {
      this.nUsuario = sessionStorage.getItem('Nombre')
      if (this.nUsuario!='admin@gmail.com' ) {
        this.datasource= new MatTableDataSource<Mensaje>()
      }else{

         this.httpCliente.leerMensajes2().subscribe((result:Mensaje[])=>{
           //this.datos=result;
           this.datasource.data=result;
           this.datasource.paginator=this.paginator;
           this.datasource.sort=this.sort;});
         }
}

}
