import { Routes } from '@angular/router';
import { StudentNewPage } from './student-new-page/student-new-page';
import { StudentListComponent } from './student-list-component/student-list-component';

export const routes: Routes = [
    {path: '', redirectTo: 'StudentListComponent', pathMatch: 'full' },
    {path: 'StudentListComponent', component: StudentListComponent},
    {path: 'StudentNewPage', component: StudentNewPage}
];
