import { Component } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  listasMensajes!: ChatModule[];
  usuario!: string;
  mensaje!: string;
  enviado: string='';

  constructor(private servicio: ServicioService) {}

  listarMensajes() {
    this.servicio.leerMensajes().subscribe((mensajes: ChatModule[]) => {
      this.listasMensajes = mensajes;
    })
    this.enviado="";

  }
  mensajes: ChatModule = new ChatModule();
  enviarMensaje(mensaje: { value: ChatModule; }) {
    this.servicio.enviarMensaje(mensaje.value).subscribe((mensaje: ChatModule) => {
      this.mensajes=mensaje;
    })
    this.enviado="Mensaje enviado";

  }
  limpiarMensajeria() {
    this.servicio.limpiarMensajes().subscribe((mensaje: ChatModule[]) => {
      this.listasMensajes = mensaje;
    })
    this.enviado="Mensajes limpiado correctamente";
    }
    borrarMensaje(mensaje: ChatModule) {
      this.servicio.borrarMensaje(mensaje).subscribe((mensaje: ChatModule[]) => {
        this.listasMensajes = mensaje;
      })
    this.enviado="Mensaje borrado de "+mensaje.usuario;


    }

  title = 'mensajeria';

}
