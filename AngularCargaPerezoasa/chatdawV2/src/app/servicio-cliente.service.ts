import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';
import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {


  constructor(private http: HttpClient,@Inject(LOCALE_ID) public locale: string) { }

escribirMensajeLocal(msjchat: Mensaje):Observable<Mensaje>{
  let fecha=new Date();

 // msjchat.fecha=formatDate(fecha,"HH:mm:ss/dd-MM-yyyy",this.locale);
  return this.http.post<Mensaje>
  ('http://localhost/servicioChat/insertarmensaje2.php',msjchat);

}
insertarUsuarioLocal(usuario: Usuario):Observable<Usuario> {
  return this.http.post<Usuario>
  ('http://localhost/servicioChat/insertarUsuario.php',usuario);
}
  cambiarPassword(nuevopwd:Usuario){
  return this.http.post<Usuario>
  ('http://moralo.atwebpages.com/menuAjax/chat/EditarUsuario.php',nuevopwd)
}
listadoUsuarios():Observable<Usuario[]>{
  return this.http.get<Usuario[]>
  ('http://localhost:8080/servicioChat/listadoUsuarios.php');

  // ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios2.php');
}
  insertarMensajeP(msjchat: Mensaje):Observable<Mensaje> {
    let fecha=new Date();

    msjchat.fecha=formatDate(fecha,"HH:mm:ss/dd-MM-yyyy",this.locale);
    return this.http.post<Mensaje>
    ('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',msjchat);
     }
  leerMensajesP(miParametro: string):Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>
    ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+miParametro)
     }


insertarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>
   ('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',usuario);


}

leerMensajes(){
  return this.http.get<Mensaje[]>
  ('http://localhost/servicioChat/listadomensajes.php')

  //  ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes2.php')

}

escribirMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>
  ('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje)
  // ('http://camacho.atwebpages.com/chatDaw/AltaMensaje.php',mensaje)
}

// http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php

logeo (usuario:Usuario):Observable<Usuario[]>{
  return this.http.get<Usuario[]>
  ('http://localhost/servicioChat/logeo.php?email='+usuario.email+'&pwd='+usuario.pwd)
  //  ('http://.0.0.1/serviciosCliente/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)

  // ('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)

  // ('http://camacho.atwebpages.com/chatDaw/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)
}
// http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+user.email+'&pwd='+user.pwd
// }
}
