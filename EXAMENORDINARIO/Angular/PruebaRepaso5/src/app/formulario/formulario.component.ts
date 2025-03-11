import { Component } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor (private http: PeticionesService) {}

  user: Usuario = new Usuario()

  crearUsuario() {
    this.http.crearUsuario(this.user).subscribe(x => {
      this.user = x
    })

    window.location.reload()
  }
}
