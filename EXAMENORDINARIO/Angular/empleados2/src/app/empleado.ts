export class Empleado {
  id: number = 0; nombre: string = ''; direccion: string = ''; cargo: string = ''; edad: number = 0;
  constructor(id: number, nombre: string,
    direccion: string, cargo: string, edad: number) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.cargo = cargo;
    this.edad = edad;

  }
}
