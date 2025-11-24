import { Routes } from '@angular/router';
import { MoviePopularListComponent } from './component/movie-popular-list-component/movie-popular-list-component';
import { PeoplePopularListComponent } from './component/people-popular-list-component/people-popular-list-component';
import { HomePage } from './pages/home-page/home-page';
import { MovieDetailPage } from './pages/movie-detail-page/movie-detail-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'movie', component: MoviePopularListComponent },
  { path: 'person', component: PeoplePopularListComponent },
  { path: 'movieId', component: MovieDetailPage },
  
  
];
