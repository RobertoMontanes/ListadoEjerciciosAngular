import { Routes } from '@angular/router';
import { MovieDiscoverComponent } from './pages/movie-discover/movie-discover';

export const routes: Routes = [
  { path: '', redirectTo: '/discover', pathMatch: 'full' },
  { path: 'discover', component: MovieDiscoverComponent }
];
