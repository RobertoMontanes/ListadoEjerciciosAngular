import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  imports: [],
  templateUrl: './datos.html',
  styleUrl: './datos.css'
})
export class Datos {
  nombre = 'Mi Aplicación';
  titulo = 'Bienvenido';
  colorTexto = '#000000';
  luzEncendida = false;
  progreso = 0;

  cambiarTitulo() {
    this.titulo = this.titulo === 'Bienvenido' ? 'Nuevo Título' : 'Bienvenido';
  }

  alternarColor() {
    this.colorTexto = this.colorTexto === '#000000' ? '#FF6B6B' : '#000000';
  }

  alternarLuz() {
    this.luzEncendida = !this.luzEncendida;
  }

  aumentarProgreso() {
    if (this.progreso < 100) {
      this.progreso += 10;
    }
  }

  disminuirProgreso() {
    if (this.progreso > 0) {
      this.progreso -= 10;
    }
  }

  getProgressColor() {
    if (this.progreso < 30) return '#ff6b6b';
    if (this.progreso < 70) return '#feca57';
    return '#48dbfb';
  }
}