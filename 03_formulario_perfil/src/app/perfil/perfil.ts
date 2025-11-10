import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  edad: number = 0;

  cambiarNombre(event: any) {
    this.nombre = event.target.value;
  }

  cambiarApellidos(event: any) {
    this.apellidos = event.target.value;
  }

  cambiarEmail(event: any) {
    this.email = event.target.value;
  }

  cambiarEdad(event: any) {
    this.edad = Number(event.target.value);
  }

  guardar() {
    alert('Datos guardados: ' + this.nombre + ' ' + this.apellidos);
  }

  resetear() {
    this.nombre = '';
    this.apellidos = '';
    this.email = '';
    this.edad = 0;
  }
}