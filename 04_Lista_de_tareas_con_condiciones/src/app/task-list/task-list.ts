import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tareas = [
    { titulo: 'Hacer la compra', completada: false },
    { titulo: 'Estudiar Angular', completada: true },
    { titulo: 'Pasear al perro', completada: false },
  ];

  cambiarEstado(tarea: any) {
    tarea.completada = !tarea.completada;
  }
}
