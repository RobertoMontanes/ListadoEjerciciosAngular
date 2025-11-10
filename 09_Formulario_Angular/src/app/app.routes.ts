import { Routes } from '@angular/router';
import { RegisterFormPage } from './register-form-page/register-form-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: RegisterFormPage },
];
