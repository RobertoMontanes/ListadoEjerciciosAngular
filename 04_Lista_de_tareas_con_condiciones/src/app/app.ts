import { Component, signal } from '@angular/core';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks = [
    { title: 'Hacer la compra', done: false },
    { title: 'Estudiar Angular', done: true },
    { title: 'Pasear al perro', done: false },
  ];
}
