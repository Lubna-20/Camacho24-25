import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Mensaje } from './mensaje';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminService {

  constructor(private httpCliente:HttpClient) { }
  bloquearMensaje(msj:Mensaje){
    return this.httpCliente.
    post<Mensaje>('http://moralo.atwebpages.com/chat/BloquearMensaje.php',msj);
  }
  bloquearMensaje2(msj:Mensaje){
    return this.httpCliente.
    post<Mensaje>('http://servicioChat/BloquearMensaje.php',msj);
  }
  activarMensaje(msj:Mensaje){
    return this.httpCliente.
    post<Mensaje>('http://moralo.atwebpages.com/chat/ActivarMensaje.php',msj);
  }
  bloquearUsuario(usuario:Usuario){
    console.log(usuario.email);
    return this.httpCliente.
    post<Usuario>('http://moralo.atwebpages.com/chat/BloquearUsuario.php',usuario)
  }
  activarUsuario(usuario:Usuario){
    return this.httpCliente.
    post<Usuario>('http://moralo.atwebpages.com/chat/ActivarUsuario.php',usuario)
  }
  leerMensajes(){
    return this.httpCliente.get<Mensaje[]>
     ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php')

  }
  leerMensajes2(){
    return this.httpCliente.get<Mensaje[]>
     ('http://servicioChat/listadotodosmensajes.php')

  }
  leerUsuarios(){
    return this.httpCliente.get<Usuario[]>
     ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php')

  }
//   http://moralo.atwebpages.com/chat/ActivarMensaje.php   (necesita id mensaje)
// http://moralo.atwebpages.com/chat/BloquearMensaje.php (necesita id mensaje)
// http://moralo.atwebpages.com/chat/ObtenerMensajes.php  (listado de todos los mensajes)
// http://moralo.atwebpages.com/chat/ObtenerMensajes2.php  (listado de mensajes activos)
// http://moralo.atwebpages.com/chat/ActivarUsuario.php  (necesita objeto Usuario)
// http://moralo.atwebpages.com/chat/BloquearUsuario.php (necesita objeto Usuario)
// http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php  (obtener la lista de usuarios para bloquear/activar usuarios
}
