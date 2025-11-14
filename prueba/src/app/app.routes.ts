import { Routes } from '@angular/router';
import { RegisterForm } from './register-form/register-form';

export const routes: Routes = [
    {path: '', redirectTo: 'registro', pathMatch: 'full' },
    {path: 'registro', component: RegisterForm}
];
