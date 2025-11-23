import { Routes } from '@angular/router';
import { MovieDiscoverComponent } from './pages/movie-discover/movie-discover';
import { MoviesComponent } from './pages/movies/movies';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail';
import { PeopleComponent } from './pages/people/people';
import { PersonDetailComponent } from './pages/person-detail/person-detail';
import { SearchComponent } from './pages/search/search';

export const routes: Routes = [
  { path: '', redirectTo: '/discover', pathMatch: 'full' },
  { path: 'discover', component: MovieDiscoverComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent }
  ,{ path: 'people', component: PeopleComponent }
  ,{ path: 'people/:id', component: PersonDetailComponent }
  ,{ path: 'search', component: SearchComponent }
];
