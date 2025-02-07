import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServlocaladminService } from '../servlocaladmin.service';
import { ServlocalclienteService } from '../servlocalcliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
privado!: boolean;
constructor(private router:Router,private servicioCliente:ServicioClienteService, private serviciolocal: ServlocalclienteService){

}
usuario: Usuario={
  email: '',
  nombre: '',
  pwd: '',
  activo: 0
}
  usuarioEncontrado!: Usuario;
listaUsuarios:Usuario[]=[];
Login() {
  // this.servicioCliente.logeo(this.usuario).subscribe((x)=>{
  //   this.usuario=x[0];
  //   sessionStorage.setItem('Nombre',x[0].email);
  //   if (this.usuario.email=="admin@gmail.com"){
  //     this.router.navigate(['admin']);

  //   }else
  //   if (!this.privado){
  //     this.router.navigate(['chat']);
  //   }else{
  //     this.router.navigate(['chatp']);

  //   }
  // })
 this.serviciolocal.listadoUsuarios().subscribe(x=>{
 this.listaUsuarios=x;
 this.listaUsuarios.forEach(user => {
  if (user.email === this.usuario.email && user.pwd === this.usuario.pwd) {
    this.usuarioEncontrado = user;


if (this.usuarioEncontrado) {
  if (this.usuarioEncontrado.activo == 1) {
    sessionStorage.setItem('Nombre',this.usuarioEncontrado.email);
    if (this.usuario.email=="admin@gmail.com"){
         this.router.navigate(['admin']);

        }else
        if (!this.privado){
           this.router.navigate(['chat']);
        }else{
          this.router.navigate(['chatp']);
           }

      }

  }
}
});
});
}
}

