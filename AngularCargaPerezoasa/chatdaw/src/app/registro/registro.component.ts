import { Component } from '@angular/core';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario: Usuario=new Usuario();
constructor(private servicios: ServicioClienteService){}

Registrar() {
//LLAMAR AL SERVICIO
this.servicios.insertarUsuario(this.usuario).subscribe((x:Usuario)=>{
  this.usuario=x;
})
}

}
