import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario: Usuario=new Usuario();
constructor(private servicios: ServicioClienteService, private route:Router){}

Registrar() {
//LLAMAR AL SERVICIO
this.servicios.insertarUsuario(this.usuario).subscribe((x:Usuario)=>{
  this.usuario=x;
})
this.route.navigate(['login'])
}

}
