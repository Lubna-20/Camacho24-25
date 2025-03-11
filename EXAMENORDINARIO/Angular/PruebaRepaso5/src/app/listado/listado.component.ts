import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  constructor (private http: PeticionesService) {}

  users: Usuario[] = []

  ngOnInit(): void {
    this.http.obtenerUsuarios().subscribe(x => {
      this.users = x
    })
  }

}
