import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../usuario';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Mensaje } from '../mensaje';
import { ServicioAdminService } from '../servicio-admin.service';

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.css']
})
export class AdminUsuarioComponent implements OnInit {
  datasource=new MatTableDataSource<Usuario>();
  nUsuario!:string|null

  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.datasource=new MatTableDataSource<Usuario>();
  }

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild(MatTable)
    tabla1!: MatTable<Usuario>;
  activarUsuario(user: Usuario) {
    this.httpCliente.activarUsuario(user).subscribe(
      ()=>{
    this.httpCliente.leerUsuarios().subscribe(
      (result:Usuario[])=>{
     //   this.datos=result;
        this.datasource.data=result;
        this.datasource.paginator=this.paginator;
        this.datasource.sort=this.sort;

         this.tabla1.renderRows();});
  });
        this.actualizar();
  }



  bloquearUsuario(user: Usuario) {
    this.httpCliente.bloquearUsuario(user).subscribe(
      ()=>{
        this.httpCliente.leerUsuarios().subscribe(
          (result:Usuario[])=>{
          //this.datos=result;
          this.datasource.data=result;
          this.datasource.paginator=this.paginator;
          this.datasource.sort=this.sort;
          });
      }


    );
    this.actualizar();


      }
      actualizar() {
        this.httpCliente.leerUsuarios().subscribe((resultado:Usuario[])=>{
          this.datasource.data=resultado
          this.datasource.paginator = this.paginator
          this.datasource.sort=this.sort
        })

      }
    msjchat: Mensaje={
      id:0,
      usuario:'',
      fecha:'',
      mensaje:'',
      destinatario:'',
      activo:0
     }
     userChat: Usuario={

      nombre:'',
      email:'',
      pwd:'',
      activo:0
     }

       mensaje!: Mensaje;
     datos: Usuario[] =[];
     columnas: string[] = [ 'nombre', 'email', 'pwd','activo','bloquear','activar'];

    miParametro!: string;
     applyFilter(event: KeyboardEvent) {
       const filterValue = (event.target as HTMLInputElement).value;
       this.datasource.filter = filterValue.trim().toLowerCase();

       if (this.datasource.paginator) {
         this.datasource.paginator.firstPage();
     }
     }
     constructor( private httpCliente: ServicioAdminService){

      }
       ngOnInit(): void {



            this.nUsuario = sessionStorage.getItem('Nombre')
            if (this.nUsuario!='admin@gmail.com') {
              this.datasource= new MatTableDataSource<Usuario>()
            }else{
              this.httpCliente.leerUsuarios().subscribe((result:Usuario[])=>{
                this.datos=result;this.datasource.data=result;
                this.datasource.paginator=this.paginator;
                this.datasource.sort=this.sort;});

               }
      }

         }

