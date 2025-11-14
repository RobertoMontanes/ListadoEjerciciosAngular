import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { CharactersPageComponent } from './pages/characters/characters-page.component';
import { LocationsPageComponent } from './pages/locations/locations-page.component';
import { EpisodesPageComponent } from './pages/episodes/episodes-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'characters',
    component: CharactersPageComponent,
    data: { title: 'Personajes' }
  },
  {
    path: 'locations',
    component: LocationsPageComponent,
    data: { title: 'Ubicaciones' }
  },
  {
    path: 'episodes',
    component: EpisodesPageComponent,
    data: { title: 'Episodios' }
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
