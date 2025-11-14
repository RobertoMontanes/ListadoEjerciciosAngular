import { Routes } from '@angular/router';
import { StudentListPage } from './student-list-page/student-list-page';
import { StudentListComponent } from './student-list-component/student-list-component';

export const routes: Routes = [
    {path: '', redirectTo: 'students', pathMatch: 'full' },
    {path: 'students', component: StudentListPage},
    {path: 'students/add', component: StudentListComponent}
];
