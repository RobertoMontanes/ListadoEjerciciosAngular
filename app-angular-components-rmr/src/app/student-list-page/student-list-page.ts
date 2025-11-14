import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list-page',
  imports: [],
  templateUrl: './student-list-page.html',
  styleUrl: './student-list-page.css',
})
export class StudentListPage {
  title = 'Student List Page';
  
  students = [
    { id: 1, name: 'Alice Johnson', age: 20 },
    { id: 2, name: 'Bob Smith', age: 22 },
    { id: 3, name: 'Charlie Brown', age: 19 },
  ];
  
  
}
