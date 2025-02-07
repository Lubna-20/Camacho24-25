import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent {
  texto!: string;
  miParametro!: string;
  mensaje:Mensaje={
    id:0,
    fecha:'',
    usuario:'',
    mensaje:'',
    destinatario:'',
    activo:1
  }
listaUsuarios: Usuario[]=[];
  seleccionado!: string;
mandarPrivado() {
 console.log("has pulsado enter")
 if (this.mensaje.destinatario!=''){
  this.mensaje.destinatario=this.msjchat.destinatario;
 }else
 {
  this.mensaje.destinatario=this.seleccionado;

 }
  this.mensaje.fecha= new Date().toLocaleString()
  this.mensaje.usuario=this.miParametro || ''
  this.mensaje.mensaje=this.msjchat.mensaje;
  this.httpCliente.insertarMensajeP(this.mensaje).subscribe(()=>{
    this.httpCliente.leerMensajesP(this.miParametro).subscribe((resultado:Mensaje[])=>{
      this.datos=resultado;
      this.datasource.data=resultado;
      this.datasource.paginator=this.paginator;
      this.datasource.sort=this.sort;
    })
  })
  this.mensaje.mensaje="";
//this.InsertarMensaje();

}
cerrarSesion() {
   this.miParametro="sesión cerrada";
   sessionStorage.removeItem('Nombre');
   this.datasource=new MatTableDataSource<Mensaje>();

}

msjchat: Mensaje={
 id:0,
 usuario:'',
 fecha:'',
 mensaje:'',
 destinatario:'',
 activo:1
}

  datasource=new MatTableDataSource<Mensaje>();
datos: Mensaje[] =[];
columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje','destinatario'];
@ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Mensaje>;
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();

  if (this.datasource.paginator) {
    this.datasource.paginator.firstPage();
}
}
constructor( private httpCliente: ServicioClienteService) {
}
  ngOnInit(): void {

    if (sessionStorage.getItem('Nombre')==null){
    this.datasource=new MatTableDataSource<Mensaje>();
    }else{
    this.miParametro=sessionStorage.getItem('Nombre')||"";
      this.httpCliente.leerMensajesP(this.miParametro).subscribe(
        (result:Mensaje[])=>{
          this.datos=result;
          this.datasource.data=result;
          this.datasource.paginator=this.paginator;
          this.datasource.sort=this.sort;
        });
          this.miParametro=sessionStorage.getItem('Nombre') || "";

          this.httpCliente.listadoUsuarios().subscribe(
            (x:Usuario[])=>{
              this.listaUsuarios=x;
            }
          )

  }
}
  InsertarMensaje() {
    // this.servicio.insertarMensaje(this.mensaje).subscribe((x:Chat)=>{this.mensaje=x;
    // this.LeerMensajes();})
    this.msjchat.usuario=this.miParametro;
    console.log("entro en insertar mensaje");
    if (sessionStorage.getItem('Nombre')==this.miParametro)
    {
      console.log("mensaje: "+this.msjchat.mensaje)
      this.httpCliente.insertarMensajeP(this.msjchat).
      subscribe(()=>{

       this.httpCliente.leerMensajesP(this.miParametro).
        subscribe((result:Mensaje[])=>
       { this.datos=result;
         this.datasource.data=result;
         this.datasource.paginator=this.paginator;
         this.datasource.sort=this.sort;
         this.tabla1.renderRows();
       });
      console.log("renderizar")
      this.datasource._updateChangeSubscription;
     // this.tabla1.renderRows();
      this.msjchat.mensaje="";

  })}
}
}


