import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServicioLocalService } from '../servicio-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
privado!: boolean;
constructor(private router:Router,private servicioLocal:ServicioLocalService){

}
usuario: Usuario=new Usuario();
listaUsuarios:Usuario[]=[];
usuarioEncontrado!:Usuario;
Login() {



 this.servicioLocal.listadoUsuarios().subscribe((x)=>{
  x.forEach(element => {
    console.log(element.nombre)
    if (element.email===this.usuario.email && element.pwd===this.usuario.pwd) {
      this.usuarioEncontrado=element;
      if(this.privado){
        this.router.navigate(['chatp']);
        sessionStorage.setItem('Nombre',this.usuarioEncontrado.email)
      }else{

        this.router.navigate(['chat']);
        sessionStorage.setItem('Nombre',this.usuarioEncontrado.email)
      }

    }

  })
 })


}

}
