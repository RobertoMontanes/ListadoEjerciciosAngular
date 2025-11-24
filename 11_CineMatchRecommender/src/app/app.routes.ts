import { Routes } from '@angular/router';
import { Moviedb } from './component/moviedb/moviedb';

export const routes: Routes = [
  { path: '', redirectTo: 'moviedb', pathMatch: 'full' },
  { path: 'moviedb', component: Moviedb },
];
