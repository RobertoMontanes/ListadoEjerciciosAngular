import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list-component',
  imports: [],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css',
})
export class StudentListComponent {
  students: any;
  onStudentSelect(studentName: string): void {
  alert(`Se ha pulsado en el alumno ${studentName}`);
}

}
