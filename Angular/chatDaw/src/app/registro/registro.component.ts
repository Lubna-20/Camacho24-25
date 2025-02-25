import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServicioLocalService } from '../servicio-local.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario: Usuario=new Usuario();
constructor(private servicio: ServicioLocalService,private route:Router)
{}
Registrar() {

  //llamar al servicio de añadirNuevoUsuario (usuario)
   this.servicio.registro(this.usuario).subscribe((x:Usuario)=>{
    this.usuario=x;

   })
   this.route.navigate(['login'])

}

}
