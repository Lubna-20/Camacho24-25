import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServicioslocalService } from '../servicioslocal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  privado!: boolean;
  constructor(private router:Router,private servicioCliente:ServicioClienteService,private serviciolocal: ServicioslocalService){

  }
  usuarioEncontrado!:Usuario;
Login2() {
  this.serviciolocal.leerTodosUsuarios().subscribe(x=>{

    this.listaUsuarios=x;
   this.listaUsuarios.forEach(user => {
     if(user.email===this.usuario.email && user.pwd===this.usuario.pwd){
       this.usuarioEncontrado=user;
     }
   });
  })
  if(this.usuarioEncontrado){
    if(this.usuario.activo===1){
      sessionStorage.setItem('Nombre',this.usuarioEncontrado.email);
      if ( this.usuario.email === 'admin@gmail.com' ) {
        this.router.navigate(['admin']);
      } else{
        if (!this.privado) {
          this.router.navigate(['chat']);
        } else{
          this.router.navigate(['chatp']);
        }
      }
    }

  }


}

usuario: Usuario=new Usuario();
listaUsuarios:Usuario[]=[];
Login() {
  this.servicioCliente.logeo(this.usuario).subscribe((x)=>{
    this.usuario=x[0];
    sessionStorage.setItem('Nombre',x[0].email);
    if ( this.usuario.email === 'admin@gmail.com' ) {
      this.router.navigate(['admin']);
    } else{
      if (!this.privado) {
        this.router.navigate(['chat']);
      } else{
        this.router.navigate(['chatp']);
      }
    }
  })
  this.router.navigate(['chat']);
}

}
