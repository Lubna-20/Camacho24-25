import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminService {

  constructor(private http: HttpClient) { }


  leerUsuarios() {
    return this.http.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php')
  }








  //   http://moralo.atwebpages.com/chat/ActivarMensaje.php   (necesita id mensaje)
// http://moralo.atwebpages.com/chat/BloquearMensaje.php (necesita id mensaje)
// http://moralo.atwebpages.com/chat/ObtenerMensajes.php  (listado de todos los mensajes)
// http://moralo.atwebpages.com/chat/ObtenerMensajes2.php  (listado de mensajes activos)
// http://moralo.atwebpages.com/chat/ActivarUsuario.php  (necesita objeto Usuario)
// http://moralo.atwebpages.com/chat/BloquearUsuario.php (necesita objeto Usuario)
// http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php  (obtener la lista de usuarios para bloquear/activar usuarios
}
